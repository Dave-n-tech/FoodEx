import axios from "axios";

export default axios.create({
  baseURL: 'https://foodex-beta.vercel.app/api'
});