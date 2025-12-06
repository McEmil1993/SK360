import React from "react";

const BudgetLimitPanel = ({ budget, format, setAnnualDraft }) => {
  return (
    <div className="panel panel-inverse mb-3">
      <div className="panel-heading">
        <h4 className="panel-title">Set Budget Control Limits</h4>
      </div>

      <div className="panel-body">
        <div className="row mb-3">
          {[
            { label: "Enter Total SK Fund", value: budget.totalAppropriation },
            { label: "Enter Budget Limit (MOOE)", value: budget.mooeLimit },
            { label: "Enter Budget Limit (Personnel Services)", value: budget.psLimit },
            { label: "Enter Budget Limit (Capital Outlay)", value: budget.coLimit }
          ].map((item, idx) => (
            <div key={idx} className="col-md-6 mb-2">
              <label className="form-label">{item.label}</label>
              <input className="form-control" value={format(item.value)} readOnly />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end gap-2">
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#annual-budget-modal"
            onClick={() => setAnnualDraft(budget)}
          >
            Edit Annual Budget
          </button>

          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#budget-item-modal"
          >
            Add Allocation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetLimitPanel;
