import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const userUrl = rootUrl + "/user";
//send data to server to add to db
export const postUser = (formData) => {
  try {
    return axios.post(userUrl, formData);
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
//fetch data from server
//send data to switch the task
//send data to del from db
