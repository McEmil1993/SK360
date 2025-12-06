const TableSearch = ({ value, onChange, width = "200px" }) => (
  <input
    type="text"
    className="form-control form-control-sm"
    placeholder="Search..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ width }}
  />
);

export default TableSearch;
