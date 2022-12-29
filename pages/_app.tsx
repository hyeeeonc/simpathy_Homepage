import '../styles/reset.css'
import React, { useEffect, useState, useCallback } from 'react'
import type { AppProps } from 'next/app'
import styled from '@emotion/styled'
import Header from '../src/common/header/Header'

const AppBlock = styled.div`
  width: 100vw;

  display: flex;
`

const AppMainContentBlock = styled.div`
  width: 100vw;
  padding: 0 30px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
`

const AppHeaderSpacerCombination = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

const HeaderSpacer = styled.div`
  min-width: 100%;
  min-height: 100px;
`

export default function App({ Component, pageProps }: AppProps) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true)

  return (
    <AppBlock>
      <AppMainContentBlock>
        <Header />
        <AppHeaderSpacerCombination>
          <HeaderSpacer></HeaderSpacer>
          <Component {...pageProps} />
        </AppHeaderSpacerCombination>
      </AppMainContentBlock>
    </AppBlock>
  )
}
