import React, { useEffect, useRef, useState } from 'react'
import {
  SearchContainer,
  SearchInput,
  SuggestionsList,
  SuggestionItem,
  ErrorMessage,
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
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleSuggestionClick = (title: string) => {
    onSelectItem(title)
    setIsSuggestionsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsSuggestionsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <SearchContainer ref={containerRef}>
      <SearchInput
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          onSearchChange(e)
          setIsSuggestionsOpen(true)
        }}
        value={value}
      />
      {isSuggestionsOpen && data?.length > 0 && value !== '' && (
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
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SearchContainer>
  )
}

export default SearchAutocomplete
