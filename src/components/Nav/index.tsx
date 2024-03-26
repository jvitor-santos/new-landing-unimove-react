'use client'

import * as S from './styles'

import { Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export function Nav() {
  return (
    <S.Container>
      <S.Logo>
        <Text color="#000">Uni</Text>
        <Text color="#64e9ff">Move</Text>
      </S.Logo>
      <S.Content>
        <NextLink href={'#home'}>
          <Text>Inicio</Text>
        </NextLink>
        <NextLink href={'#about'}>
          <Text>Sobre</Text>
        </NextLink>
        <NextLink href={'#services'}>
          <Text>Serviços</Text>
        </NextLink>
        <NextLink href={'#contact'}>
          <Text>Contato</Text>
        </NextLink>
      </S.Content>
    </S.Container>
  )
}
