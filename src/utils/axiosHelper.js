import axios from "axios";
import { json } from "react-router-dom";
const rootUrl = "http://localhost:8000/api/v1";
const userUrl = rootUrl + "/user";
const loginUrl = userUrl + "/login";
const transUrl = rootUrl + "/transaction";

const getUserIdFromStorage = () => {
  const user = sessionStorage.getItem("user");

  if (user) {
    const userObj = JSON.parse(user);
    console.log(userObj);
    return userObj?._id;
  }
  return null;
};
//user section
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
//login user

export const loginUser = (formData) => {
  try {
    console.log(formData);
    return axios.post(loginUrl, formData);
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
//******** */

//Transacrtion section
//post transaction

// ======= transaction section
//post transaction
export const postTrans = async (formData) => {
  try {
    const userId = getUserIdFromStorage();
    console.log(userId);

    if (!userId) {
      return {
        status: "error",
        message: "you must be logged In",
      };
    }
    console.log(formData, userId);

    //passing data thro header
    const { data } = await axios.post(transUrl, formData, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
//
//get user specific transactions
export const fetchTrans = async () => {
  try {
    console.log("before ");
    const userId = getUserIdFromStorage();

    if (!userId) {
      return {
        status: "error",
        message: "you must be logged In",
      };
    }

    const { data } = await axios.get(transUrl, {
      headers: {
        Authorization: userId,
      },
    });
    console.log(data, "after");
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
//
//get user specific transactions
export const deleteTrans = async (ids) => {
  try {
    const userId = getUserIdFromStorage();

    if (!userId) {
      return {
        status: "error",
        message: "you must be logged In",
      };
    }

    const { data } = await axios.delete(transUrl, {
      data: ids,
      headers: {
        Authorization: userId,
      },
    });
    console.log(data, "lkjhgsdfgb");
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
