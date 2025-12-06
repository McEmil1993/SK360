import React from "react";

const PendingApprovalTable = ({ approvals }) => {
  return (
    <div className="panel panel-inverse p-3">
      <h4 className="panel-title mb-3">Pending for Approval</h4>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Program/Activities</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {approvals.map((row, i) => (
            <tr key={i}>
              <td>{row.program}</td>
              <td>{row.description}</td>
              <td>{row.amount}</td>
              <td>
                <span className="badge bg-warning">{row.status}</span>
              </td>
              <td>
                <button className="btn btn-success btn-sm">Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingApprovalTable;
