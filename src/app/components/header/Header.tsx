import React from 'react'
import styled, { css } from 'styled-components'
import HeaderInput from './HeaderInput';
import UserMenu from './UserMenu';
import { inject, observer } from 'mobx-react';
import Checkbox from '../atoms/Checkbox';

@inject('appStore')
@observer
class Header extends React.Component<any> {
  render() {
    return (
      <div>
        <MainHeader>
          <Align>
            <HeaderInput />
            <UserMenu />
          </Align>
        </MainHeader>
        <FilterBox isOpened={this.props.appStore.hasEventsToShow}>
          <FilterAligner>
            <CheckboxItem>
              <Checkbox
                label={'Próximo de mim?'}
                checked={this.props.appStore.getFilteringKey('nearbyMe')}
                onChange={event => this.props.appStore.setFilteringKey('nearbyMe', event.target.checked)}
              />
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox
                label={'Lista Amiga?'}
                checked={this.props.appStore.getFilteringKey('friendList')}
                onChange={(event: any) => this.props.appStore.setFilteringKey('friendList', event.target.checked)}
              />
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox
                label={'Filtrar por Data?'}
                checked={this.props.appStore.getFilteringKey('filterByDate')}
                onChange={(event: any) => this.props.appStore.setFilteringKey('filterByDate', event.target.checked)}
              />
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox
                label={'Para todas as idades?'}
                checked={this.props.appStore.getFilteringKey('underAgePermitted')}
                onChange={(event: any) => this.props.appStore.setFilteringKey('underAgePermitted', event.target.checked)}
              />
            </CheckboxItem>
          </FilterAligner>
          <div>jaja</div>
        </FilterBox>
      </div>
    )
  }
}

const CheckboxItem = styled.div`
  margin: 0px 15px;
`

const FilterAligner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  > label {
    margin: 0px 10px;
  }
`
const FilterBox = styled.div<{ isOpened: boolean }>`
  height: 100px;
  background: white;
  margin: 0px 40px;
  margin-top: -170px;
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;
  padding: 40px 20px 20px 20px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  transition: all 100ms ease-out;
  ${props => props.isOpened && css`
    margin-top: -20px;
  `}
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
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