import "./EditEvent.css";
import axios from "../../../config/axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "../../../contexts/ErrorContext";

function EditEvent() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [detail, setDetail] = useState("");

  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate;

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const res = await axios.post("/event", {
        title,
        img,
        date,
        time,
        location,
        detail,
      });
      navigate("/event");
    } catch (err) {
      console.log(err.response.data.messgae);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="main-edit-event">
      <form onSubmit={handleSubmitEvent}>
        <h3>Create Event</h3>

        {/* Event Name */}
        <div className="mb-3">
          <label htmlFor="eventName" class="form-label">
            Event Name
          </label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            placeholder="Event Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Event Image */}
        <div class="mb-3">
          <label for="eventImg" class="form-label">
            Event Image
          </label>
          <input
            class="form-control"
            type="file"
            id="eventImg"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        {/* Event Date */}
        <div className="mb-3">
          <label htmlFor="eventDate" class="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Event Time */}
        <div className="mb-3">
          <label htmlFor="eventTime" class="form-label">
            Time
          </label>
          <input
            type="time"
            className="form-control"
            id="eventTime"
            placeholder="Date"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        {/* Event Location */}
        <div className="mb-3">
          <label htmlFor="eventLocation" class="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="eventLocation"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Event Details */}
        <div class="mb-3">
          <label htmlFor="eventDetails" class="form-label">
            Event Details
          </label>
          <textarea
            className="form-control"
            id="eventDetails"
            rows="4"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
        </div>

        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditEvent;
