import type { Config } from 'tailwindcss'

const generateVhHeights = () => {
  const heights: Record<string, string> = {}
  for (let i = 0; i <= 100; i++) {
    heights[`${i}vh`] = `${i}vh`
  }
  return heights
}

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}', './components/**/*.{js,ts,jsx,tsx,html}', './lib/**/*.{js,ts}'],
  theme: {
    extend: {
      height: generateVhHeights(),
      minHeight: generateVhHeights(),
      maxHeight: generateVhHeights(),
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
