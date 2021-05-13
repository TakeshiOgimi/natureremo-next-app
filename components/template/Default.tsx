import React, { FC } from 'react';
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

type Props = {
  LeftContent: React.ReactNode
  RightContent: React.ReactNode
}

const DefaultLayout:FC<Props> = ({LeftContent, RightContent}) => {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <div>{LeftContent}</div>
        <div>{RightContent}</div>
      </Container>
    </>
  )
}


const Container = styled.div`
  display: flex;
`

export default DefaultLayout