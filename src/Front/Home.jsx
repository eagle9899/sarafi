import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

import Button from "react-bootstrap/esm/Button";

export default function Home() {
  return (
    <>
      <section className="bg-secondary h-auto">
        <Container className="">
          <Container className="py-5 text-white">
            <div className="row g-2 justify-content-center py-5 mx-auto">
              <div className="col-md-5">
                <h1>All-in-one payment & subscription platform</h1>
                <div>Worldwide sales tax compliance included</div>
                <div>
                  Go global with confidence with FastSpring’s managed payments
                  and subscriptions platform, exclusively designed for SaaS,
                  software, video games, and online content. We manage all
                  payments, subscriptions, and global sales taxes for you,
                  allowing you to grow farther, faster.{" "}
                </div>
                <div className="pt-3">
                  <div className="d-flex flex-column flex-sm-row">
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
                <div className="row g-4 mt-5">
                  <div className="col-md-6">
                    <div>$2B+</div>
                    <div>Transaction since 2022</div>
                  </div>
                  <div className="col-md-6">
                    <div>$2B+</div>
                    <div>Transaction since 2022</div>
                  </div>
                  <div className="col-md-6">
                    <div>$2B+</div>
                    <div>Transaction since 2022</div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 align-content-center">
                <div className="w-auto h-auto">
                  <img
                    className="w-25 h-25"
                    src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </section>

      <div className="">
        <main className="main">
          <section className="features my-5">
            <Container className="">
              <div className="px-lg-5">
                <h2 className="mb-4 fw-bold text-center">
                  FastSpring Powers Your Businesses{" "}
                </h2>
                <Row className="g-4">
                  <Col lg={4} md={6} className="">
                    <Card
                      style={{ height: "100%", width: "100%" }}
                      className="shadow feature"
                    >
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>
                          <i className="fas fa-lock me-3" />
                          Secure Payments
                        </Card.Title>
                        <Card.Text>
                          Protect your customers' sensitive information with our
                          secure payment processing.
                        </Card.Text>
                        <div className="mt-auto d-flex bottom-0">
                          <Card.Link href="#" className="bottom-0 mt-aut">
                            Card Link
                          </Card.Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} md={6} className="">
                    <Card
                      style={{ height: "100%", width: "100%" }}
                      className="shadow feature"
                    >
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>
                          <i className="fas fa-chart-line me-3" />
                          Real-time Analytics
                        </Card.Title>

                        <Card.Text>
                          Track your sales, revenue, and customer behavior in
                          real-time with our intuitive analytics dashboard.
                        </Card.Text>
                        <div className="mt-auto">
                          <Card.Link href="#">Card Link</Card.Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} md={6} className="">
                    <Card
                      style={{ height: "100%", width: "100%" }}
                      className="shadow feature"
                    >
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>
                          <i className="fas fa-globe me-3" />
                          Global Reach
                        </Card.Title>

                        <Card.Text>
                          Reach customers worldwide with our support for
                          multiple currencies, languages, and payment methods.
                        </Card.Text>
                        <div className="mt-auto">
                          <Card.Link href="#">Card Link</Card.Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>

          <section className="features my-5">
            <Container className="">
              <div className="px-lg-5">
                <h2 className="mb-4 fw-bold text-center">
                  Asan Sarafi Properties
                </h2>
                <Row className="g-4">
                  <Col lg={4} md={6} className="">
                    <Card
                      style={{ height: "100%", width: "100%" }}
                      className="shadow feature p-0"
                    >
                      <Card.Img
                        variant="top"
                        src="https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg"
                        className="w-100"
                      />
                      <Card.Body className="p-4">
                        <Card.Subtitle className="mb-2 text-muted">
                          Card Subtitle
                        </Card.Subtitle>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                {/* <div className="row">
                    <div className="col-md-4">
                      <div className="feature shadow py-4">
                        <i className="fas fa-globe" />
                        <h3>Global Reach</h3>
                        <p>
                          Reach customers worldwide with our support for
                          multiple currencies, languages, and payment methods.
                        </p>
                        <a href="">link</a>
                      </div>
                    </div>
                  </div> */}
              </div>
            </Container>
          </section>

          <section className="features my-5">
            <Container className="">
              <div className="px-lg-5">
                <h2 className="mb-4 fw-bold text-center">
                  Who FastSpring Serves
                </h2>
                <div className="row gy-4 gutters-20">
                  <div className="col-md-6">
                    <div className="serve">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-chart-simple pe-2"></i>
                        <h4 className="fw-bold">SaaS/AI</h4>
                      </div>
                      <div className="mt-4">
                        Grow both your online Product Led Growth (PLG) and Sales
                        Led channels with powerful subscription management,
                        extensive payments support, and revenue-boosting B2B
                        capabilities in one platform
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="serve">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-chart-simple pe-2"></i>
                        <h4 className="fw-bold">SaaS/AI</h4>
                      </div>
                      <div className="mt-4">
                        Grow both your online Product Led Growth (PLG) and Sales
                        Led channels with powerful subscription management,
                        extensive payments support, and revenue-boosting B2B
                        capabilities in one platform
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="serve">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-chart-simple pe-2"></i>
                        <h4 className="fw-bold">SaaS/AI</h4>
                      </div>
                      <div className="mt-4">
                        Grow both your online Product Led Growth (PLG) and Sales
                        Led channels with powerful subscription management,
                        extensive payments support, and revenue-boosting B2B
                        capabilities in one platform
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="call-to-action my-5">
            <Container>
              <div className="px-lg-5">
                <h2 className="mb-4 text-center">
                  Ready to grow your business?
                </h2>
                <button className="btn btn-primary btn-lg">Get Started</button>
              </div>
            </Container>
          </section>

          <section className="features text-start my-5">
            <Container className="">
              <div className="px-lg-5">
                <div>
                  <span className="text-warning fw-medium">
                    EXPLORE OUR PLATFORM
                  </span>
                  <h2 className="mb-4 fw-bold">
                    Everything you need to sell <br />
                    globally & stay tax compliant
                  </h2>
                </div>
                <div className="row gy-4 gutters-20 align-items-center">
                  <div className="col-md-6">
                    <div className="serve">
                      <div>
                        <dl>
                          <dt>Global Online Payments </dt>
                          <dd>
                            FastSpring’s global platform delivers higher credit
                            card approval rates for purchases around the world.
                            <a href="" className="d-block">
                              LEARN MORE ABOUT GLOBAL ONLINE PAYMENTS{" "}
                            </a>
                          </dd>
                          <dt>Global Online Payments </dt>
                          <dd>
                            FastSpring’s global platform delivers higher credit
                            card approval rates for purchases around the world.
                            <a href="" className="d-block">
                              LEARN MORE ABOUT GLOBAL ONLINE PAYMENTS{" "}
                            </a>
                          </dd>
                          <dt>Global Online Payments </dt>
                          <dd>
                            FastSpring’s global platform delivers higher credit
                            card approval rates for purchases around the world.
                            <a href="" className="d-block">
                              LEARN MORE ABOUT GLOBAL ONLINE PAYMENTS{" "}
                            </a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="serve">
                      <div className="w-auto h-auto align-content-center align-items-center justify-content-center">
                        <img
                          className="w-25 h-25 align-content-center align-items-center justify-content-center"
                          src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          <section className="call-to-action my-5">
            <Container className="px-md-5 ">
              <div className="w-75 mx-auto px-lg-5">
                <div className="">
                  <h2 className="mb-4">
                    We manage everything related to payments, freeing you to
                    focus on what you do best — building great products.
                  </h2>
                </div>
                <div className="row g-5">
                  <div className="col">
                    <div>
                      <i className="fa fa-face"></i>
                      <p>curriency</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <i className="fa fa-face"></i>
                      <p>curriency</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <i className="fa fa-face"></i>
                      <p>curriency</p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          <section className="my-5">
            <Container className="">
              <div className=" text-center px-lg-5">
                <h2>Learn to Use Asan Sarafi</h2>
                <div className="mt-4">
                  <iframe
                    className="w-100"
                    style={{ height: "90vh" }}
                    src="https://www.youtube.com/embed/WsA7h6KuC6s"
                    title="Nigina Amonqulova - Meraqsa Dilam | نگینه امانقلوا - میرقصه دلم"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Container>
          </section>

          <section className="wave-machine wave-machine-purple ">
            <Container>
              <div className="panda panda-elata">
                <div className="px-lg-5 col-lg-8 align-items-center justify-content-center mx-auto">
                  <div className="panda-content">
                    <h2>
                      Find Out Why FastSpring is the Better Way to Grow Software
                      Sales{" "}
                    </h2>

                    <p></p>

                    <div className="d-flex flex-column flex-sm-row justify-content-center">
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
        </main>
      </div>

      {/* <Container fluid className="mt5 bg-opacity-100 bg-body">
        <Container className="mt5 md:px-2 px-5">
          <div className="mt-5 pt-4">
            <div>
              <h1>FastSpring Powers Your Businesses </h1>
            </div>
            <div className="row text-start">
              <div className="col-lg-4 col-md-6">
                <Card className="p-5 shadow-lg rounded-3">
                  <Card.Body>
                    <div className="text-start font-monospace fs-1 text-primary mb-2">
                      <i className="fa-solid fa-arrow-up-right-dots"></i>
                    </div>
                    <Card.Title className="fw-bold">
                      Accelerate Growth Upsells, cross-sells, upgra
                    </Card.Title>
                    <Card.Text>
                      Upsells, cross-sells, upgrades, and unique subscription
                      options — FastSpring has the tools you need to increase
                      recurring revenue.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6">
                <Card className="p-5 shadow-lg rounded-3">
                  <Card.Body>
                    <div className="text-start font-monospace fs-1 text-primary mb-2">
                      <i className="fa-solid fa-arrow-up-right-dots"></i>
                    </div>
                    <Card.Title className="fw-bold">
                      Accelerate Growth Upsells, cross-sells, upgra
                    </Card.Title>
                    <Card.Text>
                      Upsells, cross-sells, upgrades, and unique subscription
                      options — FastSpring has the tools you need to increase
                      recurring revenue.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6">
                <Card className="p-5 shadow-lg rounded-3">
                  <Card.Body>
                    <div className="text-start font-monospace fs-1 text-primary mb-2">
                      <i className="fa-solid fa-arrow-up-right-dots"></i>
                    </div>
                    <Card.Title className="fw-bold">
                      Accelerate Growth Upsells, cross-sells, upgra
                    </Card.Title>
                    <Card.Text>
                      Upsells, cross-sells, upgrades, and unique subscription
                      options — FastSpring has the tools you need to increase
                      recurring revenue.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Container> */}
    </>
  );
}
