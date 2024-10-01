import Image from 'next/image'
import {
  HeroContent,
  ImageWrapper,
  HeroWrapper,
  Subtitle,
  Title,
} from '@/app/_components/styles/Hero.styles'
import heroImage from '@/app/_utils/images/hero.webp'

const Hero = ({
  title,
  subtitle,
  children,
}: {
  title?: string
  subtitle?: string
  children?: React.ReactNode
}): React.JSX.Element => {
  return (
    <HeroWrapper>
      <ImageWrapper>
        <Image
          priority
          src={heroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </ImageWrapper>

      <HeroContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children}
      </HeroContent>
    </HeroWrapper>
  )
}

export default Hero
