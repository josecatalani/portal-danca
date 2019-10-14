import React from 'react'
import styled, { css, keyframes } from 'styled-components'

class Skeleton extends React.Component {
  render() {
    return (
      <Wrapper>
        <Left>
          <Image />
        </Left>
        <Right>
          <Title />
          <Description />
        </Right>
      </Wrapper>
    )
  }
}


const baseColor = '#ddd'
const shineColor = '#e8e8e8'
const animationDuration = '1.6s'

const shineLines = keyframes`
  0% {
    background-position: -100px
  }

  40%, 100% {
    background-position: 140px
  }
`;

const animation = css`
  animation: ${shineLines} ${animationDuration} infinite linear
`

const baseAnimation = css`
  background-image: linear-gradient(90deg, ${baseColor} 0px, ${shineColor} 40px, ${baseColor} 80px);
  background-size: 600px;
`

const Wrapper = styled.div`
  width: 20%;
`
const Left = styled.div`
  width: 70%;
  margin-left; 10%;
`
const Image = styled.div`
  width: 100%;
  min-height: 240px;

  ${baseAnimation};
  ${animation};
`

const Right = styled.div``
const Title = styled.div``
const Description = styled.div``

export default Skeleton