import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#aec3f2",
          "secondary": "#f7eb40",
          "accent": "#f77f67",
          "neutral": "#271f2e",
          "base-100": "#34313a",
          "info": "#79b7f1",
          "success": "#22a072",
          "warning": "#f6d00e",
          "error": "#fa2948",
        },
      },
    ]
  }
}
export default config
