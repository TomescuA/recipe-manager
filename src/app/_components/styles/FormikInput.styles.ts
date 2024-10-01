import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    margin-bottom: 0.75rem;
  }
`

export const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray800};

  @media ${({ theme }) => theme.breakpoints.xs} {
    margin-bottom: 0.4rem;
    font-size: 0.95rem;
  }
`

export const StyledInput = styled.input<{ hasError: boolean }>`
  padding: 0.5rem 1rem;
  border: 2px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.danger : theme.colors.gray200)};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  background-color: ${({ theme }) => theme.colors.white}; /* Explicitly set background */
  color: ${({ theme }) => theme.colors.gray800}; /* Ensure text color is readable */
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`

export const StyledErrorMessage = styled.div`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.875rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 0.8rem;
  }
`
