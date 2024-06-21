import instance from './api';

export default class AuthService {
  static async register(user, pathSegment) {
    return instance.post(`/auth/${pathSegment}/registration/`, user);
  }

  static async login(user) {
    return instance.post(`/auth/token/`, user);
  }
}
