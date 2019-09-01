import React from 'react'
import styled, { keyframes } from 'styled-components'

class Loading extends React.Component {
  renderDots() {
    return (
      <DotsWrapper>
        <Dot timeMs={540}/>
        <Dot timeMs={580}/>
        <Dot timeMs={620}/>
      </DotsWrapper>
    )
  }

  render() {
    return this.renderDots()
  }
}

const DotsWrapper = styled.div`
  width: 60px;
  height: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin: 40px auto;
`
const translateX = keyframes`
  0 {
    transform: translateY(0);
  }

  25% {
    transform: translateY(10px);
  }

  50% {
    transform: translateY(0px);
  }

  75% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const Dot = styled.div<{timeMs: number}>`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: #DEDEDE;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  animation: ${translateX} ${props => props.timeMs}ms linear infinite;
`

export default Loading