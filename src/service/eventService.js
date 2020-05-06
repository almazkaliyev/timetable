import axios from 'axios';

const get = async () => {
  return axios
    .get('https://my-json-server.typicode.com/GR2EN/timetable/db')
    .then(response => JSON.parse(response.data))
    .catch(error => throw error);
};

export default get;
