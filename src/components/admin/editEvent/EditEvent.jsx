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

  const navigate = useNavigate();

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("img", img);
      formData.append("title", title);
      formData.append("date", date);
      formData.append("time", time);
      formData.append("location", location);
      formData.append("detail", detail);

      await axios.post("/event", formData);
      navigate("/");
    } catch (err) {
      console.log(err.messgae);
      setError(err.message);
    } finally {
      setTitle("");
      setImg("");
      setDate("");
      setTime("");
      setLocation("");
      setDetail("");
    }
  };
  const handleFileUpload = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <div className="main-edit-event">
      <form onSubmit={handleSubmitEvent}>
        <h3>Create Event</h3>

        {/* Event Name */}
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">
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
        <div className="mb-3">
          <label for="eventImg" className="form-label">
            Event Image
          </label>
          <input
            className="form-control"
            type="file"
            id="eventImg"
            // value={img}
            onChange={handleFileUpload}
          />
        </div>

        {/* Event Date */}
        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">
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
          <label htmlFor="eventTime" className="form-label">
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
          <label htmlFor="eventLocation" className="form-label">
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
        <div className="mb-3">
          <label htmlFor="eventDetails" className="form-label">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditEvent;
