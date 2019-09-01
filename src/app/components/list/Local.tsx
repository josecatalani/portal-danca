import React from 'react'
import { EventLocal } from '../../interfaces/event-local';

interface IProps {
  local: EventLocal
}

class Local extends React.Component<IProps> {
  render() {
    return (
      <div style={{padding: '20px 0px'}}>
        <p><b>Local:</b></p>
        <p><b>{this.props.local.title}</b></p>
        <p>{this.props.local.address}, {this.props.local.number} - {this.props.local.city}/{this.props.local.state} - {this.props.local.country}</p>
      </div>
    )
  }
}

export default Local