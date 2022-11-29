import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/custom-input/CustomInput";
import { Layout } from "../components/layout/Layout";
import { postUser } from "../utils/axiosHelper";
import { Alert } from "react-bootstrap";

// export const Register = () => {
//   //const [form, setForm] = useState({});
//   const [txtBoxData, setTxtBoxData] = useState({});
//   const [response, setResponse] = useState({});

//   //const [txtBoxData, setTxtBoxData] = useState({});

//   const handleOnChange = (e) => {
//     const { value, name } = e.target;
//     setTxtBoxData({
//       ...txtBoxData,
//       [name]: value,
//     });
//   };
//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     // console.log(e.target.name.value); //or e.target.value
//     // console.log(e.target.email.value);
//     // console.log(e.target.pin.value);
//     // //
//     // console.log("here b4 final");
//     // console.log(txtBoxData);
//     const { data } = await postUser(txtBoxData);
//     setResponse(data);
//   };
//   const inputFields = [
//     {
//       label: "Name",
//       placeholder: "FirstName LastName",
//       required: true,
//       name: "name",
//       type: "text",
//     },
//     {
//       label: "Email",
//       placeholder: "your@gmail.com",
//       required: true,
//       name: "email",
//       type: "email",
//     },
//     {
//       label: "pin",
//       placeholder: "1234",
//       required: true,
//       name: "pin",
//       type: "number",
//       min: 1000,
//       max: 99999,
//     },
//   ];

//   return (
//     <Layout>
//       {/* <Form className="login-page" onSubmit={(e) => onSubmitHandler(e)}> */}
//       <Form className="login-page" onSubmit={handleOnSubmit}>
//         <h2>Register</h2>
//         <hr />
//         {response.message && (
//           <Alert variant={response.status === "success" ? "success" : "danger"}>
//             {response.message}
//           </Alert>
//         )}

//         {inputFields.map((item) => (
//           <CustomInput {...item} onChange={handleOnChange} />
//         ))}

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//         <div className="text-end mt-5">
//           Already have an account? <Link to="/"> Login Now </Link>
//         </div>
//       </Form>
//     </Layout>
//   );
// };

//

export const Register = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { data } = await postUser(form);
    setResponse(data);
  };

  const inputFields = [
    {
      label: "Name",
      placeholder: "Same Smith",
      required: true,
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "pin",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      min: 1000,
      max: 9999,
    },
  ];

  console.log(form);
  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit}>
        <h2>Register</h2>
        <hr />

        {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}

        {inputFields.map((item) => (
          <CustomInput {...item} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="text-end mt-5">
          Already have an account? <Link to="/"> Login Now </Link>
        </div>
      </Form>
    </Layout>
  );
};
