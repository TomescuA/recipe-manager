import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin-right: 1rem;
  @media ${({ theme }) => theme.breakpoints.xs} {
    max-wdth: 250px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray800};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  max-height: 200px;
  overflow-y: auto;
  margin-top: 0.25rem;
  box-shadow: ${({ theme }) => theme.shadows.hover};
`

export const SuggestionItem = styled.li`
  padding: 0.75rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`
export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  margin-top: 0.5rem;
  font-size: 0.875rem;
`
export const LoadingMessage = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 14px;
  color: #555;
`
