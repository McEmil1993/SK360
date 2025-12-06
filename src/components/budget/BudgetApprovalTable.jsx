import React from "react";
import Table from "../../components/ui/table/Table";
import TableControls from "../../components/ui/table/TableControls";
import TablePagination from "../../components/ui/table/TablePagination";

const BudgetApprovalTable = ({
  search,
  setSearch,
  pageSize,
  setPageSize,
  currentPage,
  setCurrentPage,
  paginated,
  totalPages,
  columns,
  actions,
}) => {
  return (
    <div className="panel panel-inverse">
      <div className="panel-heading d-flex justify-content-between align-items-center">
        <h4 className="panel-title">Budget Approval</h4>

        <button
            className="btn btn-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#budget-item-modal"
            onClick={() => {
            setItemDraft({
                classification: "",
                objectExpenditure: "",
                allocatedLimit: "",
            });
            setEditItemId(null);
            }}
        >
            <i className="fa fa-plus me-1"></i> Add Allocation
        </button>
        </div>

      <div className="panel-body">
        <TableControls
          searchValue={search}
          onSearchChange={(v) => {
            setSearch(v);
            setCurrentPage(1);
          }}
          pageSize={pageSize}
          onPageSizeChange={(v) => {
            setPageSize(v);
            setCurrentPage(1);
          }}
          width="300px"
        />

        <Table columns={columns} data={paginated} actions={actions} />

        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default BudgetApprovalTable;
