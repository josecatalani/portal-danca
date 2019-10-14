import { observable } from 'mobx'
import { User } from '../interfaces/user';

class UserStore {
  @observable
  user?: User;
}

export default new UserStore();