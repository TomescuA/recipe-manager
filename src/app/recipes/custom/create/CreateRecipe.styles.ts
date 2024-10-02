import styled from 'styled-components'

export const OuterContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray200};

  @media ${({ theme }) => theme.breakpoints.xs} {
    padding: 0;
  }
`

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 4rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    padding: 1rem;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;

  @media ${({ theme }) => theme.breakpoints.xs} {
    padding: 2rem 0;
  }
`
