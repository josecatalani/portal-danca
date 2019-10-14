import React from 'react'
import Header from '../components/header/Header';
import styled from 'styled-components'
import List from '../components/list/List';
import { fakeEvents } from '../utils/fake_data';

export default class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Aligner>
          <List events={fakeEvents} />
        </Aligner>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const Aligner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
