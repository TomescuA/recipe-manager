import styled from 'styled-components'
import Link from 'next/link'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 2rem;
`

export const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 1.5rem;
`

export const BackLink = styled(Link)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

export const RecipeContent = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    margin-left: 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.xs} {
    padding: 0.7rem;
  }
`

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 1.2rem;
  }
`

export const IngredientsList = styled.ul`
  list-style: disc inside;
  margin-bottom: 1rem;
  margin-left: 1rem;
`

export const Instructions = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray700};
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: justify;
`

export const DietaryLabelsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors?.secondary};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`
