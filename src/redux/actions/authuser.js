import axios from "axios";
import {
  SAVE_FORM,
  GET_AUTH,
  DELETE_FORM,
  FORM_UPDATE,
  SAVE_SIGNUP,
  DUPERR_MSG,
  MSG_LOGIN,
  LOGOUT,
  ISTOKEN_OK,
  MSG_LOGINS,
  FORG_PASS,
  FORG_PASSERR,
  UPDATEPASS_MSG,
  CLEAR_STATE,
  ISTOKEN_OKTOEDIT,
} from "../constat";
import API from "../url";

export function Saveform(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    let formData = new FormData();

    for (var item in body) {
      formData.append(item, body[item]);
    }
    console.log(formData);
    axios
      .post(API + "/Saveformdata", formData, config)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: SAVE_FORM,
          payload: { data: resp.data, flag: true },
        });
        setTimeout(() => {
          dispatch({
            type: SAVE_FORM,
            payload: { data: resp.data, flag: false },
          });
        }, 2000);
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}








export function UpdatePass(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/Updatepasswd", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: UPDATEPASS_MSG,
          payload: { data: resp.data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}







export function clearstate() {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    // console.log("body", body);
 dispatch({
   type: CLEAR_STATE,
   payload: { data: "" },
 });
   
  };
}


export function signupdata(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/savesignupdata", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: DUPERR_MSG,
          payload: { data: resp.data },
        });
      
      })
      .catch((err) => {
       
        console.log(err);
      });
  };
}




export function VerifyToken(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/VerifyToken", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: ISTOKEN_OK,
          payload: { data: resp.data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}






export function VerifyTokenForPass(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/VerifyTokenforpass", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: ISTOKEN_OKTOEDIT,
          payload: { data: resp.data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}






// export function authuser(body) {
//   return (dispatch) => {
//     axios
//       .post(API + "/loginuser" , body)

//       .then((resp) => {
//         console.log("resp", resp.data);
//         dispatch({
//           type: GET_AUTH,
//           payload: resp.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }
export function authuser(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/loginuser", body)
      .then((resp) => {
        // successFul("success");

      if (resp.data.msg == "Not available email") {
        console.log("resp.data", resp);
        console.log("resp.data", resp.data);

        dispatch({
          type: MSG_LOGINS,
          payload: resp.data,
        });
      }
      
      else {
        console.log("resp.data", resp);
        console.log("resp.data", resp.data);

        dispatch({
          type: MSG_LOGIN,
          payload: resp.data,
        });
      }

        
      })
      .catch((err) => {
        console.log(err);
      });
  };
}




export function forgotpass(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/forgotpass", body)
      .then((resp) => {
        // successFul("success")
          console.log("resp.data", resp);
          console.log("resp.data", resp.data);

          if (resp.data.msg == "Email Not Found.") {
             dispatch({
               type: FORG_PASSERR,
               payload: resp.data,
             });
        
          }



            dispatch({
              type: FORG_PASS,
              payload: resp.data,
            });
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
}



export function logoutuser() {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    localStorage.getItem("token");
    dispatch({
      type: LOGOUT,
    });
  };
}


export function DelRecord(id) {
  return (dispatch) => {
    axios.post(API + `/deleteidBase`, { id }).then((resp) => {
      console.log(resp.data);
      dispatch({
        type: DELETE_FORM,
        payload: resp.data,
      });
    });
  };
}
// export function deleteSubCategory(id) {
//   return (dispatch) => {
//     axios.post(API + `/api/SubCategories/delete`, {sub_category_id:id}).then((resp) => {
//       console.log(resp.data);
//       dispatch({
//         type: DELETE_CATEGORY,
//         payload: resp.data,
//       });
//     });
//   };
// }

//update student in firebase action

///////////////////////////////////////

export function UpdateRecord(body) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  console.log("body", body);

  let formData = new FormData();

  for (var item in body) {
    formData.append(item, body[item]);
  }
  console.log("formData", formData);

  return (dispatch) => {
    axios.post(API + `/update`, formData, config).then((resp) => {
      console.log(resp.data);
      dispatch({
        type: FORM_UPDATE,
        payload: resp.data,
      });
    });
  };
}
