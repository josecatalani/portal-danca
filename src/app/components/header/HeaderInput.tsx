import React from 'react'
import styled from 'styled-components'
import SearchIcon from '../icons/search';
import { observer, inject } from 'mobx-react';
import { InjectedStores } from '../../stores/store-definitions'

interface IState {
  value: number | string
}

@inject('appStore')
@observer
class HeaderInput extends React.Component<InjectedStores, IState> {
  onKeyPress = (e: React.KeyboardEvent) => e.key === 'Enter' && this.props.appStore && this.props.appStore.makeSearch()

  render() {
    return (
      <Align>
        <SearchIcon />
        <TextInput
          type="text"
          onChange={this.props.appStore && this.props.appStore.onChangeQuery}
          placeholder={"Procurar"}
          value={this.props.appStore && this.props.appStore.searchQuery}
          onKeyPress={this.onKeyPress}
        />
      </Align>
    )
  }
}

const Align = styled.div`
  background: #F0F5F9;
  border-radius: 30px;
  display: flex;
  padding-left: 15px;
  align-items: center;
`
const TextInput = styled.input`
  height: 40px;
  outline: none;
  background: transparent;
  border: 0;
  font-size: 15px;
  padding: 0px 20px 0px 10px;
  width: 400px;
`

export default HeaderInput