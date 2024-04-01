'use client'

import * as S from './styles'

import * as C from '@chakra-ui/react'

export function Nav() {
  const { isOpen, onOpen, onClose } = C.useDisclosure()

  return (
    <S.Container>
      <S.Logo>
        <S.TextLogo>Uni</S.TextLogo>
        <S.TextLogo>Move</S.TextLogo>
      </S.Logo>
      <S.Content>
        <a href={'#home'}>
          <S.NavText>Inicio</S.NavText>
        </a>
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
      <S.NavModal>
        <S.Button onClick={onOpen}>
          <C.Image src={'/images/svg/menu.svg'} alt="menu" />
        </S.Button>
        <C.Modal isOpen={isOpen} onClose={onClose} size={'full'}>
          <C.ModalOverlay />
          <S.ModalContent>
            <S.ModalCloseButton size={'lg'} />
            <a href={'#home'} onClick={onClose}>
              Inicio
            </a>
            <br />
            <a href={'#about'} onClick={onClose}>
              Sobre
            </a>
            <br />
            <a href={'#services'} onClick={onClose}>
              Serviços
            </a>
            <br />
            <a href={'#contact'} onClick={onClose}>
              Contato
            </a>
          </S.ModalContent>
        </C.Modal>
      </S.NavModal>
    </S.Container>
  )
}
