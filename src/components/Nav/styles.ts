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
  font-size: 1.5rem;
  margin-left: 8rem;
`

export const Text = styled(C.Text)`
  color: #000;
  font-weight: 400;
  font-family: 'poppins';
`
