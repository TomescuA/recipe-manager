import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      danger: string
      gray800: string
      gray700: string
      white: string
      gray200: string
      gray300: string
      gray100: string
    }
    fonts: {
      sans: string
      mono: string
    }
    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    shadows: {
      hover: string
    }
    borderRadius: {
      small: string
      medium: string
      large: string
    }
  }
}
