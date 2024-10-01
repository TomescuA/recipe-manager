import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
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
