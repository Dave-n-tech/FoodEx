import axios from "axios";

export default axios.create({
  baseURL: 'https://food-ex-nu.vercel.app/api'
});