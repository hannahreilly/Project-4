// import axios from 'axios';

// const api = axios.create({
//   baseURL: "http://localhost:3000"
// })

// // AUTH

// // LOGIN
// export const loginUser = async (loginData) => {
//   const resp = await api.post('/auth/login', loginData);
//   console.log(resp);
//   api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
//   localStorage.setItem('authToken', resp.data.auth_token);
//   localStorage.setItem('name', resp.data.user.name);
//   localStorage.setItem('email', resp.data.user.email);
//   return resp.data.user;
// }

// // REGISTER
// export const registerUser = async (registerData) => {
//   try {
//     const resp = await api.post('/signup', registerData);
//     api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
//     localStorage.setItem('authToken', resp.data.auth_token);
//     localStorage.setItem('name', resp.data.user.name);
//     localStorage.setItem('email', resp.data.user.email);
//     return resp.data.user;
//   } catch(e) {
//     console.log(e.response);
//     if (e.response.status === 422) {
//       return {errorMessage: "Email is already associated with a user, please login to continue"}
//     }
//   }
// }

// // VERIFY USER
// export const verifyUser = () => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     api.defaults.headers.common.authorization = `Bearer ${token}`;
//   }
// }

import Axios from 'axios';

const api = Axios.create({
  baseURL: "http://localhost:3000"
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/auth/register', registerData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return false;
}

export const allUsers = async () => {
  try {
    const resp = await api.get('/auth');
    return resp;
  } catch (e) {
    console.log(e);
  }
}

export const oneUser = async () => {
  const resp = await api.get('/auth/:id');
  return resp;
}

export const createGoal = async (goalData) => {
  const resp = await api.post('/goals', goalData)
  return resp.data.goal;
}

export const editGoal = async (goalData, id) => {
  const resp = await api.put(`/goals/:${id}`, goalData)
  return resp.data.goal;
}
