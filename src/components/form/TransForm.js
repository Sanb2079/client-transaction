import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { postTrans } from "../../utils/axiosHelper";
// import { Toast } from "react-bootstrap";
import { toast } from "react-toastify";

const initialState = {
  type: "",
  name: "",
  amount: "",
};
export const TransForm = ({ getTrans }) => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    //   setForm(initialState);
    //cal api to senddata to db for transaction
    // const data = await postTrans(form);
    // setForm(initialState);

    //using toastify to show message
    const { status, message } = await postTrans(form);

    toast[status](message);
    status === "success" && getTrans();
    // toast.success("Success Notification !", {
    //   position: toast.POSITION.TOP_RIGHT,
    // });
    // toast.error("Error Notification !", {
    //   position: toast.POSITION.TOP_CENTER,
    // });
  };

  // //cal api to senddata to db for transaction
  // const data = await postTrans(form);
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="mt-3 gap-2">
          <Col md="2">
            <Form.Select
              name="type"
              required
              onChange={handleOnChange}
              value={form.type}
            >
              <option>Choose...</option>
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
            </Form.Select>
          </Col>
          <Col md="5">
            <Form.Control
              onChange={handleOnChange}
              name="name"
              placeholder="Transaction Name"
              required
              value={form.name}
            />
          </Col>
          <Col md="2">
            <Form.Control
              onChange={handleOnChange}
              name="amount"
              type="number"
              placeholder="amount i.e. 500"
              required
              value={form.amount}
            />
          </Col>
          <Col md="2">
            <div className="d-grid">
              <Button type="submit"> Add </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

// export default TransForm
