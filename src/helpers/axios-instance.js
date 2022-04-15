import axios from "axios";

export default axios.create({
  baseURL: "http://35.201.2.209:8000",
  timeout: 1000,
  withCredentials: false,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("meldcx_token")}`,
  // },
});
