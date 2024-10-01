import styled from 'styled-components'

export const OuterContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray200};

  @media ${({ theme }) => theme.breakpoints.xs} {
    padding: 1.5rem 1.5rem;
  }
`

export const InnerContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.hover};
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray300};

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 2.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 3rem;
  }
`

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.gray800};
  letter-spacing: 0.02em;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 2.5rem;
  }
`
