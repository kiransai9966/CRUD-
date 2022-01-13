import React, { useContext } from "react";
import "./component.css";
import { ContextApi } from "./../contextapi/ContextApi";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Create from "./Create";
const Home = () => {
  let contextData = useContext(ContextApi);
  let { data, handlePopup, popup } = contextData;
  return (
    <div className="homeTable">
      <h1>Employee Details</h1>
      <div
        style={popup ? { display: "block" } : { display: "none" }}
        className="popup"
      >
        <Create />
      </div>
      <table>
        <thead>
          <tr>
            <th>Designation</th>
            <th>Company</th>
            <th>Working Since</th>
            <th>Working Til</th>
            <th>City</th>
            <th onClick={handlePopup}>
              <AiOutlinePlusCircle style={{ fontSize: "30px" }} />
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(details => (
              <tr className="detailsRow">
                <td>{details.designation}</td>
                <td>{details.company}</td>
                <td>{details.workingsince}</td>
                <td>{details.workingtil}</td>
                <td>{details.city}</td>
                <td className="buttons">
                  <button className="editBtn">Edit</button>
                  <button className="deleteBtn">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
