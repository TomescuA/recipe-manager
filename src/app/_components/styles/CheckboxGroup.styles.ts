import styled from 'styled-components'

export const CheckboxGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    align-items: flex-start;
  }
`

export const GroupLabel = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 0.75rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.xs} {
    justify-content: flex-start;
  }
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray700};
  margin-right: 1rem;
  margin-bottom: 0.5rem;

  span {
    margin-left: 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 0.9rem;
  }
`

export const CheckboxInput = styled.input`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary};
  margin-left: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    width: 0.9rem;
    height: 0.9rem;
  }
`
