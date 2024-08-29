import React from "react";
import Container from "react-bootstrap/Container";
import TopPages from "./Components/TopPages";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./Pricing.css";
export default function Pricing() {
  return (
    <>
      <TopPages />
      <main className="main">
        <Container fluid>
          <section>
            <Container className="">
              <div className=" py-5 px-lg-5">
                <div className="">
                  <Row className="gy-4">
                    <Col lg={3} md={4} className="rounded-3 mt-4">
                      <div
                        className="shadow-lg rounded bg-light"
                        style={{ height: "100%" }}
                      >
                        <div
                          className="text-center rounded-top py-4 fw-bolder fst-italic text-white shadow-lg"
                          style={{ backgroundColor: "#084771" }}
                        >
                          <h2>1 PC</h2>
                        </div>
                        <div className="">
                          <ul className="text-start px-1 mb-4 list-unstyled">
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={4} className="rounded-3 mt-4">
                      <div
                        className="shadow-lg rounded bg-light"
                        style={{ height: "100%" }}
                      >
                        <div
                          className="text-center rounded-top py-4 fw-bolder fst-italic text-white shadow-lg"
                          style={{ backgroundColor: "#084771" }}
                        >
                          <h2>1 PC</h2>
                        </div>
                        <div className="">
                          <ul className="text-start px-1 mb-4 list-unstyled">
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={4} className="rounded-3 mt-4">
                      <div
                        className="shadow-lg rounded bg-light"
                        style={{ height: "100%" }}
                      >
                        <div
                          className="text-center rounded-top py-4 fw-bolder fst-italic text-white shadow-lg"
                          style={{ backgroundColor: "#084771" }}
                        >
                          <h2>1 PC</h2>
                        </div>
                        <div className="">
                          <ul className="text-start px-1 mb-4 list-unstyled">
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={4} className="rounded-3 mt-4">
                      <div
                        className="shadow-lg rounded bg-light"
                        style={{ height: "100%" }}
                      >
                        <div
                          className="text-center rounded-top py-4 fw-bolder fst-italic text-white shadow-lg"
                          style={{ backgroundColor: "#084771" }}
                        >
                          <h2>1 PC</h2>
                        </div>
                        <div className="">
                          <ul className="text-start px-1 mb-4 list-unstyled">
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                            <li className="px-2 text-decoration-underline">
                              Feature
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
          </section>
          <section className="mx-auto justify-content-center my-lg-5 py-lg-5">
            <Container className="">
              <div className="px-lg-5">
                <div className="pb-md-2 text-center">
                  <h2 className="fw-bold pt-4 d-none d-lg-block">
                    Compare Our Plan
                  </h2>
                  <h3 className="fs-5 d-none d-lg-block">
                    Simple pricing, no hidden charges.
                  </h3>
                </div>
                <div className="pt-1 table-responsive">
                  <table className="table table-bordered mx-auto mb-5 table-hover">
                    <thead className="sticky-top text-center shadow rounded table-primary text-white">
                      <tr className="" style={{ backgroundColor: "#084771" }}>
                        <th className="py-3 align-middle fs-5" scope="col">
                          Feature
                        </th>
                        <th className="py-3 fs-5" scope="col">
                          1 PC
                        </th>
                        <th className="py-3 fs-5" scope="col">
                          2 PC
                        </th>
                        <th className="py-3 fs-5" scope="col">
                          3 PC
                        </th>
                        <th className="py-3 fs-5" scope="col">
                          3+ PC
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr className="bg-danger table-light">
                        <th
                          scope="col"
                          colSpan="7"
                          className="text-start pt-5 mt-4 fs-5"
                        >
                          License Management
                        </th>
                      </tr>
                      <tr>
                        <th className="text-start fw-normal">Product</th>
                        <td>400$</td>
                        <td>400$</td>
                        <td>400$</td>
                        <td>400$</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Container>
          </section>
          <section className="mx-auto py-5 mt-5 px-1">
            <Container className="">
              <div className="px-lg-5">
                <div className="col-lg-8 col-12 mx-auto">
                  <h2 className="text-center mt-4 mb-4 fw-bold fst-italic">
                    Frequently Asked Questions
                  </h2>
                  <div className="row">
                    <div className="col-lg col-8 px-lg-3 px-1 mx-auto">
                      <article className="py-2">
                        <h3 className="fw-bold">How am I billed?</h3>
                        <p>
                          You are billed in advance on a monthly or a yearly
                          basis after the end of your trial.
                        </p>
                      </article>
                      <article className="py-2">
                        <h3 className="fw-bold">
                          What extra fees can I expect over the listed pricing?
                        </h3>
                        <p>
                          We do not have any hidden fees or charges. The only
                          surcharge over the listed prices are taxes, if and
                          where applicable.
                        </p>
                      </article>
                      <article className="py-2">
                        <h3 className="fw-bold">
                          What is a license activation?
                        </h3>
                        <p>
                          A license activation refers to the device of your
                          customer where the license is activated.
                        </p>
                      </article>
                      <article className="py-2">
                        <h3 className="fw-bold">
                          How are license activations counted?
                        </h3>
                        <p>
                          Each license you create is counted as an activation
                          irrespective of whether it is activated or not. If the
                          license allows more than one activation, then those
                          are only counted when used.
                        </p>
                      </article>
                    </div>
                    <div className="col-lg col-8 px-lg-3 px-1 mx-auto">
                      <article className="py-2">
                        <h3 className="fw-bold">
                          Are the license activations monthly?
                        </h3>
                        <p>
                          No, each license key can have one or more activations,
                          and the activations limit is total (not monthly).
                        </p>
                      </article>
                      <article className="py-2">
                        <h3 className="fw-bold">
                          Can I change my plan any time?
                        </h3>
                        <p>
                          Yes, you can upgrade or downgrade your plan any time.
                          For instance, you can start with the Developer plan
                          and upgrade when you need to.
                        </p>
                      </article>
                      <article className="py-2">
                        <h3 className="fw-bold">How do I cancel my account?</h3>
                        <p>
                          You can cancel your account any time through the
                          dashboard. If you cancel your account it will be put
                          in an inactive mode. This means you are no more
                          charged, but your users will still be able to activate
                          &amp; deactivate their product keys, which have
                          already been activated. You can re-enable your account
                          any time.
                        </p>
                      </article>
                      <article className="py-2">
                        <h3 className="fw-bold">Do you offer refunds?</h3>
                        <p>
                          No, we do not offer any refunds for monthly, or annual
                          payments.
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </Container>
      </main>
    </>
  );
}
