import styled from 'styled-components'

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    margin-bottom: 0.75rem;
  }
`

export const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray800};

  @media ${({ theme }) => theme.breakpoints.xs} {
    margin-bottom: 0.4rem;
    font-size: 0.95rem;
  }
`

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 2px dashed ${({ theme }) => theme.colors.gray200};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
  font-size: 1rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.gray200};
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    padding: 0.4rem;
    font-size: 0.9rem;
  }
`

export const PreviewImageContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  position: relative;
`

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;

  img {
    max-width: 150px;
    max-height: 150px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    img {
      max-width: 100px;
      max-height: 100px;
    }
  }
`

export const RemoveButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray700};
  }
`

export const StyledErrorMessage = styled.div`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.875rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 0.8
`
