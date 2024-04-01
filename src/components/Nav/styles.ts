'use client'

import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 100%;
  height: 7.2rem;
  position: fixed;
  align-items: center;
  background-color: #fff;
  border-bottom: #e4e4e4 solid;
  justify-content: space-between;
`

export const Content = styled(C.Flex)`
  gap: 1rem;
  display: flex;
  margin-right: 8rem;
`

export const Logo = styled(C.Flex)`
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 12.3rem;

  > p:nth-of-type(1) {
    color: #000;
  }

  > p:nth-of-type(2) {
    color: #64e9ff;
  }

  @media (max-width: 376px) {
    margin-left: 1.5rem;
  }
`

export const TextLogo = styled(C.Text)`
  font-weight: 800;
  font-size: 2.5rem;
  fontfamily: var(--font-poppins), sans-serif;
`

export const NavText = styled(C.Text)`
  color: #0f241d;
  font-weight: 400;
  font-size: 1.6rem;
  font-family: var(--font-dmSans), san-serif;

  @media (max-width: 376px) {
    display: none;
  }
`
export const Button = styled(C.Button)`
  background-color: #fff;
  margin-right: 1.5rem;
`
export const ModalContent = styled(C.ModalContent)`
  font-size: 3rem;
  font-weight: 800;
  align-items: center;
  justify-content: center;
  font-family: var(--font-poppins), sans-serif;
`
export const ModalCloseButton = styled(C.ModalCloseButton)`
  color: #64e9ff;
  background-color: #fff;
`
