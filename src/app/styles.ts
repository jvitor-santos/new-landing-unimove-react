'use client'

import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  margin: 0;
  padding: 0;
  width: 100%;
  flex-direction: column;
`

export const Content = styled(C.Flex)`
  width: 100%;
  flex-direction: column;
  background-color: #fff;
`

export const Home = styled(C.Flex)`
  width: 100%;
  height: 69.9rem;
  background-color: #f9f9f9;

  @media (max-width: 376px) {
    height: 64.5rem;
  }
`

export const About = styled(C.Flex)`
  width: 100%;
  height: 76.6rem;
  align-items: center;
  padding-right: 12.1rem;
  justify-content: space-between;

  @media (max-width: 376px) {
    display: block;
    height: 113.1rem;
    justify-content: center;
  }
`

export const AboutContainerImage = styled(C.Flex)`
  width: 57.1rem;
  height: 44.6rem;
  flex-direction: column;

  > img {
    width: 57.1rem;
    height: 41.2rem;
  }

  @media (max-width: 376px) {
    height: 28rem;
    width: 37.5rem;
    margin-top: 8rem;

    > img {
      width: 29rem;
      height: 25.8rem;
    }
  }
`

export const AboutShapeImage = styled(C.Flex)`
  width: 37.9rem;
  height: 44.6rem;
  background-color: #64e9ff;
  justify-content: flex-start;

  @media (max-width: 376px) {
    width: 28.1rem;
    height: 25.4rem;
  }
`

export const AboutDescription = styled(C.Flex)`
  gap: 1.2rem;
  width: 61rem;
  cursor: pointer;
  height: 37.8rem;
  display: inline-block;
  justify-content: center;

  > h1 {
    color: #000;
    font-weight: 800;
    font-size: 3.6rem;
    font-family: var(--font-poppins), san-serif;
  }

  > p {
    color: #767676;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-family: var(--font-dmSans), san-serif;
  }

  @media (max-width: 376px) {
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 3.2rem;
    margin-left: 2.4rem;
    flex-direction: column;
    justify-content: center;

    > h1 {
      font-size: 2.4rem;
    }

    > p {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`

export const Services = styled(C.Flex)`
  width: 100%;
  height: 87.1rem;
  background-color: #f9f9f9;

  @media (max-width: 376px) {
    height: 155.3rem;
  }
`

export const Contact = styled(C.Flex)`
  width: 100%;
  height: 58.3rem;

  @media (max-width: 376px) {
    height: 63.2rem;
  }
`

export const ContentButton = styled(C.Flex)``
