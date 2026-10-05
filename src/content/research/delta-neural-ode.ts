import data from './delta-neural-ode-data.json'

export type Point = readonly [number, number]

export interface ChartSeries {
  label: string
  color: string
  points: readonly Point[]
  dashed?: boolean
}

export const ASSET_DIR = '/research/delta-neural-ode'

const COLORS = {
  convnext: '#2563eb',
  convnext_dp0: '#0891b2',
  swin: '#16a34a',
  resnet50: '#d97706',
  resnet101: '#dc2626',
  shared: '#7c3aed',
} as const

const MODELS = [
  { key: 'convnext', label: 'ConvNeXt-T' },
  { key: 'convnext_dp0', label: 'ConvNeXt-T, no drop path' },
  { key: 'swin', label: 'Swin-T' },
  { key: 'resnet50', label: 'ResNet-50' },
  { key: 'resnet101', label: 'ResNet-101' },
] as const

type InterpKey = keyof (typeof data.interp)['convnext']

function interpSeries(key: InterpKey): ChartSeries[] {
  return MODELS.map((model) => ({
    label: model.label,
    color: COLORS[model.key],
    points: data.interp[model.key][key] as unknown as Point[],
  }))
}

export const REFINE_PLAIN = interpSeries('plain_RK1')
export const REFINE_BILINEAR = interpSeries('bilinear_RK1')

export const SHARED_FIXED_HORIZON: ChartSeries[] = [
  { label: 'Euler (RK1)', color: COLORS.shared, points: data.ablation.T9_RK1 as unknown as Point[] },
  { label: 'RK2', color: COLORS.resnet50, points: data.ablation.T9_RK2 as unknown as Point[] },
  { label: 'RK4', color: COLORS.swin, points: data.ablation.T9_RK4 as unknown as Point[] },
]

export const SHARED_HORIZON_SWEEP: ChartSeries[] = [
  {
    label: 'Fixed step 1, more steps (T = D)',
    color: COLORS.resnet101,
    points: data.ablation.ES1_RK1 as unknown as Point[],
  },
  {
    label: '9 steps, varying step size (T = 9 · step)',
    color: COLORS.shared,
    points: data.ablation.D9_RK1 as unknown as Point[],
  },
]

export const TRAINING_CURVES: ChartSeries[] = [
  { label: 'ConvNeXt-T', color: COLORS.convnext, points: data.training.convnext as unknown as Point[] },
  {
    label: 'ConvNeXt-T, no drop path',
    color: COLORS.convnext_dp0,
    points: data.training.convnext_dp0 as unknown as Point[],
  },
  {
    label: 'Shared stage 3 (1 block × 9)',
    color: COLORS.shared,
    points: data.training.shared as unknown as Point[],
  },
]

export const DELTA_CURVES: ChartSeries[] = [
  {
    label: 'Δ, 9 steps, peak LR 1e-3, 50 epochs',
    color: COLORS.resnet101,
    points: data.delta['lr1e-3_e50'] as unknown as Point[],
  },
  {
    label: 'Δ, 9 steps, peak LR 1e-4, 100 epochs',
    color: COLORS.resnet50,
    points: data.delta['lr1e-4_e100'] as unknown as Point[],
  },
  {
    label: 'Δ, unrolled to 27 steps of 1/3, LR 1e-5 (running)',
    color: COLORS.swin,
    points: data.delta['9to27_lr1e-5'] as unknown as Point[],
  },
]

export const DELTA_RATIO: ChartSeries[] = [
  {
    label: 'mean ‖δₖ‖ / ‖θ_shared‖ over blocks and layers',
    color: COLORS.resnet101,
    points: data.deltaRatio as unknown as Point[],
  },
]

export const ZEROING = data.zeroing

function last(points: readonly Point[]): number {
  return points[points.length - 1][1]
}

function first(points: readonly Point[]): number {
  return points[0][1]
}

/** Rows for the refinement table: native accuracy, R=128 Euler, RK4 limit, bilinear at R=128. */
export const REFINE_TABLE = MODELS.map((model) => {
  const series = data.interp[model.key]
  const plain = series.plain_RK1 as unknown as Point[]
  const rk4 = series.plain_RK4 as unknown as Point[]
  const bilinear = series.bilinear_RK1 as unknown as Point[]
  const native = first(plain)
  const limit = last(rk4)
  return {
    model: model.label,
    native,
    rk4AtTrainingStep: first(rk4),
    r128: last(plain),
    limit,
    gap: Math.round((limit - native) * 100) / 100,
    bilinear: last(bilinear),
  }
})

export const FINAL = {
  convnext: last(data.training.convnext as unknown as Point[]),
  convnextDp0: last(data.training.convnext_dp0 as unknown as Point[]),
  shared: last(data.training.shared as unknown as Point[]),
  deltaBest: last(data.delta['lr1e-3_e50'] as unknown as Point[]),
  deltaLowLr: last(data.delta['lr1e-4_e100'] as unknown as Point[]),
  delta27: last(data.delta['9to27_lr1e-5'] as unknown as Point[]),
  delta27Epochs: (data.delta['9to27_lr1e-5'] as unknown as Point[]).length,
  deltaRatioEnd: last(data.deltaRatio as unknown as Point[]),
}

/** Trajectory geometry over 500 ImageNet validation images (one per class). Fine Euler unless noted. */
export const DYNAMICS_N500 = [
  { model: 'Shared stage 3', ignore: false, R: 0.97, Rsd: 0.008, prDepth: 1.09, prSpatial: 1.03, kappa: 0.0005, omega: 0.15, an: 0.58, at: -0.07, cosX: 0.67, cosH: 0.73, channel: 236, share: '98%' },
  { model: 'Shared stage 3', ignore: true, R: 0.776, Rsd: 0.02, prDepth: 1.94, prSpatial: 6.24, kappa: 0.0075, omega: 0.41, an: 0.95, at: -0.06, cosX: 0.31, cosH: -0.06, channel: 236, share: '98%' },
  { model: 'ConvNeXt-T', ignore: false, R: 0.938, Rsd: 0.01, prDepth: 1.19, prSpatial: 1.13, kappa: 0.0098, omega: 0.34, an: 0.87, at: -0.38, cosX: 0.48, cosH: 0.17, channel: 195, share: '99%' },
  { model: 'ConvNeXt-T', ignore: true, R: 0.502, Rsd: 0.011, prDepth: 3.46, prSpatial: 32.0, kappa: 0.021, omega: 0.61, an: 0.97, at: -0.21, cosX: 0.21, cosH: 0.02, channel: 195, share: '99%' },
  { model: 'ConvNeXt-T, no drop path', ignore: false, R: 0.934, Rsd: 0.01, prDepth: 1.04, prSpatial: 8.76, kappa: 0.02, omega: 0.56, an: 0.96, at: 0.04, cosX: 0.33, cosH: 0.27, channel: 225, share: '99%' },
  { model: 'ConvNeXt-T, no drop path', ignore: true, R: 0.438, Rsd: 0.012, prDepth: 3.2, prSpatial: 29.5, kappa: 0.028, omega: 0.84, an: 0.98, at: 0.1, cosX: 0.17, cosH: 0.01, channel: 225, share: '99%' },
  { model: 'Swin-T', ignore: false, R: 0.825, Rsd: 0.014, prDepth: 1.17, prSpatial: 6.15, kappa: 0.0042, omega: 0.5, an: 0.89, at: -0.39, cosX: 0.09, cosH: 0.04, channel: 322, share: '17%' },
  { model: 'Swin-T', ignore: true, R: 0.812, Rsd: 0.016, prDepth: 1.17, prSpatial: 7.31, kappa: 0.0044, omega: 0.51, an: 0.89, at: -0.39, cosX: 0.08, cosH: 0.03, channel: 322, share: '17%' },
  { model: 'ResNet-50', ignore: false, R: 0.396, Rsd: 0.012, prDepth: 4.94, prSpatial: 5.84, kappa: 0.0024, omega: 0.63, an: 0.9, at: -0.41, cosX: 0.6, cosH: -0.08, channel: null, share: '<1%' },
  { model: 'ResNet-101', ignore: false, R: 0.169, Rsd: 0.005, prDepth: 19.66, prSpatial: 12.1, kappa: 0.0022, omega: 0.54, an: 0.93, at: -0.31, cosX: 0.48, cosH: -0.04, channel: null, share: '<1%' },
] as const

export interface Reference {
  id: string
  authors: string
  title: string
  venue: string
  year: number
  url: string
}

export const REFERENCES: Reference[] = [
  {
    id: 'he2016',
    authors: 'K. He, X. Zhang, S. Ren, J. Sun',
    title: 'Deep Residual Learning for Image Recognition',
    venue: 'CVPR',
    year: 2016,
    url: 'https://arxiv.org/abs/1512.03385',
  },
  {
    id: 'e2017',
    authors: 'W. E',
    title: 'A Proposal on Machine Learning via Dynamical Systems',
    venue: 'Communications in Mathematics and Statistics 5(1)',
    year: 2017,
    url: 'https://doi.org/10.1007/s40304-017-0103-z',
  },
  {
    id: 'haber2017',
    authors: 'E. Haber, L. Ruthotto',
    title: 'Stable Architectures for Deep Neural Networks',
    venue: 'Inverse Problems 34(1)',
    year: 2017,
    url: 'https://arxiv.org/abs/1705.03341',
  },
  {
    id: 'lu2018',
    authors: 'Y. Lu, A. Zhong, Q. Li, B. Dong',
    title:
      'Beyond Finite Layer Neural Networks: Bridging Deep Architectures and Numerical Differential Equations',
    venue: 'ICML',
    year: 2018,
    url: 'https://arxiv.org/abs/1710.10121',
  },
  {
    id: 'chen2018',
    authors: 'R. T. Q. Chen, Y. Rubanova, J. Bettencourt, D. Duvenaud',
    title: 'Neural Ordinary Differential Equations',
    venue: 'NeurIPS',
    year: 2018,
    url: 'https://arxiv.org/abs/1806.07366',
  },
  {
    id: 'sander2022',
    authors: 'M. E. Sander, P. Ablin, G. Peyré',
    title: 'Do Residual Neural Networks discretize Neural Ordinary Differential Equations?',
    venue: 'NeurIPS',
    year: 2022,
    url: 'https://arxiv.org/abs/2205.14612',
  },
  {
    id: 'liu2022',
    authors: 'Z. Liu, H. Mao, C.-Y. Wu, C. Feichtenhofer, T. Darrell, S. Xie',
    title: 'A ConvNet for the 2020s',
    venue: 'CVPR',
    year: 2022,
    url: 'https://arxiv.org/abs/2201.03545',
  },
  {
    id: 'liu2021',
    authors: 'Z. Liu, Y. Lin, Y. Cao, H. Hu, Y. Wei, Z. Zhang, S. Lin, B. Guo',
    title: 'Swin Transformer: Hierarchical Vision Transformer using Shifted Windows',
    venue: 'ICCV',
    year: 2021,
    url: 'https://arxiv.org/abs/2103.14030',
  },
  {
    id: 'hairer1993',
    authors: 'E. Hairer, S. P. Nørsett, G. Wanner',
    title: 'Solving Ordinary Differential Equations I: Nonstiff Problems (2nd ed.)',
    venue: 'Springer',
    year: 1993,
    url: 'https://doi.org/10.1007/978-3-540-78862-1',
  },
  {
    id: 'chang2018',
    authors: 'B. Chang, L. Meng, E. Haber, F. Tung, D. Begert',
    title: 'Multi-level Residual Networks from Dynamical Systems View',
    venue: 'ICLR',
    year: 2018,
    url: 'https://arxiv.org/abs/1710.10348',
  },
  {
    id: 'queiruga2020',
    authors: 'A. F. Queiruga, N. B. Erichson, D. Taylor, M. W. Mahoney',
    title: 'Continuous-in-Depth Neural Networks',
    venue: 'arXiv preprint',
    year: 2020,
    url: 'https://arxiv.org/abs/2008.02389',
  },
  {
    id: 'deng2009',
    authors: 'J. Deng, W. Dong, R. Socher, L.-J. Li, K. Li, L. Fei-Fei',
    title: 'ImageNet: A Large-Scale Hierarchical Image Database',
    venue: 'CVPR',
    year: 2009,
    url: 'https://doi.org/10.1109/CVPR.2009.5206848',
  },
  {
    id: 'timm',
    authors: 'R. Wightman',
    title: 'PyTorch Image Models',
    venue: 'GitHub repository',
    year: 2019,
    url: 'https://github.com/huggingface/pytorch-image-models',
  },
  {
    id: 'torchvision',
    authors: 'TorchVision maintainers and contributors',
    title: "TorchVision: PyTorch's Computer Vision library",
    venue: 'GitHub repository',
    year: 2016,
    url: 'https://github.com/pytorch/vision',
  },
  {
    id: 'entezari2022',
    authors: 'R. Entezari, H. Sedghi, O. Saukh, B. Neyshabur',
    title: 'The Role of Permutation Invariance in Linear Mode Connectivity of Neural Networks',
    venue: 'ICLR',
    year: 2022,
    url: 'https://arxiv.org/abs/2110.06296',
  },
  {
    id: 'ainsworth2023',
    authors: 'S. K. Ainsworth, J. Hayase, S. Srinivasa',
    title: 'Git Re-Basin: Merging Models modulo Permutation Symmetries',
    venue: 'ICLR',
    year: 2023,
    url: 'https://arxiv.org/abs/2209.04836',
  },
  {
    id: 'dehghani2019',
    authors: 'M. Dehghani, S. Gouws, O. Vinyals, J. Uszkoreit, Ł. Kaiser',
    title: 'Universal Transformers',
    venue: 'ICLR',
    year: 2019,
    url: 'https://arxiv.org/abs/1807.03819',
  },
  {
    id: 'lan2020',
    authors: 'Z. Lan, M. Chen, S. Goodman, K. Gimpel, P. Sharma, R. Soricut',
    title: 'ALBERT: A Lite BERT for Self-supervised Learning of Language Representations',
    venue: 'ICLR',
    year: 2020,
    url: 'https://arxiv.org/abs/1909.11942',
  },
  {
    id: 'sun2024',
    authors: 'M. Sun, X. Chen, J. Z. Kolter, Z. Liu',
    title: 'Massive Activations in Large Language Models',
    venue: 'COLM',
    year: 2024,
    url: 'https://arxiv.org/abs/2402.17762',
  },
  {
    id: 'darcet2024',
    authors: 'T. Darcet, M. Oquab, J. Mairal, P. Bojanowski',
    title: 'Vision Transformers Need Registers',
    venue: 'ICLR',
    year: 2024,
    url: 'https://arxiv.org/abs/2309.16588',
  },
  {
    id: 'huang2016',
    authors: 'G. Huang, Y. Sun, Z. Liu, D. Sedra, K. Q. Weinberger',
    title: 'Deep Networks with Stochastic Depth',
    venue: 'ECCV',
    year: 2016,
    url: 'https://arxiv.org/abs/1603.09382',
  },
  {
    id: 'veit2016',
    authors: 'A. Veit, M. Wilber, S. Belongie',
    title: 'Residual Networks Behave Like Ensembles of Relatively Shallow Networks',
    venue: 'NeurIPS',
    year: 2016,
    url: 'https://arxiv.org/abs/1605.06431',
  },
  {
    id: 'greff2017',
    authors: 'K. Greff, R. K. Srivastava, J. Schmidhuber',
    title: 'Highway and Residual Networks learn Unrolled Iterative Estimation',
    venue: 'ICLR',
    year: 2017,
    url: 'https://arxiv.org/abs/1612.07771',
  },
  {
    id: 'jastrzebski2018',
    authors: 'S. Jastrzębski, D. Arpit, N. Ballas, V. Verma, T. Che, Y. Bengio',
    title: 'Residual Connections Encourage Iterative Inference',
    venue: 'ICLR',
    year: 2018,
    url: 'https://arxiv.org/abs/1710.04773',
  },
]
