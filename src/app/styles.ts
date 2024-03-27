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
  height: 43.6875rem;
  background-color: #f9f9f9;

  @media (max-width: 375px) {
    height: 40.3125rem;
  }
`

export const About = styled(C.Flex)`
  width: 100%;
  height: 43.6875rem;

  @media (max-width: 375px) {
    height: 70.6875rem;
  }
`
export const Services = styled(C.Flex)`
  width: 100%;
  height: 43.6875rem;
  background-color: #f9f9f9;

  @media (max-width: 375px) {
    height: 97.0625rem;
  }
`

export const Contact = styled(C.Flex)`
  width: 100%;
  height: 36.4375rem;

  @media (max-width: 375px) {
    height: 39.5rem;
  }
`

export const ContentButton = styled(C.Flex)``
