import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        'afacad-flux': ['"Afacad Flux"', 'sans-serif'],
      },
      colors: {
        main: {
          950: "rgb(var(--color-primary-950))",
          900: "rgb(var(--color-primary-900))",
          800: "rgb(var(--color-primary-800))",
          700: "rgb(var(--color-primary-700))",
          600: "rgb(var(--color-primary-600))",
          500: "rgb(var(--color-primary-500))",
          400: "rgb(var(--color-primary-400))",
          300: "rgb(var(--color-primary-300))",
          200: "rgb(var(--color-primary-200))",
          100: "rgb(var(--color-primary-100))",
          50: "rgb(var(--color-primary-50))",
          0: "rgb(var(--color-primary-0))",
        },
        secondary: {
          950: "rgb(var(--color-secondary-950))",
          900: "rgb(var(--color-secondary-900))",
          800: "rgb(var(--color-secondary-800))",
          700: "rgb(var(--color-secondary-700))",
          600: "rgb(var(--color-secondary-600))",
          500: "rgb(var(--color-secondary-500))",
          400: "rgb(var(--color-secondary-400))",
          300: "rgb(var(--color-secondary-300))",
          200: "rgb(var(--color-secondary-200))",
          100: "rgb(var(--color-secondary-100))",
          50: "rgb(var(--color-secondary-50))",
          0: "rgb(var(--color-secondary-0))",
        },
        success: "rgb(var(--color-success))",
        warning: "rgb(var(--color-warning))",
        error: "rgb(var(--color-error))",
      },
    },
  },
}
