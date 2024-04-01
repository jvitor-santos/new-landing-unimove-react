'use client'

import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Content = styled(C.Flex)`
  height: 23.7rem;
  align-items: center;
  background-color: #64e9ff;
  justify-content: space-between;

  @media (max-width: 376px) {
    height: 29.4rem;
  }
`

export const Logo = styled(C.Flex)`
  > p:nth-of-type(1) {
    color: #000;
  }

  > p:nth-of-type(2) {
    color: #fff;
  }
`
export const TextLogo = styled(C.Text)`
  font-size: 3rem;
  font-weight: 800;
  fontfamily: var(--font-poppins), san-serif;
`

export const Text = styled(C.Text)`
  color: #f9f9f9;
  font-weight: 500;
  font-size: 1.6rem;
  font-family: var(--font-dmSans), san-serif;
`

export const Reserved = styled(C.Flex)`
  gap: 1.5rem;
  cursor: pointer;
  margin-left: 12.3rem;
  flex-direction: column;

  @media (max-width: 376px) {
    margin-left: 1.5rem;
  }
`
