const TableRow = ({ item, columns, actions, rowIndex }) => {
  return (
    <tr>
      {columns.map((col, i) => (
        <td key={i} style={{ width: col.width }}>
          {col.render
            ? col.render(item[col.key], item, rowIndex)
            : item[col.key]}
        </td>
      ))}

      {actions && (
        <td style={{ width: actions.width || "12%" }}>
          {actions.map((btn, i) => (
            <button
              key={i}
              className={`btn btn-${btn.color} btn-xs me-1`}
              onClick={() => btn.onClick(item)}
              data-bs-toggle={btn.modal ? "modal" : undefined}
              data-bs-target={btn.modal || undefined}
            >
              <i className={`fa ${btn.icon}`}></i> {btn.text_label}
            </button>
          ))}
        </td>
      )}
    </tr>
  );
};

export default TableRow;
