import React from 'react';

const UpdateCourse = ({ onClose }) => {
  return (
    <div className="update-course-modal">
      <div className="update-course-content">
        <h2>Update Course</h2>
        <div className="course-info">
          <p>Web Development</p>
          <input type="text" placeholder="Search" />
          <textarea placeholder="Detail"></textarea>
        </div>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="update-button">Update</button>
        </div>
      </div>
    </div>
  );
};
export default UpdateCourse;