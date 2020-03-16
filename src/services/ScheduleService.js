import axios from 'axios';

const API_ENDPOINT = 'https://my-json-server.typicode.com/GR2EN/timetable';

export const getSchedule = async () => {
  const url = `${API_ENDPOINT}/db`;
  return axios
    .get(url)
    .then(response => JSON.stringify(response.data))
    .then(result => {
      return JSON.parse(result);
    });
};

export default getSchedule;
