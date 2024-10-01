import React from 'react'
import {
  CheckboxGroupContainer,
  CheckboxInput,
  CheckboxLabel,
  GroupLabel,
  CheckboxWrapper,
} from './styles/CheckboxGroup.styles'

interface CheckboxOption {
  label: string
  value: string
}

interface CheckboxGroupProps {
  options: CheckboxOption[]
  selectedValues: string[]
  onChange: (value: string, checked: boolean) => void
  label?: string
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange,
  label,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    onChange(value, checked)
  }

  return (
    <CheckboxGroupContainer>
      {label && <GroupLabel>{label}</GroupLabel>}
      <CheckboxWrapper>
        {options.map((option) => (
          <CheckboxLabel key={option.value}>
            <CheckboxInput
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={handleChange}
            />
            <span>{option.label}</span>
          </CheckboxLabel>
        ))}
      </CheckboxWrapper>
    </CheckboxGroupContainer>
  )
}

export default CheckboxGroup
