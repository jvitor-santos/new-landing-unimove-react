'use client'

import { Nav } from '~/components/Nav'
import * as S from './styles'
import { Footer } from '~/components/Footer'

export default async function Home() {
  return (
    <S.Container>
      <Nav />
      <S.Content>
        <S.Home id="home" />
        <S.About id="about" />
        <S.Services id="services" />
        <S.Contact id="contact" />
      </S.Content>
      <Footer />
    </S.Container>
  )
}
