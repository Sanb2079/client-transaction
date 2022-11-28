Register.js;
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../components/custom-input/CustomInput";
import { Layout } from "../components/layout/Layout";

export const Register = () => {
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

  return (
    <Layout>
      <Form className="login-page">
        <h2>Register</h2>
        <hr />

        {inputFields.map((item) => (
          <CustomInput {...item} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Layout>
  );
};
