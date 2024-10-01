import React from 'react'
import { useField } from 'formik'
import {
  SelectContainer,
  StyledLabel,
  StyledSelect,
  StyledErrorMessage,
} from '@/app/_components/styles/FormikSelect.styles'

export interface Option {
  label: string
  value: string
}

export interface FormikSelectProps {
  label: string
  name: string
  options: Option[]
  placeholder?: string
}

const FormikSelect: React.FC<FormikSelectProps> = ({ label, name, options, placeholder }) => {
  const [field, meta] = useField(name)

  return (
    <SelectContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledSelect id={name} {...field} hasError={meta.touched && Boolean(meta.error)}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </SelectContainer>
  )
}

export default FormikSelect
