import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./TopPages.css";

export default function TopPages() {
  return (
    <Container fluid className="t-pages text-white py-5">
      <section>
        <Container
          className=" align-content-center"
          // style={{ height: "450px" }}
        >
          <div className="col-12 col-lg-8 mx-auto pe-md-5 ps-md-5">
            <div className="t-page">
              <h1>All-in-One Pricing. No Migration Costs.</h1>
              <div>
                <div>
                  p Unlike Stripe, FastSpring doesn’t add fees for each feature
                  you use on our platform. Instead, we offer simple, flat-rate
                  pricing that empowers you to manage payment processing,
                  subscriptions, global tax collection and remittance, localized
                  payment methods and currency — and much more.
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-center mt-4">
                  <a
                    href=""
                    className="btn btn-warning px-sm-5 me-sm-3 mb-3 mb-sm-0"
                  >
                    Try Now
                  </a>
                  <a href="" className="btn btn-primary px-sm-5">
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
}
