import React from "react";
import Container from "react-bootstrap/esm/Container";

export default function Footer() {
  return (
    <Container fluid className="bg-secondary pt-5 text-white">
      <section className="py-5  text-center">
        <Container className="container ">
          <h2 className="mb-4 fw-bold">Ready to get Started?</h2>
          <div className="d-flex flex-column flex-sm-row justify-content-center">
            <a href="" className="btn btn-warning px-sm-5 me-sm-3 mb-3 mb-sm-0">
              Try Now
            </a>
            <a href="" className="btn btn-primary px-sm-5">
              Schedule Demo
            </a>
          </div>
        </Container>
      </section>
      <section className="">
        <Container className="">
          <div className="row g-4  mx-auto">
            <div className="col-md-3 col-sm-6">
              <span className="fw-medium ">Products</span>
              <div className="">
                <ul className="list-unstyled">
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <span className="fw-medium">Products</span>
              <div className="">
                <ul className="list-unstyled">
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <span className="fw-medium">Products</span>
              <div className="">
                <ul className="list-unstyled">
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <span className="fw-medium">Products</span>
              <div className="">
                <ul className="list-unstyled">
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                      Global Payment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-3">
        <Container className="py-3 text-center">
          <div>
            <div className="fw-bold fst-italic">
              <p>powered By</p>
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
}
