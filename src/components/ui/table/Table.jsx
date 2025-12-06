import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ columns, data, actions }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered align-middle text-nowrap">

        <TableHeader columns={columns} actions={actions} />

        <tbody>
          {data.length > 0 ? (
            data.map((item, idx) => (
              <TableRow
                key={item.id || idx}
                item={item}
                columns={columns}
                actions={actions}
                rowIndex={idx}   // <-- REQUIRED
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + (actions ? 1 : 0)}
                className="text-center text-muted"
              >
                No records found.
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
