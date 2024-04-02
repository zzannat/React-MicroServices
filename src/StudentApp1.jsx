import React from 'react';
import './index.css'; 

export default function StudentApp1() {
  return (
    <div className="form-container">
      <form>
        <h1>Student Form</h1>
        <h1>Student Login Form</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="phoneNumber" name="phoneNumber" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
