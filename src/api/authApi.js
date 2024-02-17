import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const fetchRegister = async body => {
  const { data } = await axios.post('/users/signup', body);
  console.log(data);
  setAuthHeader(data.token);
  return data;
};

export const fetchLogin = async body => {
  const { data } = await axios.post('/users/login', body);
  //   console.log(data);
  setAuthHeader(data.token);
  return data;
};

export const fetchLogOut = async () => {
  const { data } = await axios.post('/users/logout');
  clearAuthHeader();
  return data;
};
