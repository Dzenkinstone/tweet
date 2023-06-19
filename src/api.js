import axios from "axios";

axios.defaults.baseURL = "https://6489e8f75fa58521cab07495.mockapi.io/api/";

export const getUsers = async (page) => {
  const responce = await axios.get(`/users/`);
  return responce.data;
};

export const updateUsers = async (id, followers) => {
  const responce = await axios.put(`/users/${id}`, followers);
  return responce.data;
};
