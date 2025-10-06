import React from 'react'
import Time_recorder from '../Time_recorder/Time_recorder';


const Day = ({ date, show, onClose }) => {
  if (!date) return null;

  return (
    <>
      {show && (
        <>
          <div
            className="modal-backdrop fade show"
            style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1040 }}
          ></div>

          <div
            className="modal fade show"
            tabIndex="-1"
            role="dialog"
            style={{ display: "block", zIndex: 1050 }}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{date.toDateString()}</h5>
                  <button type="button" className="btn-close" onClick={onClose}></button>
                </div>
                <div className="modal-body">
                  <Time_recorder/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={onClose}>
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Day
