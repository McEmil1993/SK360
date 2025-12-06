const TableHeader = ({ columns, actions }) => {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <th key={index} style={{ width: col.width }}>
            {col.label}
          </th>
        ))}

        {actions && (
          <th style={{ width: actions.width || "12%" }}>
            Actions
          </th>
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;
