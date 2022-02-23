import { useState } from "react";
import "./SupportUs.css";

function SupportUs() {
  const [state, setState] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  const amount = (
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
        />
        <label
          className="btn btn-outline-danger amountDonate"
          htmlFor="btnradio1"
          onClick={(e) => setTotalAmount(e.target.value)}
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
        />
        <label
          className="btn btn-outline-danger amountDonate"
          htmlFor="btnradio2"
          onClick={(e) => setTotalAmount(e.target.value)}
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
        />
        <label
          className="btn btn-outline-danger amountDonate"
          htmlFor="btnradio3"
          onClick={(e) => setTotalAmount(e.target.value)}
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
        />
        <label
          className="btn btn-outline-danger amountDonate"
          htmlFor="btnradio4"
          onClick={(e) => setTotalAmount(e.target.value)}
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
                {amount}
              </>
            ) : (
              <>
                <p>How often would you like donate?</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Monthly</option>
                  <option value="1">Quarterly (every 3 months)</option>
                  <option value="2">Semi Annually (every 6 months)</option>
                </select>
                <br />
                <p>
                  Choose a <strong>monthly</strong> amount
                </p>
                {amount}
              </>
            )}

            {/* /////// Donate detail Recurring ///////*/}

            {/*///////// donate detail OneTime /////////*/}
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
              <div class="mb-3 imt-fname">
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

              <div class="mb-3 imt-lname">
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
            <div class="mb-3 imt-email">
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
            <div class="mb-3 imt-phoneNumber">
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
            <div className="card-donate">
              <button type="button" class="btn btn-danger">
                CREDIT CARD
              </button>
              <button type="button" class="btn btn-danger">
                DEBIT CARD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportUs;
