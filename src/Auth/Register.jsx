import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

export default function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();

    fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <section className="w-100">
        <Container className="w-100">
          <div className="pxl-lg-5 w-100 align-items-center justify-content-center">
            <div className="card shadow-sm p-3 mb-5 rounded col-lg-7 col m-auto">
              <div className="card-body">
                <h2 className="text-center mb-4">Create an Account</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Register
                  </button>
                  <div className="text-center mt-2">
                    <small>
                      Already have an account?{" "}
                      <a href="/login" className="text-decoration-none">
                        Login
                      </a>
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
}
