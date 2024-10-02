import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 3rem 2rem;
  }
`

export const RecipesContent = styled.div`
  width: 100%;
  margin-top: 30px;
`
