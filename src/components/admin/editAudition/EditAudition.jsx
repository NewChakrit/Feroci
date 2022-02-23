import "./EditAudition.css";
import axios from "../../../config/axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "../../../contexts/ErrorContext";
import "react-quill/dist/quill.snow.css";

function EditAudition() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate;

  const handleSubmitAudition = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const res = await axios.post("/audition", {
        title,
        detail,
      });
      navigate("/audition");
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data.messgae);
    }
  };

  return (
    <div className="main-edit-audition">
      <h3>Create Audition</h3>
      <form className="audition-form" onSubmit={handleSubmitAudition}>
        {/* Audition Name */}
        <div className="mb-3">
          <label htmlFor="auditionName" class="form-label">
            Season Number
          </label>
          <input
            type="number"
            className="form-control"
            id="auditionName"
            placeholder="Season Number"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Audition Image */}
        {/* <div class="mb-3">
        <label for="auditionImg" class="form-label">
          Audition Image
        </label>
        <input class="form-control" type="file" id="auditionImg" />
      </div> */}

        {/* Audition Details */}

        <div class="mb-3">
          <label htmlFor="eventDetails" class="form-label">
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
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditAudition;
