import "./EditPerformance.css";
import axios from "../../../config/axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "../../../contexts/ErrorContext";

function EditPerformance() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [img, setImg] = useState("");

  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate;

  const handleSubmitPerformance = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const res = await axios.post("/performance", {
        title,
        detail,
        img,
      });
      navigate("/performance");
    } catch (err) {
      console.log(err.response.data.messgae);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="main-edit-performance">
      <h3>Create Performance</h3>
      <form onSubmit={handleSubmitPerformance} className="performance-form">
        {/* Performance Name */}

        <div className="mb-3">
          <label htmlFor="performanceName" class="form-label">
            Performance Name
          </label>
          <input
            type="text"
            className="form-control"
            id="performanceName"
            placeholder="Performance Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Perforrmance Image */}
        <div class="mb-3">
          <label for="performanceImg" class="form-label">
            Performance Image
          </label>
          <input
            class="form-control"
            type="file"
            id="performanceImg"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        {/* Performance video */}
        <div class="mb-3">
          <label for="performanceLink" class="form-label">
            Performance Youtube Link
          </label>
          <input
            class="form-control"
            type="text"
            id="performanceLink"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditPerformance;
