export const budgetItemFields = [
  {
    label: "Classification",
    key: "classification",
    type: "select",
    required: true,
    col: 4,
    options: ["MOOE", "Personnel Services", "Capital Outlay"],
  },
  {
    label: "Object of Expenditures",
    key: "objectExpenditure",
    type: "select",
    required: true,
    col: 4,
    options: [
      "Office Supplies",
      "Training",
      "Repairs and Maintenance",
      "Water",
      "Electricity",
      "Fuel, Oil, and Lubricant Expenses",
      "Traveling Expenses",
    ],
  },
  {
    label: "Allocated Limit",
    key: "allocatedLimit",
    type: "number",
    required: true,
    col: 4,
  },
];
