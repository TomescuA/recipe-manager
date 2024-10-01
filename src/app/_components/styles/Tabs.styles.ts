import styled from 'styled-components'

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.xs} {
    flex-direction: row;
    align-items: center;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: row;
  }
`

export const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray700};
  border-bottom: 2px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &.active {
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &:not(:last-child) {
    margin-right: 1rem;
    @media ${({ theme }) => theme.breakpoints.xs} {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }

    @media ${({ theme }) => theme.breakpoints.sm} {
      margin-right: 1rem;
    }
  }
  @media ${({ theme }) => theme.breakpoints.xs} {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`
