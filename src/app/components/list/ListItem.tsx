import React from 'react'
import styled from 'styled-components'
import { Event } from '../../interfaces/event';
import Local from './Local';
import Share from '../icons/share';
import Favorite from '../icons/favorite';
import Proximity from '../icons/proximity';

interface IProps {
  event: Event
}

class ListItem extends React.Component<IProps> {
  render() {
    return (
      <Container>
        <Left>
          <Cover>
            <Image src={this.props.event.image} />
            <CoverLabel>estreia</CoverLabel>
          </Cover>
          <EventInfo>
            <span><b>Duração:</b> {this.props.event.duration}min</span>
            <span><b>Público:</b> {this.props.event.ageRestriction}</span>
          </EventInfo>
        </Left>
        <Right>
          <Header>
            <Title>{this.props.event.title}</Title>
            <Icons>
              <ProximityIcon />
              <ShareIcon />
              <FavoriteIcon />
            </Icons>
          </Header>
          <TextContent>
            <Description>{this.props.event.description}</Description>
            <Team><p><b>Direção/Elenco</b></p>{this.props.event.team}</Team>
            <Local local={this.props.event.local} />
          </TextContent>
        </Right>
      </Container>
    )
  }
}

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProximityAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`
const ProximitySpan = styled.div`
  margin-left: 10px;
`
const ProximityIcon: React.FC = () => (
  <ProximityAlign>
    <Proximity />
    <ProximitySpan>muito próximo de você</ProximitySpan>
  </ProximityAlign>
)
const FavoriteIcon = styled(Favorite)`
  cursor: pointer;
`
const ShareIcon = styled(Share)`
  cursor: pointer;
  margin-right: 20px;
`
const Header = styled.div`
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
`
const EventInfo = styled.div`
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
`
const Container = styled.div`
  padding: 30px 0px 10px 0px;
  display: flex;
  border-top: 2px solid #ddd;
  &:first-child {
    margin-top: 0;
    border-top: 0;
    padding-top: 0;
  }
`
const Cover = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`
const CoverLabel = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: 40px;
  line-height: 40px;
  background: red;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`
const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 3;
`
const Image = styled.img`
  max-width: 100%;
  min-height: 248px;
`
const Title = styled.h2`
  font-size: 26px;
  justify-self: self-start;
`
const Description = styled.div`
  margin: 15px 0px 20px 0px;
`
const Team = styled.div``
const TextContent = styled.div`
  margin-left: 30px;flex-end
  padding: 10px 0px;
`

export default ListItem