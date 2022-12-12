import { useState } from "react";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/custom-input/CustomInput";
import { Layout } from "../components/layout/Layout";
import { loginUser } from "../utils/axiosHelper";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  // const [form, setForm] = useState({});
  const [form, setForm] = useState({
    email: "san11@me.com",
    pin: 1234,
  });
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    // const { value, name } = e.target;
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { data } = await loginUser(form);
    setResponse(data);
    //  data.success === "success" && navigate("/dashboard");
    //storing data in session
    console.log(data);
    if (data.status === "success") {
      navigate("/dashboard");
      sessionStorage.setItem("user", JSON.stringify(data.user));
    }
    // sessionStorage.setItem("user", JSON.stringify(data.user));
    //storing in local
    //localStorage.setItem("user", JSON.stringify(data.user));
  };

  const inputFields = [
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

  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit}>
        <h2>Welcome Back!</h2>
        <hr />

        {/* {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )} */}
        {response.status === "error" && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}

        {inputFields.map((item) => (
          <CustomInput {...item} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div className="text-end">
          New here? <Link to="/register"> register </Link>
        </div>
      </Form>
    </Layout>
  );
};
