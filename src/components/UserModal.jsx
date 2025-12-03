import React, { useState, useEffect } from "react";

const UserModal = ({ modalId, title, user, setUser, onSave }) => {
  const [errors, setErrors] = useState({});

  // Reset errors when modal opens or user changes
  useEffect(() => {
    setErrors({});
  }, [user]);

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!user.name?.trim()) newErrors.name = "Full name is required.";
    else if (user.name.length < 3)
      newErrors.name = "Name must be at least 3 characters.";

    if (!user.username?.trim()) newErrors.username = "Username is required.";
    else if (user.username.length < 4)
      newErrors.username = "Username must be at least 4 characters.";

    if (!user.email?.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email))
      newErrors.email = "Enter a valid email.";

    if (!user.role?.trim()) newErrors.role = "Role is required.";

    if (!user.status?.trim()) newErrors.status = "Status is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SAVE HANDLER
  const handleSave = () => {
    if (!validate()) return;
    onSave();
  };

  // Helper for input updates
  const updateField = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="modal fade" id={modalId} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">

            {/* NAME */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={user.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* USERNAME */}
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                value={user.username}
                onChange={(e) => updateField("username", e.target.value)}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={user.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            {/* ROLE */}
                <div className="mb-3">
                <label className="form-label">Role</label>
                <select
                    className={`form-select ${errors.role ? "is-invalid" : ""}`}
                    value={user.role}
                    onChange={(e) => updateField("role", e.target.value)}
                >
                    <option value="">Select role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>

                {errors.role && (
                    <div className="invalid-feedback">{errors.role}</div>
                )}
                </div>

            {/* STATUS */}
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select
                className={`form-select ${errors.status ? "is-invalid" : ""}`}
                value={user.status}
                onChange={(e) => updateField("status", e.target.value)}
              >
                <option value="">Select status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
              {errors.status && (
                <div className="invalid-feedback">{errors.status}</div>
              )}
            </div>

          </div>

          <div className="modal-footer">
            <button className="btn btn-white" data-bs-dismiss="modal">Close</button>
            <button className="btn btn-success" onClick={handleSave}>Save</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserModal;
