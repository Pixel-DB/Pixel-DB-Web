import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.178.111:3000", //Change to ur backend URL
});
