import React from 'react'
import styled from 'styled-components'

interface IState {
  isVisibleMenu: boolean
}

class UserMenu extends React.Component<{}, IState> {
  onToggleVisibleMenu = (e: MouseEvent) => this.setState({ isVisibleMenu: !this.state.isVisibleMenu })

  render() {
    return (
      <div>
        <ShowUserOrUnlogged />
      </div>
    )
  }
}

const ShowUserOrUnlogged: React.FC = (props: any) => (
  <div>{props.isLogged ? <UserImage /> : <Login>cadastre-se / entrar</Login>}</div>
)

const Login = styled.div`
  cursor: pointer;
  margin-left: 20px;
`
const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`

export default UserMenu