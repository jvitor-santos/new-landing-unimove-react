'use client'

import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 100%;
  height: 4.5rem;
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
  margin-left: 8rem;

  @media (max-width: 375px) {
    margin-left: 1.5rem;
  }
`

export const TextLogo = styled(C.Text)`
  font-weight: 800;
  fontfamily: 'poppins';
`

export const NavText = styled(C.Text)`
  color: #0f241d;
  font-weight: 400;
  font-size: 1rem;
  font-family: dmSans, san-serif;

  @media (max-width: 375px) {
    display: none;
  }
`

export const Modal = styled(C.Flex)`
  display: none;

  @media (max-width: 375px) {
    display: flex;
    margin-right: 1.5rem;
  }
`
export const ModalText = styled(C.Text)`
  color: #0f241d;
  font-weight: 400;
  font-size: 1rem;
  font-family: dmSans, san-serif;
`
