import React from "react";

const DeleteConfirmModal = ({ modalId, item, onConfirm }) => {
  return (
    <div className="modal fade" id={modalId} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Confirm Delete</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body text-cente">
            <p className="fs-5">
              Are you sure you want to delete <b>{item?.name}</b>?
            </p>
            {/* <p className="text-muted">This action cannot be undone.</p> */}
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>

            <button
              className="btn btn-danger"
              onClick={() => {
                onConfirm(item);
                document.getElementById(modalId)?.querySelector(".btn-close")?.click();
              }}
            >
              Yes, Delete
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
