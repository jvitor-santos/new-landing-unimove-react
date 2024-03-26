'use client'

import * as S from './styles'

import { Text } from '@chakra-ui/react'

export function Nav() {
  return (
    <S.Container>
      <S.Logo>
        <Text color="#000">Uni</Text>
        <Text color="#64e9ff">Move</Text>
      </S.Logo>
      <S.Content>
        <a href={'#home'}>
          <Text>Inicio</Text>
        </a>
        <a href={'#about'}>
          <Text>Sobre</Text>
        </a>
        <a href={'#services'}>
          <Text>Serviços</Text>
        </a>
        <a href={'#contact'}>
          <Text>Contato</Text>
        </a>
      </S.Content>
    </S.Container>
  )
}
