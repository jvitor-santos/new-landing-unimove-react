'use client'

import * as S from './styles'

import { Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <S.Content>
      <S.Reserved>
        <S.Logo>
          <Text color="#000">Uni</Text>
          <Text color="#fff">Move</Text>
        </S.Logo>
        <Text>© 2021 UniMove.</Text>
        <Text>Todos os direitos reservados.</Text>
      </S.Reserved>
    </S.Content>
  )
}
