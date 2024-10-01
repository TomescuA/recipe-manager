import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#4299E1',
    secondary: '#48BB78',
    danger: '#F56565',
    gray200: '#e2e8f0',
    gray300: '#d1d5db',
    gray100: '#f7fafc',
    gray800: '#2d3748',
    gray700: '#4a5568',
    white: '#ffffff',
  },
  fonts: {
    sans: "'GeistVF', sans-serif",
    mono: "'GeistMonoVF', monospace",
  },

  breakpoints: {
    xs: 'only screen and (max-width: 480px)', // Extra Small
    sm: 'only screen and (min-width: 481px) and (max-width: 768px)', // Small
    md: 'only screen and (min-width: 769px) and (max-width: 1024px)', // Medium
    lg: 'only screen and (min-width: 1025px)', // Large
    xl: 'only screen and (min-width: 1281px)', // Extra Large
  },

  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
  },

  shadows: {
    hover: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
}
