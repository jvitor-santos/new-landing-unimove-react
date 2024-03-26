'use client'

import { Nav } from '~/components/Nav'
import * as S from './styles'
import { Footer } from '~/components/Footer'

export default async function Home() {
  return (
    <S.Container>
      <Nav />
      <S.Content>
        <S.Home />
        <S.About />
        <S.Services />
        <S.Contact />
      </S.Content>
      <Footer />
    </S.Container>
  )
}
