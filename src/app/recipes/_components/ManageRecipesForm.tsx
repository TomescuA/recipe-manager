'use client'

import React from 'react'
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik'
import * as Yup from 'yup'
import Resizer from 'react-image-file-resizer'

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
    description: Yup.string()
      .max(500, 'Description must be 500 characters or less')
      .required('Description is required'),
    ingredients: Yup.string().required('Ingredients are required'),
    dietaryLabels: Yup.array()
      .min(1, 'Select at least one dietary label')
      .required('At least one dietary label is required'),
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
            <div>
              <label htmlFor="title">Title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" component="div" />
            </div>

            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => handleImageUpload(event, setFieldValue)}
              />

              {values.image && <img src={values.image} alt="Preview" width="200" />}
              <ErrorMessage name="image" component="div" />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <Field name="description" as="textarea" />
              <ErrorMessage name="description" component="div" />
            </div>

            <div>
              <label htmlFor="ingredients">Ingredients</label>
              <Field name="ingredients" as="textarea" />
              <ErrorMessage name="ingredients" component="div" />
            </div>

            <div>
              <label htmlFor="dietaryLabels">Dietary Labels</label>
              <Field name="dietaryLabels" as="select" multiple={true} size={dietaryOptions.length}>
                {dietaryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="dietaryLabels" component="div" />
            </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RecipeForm
