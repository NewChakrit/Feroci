import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import "./SupportUs.css";

let Omise;

function SupportUs() {
  const [state, setState] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const [email, setEmail] = useState("no0@gmail.com");
  const [description, setDescription] = useState("");
  const [card, setCard] = useState();
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("thb");
  const [customer, setcustomer] = useState(1);

  const navigate = useNavigate();

  const [paymentInfo, setPaymentInfo] = useState({
    number: "4242424242424242",
    name: "wewew",
    expiration_year: "2025",
    expiration_month: "12",
    security_code: "123",
  });

  useEffect(() => {
    Omise = window.Omise;
    Omise.setPublicKey("pkey_test_5qytc5t4rlxv4q1jxk8");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Omise.createToken("card", paymentInfo, async (statusCode, response) => {
        console.log(response);
        const res = await axios.post("/donate", {
          email,
          description,
          card: response.id,
          amount,
          currency,
          customer,
        });
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const amountDN = (
    <>
      <div
        className="btn-group amount-btn"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio1"
          id="btnradio1"
          autoComplete="off"
          value={32500}
          onClick={(e) => setTotalAmount(e.target.value)}
        />
        <label
          className="btn btn-outline-danger amountDonate"
          htmlFor="btnradio1"
        >
          $32500
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio1"
          id="btnradio2"
          autoComplete="off"
          value={16250}
          onClick={(e) => setTotalAmount(e.target.value)}
        />
        <label
          className="btn btn-outline-danger amountDonate"
          htmlFor="btnradio2"
        >
          $16250
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio1"
          id="btnradio3"
          autoComplete="off"
          value={8250}
          onClick={(e) => setTotalAmount(e.target.value)}
        />
        <label
          className="btn btn-outline-danger amountDonate"
          htmlFor="btnradio3"
        >
          $8250
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio1"
          id="btnradio4"
          autoComplete="off"
          value={3250}
          onClick={(e) => setTotalAmount(e.target.value)}
        />
        <label
          className="btn btn-outline-danger amountDonate"
          htmlFor="btnradio4"
        >
          $3250
        </label>

        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            THB
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Ohter"
            onChange={(e) => setTotalAmount(e.target.value)}
          />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="supportus">
        <div className="donate">
          <div className="main-donate">
            {/* header */}

            <div className="header-donate">
              <h1 className="header-donate-h1">Setting the Stage Fund</h1>
              <p style={{ marginBottom: "40px" }}>
                Help us emerge from the pandemic, reunite with our audience this
                fall, and return to a reimagined David Geffen Hall in Fall 2022.
                Please join us in Setting the Stage for the Philharmonic’s
                return. We need your help: play your part and make a gift today.{" "}
              </p>
            </div>

            {/* Type Donate */}
            <div className="type-donate">
              <div
                className="btn-group tp-donate"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                {/*  */}
                <input
                  type="radio"
                  className="btn-check "
                  name="btnradio"
                  id="btnradio1-type"
                  autoComplete="off"
                  onChange={() => setState(true)}
                />
                <label
                  className="btn btn-outline-danger"
                  htmlFor="btnradio1-type"
                >
                  ONE TIME
                </label>

                {/*  */}
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2-type"
                  autoComplete="off"
                  onChange={() => setState(false)}
                />
                <label
                  className="btn btn-outline-danger"
                  htmlFor="btnradio2-type"
                >
                  RECURRING
                </label>
              </div>
            </div>
            <br />

            {state ? (
              <>
                <div className="amount-title">
                  <p>
                    Choose a <strong>one-time</strong> amount
                  </p>
                </div>
                {amountDN}
              </>
            ) : (
              <>
                <p>How often would you like donate?</p>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Monthly</option>
                  <option value="1">Quarterly (every 3 months)</option>
                  <option value="2">Semi Annually (every 6 months)</option>
                </select>
                <br />
                <p>
                  Choose a <strong>monthly</strong> amount
                </p>
                {amountDN}
              </>
            )}
          </div>
          <hr style={{ marginTop: "40px" }} />

          {/* Your Information */}
          <div className="main-imt">
            <div className="imt-header">
              <h2 style={{ marginTop: "40px" }}>Your Information</h2>
            </div>
            <br />

            {/* imt Title */}
            <div className="imt-title" style={{ marginBottom: "30px" }}>
              <p>Title</p>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Please Select</option>
                <option value="1">Mr.</option>
                <option value="2">Ms.</option>
                <option value="3">Mrs.</option>
                <option value="4">Miss</option>
                <option value="5">Dr.</option>
              </select>
            </div>

            {/* imt fname lname */}
            <div className="imt-name" style={{ marginBottom: "20px" }}>
              <div className="mb-3 imt-fname">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  First Name <span className="red">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="mb-3 imt-lname">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Last Name <span className="red">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>

            {/* imt email */}
            <div className="mb-3 imt-email">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address <span className="red">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                style={{ marginBottom: "30px" }}
              />
              {/* <p style={{ marginBottom: "30px" }}>
                Your receipt will be emailed here.
              </p> */}
            </div>

            {/* imt phone number */}
            <div className="mb-3 imt-phoneNumber">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                style={{ marginBottom: "30px" }}
              />
            </div>

            {/* imt leave a comment */}
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Leave a comment
            </label>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100, marginBottom: "50px" }}
              ></textarea>
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
          </div>

          <hr />
          {/* total Donate */}
          <div className="total-donate">
            <div className="total-amount">
              {/* type donate */}
              {state ? (
                <p onChange={() => setState(true)}>One-time donation</p>
              ) : (
                <p onChange={() => setState(false)}>Monthly donation</p>
              )}

              <div className="amount-number">
                <h2>
                  {totalAmount} <span>THB</span>
                </h2>
              </div>
            </div>

            {/* how to donate */}

            {/* <!-- Button trigger modal --> */}
            <div className="card-donate">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                PAYMENT CARD
              </button>
            </div>
            {/* <!-- Modal --> */}
            <form onSubmit={handleSubmit}>
              <div
                className="modal fade modal-payment"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="staticBackdropLabel"
                        style={{ color: "#02a89e", fontWeight: 600 }}
                      >
                        Credit / Debit
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label style={{ padding: "5px" }}>Card Number</label>
                        <input
                          type="text"
                          dataName="cardNumber"
                          className="form-control"
                          placeholder="••••••••••••••••"
                        />
                      </div>

                      <div className="form-group">
                        <label style={{ padding: "5px" }}>Name on card</label>
                        <input
                          type="text"
                          dataName="nameOnCard"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="form-group ">
                        <label style={{ padding: "5px" }}>Expiry date</label>
                        <div className="row monthanddate-payment">
                          <div
                            className="col-xs-6 month-payment"
                            style={{ padding: "10px" }}
                          >
                            <select
                              className="form-control"
                              dataName="expiryMonth"
                            >
                              <option value="">MM</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                            </select>
                          </div>
                          <div
                            className="col-xs-6 date-payment"
                            style={{ padding: "10px" }}
                          >
                            <select
                              className="form-control"
                              dataName="expiryYear"
                            >
                              <option value="">YYYY</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              <option value="2021">2021</option>
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                              <option value="2025">2025</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label style={{ padding: "5px" }}>Security code</label>
                        <input
                          style={{ marginBottom: "20px" }}
                          type="text"
                          dataName="securityCode"
                          className="form-control"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <div className="modal-footer payment-footer">
                      <button
                        style={{ margin: "15px 0px 15px 0px" }}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Checkout 100.00 THB
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportUs;
