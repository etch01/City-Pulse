import axios from 'axios';
import Config from 'react-native-config';

export class NetworkLayer {
  private API_HOST: string | undefined;

  constructor() {
    this.API_HOST = Config.BASE_URL; //Base URL
  }

  //Secure Get Request use then callback to get the resolved promise
  get_request = (endpoint:string) => {
    const url = this.API_HOST + endpoint;
    return new Promise(function (resolve, reject) {
      try {
        let source = axios.CancelToken.source();
        setTimeout(() => {
          source.cancel();
          // Timeout Logic
        }, 31000);
        
        axios
          .get(url, {
            headers: {
            //   Authorization: `Bearer ${access_token}`,
            },
            timeout:30000,
            cancelToken: source.token,
          })
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {reject(err)});
      } catch (err) {
        reject(err);
      }
    });
  };
}