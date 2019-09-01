import React from 'react'
import styled from 'styled-components'
import HeaderInput from './HeaderInput';
import UserMenu from './UserMenu';
import { observer, inject } from 'mobx-react';

@inject('appStore')
@observer
class Header extends React.Component<any> {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <MainHeader>
          jose
          {this.props.appStore.timer}
          <Align>
            <HeaderInput />
            <UserMenu />
          </Align>
        </MainHeader>
        <FilterBox></FilterBox>
      </div>
    )
  }
}

const FilterBox = styled.div`
  height: 100px;
  background: white;
  margin: 0px 40px;
  margin-top: -20px;
  border-radius: 20px;
  position: relative;
  padding: 20px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
`
const MainHeader = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 1;
  background: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
`
const Align = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  max-width: 1800px;
  width: 100%;
`

export default Header