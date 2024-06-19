import axios from 'axios';

const baseURL = 'http://91.208.197.79:8000';

export default class Loader {
  static async registerUser(user) {
    axios
      .post(`${baseURL}/auth/customer/registration/`, user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  static async registerAdvertiser(advertiser) {
    axios
      .post(`${baseURL}/auth/model/registration/`, advertiser)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
