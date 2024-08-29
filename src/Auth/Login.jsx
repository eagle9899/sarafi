import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

export default function Login() {
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
            <div className="card shadow-sm p-3 mb-5 bg-body rounded col col-lg-7 mx-auto">
              <div className="card-body">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleForm}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="Enter username"
                      value={data.email}
                      onChange={handleChange}
                      name="email"
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
                      placeholder="Enter password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                  <div className="text-end mt-2">
                    <a href="#" className="text-decoration-none">
                      Forgot password?
                    </a>
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
