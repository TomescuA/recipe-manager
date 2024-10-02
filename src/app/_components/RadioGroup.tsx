import React from 'react'
import {
  RadioGroupContainer,
  RadioInput,
  RadioLabel,
  RadioWrapper,
} from './styles/RadioGroup.styles'

interface RadioOption {
  label: string
  value: string
}

interface RadioGroupProps {
  options: RadioOption[]
  selectedValue: string
  onChange: (value: string) => void
  label?: string
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, selectedValue, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onChange(value)
  }

  return (
    <RadioGroupContainer>
      <RadioWrapper>
        {options.map((option) => (
          <RadioLabel key={option.value}>
            <RadioInput
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
            />
            <span>{option.label}</span>
          </RadioLabel>
        ))}
      </RadioWrapper>
    </RadioGroupContainer>
  )
}

export default RadioGroup
