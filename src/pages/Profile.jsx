import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullname: "Admin User",
    email: "admin@example.com",
    username: "admin",
    image: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({});
  const [pwErrors, setPwErrors] = useState({});
  const [showPw, setShowPw] = useState({
    current: false,
    newPass: false,
    confirmPass: false,
  });

  // Handle Image Upload
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // Save Profile
  const saveProfile = () => {
    let newErrors = {};
    if (!profile.fullname) newErrors.fullname = "Full name is required.";
    if (!profile.email) newErrors.email = "Email is required.";
    if (!profile.username) newErrors.username = "Username is required.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Profile saved!");
    }
  };

  // Save Password
  const savePassword = () => {
    let pwErr = {};
    if (!passwords.current) pwErr.current = "Enter your current password.";
    if (!passwords.newPass) pwErr.newPass = "Enter a new password.";
    if (passwords.newPass !== passwords.confirmPass)
      pwErr.confirmPass = "Passwords do not match.";
    setPwErrors(pwErr);

    if (Object.keys(pwErr).length === 0) {
      alert("Password changed!");
    }
  };

  return (
    <MainLayout>

      <h1 className="page-header">Profile <small>manage your account</small></h1>

      {/* PROFILE PANEL */}
      <div className="panel panel-inverse p-3" style={{ borderRadius: "5px" }}>
        <h5 className="mb-3 fw-bold">Profile Information</h5>

        <div className="row g-3">

          {/* FULLNAME */}
          <div className="col-md-4">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
              value={profile.fullname}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, fullname: e.target.value }))
              }
            />
            {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
          </div>

          {/* EMAIL */}
          <div className="col-md-4">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={profile.email}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* USERNAME */}
          <div className="col-md-4">
            <label className="form-label">Username</label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              value={profile.username}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>

          {/* IMAGE AREA */}
          <div className="col-md-3 d-flex flex-column align-items-center">

            {/* CIRCLE PREVIEW */}
            <div
              className="rounded-circle border mb-2"
              style={{
                width: "120px",
                height: "120px",
                overflow: "hidden",
                background: "#f5f5f5",
              }}
            >
              {profile.image ? (
                <img
                  src={profile.image}
                  alt="profile"
                  className="img-fluid h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="d-flex justify-content-center align-items-center h-100 text-muted">
                  No Image
                </div>
              )}
            </div>

            {/* CUSTOM UPLOAD BOX LIKE SAMPLE */}
            <label
              htmlFor="uploadImage"
              className="w-100 p-2 text-center border rounded"
              style={{
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Choose profile image
            </label>

            <input
              id="uploadImage"
              type="file"
              accept="image/*"
              hidden
              onChange={handleImage}
            />
          </div>

          {/* SAVE BUTTON */}
          <div className="col-md-9 d-flex align-items-end justify-content-end">
            <button className="btn btn-success px-4" onClick={saveProfile}>Save</button>
          </div>

        </div>
      </div>

      {/* PASSWORD PANEL */}
      <div className="panel panel-inverse p-3 mt-4" style={{ borderRadius: "5px" }}>
        <h5 className="mb-3 fw-bold">Change Password</h5>

        <div className="row g-3">

          {/* CURRENT PASSWORD */}
          <div className="col-md-4">
            <label className="form-label">Current Password</label>
            <div className="input-group">
              <input
                type={showPw.current ? "text" : "password"}
                className={`form-control ${pwErrors.current ? "is-invalid" : ""}`}
                value={passwords.current}
                onChange={(e) =>
                  setPasswords((p) => ({ ...p, current: e.target.value }))
                }
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() =>
                  setShowPw((s) => ({ ...s, current: !s.current }))
                }
              >
                {showPw.current ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
              </button>
              {pwErrors.current && (
                <div className="invalid-feedback d-block">{pwErrors.current}</div>
              )}
            </div>
          </div>

          {/* NEW PASSWORD */}
          <div className="col-md-4">
            <label className="form-label">New Password</label>
            <div className="input-group">
              <input
                type={showPw.newPass ? "text" : "password"}
                className={`form-control ${pwErrors.newPass ? "is-invalid" : ""}`}
                value={passwords.newPass}
                onChange={(e) =>
                  setPasswords((p) => ({ ...p, newPass: e.target.value }))
                }
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() =>
                  setShowPw((s) => ({ ...s, newPass: !s.newPass }))
                }
              >
                {showPw.newPass ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
              </button>
              {pwErrors.newPass && (
                <div className="invalid-feedback d-block">{pwErrors.newPass}</div>
              )}
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="col-md-4">
            <label className="form-label">Confirm Password</label>
            <div className="input-group">
              <input
                type={showPw.confirmPass ? "text" : "password"}
                className={`form-control ${pwErrors.confirmPass ? "is-invalid" : ""}`}
                value={passwords.confirmPass}
                onChange={(e) =>
                  setPasswords((p) => ({ ...p, confirmPass: e.target.value }))
                }
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() =>
                  setShowPw((s) => ({ ...s, confirmPass: !s.confirmPass }))
                }
              >
                {showPw.confirmPass ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
              </button>
              {pwErrors.confirmPass && (
                <div className="invalid-feedback d-block">{pwErrors.confirmPass}</div>
              )}
            </div>
          </div>

          {/* NOTES */}
          <div className="col-12">
            <div className="p-3 border rounded" style={{ borderRadius: "20px", background: "#fafafa" }}>
              <strong>Note:</strong><br />
              - Your new password must be at least 8 characters long.<br />
              - Avoid using common passwords.<br />
              - Never share your password with anyone.<br />
            </div>
          </div>

          {/* SAVE BUTTON */}
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-success px-4" onClick={savePassword}>
              Save
            </button>
          </div>

        </div>
      </div>

    </MainLayout>
  );
};

export default Profile;
