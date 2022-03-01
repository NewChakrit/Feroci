import "./EditAudition.css";
import axios from "../../../config/axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "../../../contexts/ErrorContext";
import "react-quill/dist/quill.snow.css";

function EditAudition() {
  const [season, setSeason] = useState("");
  const [year, setYear] = useState("");
  const [detail, setDetail] = useState("");

  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate();

  const handleSubmitAudition = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const res = await axios.post("/audition", {
        season,
        year,
        detail,
      });
      navigate("/audition");
    } catch (err) {
      setError(err.message);
      console.log(err.messsage);
    }
  };

  return (
    <div className="main-edit-audition">
      <h3>Create Audition</h3>
      <form className="audition-form" onSubmit={handleSubmitAudition}>
        {/* Audition Name */}
        <div className="mb-3">
          <label htmlFor="auditionName" className="form-label">
            Season Number
          </label>
          <input
            type="number"
            className="form-control"
            id="auditionName"
            placeholder="Season Number"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="auditionName" className="form-label">
            Year
          </label>
          <input
            type="number"
            className="form-control"
            id="auditionName"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        {/* Audition Image */}
        {/* <div className="mb-3">
        <label htmlFor="auditionImg" className="form-label">
          Audition Image
        </label>
        <input className="form-control" type="file" id="auditionImg" />
      </div> */}

        {/* Audition Details */}

        <div className="mb-3">
          <label htmlFor="eventDetails" className="form-label">
            Event Details
          </label>
          <textarea
            className="form-control"
            id="eventDetails"
            rows="10"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditAudition;
