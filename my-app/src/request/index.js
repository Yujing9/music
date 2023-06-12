const axios = require("axios");

const url = "https://accounts.spotify.com/api/token";
const data =
  "grant_type=client_credentials&client_id=2420c111fd12499583b601fa4624a3d7&client_secret=70ccacae314e4c8b810aecdb35ec95be";
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
// export const getToken = async () => {
//   const res = await axios
//     .post(url, data, config)
//     .then((response) => {
//       // console.log(response.data);
//       let access_token = response.data.access_token
//       let token_type = response.data.token_type
//       let token = token_type + " " + access_token
//       console.log(token);
//       return token
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
// const token = getToken();

// const service = axios.create({
//   baseURL: "https://api.spotify.com/v1/",
//   timeout: 2000,
//   headers: {'Authorization': token}
// });

export const getToken = async () => {
  const response = await axios.post(url, data, config);
  return response.data.access_token;
};


export const createService = async () => {
  const token = await getToken();
  const service = axios.create({
    baseURL: "https://api.spotify.com/v1/",
    timeout: 2000,
    headers: {
      'Authorization': `Bearer ${token}` // 使用有效的 Bearer 身份验证方式
    }
  });
  return service;
};

