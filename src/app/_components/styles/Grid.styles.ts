import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Start with 1 column on mobile */
  gap: 1.5rem;
  justify-items: center; /* Center cards on mobile */

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on small screens */
    justify-items: stretch; /* Stretch cards on larger screens */
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on large screens */
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on extra-large screens */
  }
`
