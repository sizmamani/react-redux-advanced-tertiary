import axios from 'axios';



class request {
  
  constructor() {
    this.service = axios.create({});
  }
  

  get(url, callback, error) {  
    return this.service.request({
      method: 'GET',
      url,
      responseType: 'json',
    }).then((response) => callback(response.data))
    .catch(error);
  }

  
}

export default new request();
