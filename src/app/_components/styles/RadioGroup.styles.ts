import styled from 'styled-components'

export const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    align-items: flex-start;
    margin-bottom: 0;
  }
`

export const RadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.xs} {
    justify-content: flex-start;
  }
`

export const RadioLabel = styled.label`
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

export const RadioInput = styled.input`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    width: 0.9rem;
    height: 0.9rem;
  }
`
