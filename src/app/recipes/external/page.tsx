'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchSuggestions, clear } from '@/app/_store/slices/searchSlice'
import { fetchRecipes } from '@/app/_store/slices/recipesSlice'
import { RootState } from '@/app/_store/rootReducer'
import { addFavorite, removeFavorite } from '@/app/_store/slices/favoriteReducer'
import RecipeCard from '@/app/recipes/_components/RecipeCard'
import debounce from 'lodash/debounce'
import { useCallback } from 'react'
import { useAppDispatch } from '@/app/_store/store'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  FiltersContainer,
  RecipeContainer,
  TopContainer,
  CenteredContainer,
  SearchContainer,
} from '@/app/recipes/external/External.styles'
import Button from '@/app/_components/Button'
import RadioGroup from '@/app/_components/RadioGroup'
import { Grid } from '@/app/_components/styles/Grid.styles'
import SearchAutocomplete from '@/app/_components/SearchAutocomplete'

const dietaryOptions = [
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Vegan', value: 'vegan' },
  { label: 'Gluten Free', value: 'glutenFree' },
  { label: 'Dairy Free', value: 'dairyFree' },
  { label: 'Nut Free', value: 'nutFree' },
  { label: 'Low Sugar', value: 'lowSugar' },
]

const ExternalRecipesList = ({ recipes }: { recipes: any }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const searchParams = useSearchParams()

  const favorites = useSelector((state: RootState) => state.favorite.elements)
  const {
    data,
    isLoading: searchLoading,
    error: searchError,
  } = useSelector((state: RootState) => state.search)
  const {
    recipes: searchRecipes,
    loading: loadingRecipes,
    error: recipesError,
  } = useSelector((state: RootState) => state.recipes)

  const [searchValue, setSearchValue] = useState('')
  const [selectedDiet, setSelectedDiet] = useState('')

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

  const handleSearchSubmit = () => {
    let params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('query', searchValue)

    if (selectedDiet) {
      params.set('diet', selectedDiet)
    }

    router.push(`?${params.toString()}`)

    dispatch(fetchRecipes({ query: params.toString() }))
  }

  const handleDietaryChange = (value: string) => {
    let params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('diet', value)
    router.push(`?${params.toString()}`)
    setSelectedDiet(value)
  }

  const handleSuggestionClick = (title: string) => {
    setSearchValue(title)
    dispatch(clear())
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
  const dataRecipes = loadingRecipes || searchValue ? searchRecipes : recipes

  return (
    <RecipeContainer>
      <TopContainer>
        <Button onClick={() => router.push(`/recipes/external/favorite`)}>
          My Favorite Recipes
        </Button>
      </TopContainer>
      <FiltersContainer>
        <RadioGroup
          options={dietaryOptions}
          selectedValue={selectedDiet}
          onChange={handleDietaryChange}
        />

        <SearchContainer>
          <SearchAutocomplete
            data={data}
            onSearchChange={handleSearchChange}
            onSelectItem={handleSuggestionClick}
            placeholder="Search recipes by title..."
            isLoading={searchLoading}
            value={searchValue}
            error={searchError}
          />

          <Button onClick={handleSearchSubmit}>Search</Button>
        </SearchContainer>
      </FiltersContainer>

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
  )
}

export default ExternalRecipesList
