"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styled from "styled-components"

const HeroContainer = styled.section<{ $isScrolled: boolean }>`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  
  ${({ $isScrolled }) =>
    $isScrolled &&
    `
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-20px);
  `}
`

const HeroContent = styled.div`
  position: relative;
  z-index: 20;
  color: white;
  padding-top: 5rem;
  transition: all 0.3s ease-in-out;
`

const HeroTitle = styled.h1<{ $isScrolled: boolean }>`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }

  ${({ $isScrolled }) =>
    $isScrolled &&
    `
    font-size: 1.75rem;
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 3.5rem;
    }
  `}
`

const HeroSubtitle = styled.p<{ $isScrolled: boolean }>`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }

  ${({ $isScrolled }) =>
    $isScrolled &&
    `
    font-size: 0.75rem;
    @media (min-width: 768px) {
      font-size: 0.875rem;
    }
    @media (min-width: 1024px) {
      font-size: 1rem;
    }
  `}
`

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  z-index: 30;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
  }
`

const LeftSliderButton = styled(SliderButton)`
  left: 20px;
`

const RightSliderButton = styled(SliderButton)`
  right: 20px;
`

const images = [
  "https://res.cloudinary.com/dzym2qant/image/upload/v1738481418/crop-architect-opening-blueprint_txyg2p.jpg",
  "https://synques-dyn-cdn.s3.ap-south-1.amazonaws.com/vipinchauhanarchitects.com/images/banner-b4.jpg",
  "https://res.cloudinary.com/dzym2qant/image/upload/v1738605845/pexels-falling4utah-2724749_ev7vze.jpg",
  "https://res.cloudinary.com/dzym2qant/image/upload/v1738605719/pexels-pixabay-276724_w8vlqo.jpg",
  "https://synques-dyn-cdn.s3.ap-south-1.amazonaws.com/vipinchauhanarchitects.com/images/banner-b1.jpg",
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setImageError(false)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    setImageError(false)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <HeroContainer $isScrolled={isScrolled}>
      {!imageError ? (
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt="Civil Engineering Project"
          layout="fill"
          objectFit="cover"
          className="z-0"
          onError={handleImageError}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center z-0">
          <p className="text-gray-600">Image not available</p>
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <HeroContent>
          <HeroTitle $isScrolled={isScrolled}>Innovative Construction Solutions by PlanAndCraft</HeroTitle>
          <HeroSubtitle $isScrolled={isScrolled}>
            Expertise in architecture, 3D mapping, and construction estimation
          </HeroSubtitle>
          <Button size="lg" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </HeroContent>
      </div>
      <LeftSliderButton onClick={handlePrevImage}>
        <ChevronLeft size={24} />
      </LeftSliderButton>
      <RightSliderButton onClick={handleNextImage}>
        <ChevronRight size={24} />
      </RightSliderButton>
    </HeroContainer>
  )
}

