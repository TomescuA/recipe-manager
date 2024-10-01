import styled from 'styled-components'

export const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 50vh;
  @media ${({ theme }) => theme.breakpoints.xs} {
    height: 35vh;
  }
`

export const ImageWrapper = styled.div`
  z-index: -1;
`

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
    margin-top: 0.5rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2.5rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 1rem;
    margin-bottom: 0.9rem;
  }
`
