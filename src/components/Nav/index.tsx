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
        <Text>Inicio</Text>
        <Text>Sobre</Text>
        <Text>Serviços</Text>
        <Text>Contato</Text>
      </S.Content>
    </S.Container>
  )
}
