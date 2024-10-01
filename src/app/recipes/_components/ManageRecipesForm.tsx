'use client'

import React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import Resizer from 'react-image-file-resizer'
import FormikInput from '@/app/_components/FormikInput'
import UploadImage from '@/app/_components/UploadImage'
import FormikSelect from '@/app/_components/FormikSelect'
import Button from '@/app/_components/Button'

export interface FormValues {
  title: string
  image: string
  description: string
  ingredients: string
  dietaryLabels: string[]
}

interface ManageRecipesProps {
  onSubmit: (values: FormValues) => void
  isLoading?: boolean
  initialValues?: FormValues
}

interface DietaryOption {
  value: string
  label: string
}

const dietaryOptions: DietaryOption[] = [
  { value: 'vegan', label: 'Vegan' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'gluten-free', label: 'Gluten-Free' },
  { value: 'dairy-free', label: 'Dairy-Free' },
  { value: 'nut-free', label: 'Nut-Free' },
]

const RecipeForm: React.FC<ManageRecipesProps> = ({
  initialValues,
  onSubmit,
  isLoading = false,
}) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .max(100, 'Title must be 100 characters or less')
      .required('Title is required'),
    image: Yup.string().required('Image is required'),
    instructions: Yup.string()
      .required('Instructions are required')
      .max(500, 'Instructions must be 1000 characters or less'),
    description: Yup.string()
      .max(500, 'Description must be 500 characters or less')
      .required('Description is required'),
    ingredients: Yup.string().required('Ingredients are required'),
    cookingTime: Yup.number().required('Cooking time is required'),
    dietaryLabels: Yup.string().required('Dietary label is required'),
  })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const file = event.currentTarget.files?.[0]
    if (file) {
      try {
        Resizer.imageFileResizer(
          file,
          200,
          200,
          'JPEG',
          70,
          0,
          (uri) => {
            setFieldValue('image', uri as string)
          },
          'base64',
        )
      } catch (err) {
        console.error('Error resizing image:', err)
      }
    }
  }

  const handleSubmit = (values: FormValues): void => {
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={
        initialValues || {
          title: '',
          image: '',
          description: '',
          ingredients: '',
          dietaryLabels: [],
        }
      }
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps: FormikProps<FormValues>) => {
        const { setFieldValue, values } = formikProps
        return (
          <Form>
            <FormikInput
              label="Title"
              name="title"
              type="text"
              placeholder="Enter the recipe title"
            />

            <FormikInput
              label="Instrcutions"
              name="instructions"
              type="text"
              placeholder="Enter the recipe instructions"
            />
            <FormikInput
              label="Cooking Time"
              name="cookingTime"
              type="number"
              placeholder="Enter the recipe cooking time"
            />

            <FormikInput
              label="Description"
              name="description"
              as="textarea"
              placeholder="Enter the recipe description"
            />

            <FormikInput
              label="Ingredients"
              name="ingredients"
              as="textarea"
              placeholder="Enter the ingredients"
            />

            <FormikSelect
              label="Dietary Labels"
              name="dietaryLabels"
              options={dietaryOptions}
              placeholder="Select a dietary label"
            />
            <UploadImage
              label="Image"
              name="image"
              accept="image/*"
              handleImageUpload={handleImageUpload}
            />
            <Button type="submit" color="primary" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RecipeForm
