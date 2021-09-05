import React from "react";

function CompletedTable({ arr, revert }) {
  return (
    <div className="table-responsive " style={{ margin: "2%" }}>
      <table className="table">
        <thead className="tablehead">
          <tr>
            <td>S.No</td>
            <td>TASK NAME</td>
            <td>CREATED</td>
            <td>DUE</td>
            <td>GO LIVE</td>
            <td>ASSIGNEE</td>
            <td>CATEGORY</td>
            <td>STATUS</td>
            <td>JIRA ID</td>
            <td>MOCK-UP</td>
            <td>NOTES</td>
            <td>ACTIONS</td>
          </tr>
        </thead>
        <tbody>
          {arr.length > 0 &&
            arr.map((data, idx) => {
              const {
                TaskName,
                Category,
                JiraId,
                Assignee,
                Status,
                Created,

                Due,
                Mock,
                Comments,
              } = data;
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{TaskName}</td>
                  <td>{Created}</td>
                  <td>{Due}</td>
                  <td>heelo</td>
                  <td>{Assignee}</td>
                  <td>{Category}</td>
                  <td>{Status}</td>
                  <td>{JiraId}</td>
                  <td>{Mock}</td>
                  <td>{Comments}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => revert(data, idx)}
                    >
                      Revert
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default CompletedTable;
