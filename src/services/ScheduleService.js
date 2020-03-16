import axios from 'axios';

const API_ENDPOINT = 'https://my-json-server.typicode.com/GR2EN/timetable';

export const getSchedule = async () => {
  return axios.get(`${API_ENDPOINT}/db`)
    .then(response => JSON.stringify(response.data))
    .then(result => {
      return JSON.parse(result);
    });
};

export default getSchedule;
