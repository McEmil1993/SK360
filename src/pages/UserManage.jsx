import React, { useState, useMemo } from "react";
import MainLayout from "../layouts/MainLayout";
import UserModal from "../components/UserModal";


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
  { id: 11, name: "Rachel Vargas", username: "rvargas", role: "Secretary", email: "rachel@example.com", status: "Active", avatar: "/assets/img/user/user-11.jpg" },
  { id: 12, name: "Brian Torres", username: "btorres", role: "Support", email: "brian@example.com", status: "Inactive", avatar: "/assets/img/user/user-12.jpg" },
  { id: 13, name: "Jonathan Morris", username: "jmorris", role: "Supervisor", email: "jonathan@example.com", status: "Active", avatar: "/assets/img/user/user-13.jpg" },
  { id: 14, name: "Ella Domingo", username: "edomingo", role: "Staff", email: "ella@example.com", status: "Pending", avatar: "/assets/img/user/user-14.jpg" },
  { id: 15, name: "Patrick Go", username: "pgo", role: "Coordinator", email: "patrick@example.com", status: "Active", avatar: "/assets/img/user/user-15.jpg" },

  { id: 16, name: "Rico Dela Cruz", username: "rdcruz", role: "Admin", email: "rico@example.com", status: "Inactive", avatar: "/assets/img/user/user-1.jpg" },
  { id: 17, name: "Sophia Kim", username: "skim", role: "Support", email: "sophia@example.com", status: "Active", avatar: "/assets/img/user/user-2.jpg" },
  { id: 18, name: "Jared Uy", username: "juy", role: "Encoder", email: "jared@example.com", status: "Pending", avatar: "/assets/img/user/user-3.jpg" },
  { id: 19, name: "Amber Cruz", username: "acruz", role: "HR Staff", email: "amber@example.com", status: "Active", avatar: "/assets/img/user/user-4.jpg" },
  { id: 20, name: "Nathan Lopez", username: "nlopez", role: "Admin", email: "nathan@example.com", status: "Inactive", avatar: "/assets/img/user/user-5.jpg" },
  
  { id: 21, name: "Carlos Lim", username: "clim", role: "Support", email: "carlos@example.com", status: "Active", avatar: "/assets/img/user/user-6.jpg" },
  { id: 22, name: "Angela Santos", username: "asantos", role: "HR Assistant", email: "angela@example.com", status: "Active", avatar: "/assets/img/user/user-7.jpg" },
  { id: 23, name: "Robert Chan", username: "rchan", role: "Admin", email: "robert@example.com", status: "Pending", avatar: "/assets/img/user/user-8.jpg" },
  { id: 24, name: "Bea Villanueva", username: "bvilla", role: "Staff", email: "bea@example.com", status: "Active", avatar: "/assets/img/user/user-9.jpg" },
  { id: 25, name: "Samuel Cruz", username: "samcruz", role: "Encoder", email: "samuel@example.com", status: "Inactive", avatar: "/assets/img/user/user-10.jpg" },

  { id: 26, name: "Jenny Robles", username: "jrobles", role: "Support", email: "jenny@example.com", status: "Active", avatar: "/assets/img/user/user-11.jpg" },
  { id: 27, name: "Marco Dee", username: "mdee", role: "Admin", email: "marco@example.com", status: "Pending", avatar: "/assets/img/user/user-12.jpg" },
  { id: 28, name: "Denise Tan", username: "dtan", role: "Coordinator", email: "denise@example.com", status: "Active", avatar: "/assets/img/user/user-13.jpg" },
  { id: 29, name: "Liam Parker", username: "lparker", role: "Staff", email: "liam@example.com", status: "Inactive", avatar: "/assets/img/user/user-14.jpg" },
  { id: 30, name: "Angel Torres", username: "atorres", role: "Admin", email: "angel@example.com", status: "Active", avatar: "/assets/img/user/user-15.jpg" },

  { id: 31, name: "Jessa Lim", username: "jlim", role: "HR Staff", email: "jessa@example.com", status: "Active", avatar: "/assets/img/user/user-1.jpg" },
  { id: 32, name: "Kevin Ong", username: "kong", role: "Support", email: "kevinong@example.com", status: "Pending", avatar: "/assets/img/user/user-2.jpg" },
  { id: 33, name: "Sarah Cruz", username: "scruz", role: "Coordinator", email: "sarah@example.com", status: "Active", avatar: "/assets/img/user/user-3.jpg" },
  { id: 34, name: "Paul Reyes", username: "preyes", role: "Admin", email: "paul@example.com", status: "Inactive", avatar: "/assets/img/user/user-4.jpg" },
  { id: 35, name: "Michelle Go", username: "mgo", role: "Staff", email: "michelle@example.com", status: "Active", avatar: "/assets/img/user/user-5.jpg" },

  { id: 36, name: "Henry Collins", username: "hcollins", role: "Technician", email: "henry@example.com", status: "Pending", avatar: "/assets/img/user/user-6.jpg" },
  { id: 37, name: "Elena Garcia", username: "egarcia", role: "Administrator", email: "elena@example.com", status: "Active", avatar: "/assets/img/user/user-7.jpg" },
  { id: 38, name: "Kyle Mendoza", username: "kmendoza", role: "Support", email: "kyle@example.com", status: "Inactive", avatar: "/assets/img/user/user-8.jpg" },
  { id: 39, name: "Diana Ortiz", username: "dortiz", role: "Staff", email: "diana@example.com", status: "Pending", avatar: "/assets/img/user/user-9.jpg" },
  { id: 40, name: "Louis Tan", username: "ltan", role: "Admin", email: "louis@example.com", status: "Active", avatar: "/assets/img/user/user-10.jpg" },

  { id: 41, name: "Ian Chavez", username: "ichavez", role: "Encoder", email: "ian@example.com", status: "Active", avatar: "/assets/img/user/user-11.jpg" },
  { id: 42, name: "Fiona Ramos", username: "framos", role: "Secretary", email: "fiona@example.com", status: "Pending", avatar: "/assets/img/user/user-12.jpg" },
  { id: 43, name: "Daryl Lim", username: "dlim", role: "Supervisor", email: "daryl@example.com", status: "Inactive", avatar: "/assets/img/user/user-13.jpg" },
  { id: 44, name: "Nicole Cruz", username: "ncruz", role: "Support", email: "nicole@example.com", status: "Active", avatar: "/assets/img/user/user-14.jpg" },
  { id: 45, name: "Eugene Park", username: "epark", role: "Admin", email: "eugene@example.com", status: "Inactive", avatar: "/assets/img/user/user-15.jpg" },

  { id: 46, name: "Harvey Sy", username: "hsy", role: "Technician", email: "harvey@example.com", status: "Active", avatar: "/assets/img/user/user-1.jpg" },
  { id: 47, name: "Grace Lim", username: "glim", role: "HR Staff", email: "grace@example.com", status: "Pending", avatar: "/assets/img/user/user-2.jpg" },
  { id: 48, name: "Ariel Santos", username: "asantos2", role: "Support", email: "ariel@example.com", status: "Active", avatar: "/assets/img/user/user-3.jpg" },
  { id: 49, name: "Patrick Lee", username: "plee", role: "Encoder", email: "patricklee@example.com", status: "Inactive", avatar: "/assets/img/user/user-4.jpg" },
  { id: 50, name: "Jhonel Cruz", username: "jcruz", role: "Coordinator", email: "jhonel@example.com", status: "Active", avatar: "/assets/img/user/user-5.jpg" },
];

const UserManage = () => {

  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1);

  const emptyUser = {
    name: "",
    username: "",
    email: "",
    role: "",
    status: "Active",
    avatar: "/assets/img/user/user-1.jpg",
  };
  const [tempUser, setTempUser] = useState(emptyUser);
  const [editId, setEditId] = useState(null);

  const openAdd = () => {
    setTempUser(emptyUser);
    setEditId(null);
  };

  const openEdit = (u) => {
    setTempUser(u);
    setEditId(u.id);
  };

  const handleSave = () => {
    if (editId === null) {
      // ADD NEW USER
      const newUser = {
        ...tempUser,
        id: users.length + 1
      };
      setUsers([...users, newUser]);
    } else {
      // UPDATE USER
      setUsers(users.map((u) => (u.id === editId ? tempUser : u)));
    }

    // CLOSE MODAL PROGRAMMATICALLY
    document.querySelector("#modal-dialog .btn-close").click();
  };


  const filteredUsers = useMemo(() => {
    return initialUsers.filter((u) =>
      (u.name + u.username + u.email + u.role + u.status)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredUsers.slice(start, start + pageSize);
  }, [filteredUsers, currentPage, pageSize]);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <MainLayout>

      {/* MODAL (ADD + EDIT) */}
      <UserModal
        modalId="modal-dialog"
        title={editId ? "Edit User" : "Add User"}
        user={tempUser}
        setUser={setTempUser}
        onSave={handleSave}
      />

      {/* BREADCRUMB */}
      <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Users</a></li>
        <li className="breadcrumb-item active">User Management</li>
      </ol>

      <h1 className="page-header">
        User Management <small>manage system users</small>
      </h1>

      <div className="panel panel-inverse">

        <div className="panel-heading d-flex justify-content-between align-items-center">
          <h4 className="panel-title">User Table</h4>
         <button
            className="btn btn-sm btn-theme"
            data-bs-toggle="modal"
            data-bs-target="#modal-dialog"
            onClick={openAdd}
          >
            <i className="fa fa-user-plus me-1"></i> Add User
          </button>
        </div>

        <div className="panel-body">

          {/* Top Controls */}
          <div className="d-flex justify-content-between mb-3">

            <div className="d-flex align-items-center gap-2">
              <label>Show:</label>
              <select
                className="form-select form-select-sm"
                style={{ width: "80px" }}
                value={pageSize}
                onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>

            <div style={{ width: "250px" }}>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search user..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              />
            </div>
          </div>

          {/* TABLE */}
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle text-nowrap">
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th width="12%">Actions</th>
                </tr>
              </thead>

              <tbody>
                {paginatedUsers.map((u, i) => (
                  <tr key={u.id}>
                    <td className="fw-bold">{(currentPage - 1) * pageSize + i + 1}</td>
                    <td className="with-img">
                      <img src={u.avatar} className="rounded h-30px my-n1 mx-n1" />
                    </td>
                    <td>{u.name}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td>
                      {u.status === "Active" && <span className="badge bg-success">Active</span>}
                      {u.status === "Pending" && <span className="badge bg-warning">Pending</span>}
                      {u.status === "Inactive" && <span className="badge bg-secondary">Inactive</span>}
                    </td>
                    <td>
                      <button className="btn btn-primary btn-xs me-1" data-bs-toggle="modal" data-bs-target="#modal-dialog" onClick={() => openEdit(u)}><i className="fa fa-edit"></i></button>
                      <button className="btn btn-danger btn-xs"><i className="fa fa-trash"></i></button>
                    </td>
                  </tr>
                ))}

                {paginatedUsers.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center text-muted">No users found.</td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

          {/* PAGINATION */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              Showing <b>{paginatedUsers.length}</b> of <b>{filteredUsers.length}</b> users
            </div>

            <div className="btn-group">
              <button className="btn btn-default btn-sm" onClick={() => changePage(currentPage - 1)}>Prev</button>

              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  className={`btn btn-sm ${currentPage === idx + 1 ? "btn-primary" : "btn-default"}`}
                  onClick={() => changePage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}

              <button className="btn btn-default btn-sm" onClick={() => changePage(currentPage + 1)}>Next</button>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default UserManage;
