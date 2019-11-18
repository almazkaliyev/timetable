import axios from 'axios';
import config from '../config';

class ScheduleService {
  // eslint-disable-next-line class-methods-use-this
  async getSchedule() {
    const url = `${config.api_endpoint}/db`;
    return axios
      .get(url)
      .then(response => JSON.stringify(response.data))
      .then(result => {
        return JSON.parse(result);
      });
  }
}

export default new ScheduleService();
