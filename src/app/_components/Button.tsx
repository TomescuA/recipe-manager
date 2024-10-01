import React from 'react'
import { StyledButton, ButtonProps } from '@/app/_components/styles/Button.styles'

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  variant = 'default',
  children,
  onClick,
  type = 'button',
  disabled,
  ...rest
}) => {
  return (
    <StyledButton
      type={type}
      color={color}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

export default Button
