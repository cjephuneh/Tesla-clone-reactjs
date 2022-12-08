import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
  const[ burgerStatus, setBurgerStatus ] = useState(false)
  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
          <a href="#">Model S </a>
          <a href="#">Model 3 </a>
          <a href="#">Model X </a>
          <a href="#">Model Y </a>
      </Menu>

      <RightMenu>
          <a href='#'>SHOP</a>
          <a href='#'>TESLA ACCOUNT</a>
          <CustomMenu onClick={() => setBurgerStatus(true)}>
            <MenuIcon />
          </CustomMenu>

      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cyber</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Power</a></li>
        <li><a href='#'>Commercial Energy</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Find Us</a></li>
        <li><a href='#'>Support</a></li>
        <li><a href='#'>Investor Relations</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header



const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a{
    font-weight: 600;
    text_transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    text-decoration: none;
  }
  @media(max-width: 768px) {
    display: none;
  }

`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
a{
  font-weight: 600;
  text_transform: uppercase;
  margin-right: 10px;
  text-decoration: none;
}
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top:0;
  Bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  a{
    font-weight: 600;
    text_transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    text-decoration: none;
  }
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2)
  }

  transform: ${props.show ? 'translateX(0)' : 'translateX(100%)' }
  transfrom: transform 0.2s;


`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`