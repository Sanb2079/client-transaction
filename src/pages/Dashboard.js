import React, { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { TransForm } from "../components/form/TransForm";
import { fetchTrans } from "../utils/axiosHelper";
import { TransTable } from "../components/table/TransTable";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    getTrans();
    const user = JSON.parse(sessionStorage.getItem("user"));
    !user && navigate("/");
  }, []);

  const getTrans = async () => {
    const { trans } = await fetchTrans();
    //if no data in db then do->trans &&
    //otherwise would be setTrans(Trans)
    //trans && setTrans(trans);
    // console.log(trans);
    // trans?.length && setTrans(trans);
    setTrans(trans || []);
  };
  console.log(trans);
  return (
    <Layout>
      <div className="form">
        <TransForm getTrans={getTrans} />
      </div>
      <div className="table">
        {trans?.length} transactions found!
        <TransTable trans={trans} getTrans={getTrans} />
      </div>
    </Layout>
  );
};

// export default Dashboard run dev
