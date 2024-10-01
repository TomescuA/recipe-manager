import styled from 'styled-components'
import Image from 'next/image'

export const CardContainer = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.25rem;
  max-width: 350px;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
  position: relative;
  max-height: 450px;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`

export const RecipeImage = styled(Image)`
  object-fit: cover;
  border-radius: 0.5rem;
`

export const Title = styled.h3`
  font-size: 1rem;
  margin-top: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray800};

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.3rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 1rem;
  }
`

export const Description = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.gray700};
  line-height: 1.5;
  flex-grow: 1;
  font-size: 0.9rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 0.85rem;
    margin-top: 0.4rem;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`
