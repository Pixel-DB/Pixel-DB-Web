import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.178.112:3000", //Change to ur backend URL
});
