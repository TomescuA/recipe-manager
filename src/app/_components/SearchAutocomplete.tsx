import React, { useState } from 'react'
import {
  SearchContainer,
  SearchInput,
  SuggestionsList,
  SuggestionItem,
} from '@/app/_components/styles/SearchAutocomplete.styles'

interface SearchAutocompleteProps {
  data: Array<{ id: string; title: string }>
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSelectItem: (title: string) => void
  placeholder?: string
  value: string
  isLoading?: boolean
  error: string | null
}

const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({
  data,
  onSearchChange,
  onSelectItem,
  placeholder = 'Search...',
  value,
  isLoading,
  error,
}) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSuggestionClick = (title: string) => {
    setSearchValue(title)
    onSelectItem(title)
  }

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearchChange(e)}
        value={value}
      />
      {data?.length > 0 && (
        <SuggestionsList>
          {isLoading && <div>Loading suggestions...</div>}
          {data.map((suggestion) => (
            <SuggestionItem
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion.title)}
            >
              {suggestion.title}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
      <div>{error}</div>
    </SearchContainer>
  )
}

export default SearchAutocomplete
