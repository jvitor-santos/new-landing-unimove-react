'use client'

import * as S from './styles'

import { Text } from '@chakra-ui/react'

export function Nav() {
  return (
    <S.Container>
      <S.Logo>
        <Text color="#000" fontFamily={'poppins'} fontWeight={'800'}>
          Uni
        </Text>
        <Text color="#64e9ff" fontFamily={'poppins'} fontWeight={'800'}>
          Move
        </Text>
      </S.Logo>
      <S.Content>
        <a href={'#home'}>
          <S.Text>Inicio</S.Text>
        </a>
        <a href={'#about'}>
          <S.Text>Sobre</S.Text>
        </a>
        <a href={'#services'}>
          <S.Text>Serviços</S.Text>
        </a>
        <a href={'#contact'}>
          <S.Text>Contato</S.Text>
        </a>
      </S.Content>
    </S.Container>
  )
}
