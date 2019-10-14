import React from 'react'
import styled, { css } from 'styled-components'

export interface ICheckboxProps {
  checked: boolean
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

export default class extends React.Component<ICheckboxProps> {
  handleClick = (e: React.ChangeEvent<HTMLInputElement>) => this.props.onChange(e)

  render() {
    return (
      <Wrapper>
        <Item
          checked={this.props.checked}
        >
          <Selected />
          <Input
            type='checkbox'
            checked={this.props.checked}
            onChange={e => this.handleClick(e)}
          />
        </Item>
        {this.props.label && <Label>{this.props.label}</Label>}
      </Wrapper>
    )
  }
}


const Input = styled.input`
  opacity: 0;
  cursor: pointer;
`
const Wrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
`
const Selected = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 2px;
  left: 2px;
  opacity: 0;
  transition: opacity 300ms;
  background: #519D9E;
`
const Label = styled.span`
  margin-left: 10px;
`
const Item = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  border: 2px solid #dadada;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  transition: all 300ms;
  position: relative;

  &:hover {
    border: 2px solid #519D9E;
  }

  ${props => props.checked && css`
    border: 2px solid #519D9E;
    
    ${Selected} {
      opacity: 1;
    }
  `}
`