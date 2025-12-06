import React, { useState, useMemo } from "react";
import MainLayout from "../layouts/MainLayout";

import ModalForm from "../components/ui/modal/ModalForm";
import BudgetSummary from "../components/budget/BudgetSummary";
import BudgetApprovalTable from "../components/budget/BudgetApprovalTable";

import { annualFields } from "../components/budget/fields/annualBudgetFields";
import { budgetItemFields } from "../components/budget/fields/budgetItemFields";

/* INITIAL DATA */
const initialAnnualBudget = {
  totalAppropriation: 2000000,
  mooeLimit: 800000,
  psLimit: 450000,
  coLimit: 750000,
};

const initialBudgetItems = [
  {
    id: 1,
    classification: "MOOE",
    objectExpenditure: "Office Supplies",
    budgetLimit: 800000,
    allocatedLimit: 50000,
    balance: 750000,
    status: "Pending",
  }
];

const classificationBudgetKey = {
  "MOOE": "mooeLimit",
  "Personnel Services": "psLimit",
  "Capital Outlay": "coLimit",
};

export default function BudgetPreparation() {
  const [annualBudget, setAnnualBudget] = useState(initialAnnualBudget);

  const [budgetItems, setBudgetItems] = useState(initialBudgetItems);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [annualDraft, setAnnualDraft] = useState(initialAnnualBudget);
  const [itemDraft, setItemDraft] = useState({});
  const [editItemId, setEditItemId] = useState(null);

  const format = (n) => n.toLocaleString();

  /* TABLE CONFIG */
  const columns = [
    { label: "#", key: "index", width: "5%", render: (_, __, i) => i + 1 },
    { label: "Object Expenditures", key: "objectExpenditure" },
    { label: "Classification", key: "classification" },
    { label: "Budget Limit", key: "budgetLimit", render: (v) => format(v) },
    { label: "Allocated Limit", key: "allocatedLimit", render: (v) => format(v) },
    { label: "Balance", key: "balance", render: (v) => format(v) },
    {
      label: "Status",
      key: "status",
      render: (v) => (
        <span className={`badge ${v === "Approved" ? "bg-success" : "bg-warning"}`}>
          {v}
        </span>
      )
    }
  ];

  const actions = [
    {
      icon: "fa-check",
      color: "success",
      onClick: (item) =>
        setBudgetItems((prev) =>
          prev.map((b) => (b.id === item.id ? { ...b, status: "Approved" } : b))
        ),
    },
    {
      icon: "fa-edit",
      color: "primary",
      modal: "#budget-item-modal",
      onClick: (item) => {
        setEditItemId(item.id);
        setItemDraft(item);
      },
    },
  ];

  /* SEARCH + PAGINATION */
  const filtered = useMemo(
    () =>
      budgetItems.filter((b) =>
        `${b.objectExpenditure}${b.classification}${b.status}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [budgetItems, search]
  );

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  /* SAVE HANDLERS */
  const saveAnnualBudget = () => {
    setAnnualBudget(annualDraft);
    document.querySelector("#annual-budget-modal .btn-close")?.click();
  };

  const saveBudgetItem = () => {
    const key = classificationBudgetKey[itemDraft.classification];
    const limit = annualBudget[key] || 0;
    const allocated = Number(itemDraft.allocatedLimit);
    const balance = limit - allocated;

    if (editItemId) {
      setBudgetItems((prev) =>
        prev.map((b) =>
          b.id === editItemId ? { ...itemDraft, budgetLimit: limit, balance } : b
        )
      );
    } else {
      setBudgetItems((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          ...itemDraft,
          budgetLimit: limit,
          balance,
          status: "Pending",
        },
      ]);
    }

    setEditItemId(null);
    setItemDraft({});
    document.querySelector("#budget-item-modal .btn-close")?.click();
  };

  return (
    <MainLayout>
      {/* MODALS */}
      <ModalForm
        modalId="annual-budget-modal"
        title="Edit Annual Budget"
        fields={annualFields}
        model={annualDraft}
        setModel={setAnnualDraft}
        onSave={saveAnnualBudget}
      />

      <ModalForm
        modalId="budget-item-modal"
        title={editItemId ? "Edit Budget Item" : "Add Budget Item"}
        fields={budgetItemFields}
        model={itemDraft}
        setModel={setItemDraft}
        onSave={saveBudgetItem}
      />

      {/* PAGE HEADER WITH BUTTON */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="page-header m-0">Budget Preparation</h1>

        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#annual-budget-modal"
          onClick={() => setAnnualDraft(annualBudget)}
        >
          Edit Annual Budget
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <BudgetSummary budget={annualBudget} format={format} />

      {/* BUDGET APPROVAL TABLE */}
      <BudgetApprovalTable
        search={search}
        setSearch={setSearch}
        pageSize={pageSize}
        setPageSize={setPageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginated={paginated}
        totalPages={totalPages}
        columns={columns}
        actions={actions}
      />
    </MainLayout>
  );
}
