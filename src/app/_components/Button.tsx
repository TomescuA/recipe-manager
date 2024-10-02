import React from 'react'
import {
  StyledButton,
  ButtonProps as StyledButtonProps,
} from '@/app/_components/styles/Button.styles'

export interface ButtonProps extends StyledButtonProps {
  children: React.ReactNode
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

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
