import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "f47dd4775b97c0f65fd31bbb6f452376",
    language: "en-US",
  },
});

export default instance;
