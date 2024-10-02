export interface FormValues {
  title: string
  image: string
  description: string
  ingredients: string
  dietaryLabels: DietaryLabel[] | string[]
  instructions: string
  cookingTime: number
}

export enum DietaryLabel {
  Vegan = 'vegan',
  Vegetarian = 'vegetarian',
  GlutenFree = 'gluten-free',
  DairyFree = 'dairy-free',
  NutFree = 'nut-free',
}

export type SetFieldValue<FormValues> = (
  field: keyof FormValues,
  value: FormValues[keyof FormValues],
  shouldValidate?: boolean,
) => void

export interface UploadImageProps<FormValues> {
  label: string
  name: keyof FormValues
  accept?: string
  handleImageUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: SetFieldValue<FormValues>,
  ) => void
}

export interface Option {
  label: string
  value: string
}

export enum Diet {
  GlutenFree = 'gluten free',
  DairyFree = 'dairy free',
  LactoOvoVegetarian = 'lacto ovo vegetarian',
  Vegan = 'vegan',
}

export interface Measure {
  amount: number
  unitShort: string
  unitLong: string
}

export interface Measures {
  us: Measure
  metric: Measure
}

export interface Ingredient {
  aisle?: string
  amount?: number
  consistency?: string
  id: number
  image?: string
  measures?: Measures
  meta?: string[]
  name?: string
  nameClean?: string
  original: string
  originalName?: string
  unit?: string
}

export interface Recipe {
  aggregateLikes?: number
  cheap?: boolean
  cookingMinutes?: number | null
  creditsText?: string
  cuisines?: string[]
  dairyFree?: boolean
  diets?: Diet[] | string[]
  glutenFree?: boolean
  healthScore?: number
  id: string
  image: string
  lowFodmap?: boolean
  preparationMinutes?: number | null
  pricePerServing?: number
  readyInMinutes?: number
  servings?: number
  sourceName?: string
  sourceUrl?: string
  spoonacularScore?: number
  spoonacularSourceUrl?: string
  summary?: string
  sustainable?: boolean
  title: string
  vegan?: boolean
  vegetarian?: boolean
  description?: string
  extendedIngredients?: Ingredient[]
  instructions?: string
}
