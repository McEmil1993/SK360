import React from "react";

const RecentActivitiesTable = ({ data }) => {
  return (
    <div className="panel panel-inverse p-3">
      <h4 className="panel-title mb-3">Recent Activities</h4>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Classification</th>
            <th>Object Expenditures</th>
            <th>Proposed Amount</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.classification}</td>
              <td>{row.expenditures}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivitiesTable;
