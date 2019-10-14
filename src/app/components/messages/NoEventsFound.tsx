import React from 'react'
import styled from 'styled-components'

export default class NoEventsFound extends React.Component {
  render() {
    return (
      <Wrapper>Não temos eventos rolando. :(</Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: 40px;
  font-size: 28px;
`