import "./AuditionForm.css";

function AuditionForm() {
  return (
    <div className="container-audition-form">
      <div className="main-audition-form">
        <h2>Audition Form</h2>
        <h4>Personal Information</h4>

        {/* Name */}
        <form>
          <label htmlFor="auditionName" className="form-label">
            Name
          </label>
          <div className="form-row">
            <div className="col audition-name">
              <input
                type="text"
                id="auditionName"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col audition-name">
              <input
                type="text"
                id="auditionName"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
        </form>

        {/* Email address */}
        <div className="mb-3" style={{ marginTop: "15px" }}>
          <label htmlFor="emailAddress" className="form-label">
            Email Address
          </label>
          <input
            className="form-control"
            type="email"
            id="emailAddress"
            placeholder="Email"
          />
        </div>

        {/* Cell Phone */}
        <div className="mb-3">
          <label htmlFor="phoneNum" className="form-label">
            Phone Number
          </label>
          <input
            className="form-control"
            type="number"
            id="phoneNum"
            placeholder="Phone Number"
          />
        </div>

        {/* Primary Instrument */}
        <div className="mb-3">
          <label className="form-label">Primary instrument</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Options
              </label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
              <option className="option-instrument" selected>
                Instrument...
              </option>
              <option className="option-instrument" value="Clarinet">
                Clarinet
              </option>
              <option className="option-instrument" value="Flute">
                Flute
              </option>
              <option className="option-instrument" value="Oboe">
                Oboe
              </option>
              <option className="option-instrument" value="Bassoon">
                Bassoon
              </option>
              <option className="option-instrument" value="AltoSaxophone">
                Alto Saxophone
              </option>
              <option className="option-instrument" value="Tenor Saxophone">
                Tenor Saxophone
              </option>
              <option className="option-instrument" value="French Horn">
                French Horn
              </option>
              <option className="option-instrument" value="Trumpet">
                Trumpet
              </option>
              <option className="option-instrument" value="Trumpet">
                Trumpet
              </option>
              <option className="option-instrument" value="Trombone">
                Trombone
              </option>
              <option className="option-instrument" value="Euphonium">
                Euphonium
              </option>
              <option className="option-instrument" value="Tuba">
                Tuba
              </option>
              <option className="option-instrument" value="Percussion">
                Percussion
              </option>
            </select>
          </div>
        </div>

        {/* repertoire */}
        <div className="mb-3">
          <label htmlFor="repertoire" className="form-label">
            Examples of repertoire (etudes or solo pieces) studied or performed
          </label>
          <textarea
            className="form-control"
            id="repertoire"
            rows="4"
          ></textarea>
        </div>

        {/*ensemble experience  */}
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Please list any other ensemble experience, such as membership in{" "}
            <br />
            community or youth orchestras, All-County Orchestra, District or
            All-State <br /> Orchestra, chamber music groups, etc.
          </label>
          <textarea
            className="form-control"
            id="experience"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          style={{ marginTop: "30px" }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AuditionForm;
