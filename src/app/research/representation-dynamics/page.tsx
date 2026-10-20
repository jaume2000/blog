import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import LineChart from '@/components/research/LineChart';
import { Bibliography, Cite, Figure, Plot, Video } from '@/components/research/Article';
import { DisplayMath, InlineMath } from '@/components/research/Math';
import {
  ASSET_DIR,
  DELTA_CURVES,
  DELTA_RATIO,
  DYNAMICS_N500,
  FINAL,
  POOLED_N500,
  REFINE_BILINEAR,
  REFINE_PLAIN,
  REFINE_TABLE,
  SHARED_FIXED_HORIZON,
  SHARED_HORIZON_SWEEP,
  TRAINING_CURVES,
  ZEROING,
} from '@/content/research/representation-dynamics';
import { SITE } from '@/content/site';
import { pageMeta } from '@/lib/metadata';

const TITLE = 'All skip-connections can be expanded indefinitely';
const SUBTITLE = 'An analysis of representation dynamics in vision models with differential geometry';
const DESCRIPTION =
  'Every skip connection is one Euler step, so ConvNeXt, Swin and ResNet can be run with 100× more steps without fine-tuning. The refined networks expose the continuous trajectory of the representation: one shared block flows smoothly through the stage, independent blocks zig-zag and undo each other.';

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: '/research/representation-dynamics',
});

const pct = (v: number) => v.toFixed(2);
const signed = (v: number) => `${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v).toFixed(2)}`;
const logTick = (v: number) => (v >= 1000 ? `${v / 1000}k` : String(v));

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-16 scroll-mt-24 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-10 text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
      {children}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">{children}</p>;
}

function Table({ head, rows, note }: { head: ReactNode[]; rows: ReactNode[][]; note?: ReactNode }) {
  return (
    <div className="my-8">
      <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-left text-sm tabular-nums">
          <thead className="bg-neutral-50 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
            <tr>
              {head.map((h, i) => (
                <th key={i} scope="col" className="px-3 py-2 font-medium whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 text-neutral-800 dark:divide-neutral-800 dark:text-neutral-200">
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-3 py-2 ${j === 0 ? 'whitespace-nowrap' : ''}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{note}</p>}
    </div>
  );
}

const TOC = [
  ['idea', 'The idea'],
  ['refine', 'Refining pretrained networks'],
  ['interpolation', 'Plain versus bilinear interpolation'],
  ['shared', 'One block for the whole stage'],
  ['microscope', 'Why expand: depth at higher resolution'],
  ['dynamics', 'What the trajectories look like'],
  ['massive', 'Massive activations and the ignore path'],
  ['deltas', 'Shared block plus per-block deltas'],
  ['droppath', 'Is drop path the reason?'],
  ['next', 'Open questions'],
  ['references', 'References'],
] as const;

export default function RepresentationDynamicsPage() {
  const zeroR1 = ZEROING.R1;

  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        Research · ongoing · October 2026
      </p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
        {TITLE}
      </h1>
      <p className="mt-2 text-xl leading-snug text-neutral-700 dark:text-neutral-300">{SUBTITLE}</p>
      <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
        {SITE.fullName} · Mycrospace AI Research, Valencia · Trained on the Leonardo supercomputer (CINECA, EuroHPC)
      </p>

      <P>
        Take a photo of a snow leopard, push it through a ConvNeXt and stop at the entrance of its third stage. At
        that point the network no longer holds an image. It holds 384 channels on a 14 × 14 grid: 75,264 numbers.
        I find it useful to stop thinking of them as a feature map and to think of them as a single{' '}
        <strong>point</strong> <InlineMath tex="x \in \mathbb{R}^{75{,}264}" />. The nine blocks of the stage move
        that point, and where it ends up is, in large part, what the network decides the image is.
      </P>
      <P>
        Every block moves it in the same way. It looks at where the point is, computes a direction, and adds it:
      </P>
      <DisplayMath tex="x_{i+1} \;=\; x_i + f_i(x_i)." />
      <P>
        Anyone who has written a numerical solver recognises that line. It is one step of Euler&apos;s method, with
        step size 1, for the differential equation <InlineMath tex="\dot x = f(x)" />. Read like that,{' '}
        <InlineMath tex="f_i" /> is not a layer but a <em>vector field</em>: a rule that pins an arrow, a velocity, on
        every location of that 75,264-dimensional space. The point does not jump from layer to layer; it is carried
        along by the arrows, and the network is the path it draws. The idea is older than this project{' '}
        <Cite ids={['e2017', 'haber2017', 'lu2018', 'chen2018']} />. What I wanted to know is whether it is
        literally true of the networks we actually train, and what it buys us if it is.
      </P>
      <P>
        The test is almost embarrassingly simple. If block <InlineMath tex="i" /> really is one Euler step of a field{' '}
        <InlineMath tex="f_i" />, I should be able to replace it by a hundred steps of size 1/100 and land in
        nearly the same place. I can, in ConvNeXt, Swin and ResNet, without retraining a single weight, and as far
        as I push it. That is the title: every skip connection can be expanded indefinitely. The interesting part is
        what the expansion gives in return. Nine snapshots become a continuous curve{' '}
        <InlineMath tex="x(t),\ t \in [0, 9]" />, and the question stops being &ldquo;what does each block
        output?&rdquo; and becomes &ldquo;how does the point move?&rdquo; How fast, whether it accelerates or brakes,
        whether it goes straight or turns. Those are questions for differential geometry: velocity{' '}
        <InlineMath tex="v = \dot x" />, acceleration <InlineMath tex="a = \ddot x" />, split into a tangential part
        that changes the speed and a normal part that changes the direction, and curvature{' '}
        <InlineMath tex="\kappa = a_n / \|v\|^2" />. None of them can be estimated from nine samples. All of them can
        from nine hundred.
      </P>
      <P>
        Seen this way, two kinds of network turn out to move in two very different ways. When the nine blocks of
        the stage are one and the same block, which I call weight-tied or shared, there is a single field and it does
        not depend on time:
      </P>
      <DisplayMath tex="\dot x = f(x)." />
      <P>
        That is an <strong>autonomous</strong> system. The arrows are fixed in space, and the point simply follows
        them. Its velocity is continuous by construction, and what it does, for every image I have looked at, is
        launch, push and brake: the speed rises, peaks around <InlineMath tex="t \approx 4" /> and fades, while the
        classes fan out from a common origin (Figure 1, left).
      </P>
      <P>
        In the original network every block has its own weights, so the field is
      </P>
      <DisplayMath tex="\dot x = f_{\lfloor t \rfloor}(x)," />
      <P>
        autonomous within each unit of time and replaced by a different one at every integer{' '}
        <InlineMath tex="t" />: <strong>piecewise autonomous</strong>. Inside a block the point glides along a
        smooth curve. At the boundary, all the arrows under it change at once, and so does its velocity. The jumps
        are large. Across a block boundary 45% of the coordinates reverse the sign of their velocity, the
        displacements of consecutive blocks are almost orthogonal (cosine 0.17 over 500 images), and the speed
        climbs in steps from about 17 to over 100 (Figure 1, right). Both networks classify equally well. One gets
        there by flowing, the other by a sequence of pushes in unrelated directions that partly undo each other.
      </P>
      <Figure
        number={1}
        caption={
          <>
            Stage 3 of two ConvNeXt-T trained from scratch on ImageNet, seen through the first two principal
            components of their states. 200 validation images, 20 from each of 10 classes; each state is randomly
            projected to 2,048 dimensions before the PCA, and the massive channel (section 7) is left out. Each thin
            line is the trajectory <InlineMath tex="x(t)" /> of one image, coloured by depth{' '}
            <InlineMath tex="t" />. The thick lines are a snow leopard, an airliner and a daisy, with a white dot at
            every integer <InlineMath tex="t" />, where the original network switches block. Bottom: mean speed{' '}
            <InlineMath tex="\|f(x(t))\|" />, with the 10th to 90th percentile band. Left: weight-tied network, 100
            Euler steps of 0.09. The dots spread out and close up again: slow start, fast middle, braking end.
            Right: original network, every block expanded into 100 steps of 0.01. The paths bend at the dots and
            the speed jumps at every switch. Each PCA is fitted on its own network, so the axes are not comparable.
          </>
        }
      >
        <Plot
          src={`${ASSET_DIR}/hero-trajectories.png`}
          alt="Stage-3 trajectories of 200 images in PCA, coloured by depth, for the weight-tied and the original ConvNeXt-T, with their speed over depth"
          width={2223}
          height={1143}
        />
      </Figure>
      <P>
        A warning that applies to every picture on this page: one channel of ConvNeXt holds 98 to 99% of the
        energy of the state, and left in, it makes every trajectory look like a straight line. I leave it out of the
        measurements, not out of the network; section 7 explains why. The rest of the page builds the argument
        step by step. It shows that refining depth works and how far, why the weights inside a block must stay
        constant, that one shared block is enough for a whole stage, and then what the trajectories look like at
        high resolution.
      </P>

      <section className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50/80 p-5 dark:border-neutral-800 dark:bg-neutral-900/50">
        <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          In short
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          <li>
            Pretrained ConvNeXt-T, Swin-T, ResNet-50 and ResNet-101 can be run with 2 to 128 times more residual
            steps in their longest stage, with no fine-tuning, as long as the total integration time is kept. Accuracy
            converges to a continuous limit that is only 0.6 to 0.9 points below the original network.
          </li>
          <li>
            The networks are tuned to the error of a single Euler step: any more accurate solver at the training step
            size lands directly on that limit.
          </li>
          <li>
            Interpolating weights linearly between consecutive blocks fails in every model, losing 6.6 to 23.3 points. Only
            piecewise-constant weights work.
          </li>
          <li>
            A ConvNeXt-T whose nine stage-3 blocks are a single shared block reaches {pct(FINAL.shared)}% on ImageNet
            against {pct(FINAL.convnext)}%, with roughly a third fewer parameters. Its accuracy depends almost only on
            the integration time, not on the number of steps.
          </li>
          <li>
            Expanding the skip connections is a microscope. The refined network keeps the original function, but
            samples its trajectory 100 times more densely, which is what velocities, accelerations and curvatures
            need. At that resolution the shared network is a smooth flow that accelerates and brakes, and the
            original network is a sequence of nearly orthogonal pushes.
          </li>
          <li>
            Over 500 images, consecutive blocks of the original ConvNeXt-T move the state in almost unrelated
            directions (cosine 0.17), and 45% of the coordinates reverse direction from one block to the next. Half
            of all the motion in stage 3 cancels out. The shared block wastes 19%.
          </li>
          <li>
            The straight, almost one-dimensional trajectories of ConvNeXt are an artefact of one massive channel that
            holds 98 to 99% of the state&apos;s energy. Without it the dynamics are rotational and multi-dimensional.
          </li>
          <li>
            Adding a zero-initialised delta per block on top of the shared block, and fine-tuning, gives{' '}
            {pct(FINAL.deltaBest)}%: above both the shared and the original network.
          </li>
        </ul>
      </section>

      <nav aria-label="Contents" className="mt-10">
        <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          Contents
        </h2>
        <ol className="mt-3 grid list-decimal gap-x-8 gap-y-1 pl-5 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
          {TOC.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-neutral-900 hover:underline dark:hover:text-neutral-100">
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <H2 id="idea">1. The idea</H2>
      <P>
        Now more carefully. A residual block computes <InlineMath tex="x + f(x)" /> <Cite ids={['he2016']} />. Read
        with a step size of one, that is exactly one step of the explicit Euler method for the ODE{' '}
        <InlineMath tex="\dot x = f(x,t)" /> <Cite ids={['e2017', 'haber2017', 'lu2018']} />. Neural ODEs took the
        idea to its conclusion and replaced the stack of blocks with a solver <Cite ids={['chen2018']} />. Whether
        ordinary, discretely trained networks really behave like that discretisation is a separate question, and the
        answer depends on how they were trained <Cite ids={['sander2022']} />.
      </P>
      <P>
        The reading I use is that a residual stage is a <em>sum of blocks</em>, and each block is an{' '}
        <em>integral</em> of its own vector field. Write the residual of block <InlineMath tex="i" /> as
      </P>
      <DisplayMath numbered="1" tex="f_i(x) \;=\; \mathrm{block}_i(x) - x." />
      <P>
        Then the native network is one Euler step of size 1 per block. The continuous object behind it is the sum of
        those integrals:
      </P>
      <DisplayMath
        numbered="2"
        tex="x_N \;=\; x_0 + \sum_{i=0}^{N-1} \int_{i}^{i+1} f_i\bigl(x(t)\bigr)\,dt."
      />
      <P>
        The sum is the stack of residual blocks. The integral is the interpolation of that block: instead of taking
        one Euler step of size 1, integrate <InlineMath tex="f_i" /> over the unit interval{' '}
        <InlineMath tex="[i,i+1]" /> with a finer solver, keeping the horizon of each block equal to 1. Equivalently,
        block by block,
      </P>
      <DisplayMath
        numbered="3"
        tex="x_{i+1} \;=\; x_i + \int_{i}^{i+1} f_i\bigl(x(t)\bigr)\,dt."
      />
      <P>
        I test this on the long stage of pretrained networks, without retraining: stage 3 has{' '}
        <InlineMath tex="N=9" /> blocks in ConvNeXt-T <Cite ids={['liu2022']} />, 6 in Swin-T{' '}
        <Cite ids={['liu2021']} />, 5 in ResNet-50 and 22 in ResNet-101. If the network is an Euler discretisation of
        a smooth flow, refining the integral should converge. If each block is an arbitrary map that only works with
        its exact input, it should collapse. I also integrate with RK2 and RK4 <Cite ids={['hairer1993']} /> to
        locate the continuous limit of (2).
      </P>
      <P>
        How the integral is discretised is the interpolation. <strong>Plain</strong> interpolation keeps the field
        piecewise constant on each block: <InlineMath tex="R" /> Euler steps of size{' '}
        <InlineMath tex="\Delta t = 1/R" />,
      </P>
      <DisplayMath
        numbered="4"
        tex="\int_{i}^{i+1} f_i\bigl(x(t)\bigr)\,dt \;\approx\; \sum_{r=0}^{R-1} \Delta t\, f_i\bigl(x_{i+r\Delta t}\bigr)."
      />
      <P>
        <strong>Bilinear</strong> interpolation replaces <InlineMath tex="f_i" /> by a blend of consecutive blocks,
        which is what most continuous-depth work assumes <Cite ids={['chang2018', 'queiruga2020']} />. In weight
        space that is
      </P>
      <DisplayMath
        numbered="5"
        tex="\theta(t) \;=\; (1-\alpha)\,\theta_i + \alpha\,\theta_{i+1},\qquad \alpha = t-i."
      />
      <H3>What I propose</H3>
      <P>
        The title is the claim: <strong>every skip connection can be expanded indefinitely</strong>. Take any
        block <InlineMath tex="x \mapsto x + f_i(x)" /> of a trained network and replace it by{' '}
        <InlineMath tex="R" /> applications of <InlineMath tex="x \mapsto x + \tfrac{1}{R} f_i(x)" />. Nothing is
        retrained, no weight is changed, and the result is still a working classifier for any{' '}
        <InlineMath tex="R" />, all the way to the continuous limit. That one operation supports four things:
      </P>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
        <li>
          <strong>Evidence that residual blocks are one-step ODE solvers.</strong> If they were arbitrary maps that
          only work with their exact input, splitting them would break the network. It does not, in ConvNeXt, Swin or
          ResNet (section 2), but only if the weights inside each block are kept constant (section 3).
        </li>
        <li>
          <strong>A smaller network with the same dynamics.</strong> If the stage integrates a flow, one block
          should be enough to define it. A ConvNeXt-T with a single shared stage-3 block, trained from scratch, is
          within 0.6 points of the original (section 4).
        </li>
        <li>
          <strong>A microscope for representation dynamics.</strong> The expanded network samples the path of the
          representation 100 times more densely, so velocity, acceleration, curvature and the timing of every
          coordinate become measurable (sections 5 and 6). This is the part I find most useful, and the reason the
          paper analyses trajectories with differential geometry.
        </li>
        <li>
          <strong>A better way to build the discrete network.</strong> What the microscope shows, that independent
          blocks spend half their motion undoing each other, motivates a shared field plus small per-block
          corrections (section 8).
        </li>
      </ol>
      <P>
        All accuracies are top-1 on the 50,000 ImageNet-1k validation images <Cite ids={['deng2009']} />. ConvNeXt-T
        (with and without drop path) is my own run, trained from scratch for 300 epochs with timm augmentation{' '}
        <Cite ids={['timm']} />. Swin-T and the ResNets use the torchvision weights{' '}
        <Cite ids={['torchvision']} />.
      </P>

      <H2 id="refine">2. Refining pretrained networks</H2>
      <P>
        All five networks behave like Euler discretisations. Accuracy decreases monotonically as the step shrinks and
        flattens out at a well-defined limit, the same one RK4 reaches. The limit is always slightly below the original
        network.
      </P>
      <Figure
        number={2}
        caption={
          <>
            Top-1 accuracy when every stage-3 block is applied <em>R</em> times with step 1/<em>R</em> (Euler, plain
            weights, no fine-tuning). <em>R</em> = 1 is the original network.
          </>
        }
      >
        <LineChart
          ariaLabel="Accuracy versus number of Euler sub-steps per block for five pretrained networks"
          series={REFINE_PLAIN}
          xLog
          xDomain={[1, 128]}
          yDomain={[76.5, 82]}
          xTicks={[1, 2, 4, 8, 16, 32, 64, 128]}
          yTicks={[77, 78, 79, 80, 81, 82]}
          xLabel="R, Euler sub-steps per block (log scale)"
          yLabel="Top-1 (%)"
        />
      </Figure>
      <Table
        head={['Model', 'Original', 'RK4 at step 1', 'Euler R = 128', 'ODE limit', 'Gap']}
        rows={REFINE_TABLE.map((r) => [
          r.model,
          pct(r.native),
          pct(r.rk4AtTrainingStep),
          pct(r.r128),
          pct(r.limit),
          <strong key="gap">{signed(r.gap)}</strong>,
        ])}
        note="ODE limit: RK4 with R = 128. Gap: ODE limit minus original."
      />
      <P>
        Two things stand out. First, the horizon is what matters. Repeating each block ten times <em>without</em>{' '}
        shrinking the step, which integrates ten times longer, destroys every network: 0.1% for ConvNeXt, 1% for
        Swin. Second, the networks are tuned to Euler&apos;s error. Swapping in RK2 or RK4 at the training step size
        gives the continuous limit straight away and loses between 0.15 and 2.5 points. A single Euler step of size
        one is not a poor approximation of the ODE. It is the function that was trained, and the ODE is a slightly
        worse approximation of it.
      </P>

      <H2 id="interpolation">3. Plain versus bilinear interpolation</H2>
      <P>
        Interpolating weights between consecutive blocks fails in every model, and the more steps you take, the worse
        it gets.
      </P>
      <Figure
        number={3}
        caption="Same experiment as Figure 2, with the weights inside each block blended linearly between block k and k + 1."
      >
        <LineChart
          ariaLabel="Accuracy versus sub-steps with bilinear weight interpolation"
          series={REFINE_BILINEAR}
          xLog
          xDomain={[1, 128]}
          yDomain={[55, 82]}
          xTicks={[1, 2, 4, 8, 16, 32, 64, 128]}
          yTicks={[55, 60, 65, 70, 75, 80]}
          xLabel="R, Euler sub-steps per block (log scale)"
          yLabel="Top-1 (%)"
        />
      </Figure>
      <P>
        At <em>R</em> = 128, bilinear loses {REFINE_TABLE.map((r) => (r.r128 - r.bilinear).toFixed(2)).join(', ')} points
        against plain, in the order of the table above. The cause is permutation symmetry. Two consecutive blocks are
        not aligned neuron by neuron, so the midpoint of their weights is not a functional block that lies between
        them <Cite ids={['entezari2022', 'ainsworth2023']} />. The damage also ranks the models by how similar
        consecutive blocks are: ConvNeXt with drop path and Swin are the smoothest, while ResNet-101 and ConvNeXt
        without drop path are the roughest.
      </P>
      <P>
        You can see it in the residual field. Each curve below is one channel of <em>h</em> = Δ<em>x</em>/Δ
        <em>t</em>, averaged over space, along the nine blocks of ConvNeXt-T at <em>R</em> = 100, for a single
        validation image (a snow leopard).
      </P>
      <Figure
        number={4}
        caption={
          <>
            Residual field per channel across stage 3 of ConvNeXt-T, <em>R</em> = 100. Top: plain weights. The field
            relaxes smoothly inside each block and jumps at block boundaries. Bottom: bilinear weights. The
            in-between blocks add high-frequency oscillation on top of the same path.
          </>
        }
      >
        <div className="space-y-3">
          <Plot
            src={`${ASSET_DIR}/spaghetti-convnext-r100.png`}
            alt="Per-channel residual trajectories, ConvNeXt-T, plain interpolation"
            width={1120}
            height={700}
          />
          <Plot
            src={`${ASSET_DIR}/spaghetti-convnext-r100-bilinear.png`}
            alt="Per-channel residual trajectories, ConvNeXt-T, bilinear interpolation"
            width={1120}
            height={700}
          />
        </div>
      </Figure>
      <P>
        In numbers, measured over 500 images: bilinear keeps the global shape of the trajectory (its straightness and
        dimensionality barely change) but multiplies local curvature by 6 to 12 and angular speed by 4 to 7, and
        doubles the distance to the native trajectory.
      </P>
      <Figure
        number={5}
        caption={
          <>
            Mean of <em>h</em> per channel as the state moves through stage 3. Left: plain. Right: bilinear. In both,
            channel 195 separates from the other 383 as depth grows. That channel is the subject of section 7.
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Video
            src={`${ASSET_DIR}/channels-convnext-r100.mp4`}
            poster={`${ASSET_DIR}/channels-convnext-r100.jpg`}
            label="Animated per-channel mean of the residual field, ConvNeXt-T plain"
          />
          <Video
            src={`${ASSET_DIR}/channels-convnext-r100-bilinear.mp4`}
            poster={`${ASSET_DIR}/channels-convnext-r100-bilinear.jpg`}
            label="Animated per-channel mean of the residual field, ConvNeXt-T bilinear"
          />
        </div>
      </Figure>

      <H2 id="shared">4. One block for the whole stage</H2>
      <P>
        If stage 3 really integrates a smooth flow, one block should be able to define the vector field for the whole
        stage. So I trained a ConvNeXt-T in which the nine stage-3 blocks are the same block applied nine times, with
        the same recipe as the baseline: 300 epochs on ImageNet-1k. Weight sharing across depth is not new{' '}
        <Cite ids={['dehghani2019', 'lan2020']} />, but here it is a direct test of the ODE reading.
      </P>
      <Figure
        number={6}
        caption="ImageNet validation accuracy over 300 epochs of training from scratch, same recipe for all three."
      >
        <LineChart
          ariaLabel="Validation accuracy during training for ConvNeXt-T, ConvNeXt-T without drop path, and shared stage 3"
          series={TRAINING_CURVES}
          xDomain={[0, 300]}
          yDomain={[0, 85]}
          xTicks={[0, 50, 100, 150, 200, 250, 300]}
          yTicks={[0, 20, 40, 60, 80]}
          xLabel="Epoch"
          yLabel="Top-1 (%)"
          showPoints={false}
        />
      </Figure>
      <P>
        The shared network reaches <strong>{pct(FINAL.shared)}%</strong> against {pct(FINAL.convnext)}%, a cost of{' '}
        {(FINAL.convnext - FINAL.shared).toFixed(2)} points. Stage 3 goes from nine blocks to one, which removes about
        9.6M of ConvNeXt-T&apos;s 28.6M parameters.
      </P>
      <H3>Accuracy depends on the integration time, not on the number of steps</H3>
      <P>
        With a single field, depth <em>D</em> and step Δ<em>t</em> can be chosen freely at inference, and the
        integration time is <em>T</em> = <em>D</em> · Δ<em>t</em>. The network was trained with <em>D</em> = 9 and Δ
        <em>t</em> = 1, so <em>T</em> = 9. Keeping <em>T</em> = 9 and changing <em>D</em>:
      </P>
      <Figure
        number={7}
        caption={
          <>
            Shared network, integration time fixed at <em>T</em> = 9, step 9/<em>D</em>. Any <em>D</em> ≥ 7 gives
            80.1 to 80.4%. All three solvers converge to the same continuous limit, 80.12%.
          </>
        }
      >
        <LineChart
          ariaLabel="Accuracy versus number of steps at fixed integration time for Euler, RK2 and RK4"
          series={SHARED_FIXED_HORIZON}
          xLog
          xDomain={[1, 10000]}
          yDomain={[0, 85]}
          xTicks={[1, 10, 100, 1000, 10000]}
          yTicks={[0, 20, 40, 60, 80]}
          xLabel="D, number of steps (log scale)"
          yLabel="Top-1 (%)"
          formatX={logTick}
          refLabelSide="left"
          refLines={[{ y: FINAL.shared, label: `trained (D = 9) ${pct(FINAL.shared)}%` }]}
        />
      </Figure>
      <P>
        The gap from Euler to the continuous limit is −0.22 points, three times smaller than in the unshared ConvNeXt
        (−0.73): sharing weights produces a more genuine ODE. With large steps the order of the solver matters a lot.
        At <em>D</em> = 4, RK4 gets 78.9% and Euler 67.8%, and Euler with two steps of 4.5 is unstable (5.9%). RK4
        reaches the limit from <em>D</em> ≈ 5, RK2 from about 18 and Euler only from about 256.
      </P>
      <Figure
        number={8}
        caption={
          <>
            The horizon behaves like a learned integration time. Red: step fixed at 1, more steps, so <em>T</em> grows
            with <em>D</em>. Purple: nine steps, step size varied, so <em>T</em> = 9 · Δ<em>t</em>. Both peak at{' '}
            <em>T</em> = 9.
          </>
        }
      >
        <LineChart
          ariaLabel="Accuracy versus integration time for the shared network"
          series={SHARED_HORIZON_SWEEP}
          xLog
          xDomain={[0.09, 150]}
          yDomain={[0, 85]}
          xTicks={[0.1, 1, 3, 9, 30, 100]}
          yTicks={[0, 20, 40, 60, 80]}
          xLabel="T, total integration time (log scale)"
          yLabel="Top-1 (%)"
        />
      </Figure>
      <P>
        Integrating too short or too long degrades smoothly near <em>T</em> = 9 and collapses far from it: 49% at{' '}
        <em>T</em> = 32 with unit steps, and 0.3% at <em>T</em> = 128. The classification head expects the state
        reached after exactly that much time.
      </P>

      <H2 id="microscope">5. Why expand: depth at higher resolution</H2>
      <P>
        The original ConvNeXt-T shows you stage 3 in ten frames: the input <InlineMath tex="x_0" /> and the output
        of each of the nine blocks. Everything that happens inside a block is invisible. That is a problem, because
        the questions worth asking about dynamics are questions about derivatives. How fast does the representation
        move? Does it accelerate or brake? Does it go straight or turn? When is each feature decided? With ten
        samples of a path in 75,264 dimensions (384 channels × 14 × 14), a finite difference across a block mixes
        two different things: the motion inside the block, and the change of vector field when the next block takes
        over. A second difference, which is what acceleration and curvature need, is hopeless.
      </P>
      <P>
        Expanding the skip connections is the equivalent of switching to a high-speed camera. With{' '}
        <InlineMath tex="R=100" />, the same stage is sampled at 901 states, every{' '}
        <InlineMath tex="\Delta t = 0.01" />. Two things make those extra frames trustworthy rather than made up.
        The function is preserved: accuracy stays within 0.6 to 0.9 points of the original (section 2). And the
        refined path stays close to the original states, measured on 500 images:
      </P>
      <Figure
        number={9}
        caption={
          <>
            How far the refined trajectory <InlineMath tex="x^{(R)}(t)" />, <InlineMath tex="R=100" />, drifts from
            the states of the network run with one step per block, <InlineMath tex="x_{R=1}" />. 500 images; band:
            5th to 95th percentile; massive channel removed. Top: norm of the state and distance between the two.
            Bottom: cosine between them. Left: original ConvNeXt-T. The error grows inside each block and is partly
            corrected at its end; at the exit of stage 3 the cosine is still 0.93. Right: shared network. The error
            stays bounded at a cosine of about 0.98 for the whole stage.
          </>
        }
      >
        <Plot
          src={`${ASSET_DIR}/refinement-fidelity.png`}
          alt="Distance and cosine between refined and native stage-3 trajectories for ConvNeXt-T and the shared network"
          width={2001}
          height={1126}
        />
      </Figure>
      <P>
        The extra resolution is not a cosmetic upgrade. It decides what you conclude. The figure below follows
        individual coordinates of the stage-3 state, pooled over the same 500 images. For each image I keep the
        coordinates whose total change <InlineMath tex="\Delta_i = x_i(T)-x_i(0)" /> is above that image&apos;s
        median, and normalise each one to its own journey:
      </P>
      <DisplayMath
        numbered="6"
        tex="p_i(t) = \frac{x_i(t) - x_i(0)}{\Delta_i},\qquad \hat h_i(t) = \frac{h_i(t)}{\Delta_i}."
      />
      <P>
        <InlineMath tex="p_i" /> is the progress of coordinate <InlineMath tex="i" />: 0 where it starts, 1 at its
        final value. <InlineMath tex="\hat h_i" /> is its velocity in the same units, positive when it moves towards
        its final value. <InlineMath tex="t_{50}" /> is the first time a coordinate is half-way there.
      </P>
      <Figure
        number={10}
        caption={
          <>
            Per-coordinate dynamics of stage 3, 500 images. In each block of panels, top row: shared network; bottom
            row: original ConvNeXt-T. Left: progress <InlineMath tex="p_i(t)" />; grey bands are the 25–75 and 5–95
            percentiles, the black line is the median, coloured lines are single coordinates coloured by their{' '}
            <InlineMath tex="t_{50}" />. Middle: recruitment raster, 3,000 coordinates (6 per image) sorted by
            the time of their peak velocity; red means moving towards the final value, blue moving away. Right:
            density of all coordinates and all times in the phase plane <InlineMath tex="(p_i, \hat h_i)" />, with
            the median velocity at each progress level. First block of panels: one step per block (
            <InlineMath tex="R=1" />). Second: <InlineMath tex="R=100" />.
          </>
        }
      >
        <div className="space-y-4">
          <Plot
            src={`${ASSET_DIR}/pooled-dynamics-r1.png`}
            alt="Per-coordinate progress, recruitment raster and phase density at one step per block"
            width={2423}
            height={1223}
          />
          <Plot
            src={`${ASSET_DIR}/pooled-dynamics-r100.png`}
            alt="Per-coordinate progress, recruitment raster and phase density at 100 steps per block"
            width={2423}
            height={1223}
          />
        </div>
      </Figure>
      <P>
        At one step per block, both networks look like staircases. In the raster, every coordinate seems to be
        switched on by one particular block, and the phase plane is nine scattered dots. From those pictures alone
        you could not tell a smooth flow sampled coarsely from a sequence of unrelated maps.
      </P>
      <P>
        At <InlineMath tex="R=100" /> the two networks separate. The shared network becomes a single continuous
        wave: coordinates are recruited at staggered times (median <InlineMath tex="t_{50}" /> = 4.1), each one
        launches, peaks and brakes as it approaches its final value, and the whole population traces one arch in
        the phase plane. The stage is a flow with a beginning, a middle and an end, and the staircase was an
        artefact of sampling it every unit of time. The original ConvNeXt-T keeps its steps, now resolved: inside a
        block the velocity of each coordinate barely changes direction, and every discontinuity sits exactly at a
        block boundary. In the phase plane each block draws its own short arc, starting where the previous one
        stopped but at a different velocity. Across a boundary, 44.6% of the coordinates flip the sign of their
        velocity. Inside a block, from one step of 0.01 to the next, it is about 0.2%. In the shared network the
        flip rate at integer times is 0.1%, because nothing special happens there.
      </P>
      <P>
        That is the use of interpolating depth: it separates what the network does from how coarsely we were
        looking at it. The jumps of the original network are real, the steps of the shared network are not, and
        only the refined trajectories can tell them apart.
      </P>

      <H2 id="dynamics">6. What the trajectories look like</H2>
      <P>
        To compare networks beyond accuracy I measure the geometry of the path the state takes through stage 3:
        norms of <InlineMath tex="x" /> and <InlineMath tex="h = f_i(x)" />, angular speed of{' '}
        <InlineMath tex="h" />, tangential and normal acceleration, curvature, straightness{' '}
        <InlineMath tex="R = N/L" /> (net displacement over path length; 1 for a straight line), and the
        participation ratio of the trajectory, its effective number of dimensions. Everything was first computed on
        one image (ImageNet val #644, a snow leopard), then repeated on a suite of{' '}
        <strong>500 validation images</strong>, one from each of 500 random classes (seed 0; the same 500 images in
        every run).
      </P>
      <P>
        The single image was representative. Every metric of that image falls within about 1.5 standard deviations of
        the 500-image mean, and the spread between images is small (
        <InlineMath tex="\sigma(R) \le 0.025" />). The geometry belongs to the network, not to the input. The
        numbers in the tables below are that N=500 mean.
      </P>
      <H3>Two ways of moving through a stage</H3>
      <P>
        Figure 1 coloured the trajectories by time. Coloured by class, they show where each image is going. In
        the shared network every class leaves a common origin and fans out along its own smooth curve, and the
        final states alone already separate the classes. In the original network the classes separate too, but
        the paths bend at every block boundary.
      </P>
      <Figure
        number={11}
        caption={
          <>
            Same 200 images and projection as Figure 1, coloured by class. Top: weight-tied network. Bottom:
            original ConvNeXt-T at <InlineMath tex="R=100" />. Left: PCA of every state along the path. Middle: PCA
            fitted on the final states only. Right: speed per class (black: all images). The shared speed rises,
            peaks at <InlineMath tex="t\approx 4" /> and brakes for every class; the original one is a crescendo
            of plateaus, from about 17 in the first block to more than 100 in the last. The first two components
            explain 14% of the variance in the shared network and 9% in the original.
          </>
        }
      >
        <div className="space-y-3">
          <Plot
            src={`${ASSET_DIR}/pca-shared.png`}
            alt="PCA of stage-3 trajectories of the shared ConvNeXt for ten classes, and their speed over depth"
            width={2423}
            height={801}
          />
          <Plot
            src={`${ASSET_DIR}/pca-convnext-r100.png`}
            alt="PCA of stage-3 trajectories of the original ConvNeXt-T for ten classes, and their speed over depth"
            width={2423}
            height={801}
          />
        </div>
      </Figure>
      <P>
        The videos make the contrast concrete. On the left of each, the shared network; on the right, the original
        one, integrated over the same nine units of depth and played in sync.
      </P>
      <Figure
        number={12}
        caption={
          <>
            Snow-leopard image, <InlineMath tex="\Delta t = 0.01" />, massive channel removed; the left and right
            panels have different axis ranges. Top: phase portrait of the residual field, each point one of 8,000
            coordinates plotted as <InlineMath tex="(x_i, h_i)" />. The shared cloud deforms continuously and
            flattens towards <InlineMath tex="h=0" /> as the flow brakes; the original cloud is reshuffled at every
            block boundary. Bottom: spatial mean of each of the 384 channels of <InlineMath tex="x" />.
          </>
        }
      >
        <div className="space-y-3">
          <Video
            src={`${ASSET_DIR}/phase-portrait-shared-vs-convnext.mp4`}
            poster={`${ASSET_DIR}/phase-portrait-shared-vs-convnext.jpg`}
            label="Animated phase portrait x versus h, shared network on the left and ConvNeXt-T on the right"
          />
          <Video
            src={`${ASSET_DIR}/channel-means-shared-vs-convnext.mp4`}
            poster={`${ASSET_DIR}/channel-means-shared-vs-convnext.jpg`}
            label="Animated per-channel mean of the state, shared network on the left and ConvNeXt-T on the right"
          />
        </div>
      </Figure>
      <H3>Independent blocks undo each other</H3>
      <P>
        Look again at the ConvNeXt-T rows of Figure 10. The median coordinate of the original network does not progress
        smoothly: many coordinates overshoot, come back, and go out again, and most of them only commit to their final
        value in the last two blocks (median <InlineMath tex="t_{50}" /> = 7.2). To quantify it, take the
        displacement of each block, <InlineMath tex="\Delta x_k = x(k+1) - x(k)" />, coordinate by coordinate:
      </P>
      <Table
        head={['Model', 'R', 'Straightness', 'Wasted motion', 'Monotone share', 'cos(Δxₖ, Δxₖ₊₁)', 'Reversal rate', 'Undo fraction', 'Zig-zag share', 'Median t₅₀', 'Top-1 (500 img.)']}
        rows={POOLED_N500.map((r) => [
          r.model,
          r.R,
          r.straightness.toFixed(2),
          `${(r.wasted * 100).toFixed(0)}%`,
          `${(r.monotone * 100).toFixed(0)}%`,
          r.cosBlocks.toFixed(2),
          `${(r.reversal * 100).toFixed(0)}%`,
          `${(r.undo * 100).toFixed(0)}%`,
          `${(r.zigzag * 100).toFixed(0)}%`,
          r.t50.toFixed(1),
          `${r.top1.toFixed(1)}%`,
        ])}
        note="N=500, massive channel removed. Wasted motion: 1 − |net displacement| / Σ|block displacements|, summed over coordinates. Monotone share: fraction of the total change carried by coordinates that move backwards less than 5% of their path. Reversal rate: fraction of coordinates whose displacement changes sign from one block to the next (50% would be a coin flip). Undo fraction: share of a block's displacement cancelled by the next block. Zig-zag share: fraction of block displacement in coordinates that reverse at least twice."
      />
      <P>
        Consecutive blocks of the original ConvNeXt-T push the state in nearly orthogonal directions (cosine 0.17;
        two random directions in this space would give about 0.004, so they are related, but barely). From one
        block to the next, 45% of the coordinates reverse, close to the 50% of a coin flip, and a quarter of what
        each block moves is cancelled by the following one. 90% of the block-level motion is in coordinates that
        zig-zag at least twice, and in total half of the distance travelled coordinate by coordinate cancels out.
        The shared network, at the same accuracy, wastes 19%, and 73% of its change is carried by coordinates that
        move monotonically to their final value.
      </P>
      <P>
        These numbers are the same at <InlineMath tex="R=1" /> and <InlineMath tex="R=100" /> for the original
        network, so the zig-zag is a property of the trained blocks, not of the refinement. The shared network at{' '}
        <InlineMath tex="R=1" /> looks somewhat worse than at <InlineMath tex="R=100" />, which is the coarse Euler
        step overshooting a flow that is really smooth.
      </P>
      <P>
        On average, all blocks do push towards the final representation; the median curve rises. Coordinate by
        coordinate, they do not. Nine independent blocks reach the same accuracy as one shared field by building
        and destroying a large part of what the previous block wrote. Why they do this is open. They may use
        some coordinates as temporary workspace, or overparametrisation may simply let each block correct its
        predecessor. What the shared network shows is that the zig-zag is not needed to classify well.
      </P>
      <H3>One image, all channels</H3>
      <Figure
        number={13}
        caption={
          <>
            Shared network, 100 Euler steps over <em>T</em> = 9, for the validation image on the left. Per-channel residual
            field. One channel dominates the plot, rising and falling while every other channel stays close to zero.
          </>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <Image
            src={`${ASSET_DIR}/input-snow-leopard.jpg`}
            alt="Input image: snow leopard from the ImageNet validation set"
            width={204}
            height={204}
            className="h-24 w-24 shrink-0 rounded-md sm:h-28 sm:w-28"
          />
          <div className="min-w-0 flex-1">
            <Plot
              src={`${ASSET_DIR}/spaghetti-shared.png`}
              alt="Per-channel residual trajectories for the shared network"
              width={1120}
              height={700}
            />
          </div>
        </div>
      </Figure>
      <P>
        With all channels included, every ConvNeXt looks like an almost perfectly straight, one-dimensional flow, and
        there is a clear ranking: shared, then ConvNeXt, then Swin, then the ResNets. ResNet-101 follows a very
        tortuous path in about 20 effective dimensions. The unshared ConvNeXt shows a sawtooth pattern: inside each
        block <em>h</em> contracts, and at each block boundary it jumps by 10² to 10⁴ times the within-block
        acceleration.
      </P>
      <H3>Dynamics and geometry</H3>
      <P>
        Write <InlineMath tex="v = h" /> for the residual velocity and{' '}
        <InlineMath tex="a = (h_{t+\Delta t}-h_t)/\Delta t" /> for its acceleration. The tangential and normal
        parts are
      </P>
      <DisplayMath
        numbered="7"
        tex="a_t = \frac{\langle v, a\rangle}{\|v\|},\qquad a_n = \sqrt{\|a\|^2 - a_t^2},\qquad \kappa = \frac{a_n}{\|v\|^2}."
      />
      <P>
        <InlineMath tex="a_t" /> is signed: negative means the trajectory is braking (
        <InlineMath tex="\|h\|" /> shrinks). <InlineMath tex="a_n" /> is a norm, so always positive, and{' '}
        <InlineMath tex="\|a\|^2 = a_t^2 + a_n^2" />. Angular speed is{' '}
        <InlineMath tex="\omega = \arccos(\hat h_t\cdot\hat h_{t+\Delta t})/\Delta t" />. The panels below drop the
        single step between blocks, so they show the intra-block flow; the panel that keeps those steps is labelled
        as such.
      </P>
      <Figure
        number={14}
        caption={
          <>
            Shared network, all channels, one image. Left to right, top to bottom: acceleration decomposition
            (accelerate, then brake around <InlineMath tex="t\approx 4" />); curvature; angular speed of{' '}
            <InlineMath tex="h" />; relative field size <InlineMath tex="\|h\|/\|x\|" />, which fades from 1.6 to
            0.05. This is the massive-channel picture: almost straight, almost 1-D.
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Plot src={`${ASSET_DIR}/dyn-shared-accel.png`} alt="Acceleration decomposition, shared network" width={1120} height={700} />
          <Plot src={`${ASSET_DIR}/dyn-shared-curvature.png`} alt="Curvature, shared network" width={1120} height={700} />
          <Plot src={`${ASSET_DIR}/dyn-shared-omega.png`} alt="Angular speed, shared network" width={1120} height={700} />
          <Plot src={`${ASSET_DIR}/dyn-shared-h-over-x.png`} alt="Relative field norm, shared network" width={1120} height={700} />
        </div>
      </Figure>
      <Figure
        number={15}
        caption={
          <>
            ConvNeXt-T, <InlineMath tex="R=100" />, all channels. Left: fraction of acceleration that is tangential
            versus normal inside each block; the trajectory brakes at the start of a block (
            <InlineMath tex="a_t/\|a\|\approx -0.5" />) while most of <InlineMath tex="a" /> stays normal. Middle:
            angular speed including block boundaries — the spikes are 75–85° turns in a single step. Right: intra-block
            curvature, high in the first blocks, then almost flat. Bottom: bilinear interpolation on the same
            network; <InlineMath tex="\omega" /> chatters through the whole interval instead of only at the
            boundaries.
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Plot src={`${ASSET_DIR}/dyn-cnx-accel-norm.png`} alt="Normalized acceleration decomposition, ConvNeXt-T" width={1120} height={700} />
          <Plot src={`${ASSET_DIR}/dyn-cnx-omega-jumps.png`} alt="Angular speed with inter-block jumps, ConvNeXt-T" width={1120} height={700} />
          <Plot src={`${ASSET_DIR}/dyn-cnx-curvature.png`} alt="Intra-block curvature, ConvNeXt-T" width={1120} height={700} />
          <Plot src={`${ASSET_DIR}/dyn-bilinear-omega.png`} alt="Angular speed, ConvNeXt-T bilinear interpolation" width={1120} height={700} />
        </div>
      </Figure>

      <H2 id="massive">7. Massive activations and the ignore path</H2>
      <P>
        The straight lines are mostly one channel: a massive activation{' '}
        <Cite ids={['sun2024']} />. At the exit of stage 3 in the shared network, channel 236 has a
        norm of 3,570; the next largest has 140. It is the same channel in all 200 images I checked, and it holds a
        median 98% of the energy of the state.
      </P>
      <Figure
        number={16}
        caption="Norm of each of the 384 channels at the exit of stage 3, shared network, one image."
      >
        <Plot
          src={`${ASSET_DIR}/channel-norms-shared.png`}
          alt="Bar chart of channel norms with one outlier at channel 236"
          width={1400}
          height={504}
        />
      </Figure>
      <P>
        The same phenomenon appears in all three ConvNeXts (channels 236, 195 and 225, with 97 to 99% of the
        energy). Swin has a moderate one, at about 15%, and the ResNets have none: their top channel changes from
        image to image and carries about 1%. They are close relatives of the high-norm tokens in vision transformers{' '}
        <Cite ids={['darcet2024']} />. One difference: in the shared network the channel dominates{' '}
        <InlineMath tex="h" /> from the first step, while in the unshared ConvNeXt it emerges with depth, from 5% of{' '}
        <InlineMath tex="h" /> at the start to 96% at the end.
      </P>
      <Figure
        number={17}
        caption="Top-1 channel by norm of h, per image, over 200 validation images. ConvNeXt variants and Swin always pick the same channel; ResNets do not."
      >
        <Plot
          src={`${ASSET_DIR}/massive-channel-histogram.png`}
          alt="Histograms of the dominant channel per image for eight networks"
          width={1680}
          height={1680}
        />
      </Figure>
      <H3>The ignore path: drop the channel from the metric, not from the ODE</H3>
      <P>
        The ignore path (<code>_ignore1</code> in the experiment suite) leaves the network untouched and only
        removes the massive channel when the trajectory metrics are computed. That is not the same as zeroing the
        channel inside the residual step, which I come back to below. On N=500, ignoring it changes ConvNeXt
        completely and Swin almost not at all.
      </P>
      <Table
        head={[
          'Model',
          'Ignore',
          'R',
          'σ(R)',
          'PR depth',
          'PR spatial',
          'κ',
          'ω',
          'aₙ/‖a‖',
          'aₜ/‖a‖',
          'cos(x₀,x_T)',
          'cos(h₀,h_T)',
        ]}
        rows={DYNAMICS_N500.map((r) => [
          r.model,
          r.ignore ? `ch ${r.channel}` : '—',
          r.R.toFixed(3),
          r.Rsd.toFixed(3),
          r.prDepth.toFixed(2),
          r.prSpatial.toFixed(2),
          r.kappa.toFixed(4),
          r.omega.toFixed(2),
          r.an.toFixed(2),
          r.at.toFixed(2),
          r.cosX.toFixed(2),
          r.cosH.toFixed(2),
        ])}
        note="N=500, one ImageNet validation image per class, same 500 images in every run. Fine Euler (R=100 or D=100). R is straightness (N/L). κ and ω are intra-block means. ResNets have no massive channel, so there is no ignore path for them."
      />
      <P>
        With every channel, the ranking in straightness is shared 0.97 &gt; ConvNeXt 0.94 ≈ no-drop-path 0.93 &gt;
        Swin 0.83 &gt; ResNet-50 0.40 &gt; ResNet-101 0.17. After the ignore path it becomes Swin 0.81 &gt; shared
        0.78 &gt; ConvNeXt 0.50 &gt; no-drop-path 0.44 &gt; ResNet-50 0.40 &gt; ResNet-101 0.17. The unshared
        ConvNeXt without its channel is almost as tortuous as ResNet-50; Swin is the unshared network whose
        straightness is real. In the shared network more than 90% of the acceleration becomes normal:{' '}
        <InlineMath tex="h" /> rotates until it ends up orthogonal to where it started (
        <InlineMath tex="\cos(h_0,h_T) = -0.06 \pm 0.04" />
        ), while <InlineMath tex="\|h\|/\|x\|" /> fades from 0.42 to 0.09. A drift that turns and dies out.
      </P>
      <Figure
        number={18}
        caption={
          <>
            Shared network after the ignore path (channel 236 removed from the metric). Top: <InlineMath tex="a_n" />{' '}
            sits on top of <InlineMath tex="\|a\|" />, so almost all acceleration is a turn;{' '}
            <InlineMath tex="a_t" /> is small. Bottom: curvature and angular speed both have a U shape (
            <InlineMath tex="\omega" /> from 0.74 down to 0.31 and back), and{' '}
            <InlineMath tex="\cos(h_0,h_t)" /> falls through zero — the field ends orthogonal to where it started.
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Plot src={`${ASSET_DIR}/dyn-shared-ignore-accel.png`} alt="Acceleration decomposition, shared network, ignore path" width={1120} height={700} />
          <Plot src={`${ASSET_DIR}/dyn-shared-ignore-cos-h.png`} alt="Field alignment versus start, shared network, ignore path" width={1120} height={700} />
          <Plot src={`${ASSET_DIR}/dyn-shared-ignore-curvature.png`} alt="Curvature, shared network, ignore path" width={1120} height={700} />
          <Plot src={`${ASSET_DIR}/dyn-shared-ignore-omega.png`} alt="Angular speed, shared network, ignore path" width={1120} height={700} />
        </div>
      </Figure>
      <Figure
        number={19}
        caption={
          <>
            ConvNeXt-T, <InlineMath tex="R=100" />, ignore path (channel 195 removed). Left: inside each block{' '}
            <InlineMath tex="a_n \approx \|a\|" /> and <InlineMath tex="a_t" /> is a modest brake. Right: angular
            speed is high and almost constant inside a block (0.55–0.70), not the decay the all-channel plot
            suggested — that decay was the massive channel masking the turn.
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Plot src={`${ASSET_DIR}/dyn-cnx-ignore-accel.png`} alt="Acceleration decomposition, ConvNeXt-T, ignore path" width={1120} height={700} />
          <Plot src={`${ASSET_DIR}/dyn-cnx-ignore-omega.png`} alt="Intra-block angular speed, ConvNeXt-T, ignore path" width={1120} height={700} />
        </div>
      </Figure>
      <Figure
        number={20}
        caption="Shared network, same image and integration as Figure 13, with channel 236 removed. What was hidden underneath is a family of smooth, curved trajectories."
      >
        <Plot
          src={`${ASSET_DIR}/spaghetti-shared-no-ch236.png`}
          alt="Per-channel residual trajectories for the shared network without channel 236"
          width={1120}
          height={700}
        />
      </Figure>
      <Figure
        number={21}
        caption={
          <>
            Per-channel mean of <em>h</em> while integrating the shared network. Left: all channels, where channel
            236 sets the scale. Right: without it.
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Video
            src={`${ASSET_DIR}/channels-shared.mp4`}
            poster={`${ASSET_DIR}/channels-shared.jpg`}
            label="Animated per-channel mean of the residual field, shared network"
          />
          <Video
            src={`${ASSET_DIR}/channels-shared-no-ch236.mp4`}
            poster={`${ASSET_DIR}/channels-shared-no-ch236.jpg`}
            label="Animated per-channel mean of the residual field, shared network, channel 236 removed"
          />
        </div>
      </Figure>
      <Figure
        number={22}
        caption={
          <>
            Spatial map of ‖<em>h</em>‖ over the 14 × 14 feature grid during integration. Left: shared network, one
            smooth flow. Right: ConvNeXt-T at <em>R</em> = 100, where each block boundary is visible as a jump.
          </>
        }
      >
        <div className="grid grid-cols-2 gap-3">
          <Video
            src={`${ASSET_DIR}/spatial-norm-shared.mp4`}
            poster={`${ASSET_DIR}/spatial-norm-shared.jpg`}
            label="Animated spatial norm of the residual field, shared network"
          />
          <Video
            src={`${ASSET_DIR}/spatial-norm-convnext-r100.mp4`}
            poster={`${ASSET_DIR}/spatial-norm-convnext-r100.jpg`}
            label="Animated spatial norm of the residual field, ConvNeXt-T"
          />
        </div>
      </Figure>
      <H3>Zeroing versus ignoring</H3>
      <P>
        Zeroing writes the channel to 0 after every residual step of the shared network, so the ODE itself changes.
        That drops accuracy from {pct(zeroR1.baseline)}% to{' '}
        <strong>{pct(zeroR1.outlier)}%</strong>. Zeroing a random channel instead costs nothing (mean{' '}
        {pct(zeroR1.random_mean)}% over {zeroR1.random_n} channels). The same holds at ten times the resolution
        (from {pct(ZEROING.R10.baseline)}% to {pct(ZEROING.R10.outlier)}%).
      </P>
      <P>
        The ignore path and this zeroing agree on the other 383 channels to within 0.5% on every metric (straightness
        0.7944 vs 0.7947, path length, participation ratios, mean curvature). The channel does not feed back into
        the rest of the stage-3 field, so it is not an internal clock that <InlineMath tex="f" /> reads. Its effect
        is downstream: holding 98% of the energy, it sets the variance that the LayerNorm before downsampling
        divides by. Remove it and the scale of everything else changes about 7×, a distribution shift for stage 4.
        Whether it carries information about the image, or acts as a near-constant bias and scale, is still open.
      </P>

      <H2 id="deltas">8. Shared block plus per-block deltas</H2>
      <P>
        Section 6 suggests that nine independent blocks are a wasteful way to integrate a stage: they carry a common
        flow plus large, mutually cancelling corrections. Sharing removes the waste but costs 0.6 points. The
        natural question is whether a shared flow with small per-block corrections can close that gap. Each block <em>k</em> gets its own offset on top of the shared weights:
      </P>
      <DisplayMath numbered="8" tex="\theta_i \;=\; \theta_{\mathrm{shared}} + \delta_i,\qquad \delta_i = 0 \text{ at initialisation.}" />
      <P>
        The deltas cover every parameter of the block: depthwise convolution, LayerNorm, both pointwise layers and
        the layer scale. They start at zero from the shared checkpoint, so epoch 0 is exactly the shared network, and
        they have their own weight decay pulling them back towards it. Then the whole model is fine-tuned.
      </P>
      <Figure
        number={23}
        caption={
          <>
            Fine-tuning the shared network with per-block deltas. Dashed lines: the shared network the runs start
            from, and the original unshared ConvNeXt-T. The 27-step run unrolls the shared block to 27 steps of 1/3
            (same <em>T</em> = 9) and is still training ({FINAL.delta27Epochs} of 100 epochs).
          </>
        }
      >
        <LineChart
          ariaLabel="Validation accuracy while fine-tuning shared plus delta models"
          series={DELTA_CURVES}
          xDomain={[0, 100]}
          yDomain={[72, 82]}
          xTicks={[0, 20, 40, 60, 80, 100]}
          yTicks={[72, 74, 76, 78, 80, 82]}
          xLabel="Fine-tuning epoch"
          yLabel="Top-1 (%)"
          showPoints={false}
          refLabelSide="left"
          refLines={[
            { y: FINAL.convnext, label: `ConvNeXt-T ${pct(FINAL.convnext)}%` },
            { y: FINAL.shared, label: `shared ${pct(FINAL.shared)}%` },
          ]}
        />
      </Figure>
      <P>
        With a peak learning rate of 10⁻³ for 50 epochs, the delta model reaches{' '}
        <strong>{pct(FINAL.deltaBest)}%</strong>, {signed(FINAL.deltaBest - FINAL.shared)} over the shared network and{' '}
        {signed(FINAL.deltaBest - FINAL.convnext)} over the original. A gentler schedule (10⁻⁴, 100 epochs) stays at {pct(FINAL.deltaLowLr)}%. The deltas do
        not stay small. By the end of the best run they average {(FINAL.deltaRatioEnd * 100).toFixed(0)}% of the norm
        of the shared weights.
      </P>
      <Figure number={24} caption="Relative size of the deltas during the best run, averaged over blocks and layers.">
        <LineChart
          ariaLabel="Delta-to-shared weight norm ratio during fine-tuning"
          series={DELTA_RATIO}
          xDomain={[0, 50]}
          yDomain={[0, 0.3]}
          xTicks={[0, 10, 20, 30, 40, 50]}
          yTicks={[0, 0.1, 0.2, 0.3]}
          xLabel="Fine-tuning epoch"
          yLabel="‖δ‖ / ‖θ_shared‖"
          showPoints={false}
        />
      </Figure>
      <P>
        Two caveats, to be fair to the baseline. The delta model has as many stage-3 parameters as the original plus
        one block, so it is a reparametrisation, not a compression. And it has seen 50 more epochs than the original.
        What it shows is that a shared field plus per-block corrections is a better starting point than nine
        independent blocks. Whether the deltas can be made sparse or low-rank, recovering the parameter savings, is
        the next step.
      </P>

      <H2 id="droppath">9. Is drop path the reason?</H2>
      <P>
        Stochastic depth <Cite ids={['huang2016']} /> randomly skips blocks during training, so every block has to be
        optional. That should push towards small updates that agree with their neighbours, which is what an ODE needs.
        Residual networks are already known to tolerate dropped and reordered layers{' '}
        <Cite ids={['veit2016', 'greff2017', 'jastrzebski2018']} />. ConvNeXt-T trained without drop path tests the
        idea directly:
      </P>
      <Table
        head={['', 'With drop path 0.1', 'Without', 'Difference']}
        rows={[
          ['Original accuracy', '80.96', '79.27', '−1.69'],
          ['ODE limit (RK4)', '80.23', '76.96', '−3.27'],
          ['Gap to the limit', '−0.73', '−2.31', '3.2× larger'],
          ['Bilinear, R = 128', '73.66', '57.44', '−16.2'],
        ]}
      />
      <P>
        Without drop path, the gap to the continuous limit triples, bilinear interpolation collapses, and the blocks
        stop contracting. It is the only network whose trajectory accelerates inside each block and whose ‖
        <em>h</em>‖/‖<em>x</em>‖ grows with depth, from 0.39 to 0.65. But drop path is not a necessary condition,
        since Swin and both ResNets converge with similar gaps. The Euler-like behaviour seems to be generic to deep
        residual networks, and drop path strengthens it.
      </P>

      <H2 id="next">10. Open questions</H2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
        <li>
          Finish the 27-step delta run, and the shared networks with 27 steps and with every stage shared, and run the
          depth, step and solver ablations on them.
        </li>
        <li>
          Make the deltas sparse or low-rank, so the delta model recovers the parameter savings of sharing.
        </li>
        <li>
          Explain the zig-zag of independent blocks: which coordinates are built and destroyed, whether they carry
          information that a later block reads, and whether the delta model inherits it or stays close to the
          shared flow.
        </li>
        <li>
          Pin down the massive channel. Replace it by its dataset mean instead of zero, which separates bias from
          information. Replace it by its value at a different time, which tests a clock read by stage 4. Zero it only
          at the exit of stage 3. Fit a linear probe of the class on it.
        </li>
        <li>Repeat the zeroing on the unshared ConvNeXt and on Swin, where the channel emerges with depth.</li>
        <li>
          Close the causal question about drop path with intermediate rates and a shared network trained without it.
        </li>
        <li>
          Interpolate in function space, (1 − α) <em>f</em>
          <sub>k</sub>(<em>x</em>) + α <em>f</em>
          <sub>k+1</sub>(<em>x</em>), which needs no weight alignment, or in weight space after aligning consecutive
          blocks <Cite ids={['ainsworth2023']} />.
        </li>
      </ul>
      <P>
        The training framework and the from-scratch ConvNeXt run this builds on are written up in{' '}
        <Link
          href="/work#convnext-leonardo"
          className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600"
        >
          ConvNeXt-V1 from scratch on Leonardo
        </Link>
        . If you work on continuous-depth models or massive activations and want to compare notes, write to{' '}
        <a
          href={`mailto:${SITE.email}`}
          className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600"
        >
          {SITE.email}
        </a>
        .
      </P>

      <H2 id="references">References</H2>
      <Bibliography />
    </main>
  );
}
