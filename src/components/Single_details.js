/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import crudeservice from "../services/Crudenew";
const Single_details = () => {
  const navigate = useNavigate();
  const deletedata = (en) => {
    en.preventDefault();
    crudeservice
      .deleteData(`/CRMAppointment/user/delete/${userid}`)
      .then((val) => {
        console.log(val);
        navigate("/show-data");
      });
  };
  var [data, setdata] = useState([]);
  var { userid } = useParams();
  console.log(userid);
  useEffect(() => {
    crudeservice
      .selectData(`/CRMAppointment/user/edit/${userid}`)
      .then((val) => {
        console.log(val[0]);
        setdata(val[0]);
      });
  }, [userid]);
  return (
    <>
      <Container>
        <table className="table table-success table-striped">
          <tr>
            <td>name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{data.email_id}</td>
          </tr>
          <tr>
            <td>mobile no</td>
            <td>{data.mobile_no}</td>
          </tr>
          <tr>
            <td>
              <a herf="#" onClick={deletedata}>
                delete
              </a>
            </td>
            <td>
              <a href="#">edite</a>
            </td>
          </tr>
        </table>
      </Container>
    </>
  );
};

export default Single_details;
