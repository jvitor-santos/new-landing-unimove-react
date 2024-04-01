'use client'

import * as S from './styles'

import { Nav } from '~/components/Nav'
import { Footer } from '~/components/Footer'

export default async function Home() {
  return (
    <S.Container>
      <Nav />
      <S.Content>
        <S.Home id="home" />
        <S.About id="about">
          <S.AboutContainerImage>
            <S.AboutShapeImage />
            <img src="./images/jpg/nois.jpg" />
          </S.AboutContainerImage>
          <S.AboutDescription>
            <h1>Sobre nós</h1>
            <p>
              Um grupo de alunos do curso de Análise e Desenvolvimento de
              Sistemas da Fatec - Professor Antonio Belizandro Barbosa Rezende,
              da cidade de Itapetininga-SP. O propósito é mostrar nosso trabalho
              de graduação, que consiste em um sistema de gerenciamento e
              controle de vans escolares.
            </p>
          </S.AboutDescription>
        </S.About>
        <S.Services id="services" />
        <S.Contact id="contact" />
      </S.Content>
      <Footer />
    </S.Container>
  )
}
