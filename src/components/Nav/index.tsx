'use client'

import * as S from './styles'

import * as C from '@chakra-ui/react'

export function Nav() {
  return (
    <S.Container>
      <S.Logo>
        <S.TextLogo color={'#000'}>Uni</S.TextLogo>
        <S.TextLogo color={'#64e9ff'}>Move</S.TextLogo>
      </S.Logo>
      <S.Content>
        {/* <a href={'#home'}> */}
        <S.NavText>Inicio</S.NavText>
        {/* </a> */}
        <a href={'#about'}>
          <S.NavText>Sobre</S.NavText>
        </a>
        <a href={'#services'}>
          <S.NavText>Serviços</S.NavText>
        </a>
        <a href={'#contact'}>
          <S.NavText>Contato</S.NavText>
        </a>
      </S.Content>
      <S.Modal>
        <C.Image src={'/images/svg/menu.svg'} alt="menu" />
      </S.Modal>
    </S.Container>
  )
}
