import React from 'react'
import styled from 'styled-components'
import SearchIcon from '../icons/search';

interface IState {
  value: number | string
}

class HeaderInput extends React.Component<{}, IState> {
  state = {
    value: ""
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => this.setState({ value: e.currentTarget.value })

  render() {
    return (
      <Align>
        <SearchIcon />
        <TextInput type="text" value={this.state.value} onChange={this.onChange} placeholder={"Procurar"} />
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