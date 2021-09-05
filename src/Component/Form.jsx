import React, { useState } from "react";
import CompletedTable from "./CompletedTable";
import ProgressTable from "./ProgressTable";
import "./css/Form.css";

function Form() {
  const [fields, setFields] = useState({
    TaskName: "",
    Category: "",
    JiraId: "",
    Assignee: "",
    Status: "",
    Created: "",

    Due: "",
    Mock: "",
    Comments: "",
  });
  const [arr, setArr] = useState([]);
  const [carr, setCarr] = useState([]);

  const onChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log("hii");
    console.log(fields);
    setArr([fields, ...arr]);
    setFields({});

    document.getElementById("formreset").reset();
    document.getElementById("hh").value = "";
  };

  const edit = (e, idx) => {
    setFields(e);
    arr.splice(idx, 1);
    console.log(arr);
  };

  const onDone = (e, idx) => {
    setCarr([e, ...carr]);
    arr.splice(idx, 1);
  };
  const revert = (e, idx) => {
    setArr([e, ...arr]);
    arr.reverse();
    carr.splice(idx, 1);
  };
  return (
    <div style={{ margin: "2%" }} className="fade-in">
      <div style={{ margin: "auto", width: "70%" }}>
        <form id="formreset" onSubmit={submitHandle} onChange={onChange}>
          <div className="row rowStyle">
            <input
              className="form-control col colStyle  inputWidth "
              required
              value={fields.TaskName}
              type="text"
              name="TaskName"
              placeholder="Task Name"
            />
            <select
              className="form-control col colStyle inputWidth "
              required
              name="Category"
              value={fields.Category}
            >
              <option value="">Select Category</option>
              <option value="Nap Bug Task">Nap Bug Task</option>
              <option value="Nap Dev">Nap Dev</option>
              <option value="New Project">New Project</option>
              <option value="HP Update">HP Update</option>
            </select>
            <input
              className="form-control col colStyle inputWidth "
              value={fields.JiraId}
              required
              type="text"
              name="JiraId"
              placeholder="Jira ID"
            />
          </div>
          <div className="row rowStyle">
            <select
              className="form-control col colStyle inputWidth "
              value={fields.Assignee}
              required
              name="Assignee"
            >
              <option value="">Select Assignee</option>
              <option>Bibhu</option>
              <option>Tanzil </option>
            </select>

            <select
              className="form-control col colStyle inputWidth "
              required
              name="Status"
              value={fields.Status}
            >
              <option value="">Select Status</option>
              <option>In QC</option>
              <option>Deployment </option>
              <option>On Hold </option>
              <option>Completed </option>
            </select>

            <input
              className="form-control col colStyle inputWidth "
              required
              type="date"
              name="Created"
              value={fields.Created}
            />
            <input
              className="form-control col colStyle  inputWidth"
              required
              type="date"
              name="Due"
              value={fields.Due}
            />
          </div>
          <div className=" rowStyle">
            <input
              style={{ width: "98%" }}
              className="form-control  colStyle  inputWidth  "
              required
              type="text"
              name="Mock"
              placeholder="Mock UP"
              value={fields.Mock}
            />
            <textarea
              placeholder="Other Comments"
              style={{ width: "98%" }}
              className="form-control colStyle inputWidth "
              id="hh"
              required
              rows="5"
              name="Comments"
              cols="68"
              value={fields.Comments}
            />
          </div>
          <button
            style={{ width: "98%", margin: "1%" }}
            className="btn btn-danger"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <hr />

      <div>
        <h4 className="page-title">Task In Progress</h4>
        <ProgressTable arr={arr} edit={edit} done={onDone} />
      </div>
      <hr />
      <div>
        <h4 className="page-title">Task Completed</h4>

        <CompletedTable arr={carr} revert={revert} />
      </div>
    </div>
  );
}

export default Form;
