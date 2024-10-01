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

export interface UploadImageProps {
  label: string
  name: string
  accept?: string
  handleImageUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
  ) => void
}

const UploadImage: React.FC<UploadImageProps> = ({
  label,
  name,
  accept = 'image/*',
  handleImageUpload,
}) => {
  const { setFieldValue, values } = useFormikContext<any>()
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
            <img src={values[name]} alt="Preview" />
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
