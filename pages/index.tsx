import styled from '@emotion/styled'

const IndexBlock = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
`

const IndexImg = styled.img`
  width: 100%;
  height: auto;
`

export default function Home() {
  return (
    <IndexBlock>
      <IndexImg src="./assets/images/landing.jpeg" />
    </IndexBlock>
  )
}
