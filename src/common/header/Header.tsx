import Link from 'next/link'
import styled from '@emotion/styled'
import palette from '../../../styles/palette'

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100px;
  padding: 0px 30px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;
`

// const HamberberButton = styled.div`
//   width: 30px;
//   height: 30px;

//   background: black;
// `

const HeaderLogoContainer = styled.div`
  height: 60px;

  transition: 0.3s ease;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`

const HeaderLogoImg = styled.img`
  width: auto;
  height: 100%;
`

const HeaderButtonContainer = styled.nav`
  display: flex;
  gap: 10px;
`

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 86px;
  height: 42px;
  box-sizing: border-box;

  text-decoration: none;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;

  background: rgba(238, 238, 238, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 5px;

  color: black;

  cursor: pointer;

  transition: 0.3s ease;

  :hover {
    opacity: 0.5;
  }
`

const HeaderLoginButton = styled.div`
  font-size: 16px;
`

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderLogoContainer>
        <Link href="/">
          <HeaderLogoImg src="./assets/images/logo.png" />
        </Link>
      </HeaderLogoContainer>
      <HeaderButtonContainer>
        <HeaderButtons>Login</HeaderButtons>
        <HeaderButtons>Mypage</HeaderButtons>
      </HeaderButtonContainer>
    </HeaderBlock>
  )
}

export default Header
