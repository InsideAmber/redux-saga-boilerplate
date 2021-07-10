import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

const getApi = async () => {
  return await axios.get(apiUrl);
  // .then((response: any) => response.json)
  // .catch((error: any) => {
  //   throw error;
  //}
};
export default getApi;
