import type { ChartSeries } from '@/content/research/delta-neural-ode';

interface RefLine {
  y: number;
  label: string;
}

interface LineChartProps {
  series: ChartSeries[];
  xDomain: [number, number];
  yDomain: [number, number];
  xTicks: number[];
  yTicks: number[];
  xLabel: string;
  yLabel: string;
  xLog?: boolean;
  refLines?: RefLine[];
  refLabelSide?: 'left' | 'right';
  showPoints?: boolean;
  formatX?: (value: number) => string;
  formatY?: (value: number) => string;
  ariaLabel: string;
}

const WIDTH = 640;
const HEIGHT = 340;
const MARGIN = { top: 14, right: 18, bottom: 46, left: 52 };

export default function LineChart({
  series,
  xDomain,
  yDomain,
  xTicks,
  yTicks,
  xLabel,
  yLabel,
  xLog = false,
  refLines = [],
  refLabelSide = 'right',
  showPoints = true,
  formatX = (v) => String(v),
  formatY = (v) => String(v),
  ariaLabel,
}: LineChartProps) {
  const innerW = WIDTH - MARGIN.left - MARGIN.right;
  const innerH = HEIGHT - MARGIN.top - MARGIN.bottom;
  const tx = (v: number) => (xLog ? Math.log10(v) : v);
  const [x0, x1] = [tx(xDomain[0]), tx(xDomain[1])];
  const sx = (v: number) => MARGIN.left + ((tx(v) - x0) / (x1 - x0)) * innerW;
  const sy = (v: number) => {
    const clamped = Math.min(Math.max(v, yDomain[0]), yDomain[1]);
    return MARGIN.top + innerH - ((clamped - yDomain[0]) / (yDomain[1] - yDomain[0])) * innerH;
  };
  const inX = (v: number) => v >= xDomain[0] && v <= xDomain[1];

  return (
    <div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={ariaLabel}
        className="h-auto w-full text-neutral-500 dark:text-neutral-400"
      >
        {yTicks.map((t) => (
          <g key={`y${t}`}>
            <line
              x1={MARGIN.left}
              x2={WIDTH - MARGIN.right}
              y1={sy(t)}
              y2={sy(t)}
              className="stroke-neutral-200 dark:stroke-neutral-800"
            />
            <text x={MARGIN.left - 8} y={sy(t)} dy="0.32em" textAnchor="end" fontSize={11} fill="currentColor">
              {formatY(t)}
            </text>
          </g>
        ))}
        {xTicks.map((t) => (
          <g key={`x${t}`}>
            <line
              x1={sx(t)}
              x2={sx(t)}
              y1={MARGIN.top}
              y2={MARGIN.top + innerH}
              className="stroke-neutral-100 dark:stroke-neutral-900"
            />
            <text x={sx(t)} y={MARGIN.top + innerH + 18} textAnchor="middle" fontSize={11} fill="currentColor">
              {formatX(t)}
            </text>
          </g>
        ))}
        <line
          x1={MARGIN.left}
          x2={WIDTH - MARGIN.right}
          y1={MARGIN.top + innerH}
          y2={MARGIN.top + innerH}
          className="stroke-neutral-400 dark:stroke-neutral-600"
        />
        {refLines.map((ref) => (
          <g key={ref.label}>
            <line
              x1={MARGIN.left}
              x2={WIDTH - MARGIN.right}
              y1={sy(ref.y)}
              y2={sy(ref.y)}
              strokeDasharray="4 4"
              className="stroke-neutral-500"
            />
            <text
              x={refLabelSide === 'right' ? WIDTH - MARGIN.right - 4 : MARGIN.left + 6}
              y={sy(ref.y) - 5}
              textAnchor={refLabelSide === 'right' ? 'end' : 'start'}
              fontSize={11}
              strokeWidth={4}
              paintOrder="stroke"
              strokeLinejoin="round"
              className="fill-neutral-600 stroke-white dark:fill-neutral-300 dark:stroke-neutral-950"
            >
              {ref.label}
            </text>
          </g>
        ))}
        {series.map((s) => {
          const pts = s.points.filter(([x]) => inX(x));
          const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join('');
          return (
            <g key={s.label}>
              <path
                d={d}
                fill="none"
                stroke={s.color}
                strokeWidth={2}
                strokeDasharray={s.dashed ? '6 4' : undefined}
                strokeLinejoin="round"
              />
              {showPoints &&
                pts.map(([x, y]) => <circle key={x} cx={sx(x)} cy={sy(y)} r={2.6} fill={s.color} />)}
            </g>
          );
        })}
        <text
          x={MARGIN.left + innerW / 2}
          y={HEIGHT - 6}
          textAnchor="middle"
          fontSize={12}
          className="fill-neutral-700 dark:fill-neutral-300"
        >
          {xLabel}
        </text>
        <text
          transform={`translate(14 ${MARGIN.top + innerH / 2}) rotate(-90)`}
          textAnchor="middle"
          fontSize={12}
          className="fill-neutral-700 dark:fill-neutral-300"
        >
          {yLabel}
        </text>
      </svg>
      <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
        {series.map((s) => (
          <li key={s.label} className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-0.5 w-4"
              style={{ backgroundColor: s.color }}
            />
            {s.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
