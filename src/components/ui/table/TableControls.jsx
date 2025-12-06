const TableControls = ({
  searchValue,
  onSearchChange,
  pageSize,
  onPageSizeChange,
  width = "300px" // search width
}) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center mb-3"
      style={{ width: "100%" }}
    >
      {/* LEFT: PAGE SIZE DROPDOWN */}
      <select
        className="form-select form-select-sm"
        style={{ width: "90px" }}
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>

      {/* RIGHT: SEARCH BOX */}
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: width,
          maxWidth: width,
        }}
      />
    </div>
  );
};

export default TableControls;
