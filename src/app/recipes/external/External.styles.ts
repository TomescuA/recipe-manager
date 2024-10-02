import styled from 'styled-components'

export const RecipeContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1.5rem;
  }
`

export const DietaryPreferences = styled.div`
  margin-bottom: 1rem;

  h4 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;

    @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 1.25rem;
    }

    @media ${({ theme }) => theme.breakpoints.lg} {
      font-size: 1.5rem;
    }
  }

  label {
    margin-right: 1rem;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;

    input {
      margin-right: 0.5rem;
    }

    span {
      text-transform: capitalize;
    }

    @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 1.125rem;
    }

    @media ${({ theme }) => theme.breakpoints.lg} {
      font-size: 1.25rem;
    }
  }
`

export const FavoriteLink = styled.a`
  display: block;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.125rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.25rem;
  }
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
`

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.xs} {
    flex-direction: column;
    margin-top: 1rem;
    justify-content: center;
    width: 100%;
  }
`
export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.danger};
`
export const SearchContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`
