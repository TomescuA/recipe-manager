import styled, { css, DefaultTheme } from 'styled-components'

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger'
  variant?: 'default' | 'outline'
}

const getColor = (color: ButtonProps['color'], theme: DefaultTheme) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary
    case 'secondary':
      return theme.colors.secondary
    case 'danger':
      return theme.colors.danger
    default:
      return theme.colors.primary
  }
}

const getVariantStyles = (
  variant: ButtonProps['variant'],
  color: ButtonProps['color'],
  theme: DefaultTheme,
) => {
  if (variant === 'outline') {
    return css`
      background-color: transparent;
      color: ${getColor(color, theme)};
      border: 2px solid ${getColor(color, theme)};

      &:hover {
        background-color: ${getColor(color, theme)};
        color: ${theme.colors.white};
      }
    `
  }

  return css`
    background-color: ${getColor(color, theme)};
    color: ${theme.colors.white};
    border: none;
    border: 1px solid ${getColor(color, theme)};
    &:hover {
      background-color: ${theme.colors.white};
      color: ${getColor(color, theme)};
      border: 1px solid ${getColor(color, theme)};
    }
  `
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  font-family: ${({ theme }) => theme.fonts.sans};

  ${(props) => getVariantStyles(props.variant || 'default', props.color || 'primary', props.theme)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
