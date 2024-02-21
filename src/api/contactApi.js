import axios from 'axios';
const BASE_URL = 'https://connections-api.herokuapp.com';

export const fetchContactsAll = async () => {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  // console.log(data);
  return data;
};

export const fetchContactsAdd = async body => {
  const { data } = await axios.post(`${BASE_URL}/contacts`, body);
  // console.log(data);
  return data;
};

export const fetchContactsDelId = async id => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
  // console.log(id);
  return data;
};

export const fetchContactsChange = async (id, body) => {
  const { data } = await axios.patch(`${BASE_URL}/contacts/${id}`, body);
  console.log(data);
  return data;
};
