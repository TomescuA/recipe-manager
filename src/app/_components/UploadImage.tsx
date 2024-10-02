import React, { useRef } from 'react'
import { useFormikContext, ErrorMessage } from 'formik'
import {
  UploadContainer,
  StyledLabel,
  StyledInput,
  PreviewImageContainer,
  StyledErrorMessage,
  RemoveButton,
  ImageWrapper,
} from '@/app/_components/styles/UploadImage.styles'
import { UploadImageProps, FormValues } from '@/app/_utils/types'
import Image from 'next/image'

const UploadImage = ({
  label,
  name,
  accept = 'image/*',
  handleImageUpload,
}: UploadImageProps<FormValues>) => {
  const { setFieldValue, values } = useFormikContext<FormValues>()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleRemoveImage = () => {
    setFieldValue(name, null)
    setFieldValue('name', '')

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <UploadContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        type="file"
        accept={accept}
        onChange={(event) => handleImageUpload(event, setFieldValue)}
        ref={fileInputRef}
      />
      {values[name] && typeof values[name] === 'string' && (
        <PreviewImageContainer>
          <ImageWrapper>
            <Image width={200} height={200} src={values[name]} alt="Preview" />
            <RemoveButton type="button" onClick={handleRemoveImage}>
              &times;
            </RemoveButton>
          </ImageWrapper>
        </PreviewImageContainer>
      )}
      <ErrorMessage name={name} component={StyledErrorMessage} />
    </UploadContainer>
  )
}

export default UploadImage
