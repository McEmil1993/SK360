import React, { useState, useMemo } from "react";
import MainLayout from "../layouts/MainLayout";

import Table from "../components/ui/table/Table";
import TableControls from "../components/ui/table/TableControls";
import TablePagination from "../components/ui/table/TablePagination";
import ModalForm from "../components/ui/modal/ModalForm";

import DeleteConfirmModal from "../components/ui/modal/DeleteConfirmModal";



/* ----------------------------------------------
   INITIAL USERS (Placed inside UserManage.jsx)
---------------------------------------------- */
const initialUsers = [
  { id: 1, name: "Adam Schwartz", username: "adam", role: "Admin", email: "adam@example.com", status: "Active", avatar: "/assets/img/user/user-1.jpg" },
  { id: 2, name: "Olivia Brown", username: "olivia", role: "User", email: "olivia@example.com", status: "Pending", avatar: "/assets/img/user/user-2.jpg" },
  { id: 3, name: "John Smith", username: "jsmith", role: "Coordinator", email: "john@example.com", status: "Inactive", avatar: "/assets/img/user/user-3.jpg" },
  { id: 4, name: "Maria Cruz", username: "mcruz", role: "Encoder", email: "maria@example.com", status: "Active", avatar: "/assets/img/user/user-4.jpg" },
  { id: 5, name: "Daniel Reyes", username: "dreyes", role: "Admin", email: "dan@example.com", status: "Active", avatar: "/assets/img/user/user-5.jpg" },

  { id: 6, name: "Alexa Chan", username: "achan", role: "Support", email: "alexachan@example.com", status: "Pending", avatar: "/assets/img/user/user-6.jpg" },
  { id: 7, name: "Michael Tan", username: "mtan", role: "Admin", email: "michael@example.com", status: "Inactive", avatar: "/assets/img/user/user-7.jpg" },
  { id: 8, name: "Kim Lee", username: "kimlee", role: "Staff", email: "kim@example.com", status: "Active", avatar: "/assets/img/user/user-8.jpg" },
  { id: 9, name: "Jasmine Flores", username: "jflores", role: "HR Assistant", email: "jasmine@example.com", status: "Active", avatar: "/assets/img/user/user-9.jpg" },
  { id: 10, name: "Kevin Santos", username: "ksantos", role: "IT Technician", email: "kevin@example.com", status: "Pending", avatar: "/assets/img/user/user-10.jpg" },
    { id: 11, name: "Kevin Santos", username: "ksantos", role: "IT Technician", email: "kevin@example.com", status: "Pending", avatar: "/assets/img/user/user-10.jpg" },
      { id: 12, name: "Kevin Santos", username: "ksantos", role: "IT Technician", email: "kevin@example.com", status: "Pending", avatar: "/assets/img/user/user-10.jpg" },

  // (copy the remaining users here...)
];

const userFields = [
  { label: "Full Name", key: "name", type: "text", required: true, minLength: 3, col: 6 },
  { label: "Username", key: "username", type: "text", required: true, minLength: 4, col: 6 },
  { label: "Email", key: "email", type: "email", required: true, col: 6 },
  { label: "Role", key: "role", type: "select", required: true, col: 6, options: ["Admin", "User", "Staff"] },
  { label: "Status", key: "status", type: "select", required: true, col: 6, options: ["Active", "Pending", "Inactive"] },
  { label: "Avatar", key: "avatar", type: "file", col: 6, accept: "image/*" }
];


/* ---------------------------------------------- */

const UserManage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [tempUser, setTempUser] = useState({});
  const [editId, setEditId] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);


  /* TABLE COLUMNS CONFIG — Reusable */
  const columns = [
    {
      label: "#",
      key: "index",
      width: "1%",
      render: (_, __, idx) => idx + 1
    },
    {
      label: "Avatar",
      key: "avatar",
      width: "1%",
      render: (v) => <img src={v} className="rounded h-30px" />,
    },
    { label: "Name", key: "name" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
    { label: "Role", key: "role" },
    {
      label: "Status",
      key: "status",
      width: "1%",
      render: (v) => (
        <span className={`badge ${v === "Active" ? "bg-success" : v === "Pending" ? "bg-warning" : "bg-secondary"}`}>
          {v}
        </span>
      )
    }
  ];

  /* SEARCH LOGIC */
  const filtered = useMemo(() => {
    return users.filter((u) =>
      (u.name + u.username + u.email + u.role + u.status)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [users, search]);

  /* PAGINATION LOGIC */
  const totalPages = Math.ceil(filtered.length / pageSize);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, pageSize, currentPage]);

  /* ACTION BUTTONS */
  const actions = [
    {
      icon: "fa-edit",
      color: "primary",
      text_label: "Edit",
      modal: "#modal-dialog",
      onClick: (item) => {
        setTempUser(item);
        setEditId(item.id);
      },
    },
    {
      icon: "fa-trash",
      color: "danger",
      text_label: "Delete",
      modal: "#delete-modal",
      onClick: (item) => {
        setDeleteItem(item);
      }
    }

  ];

  /* SAVE FROM MODAL */
  const handleSave = () => {
    if (editId === null) {
      setUsers([...users, { ...tempUser, id: users.length + 1 }]);
    } else {
      setUsers(users.map((u) => (u.id === editId ? tempUser : u)));
    }
    document.querySelector("#modal-dialog .btn-close").click();
  };

  return (
    <MainLayout>
      <ModalForm
        modalId="modal-dialog"
        title={editId ? "Edit User" : "Add User"}
        fields={userFields}
        model={tempUser}
        setModel={setTempUser}
        onSave={handleSave}
      />

      {/* DELETE CONFIRMATION MODAL */}
      <DeleteConfirmModal
        modalId="delete-modal"
        item={deleteItem}
        onConfirm={(item) => {
          setUsers(users.filter((u) => u.id !== item.id));
        }}
      />



      <div className="panel panel-inverse">
        <div className="panel-heading d-flex justify-content-between align-items-center">
          <h4>User Management</h4>

          <button
            className="btn btn-theme btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#modal-dialog"
            onClick={() => {
              setTempUser({
                name: "",
                username: "",
                email: "",
                role: "",
                status: "Active",
                avatar: "/assets/img/user/user-1.jpg",
              });
              setEditId(null);
            }}
          >
            <i className="fa fa-user-plus me-1"></i> Add User
          </button>
        </div>

        <div className="panel-body">

         <TableControls
          searchValue={search}
          onSearchChange={(v) => { setSearch(v); setCurrentPage(1); }}
          
          pageSize={pageSize}
          onPageSizeChange={(v) => { setPageSize(v); setCurrentPage(1); }}

          width="35%"   // you can adjust this anytime
        />

          {/* UNIVERSAL TABLE */}
          <Table columns={columns} data={paginated} actions={actions} />

          {/* PAGINATION */}
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            changePage={setCurrentPage}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default UserManage;
