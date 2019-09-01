import React from 'react'
import styled from 'styled-components'
import { Event } from '../../interfaces/event'
import ListItem from './ListItem'
import Loading from '../loading/Loading'

interface IProps {
  events?: Event[]
}

class List extends React.Component<IProps> {
  renderItems() {
    return this.props.events && this.props.events.map((event, idx) => <ListItem key={`list_item_${idx}`} event={event} />)
  }

  renderNoEvents() {
    return <p>Nenhum evento próximo!</p>
  }

  render() {
    return (
      <div>
        {this.props.events && this.props.events.length > 0 ? <Wrapper>{this.renderItems()}</Wrapper> : this.renderNoEvents()}
        <Loading />
      </div>
    )
  }
}

const Wrapper = styled.div`
  padding: 20px 20px 0px 20px;
  margin: 30px 40px;
  background: white;
  box-shadow: 0px 1px 1px #B1BCC4;
  border-radius: 10px;
  max-width: 1800px;
`

export default List