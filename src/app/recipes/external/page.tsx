'use client'

import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { fetchSuggestions, clear } from '@/app/_store/slices/searchSlice'
import { fetchRecipes } from '@/app/_store/slices/recipesSlice'
import { RootState } from '@/app/_store/rootReducer'
import { addFavorite, removeFavorite } from '@/app/_store/slices/favoriteReducer'
import RecipeCard from '@/app/recipes/_components/RecipeCard'
import debounce from 'lodash/debounce'
import { useEffect, useCallback } from 'react'
import { useAppDispatch } from '@/app/_store/store'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  FiltersContainer,
  RecipeContainer,
  TopContainer,
  CenteredContainer,
} from '@/app/recipes/external/External.styles'
import Button from '@/app/_components/Button'
import CheckboxGroup from '@/app/_components/CheckboxGroup'
import { Grid } from '@/app/_components/styles/Grid.styles'
import SearchAutocomplete from '@/app/_components/SearchAutocomplete'

const dietaryOptions = [
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Vegan', value: 'vegan' },
  { label: 'Gluten Free', value: 'glutenFree' },
  { label: 'Dairy Free', value: 'dairyFree' },
]

const ExternalRecipesList = ({ recipes }: { recipes: any }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const searchParams = useSearchParams()
  const favorites = useSelector((state: RootState) => state.favorite.elements)
  const { data, isLoading, error: searchError } = useSelector((state: RootState) => state.search)

  const [searchValue, setSearchValue] = React.useState('')
  const [selectedValues, setSelectedValues] = React.useState<string[]>([])

  const {
    recipes: searchRecipes,
    loading: loadingRecipes,
    error: recipesError,
  } = useSelector((state: RootState) => state.recipes)

  const debouncedFetchSuggestions = useCallback(
    debounce((query: string) => {
      dispatch(fetchSuggestions({ query: query, number: '5' }))
    }, 300),
    [dispatch],
  )

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchValue(query)
    const newParams = new URLSearchParams(Array.from(searchParams.entries()))
    query.length === 0 && newParams.delete('query')
    router.push(`?${newParams.toString()}`)
    debouncedFetchSuggestions(query)
  }

  const handleSuggestionClick = (title: string) => {
    const newParams = new URLSearchParams(Array.from(searchParams.entries()))
    newParams.set('query', title)
    setSearchValue(title)
    dispatch(clear())
    router.push(`?${newParams.toString()}`)
  }

  // Handle dietary filter changes
  const handleDietaryChange = (value: string, checked: boolean) => {
    // const { value, checked } = event.target
    // if (checked) {
    //   dispatch(addDietaryFilter(value))
    // } else {
    //   dispatch(removeDietaryFilter(value))
    // }

    // const handleDietaryChange = (value: string, checked: boolean) => {
    setSelectedValues((prev) => (checked ? [...prev, value] : prev.filter((v) => v !== value)))
  }

  const onToggleFavorite = (recipe: any) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === recipe.id)

    if (isAlreadyFavorite) {
      dispatch(removeFavorite(recipe))

      alert(`${recipe.title} has been removed from your favorites!`)
    } else {
      dispatch(addFavorite(recipe))

      alert(`${recipe.title} has been added to your favorites!`)
    }
  }
  const query = searchParams.get('query') || ''
  useEffect(() => {
    query.length > 0 && dispatch(fetchRecipes({ query, number: '50' }))
  }, [dispatch, searchParams])

  const dataRecipes = searchValue ? searchRecipes : recipes

  return (
    <RecipeContainer>
      <TopContainer>
        <Button>
          <Link href="/recipes/external/favorite">Favorite</Link>
        </Button>
      </TopContainer>
      <FiltersContainer>
        <CheckboxGroup
          options={dietaryOptions}
          selectedValues={selectedValues}
          onChange={handleDietaryChange}
          label="Preferences:"
        />
      </FiltersContainer>

      <SearchAutocomplete
        data={data}
        onSearchChange={handleSearchChange}
        onSelectItem={handleSuggestionClick}
        placeholder="Search recipes..."
        isLoading={isLoading}
        value={searchValue}
        error={searchError}
      />
      {loadingRecipes && (
        <CenteredContainer>
          <div>Loading recipes...</div>
        </CenteredContainer>
      )}
      {recipesError && (
        <CenteredContainer>
          <div>{recipesError}</div>
        </CenteredContainer>
      )}

      <Grid>
        {dataRecipes?.map((recipe: any) => {
          const isFavorite = favorites.some((fav) => fav.id === recipe.id)
          return (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isCustom={false}
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          )
        })}
      </Grid>
    </RecipeContainer>
    // <div className="relative">
    //   <div className="mb-4">
    //     <input
    //       type="text"
    //       placeholder="Search recipes by title or ingredient..."
    //       onChange={handleSearchChange}
    //       value={searchValue}
    //       className="border rounded px-4 py-2 w-full"
    //     />

    //     {data?.length > 0 && (
    //       <ul className="border rounded bg-white absolute z-10 w-full max-h-60 overflow-y-auto">
    //         {data.map((suggestion: any) => (
    //           <li
    //             key={suggestion.id}
    //             onClick={() => handleSuggestionClick(suggestion.title)}
    //             className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    //           >
    //             {suggestion.title}
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>

    //   {isLoading && <div>Loading suggestions...</div>}

    //   <div className="mb-4">
    //     <h4 className="font-semibold mb-2">Dietary Preferences:</h4>
    //     {dietaryOptions.map((option) => (
    //       <label key={option} className="mr-4">
    //         <input
    //           type="checkbox"
    //           value={option}
    //           onChange={handleDietaryChange}
    //           //   checked={dietaryFilters.includes(option)}
    //           className="mr-1"
    //         />
    //         <span className="capitalize">{option}</span>
    //       </label>
    //     ))}
    //   </div>

    //   {loadingRecipes && <div>Loading recipes...</div>}
    //   {recipesError && <div className="text-red-500">Error: {recipesError}</div>}
    //   {searchError && <div className="text-red-500">Error: {searchError}</div>}

    //   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //     <Link
    //       href="/recipes/external/favorite"
    //       className="block mb-4 text-blue-500 hover:underline"
    //     >
    //       Favorite
    //     </Link>
    //     {dataRecipes?.map((recipe: any) => {
    //       const isFavorite = favorites.some((fav) => fav.id === recipe.id)
    //       return (
    //         <RecipeCard
    //           key={recipe.id}
    //           recipe={recipe}
    //           isCustom={false}
    //           isFavorite={isFavorite}
    //           onToggleFavorite={onToggleFavorite}
    //         />
    //       )
    //     })}
    //   </div>
    // </div>
  )
}

export default ExternalRecipesList
