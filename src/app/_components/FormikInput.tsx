import React from 'react'
import { useField } from 'formik'
import {
  InputContainer,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
} from '@/app/_components/styles/FormikInput.styles'

interface FormikInputProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  as?: string
}

const FormikInput: React.FC<FormikInputProps> = ({ label, as = 'input', ...props }) => {
  const [field, meta] = useField(props)

  return (
    <InputContainer>
      <StyledLabel htmlFor={props.name}>{label}</StyledLabel>
      <StyledInput {...field} {...props} as={as} hasError={meta.touched && Boolean(meta.error)} />
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </InputContainer>
  )
}

export default FormikInput
