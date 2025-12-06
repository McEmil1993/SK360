import React, { useState, useEffect } from "react";

const ModalForm = ({ modalId, title, fields, model, setModel, onSave }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
  }, [model]);

  // Validation engine
  const validate = () => {
    const newErrors = {};

    fields.forEach((field) => {
      const value = model[field.key];

      if (field.required && (!value || value?.toString().trim() === "")) {
        newErrors[field.key] = `${field.label} is required.`;
      }

      if (field.type === "email" && value) {
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailFormat.test(value)) {
          newErrors[field.key] = "Invalid email format.";
        }
      }

      if (field.minLength && value?.length < field.minLength) {
        newErrors[field.key] = `${field.label} must be at least ${field.minLength} characters.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    onSave();
  };

  const updateField = (key, value) => {
    setModel((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <div className="modal fade" id={modalId} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          {/* HEADER */}
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>

          {/* BODY */}
          <div className="modal-body">
            <div className="row">

              {fields.map((f, i) => (
                <div key={i} className={`mb-3 col-md-${f.col || 12}`}>
                  <label className="form-label">{f.label}</label>

                  {/* TEXT INPUTS */}
                  {["text", "email", "number", "password"].includes(f.type) && (
                    <input
                      type={f.type}
                      className={`form-control ${errors[f.key] ? "is-invalid" : ""}`}
                      value={model[f.key] || ""}
                      onChange={(e) => updateField(f.key, e.target.value)}
                    />
                  )}

                  {/* TEXTAREA */}
                  {f.type === "textarea" && (
                    <textarea
                      className={`form-control ${errors[f.key] ? "is-invalid" : ""}`}
                      rows={f.rows || 3}
                      value={model[f.key] || ""}
                      onChange={(e) => updateField(f.key, e.target.value)}
                    />
                  )}

                  {/* SELECT */}
                  {f.type === "select" && (
                    <select
                      className={`form-select ${errors[f.key] ? "is-invalid" : ""}`}
                      value={model[f.key] || ""}
                      onChange={(e) => updateField(f.key, e.target.value)}
                    >
                      <option value="">Select {f.label}</option>
                      {f.options?.map((op, idx) => (
                        <option key={idx} value={op.value || op}>
                          {op.label || op}
                        </option>
                      ))}
                    </select>
                  )}

                  {/* FILE UPLOAD */}
                  {f.type === "file" && (
                    <>
                      <input
                        type="file"
                        className="form-control"
                        accept={f.accept || "*"}
                        onChange={(e) => updateField(f.key, e.target.files[0])}
                      />

                      {/* Preview (if existing image path) */}
                      {model[f.key] && typeof model[f.key] === "string" && (
                        <img
                          src={model[f.key]}
                          className="img-thumbnail mt-2"
                          style={{ width: "120px" }}
                        />
                      )}
                    </>
                  )}

                  {/* ERROR MESSAGE */}
                  {errors[f.key] && (
                    <div className="invalid-feedback d-block">{errors[f.key]}</div>
                  )}
                </div>
              ))}

            </div>
          </div>

          {/* FOOTER */}
          <div className="modal-footer">
            <button className="btn btn-white" data-bs-dismiss="modal">
              Close
            </button>
            <button className="btn btn-success" onClick={handleSave}>
              Save
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModalForm;
