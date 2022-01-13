import React, { useContext, useEffect, useState } from "react";
import { ContextApi } from "../contextapi/ContextApi";
import "./component.css";
import { Link, useNavigate } from "react-router-dom";
const Create = () => {
  let contextData = useContext(ContextApi);
  let navigate = useNavigate();
  let [state, setState] = useState({
    designation: "",
    company: "",
    workingsince: "",
    workingtil: "",
    city: "",
  });
  let { designation, company, workingsince, workingtil, city } = state;
  let data = [];
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = e => {
    e.preventDefault();
    contextData.handleAddData(state);
    setState(data);
  };
  return (
    <section id="createBlock">
      <article>
        <form onSubmit={handleSubmit} id="form">
          <h1 style={{ marginBottom: "20px" }}>Employee Details</h1>
          <div className="formBlock">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={designation}
              onChange={handleChange}
            />
          </div>
          <div className="formBlock">
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex" }}>
            <div className="formBlock">
              <label>Working Since</label>
              <input
                type="text"
                name="workingsince"
                value={workingsince}
                onChange={handleChange}
              />
            </div>
            <div className="formBlock" style={{ marginLeft: "10px" }}>
              <label>Working Til</label>
              <input
                type="text"
                name="workingtil"
                value={workingtil}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="formBlock">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
            />
          </div>
          <div
            className="formBlock"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <div style={{ flexBasis: "50%" }}>
              <button>Submit</button>
            </div>
            <div className="cancel" onClick={contextData.handlePopup}>
              Cancel
            </div>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Create;
