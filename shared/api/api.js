import axios from 'axios';

const baseURL = 'http://91.208.197.79:8000';

export default class Loader {
  static async registerUser(user) {
    return await axios.post(`${baseURL}/auth/customer/registration/`, user);
  }

  static async registerAdvertiser(advertiser) {
    return await axios.post(`${baseURL}/auth/model/registration/`, advertiser);
  }
}
