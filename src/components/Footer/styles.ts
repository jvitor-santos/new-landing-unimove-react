'use client'

import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Content = styled(C.Flex)`
  height: 14.8125rem;
  align-items: center;
  background-color: #64e9ff;
  justify-content: space-between;

  @media (max-width: 375px) {
    height: 18.375rem;
  }
`

export const Logo = styled(C.Flex)`
  font-weight: 800;
  font-size: 1.5rem;
`

export const Reserved = styled(C.Flex)`
  gap: 1.5rem;
  margin-left: 8rem;
  flex-direction: column;

  color: #fff;
  font-weight: 500;

  @media (max-width: 375px) {
    margin-left: 1.5rem;
  }
`
