import axios from 'axios';
import config from '../config';

class ScheduleService {
  async getSchedule() {
    const url = `${config.api_endpoint}/db`;
    return await axios.get(url)
        .then(response => JSON.stringify(response.data))
        .then(result => { return JSON.parse(result) });
  }
}

export default new ScheduleService();