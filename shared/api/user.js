import instance from './api';

export default class UserService {
  static async getUser() {
    return instance.get('/user/');
  }
}
