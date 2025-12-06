const TablePagination = ({ currentPage, totalPages, changePage }) => {
  return (
    <div className="d-flex justify-content-end mt-3">
      <div className="btn-group">
        
        {/* PREV BUTTON */}
        <button
          className="btn btn-default btn-sm"
          disabled={currentPage === 1}
          onClick={() => currentPage > 1 && changePage(currentPage - 1)}
        >
          <ion-icon name="arrow-undo"></ion-icon>
        </button>

        {/* PAGE NUMBER BUTTONS */}
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={`btn btn-sm ${
              currentPage === idx + 1 ? "btn-primary" : "btn-default"
            }`}
            onClick={() => changePage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}

        {/* NEXT BUTTON */}
        <button
          className="btn btn-default btn-sm"
          disabled={currentPage === totalPages}
          onClick={() => currentPage < totalPages && changePage(currentPage + 1)}
        >
          <ion-icon name="arrow-redo-sharp"></ion-icon>
        </button>

      </div>
    </div>
  );
};

export default TablePagination;
