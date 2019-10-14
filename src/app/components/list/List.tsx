import React from 'react'
import styled from 'styled-components'
import { Event } from '../../interfaces/event'
import ListItem from './ListItem'
import NoEventsFound from '../messages/NoEventsFound';
import { observer, inject } from 'mobx-react';
import { InjectedStores } from '../../stores/store-definitions';
import Skeleton from '../skeleton/skeleton'

interface IProps extends InjectedStores {
  events?: Event[]
}

@inject('appStore')
@observer
class List extends React.Component<IProps> {
  renderItems() {
    return this.props.events && this.props.events.map((event, idx) => <ListItem key={`list_item_${idx}`} event={event} />)
  }

  renderSkeletons() {
    return <div style={{ width: '100%' }}><Skeleton /></div>
  }

  renderNoEvents() {
    return this.props.appStore && !this.props.appStore.isLoadingMoreEvents && <NoEventsFound />
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        {this.props.events && this.props.events.length > 0 ? <Wrapper>{this.props.appStore && this.props.appStore.isSearching ? this.renderSkeletons() : this.renderItems()}</Wrapper> : this.renderNoEvents()}
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