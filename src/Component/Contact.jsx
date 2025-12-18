import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Sectionheadtitle from './Layout/Sectionheadtitle';

export default function Contact() {
    const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted! Check console for data.");
  };
  return (
    <>
      <div className="contact-section bg-h text-white py-5">
      <Sectionheadtitle title="Contact Me" />
      <div className="container text-start mt-4">
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingName"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingAge"
            label="Age"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="Enter your age"
              name="userAge"
              value={formData.userAge}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="userPassword"
              value={formData.userPassword}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <button type="submit" className="submit-btn btn btn-primary mt-3" onClick={handleSubmit}>
          Send Massge
        </button>
        </Form>
        
      </div>
    </div>
    </>
  )
}