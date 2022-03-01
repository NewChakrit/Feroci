import "./Card.css";
import axios from "../../config/axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Card({ events, setEvent, event }) {
  const [title, setTitle] = useState(events.title);
  const [img, setImg] = useState(events.img);
  const [date, setDate] = useState(events.date);
  const [time, setTime] = useState(events.time);
  const [location, setLocation] = useState(events.location);
  const [detail, setDetail] = useState(events.detail);

  const { userData } = useContext(AuthContext);

  const handleDeleteEvent = async () => {
    try {
      const res = await axios.delete(`/event/${events.id}`);
      const newEvent = event.filter((item) => item.id !== events.id);
      setEvent(newEvent);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleEditEvent = async (e) => {
    e.preventDefault();
    try {
      const idx = event.findIndex((item) => item.id === events.id);
      const newEvent = [...event];

      const formData = new FormData();
      formData.append("img", img);
      formData.append("title", title);
      formData.append("date", date);
      formData.append("time", time);
      formData.append("location", location);
      formData.append("detail", detail);
      const res = await axios.patch(`/event/${events.id}`, formData);
      console.log(res.data.events);
      newEvent[idx] = res.data.events;
      setEvent(newEvent);
      // navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleFileUpload = (e) => {
    setImg(e.target.files[0]);
  };

  // date
  const dateEvent = events.date.split("-");

  // day event
  const eventDay = dateEvent[2];

  // month event
  let eventMonth = dateEvent[1];
  if (eventMonth === "01") {
    eventMonth = "Jan";
  } else if (eventMonth === "02") {
    eventMonth = "Feb";
  } else if (eventMonth === "03") {
    eventMonth = "Mar";
  } else if (eventMonth === "04") {
    eventMonth = "Apr";
  } else if (eventMonth === "05") {
    eventMonth = "May";
  } else if (eventMonth === "06") {
    eventMonth = "Jun";
  } else if (eventMonth === "07") {
    eventMonth = "Jul";
  } else if (eventMonth === "08") {
    eventMonth = "Aug";
  } else if (eventMonth === "09") {
    eventMonth = "Sep";
  } else if (eventMonth === "10") {
    eventMonth = "Oct";
  } else if (eventMonth === "11") {
    eventMonth = "Nov";
  } else {
    eventMonth = "Dac";
  }

  // year event
  const eventYear = dateEvent[0];

  // time
  const timeEvent = events.time.split(":");

  const eventHour = +timeEvent[0];
  const eventMinute = timeEvent[1];

  // am or pm
  let amOrPm = "AM";
  if (eventHour > 12) {
    amOrPm = "PM";
  }

  return (
    <div className="main-card">
      {userData.isAdmin ? (
        <div className="editndelete">
          {/* <!-- edit event btn --> */}

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal${events.id}`}
          >
            Edit
          </button>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id={`exampleModal${events.id}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <form onSubmit={handleEditEvent}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title hch" id="exampleModalLabel">
                      Edit Event
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body  hch">
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
                    <div className="mb-3 hch">
                      <label htmlFor="eventImg " className="form-label">
                        Event Image
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="eventImg"
                        onChange={handleFileUpload}
                      />
                    </div>

                    {/* Event Date */}
                    <div className="mb-3 hch">
                      <label htmlFor="eventDate " className="form-label">
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
                    <div className="mb-3 hch">
                      <label htmlFor="eventTime " className="form-label">
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
                    <div className="mb-3 hch">
                      <label htmlFor="eventLocation " className="form-label">
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
                    <div className="mb-3 hch">
                      <label htmlFor="eventDetails " className="form-label">
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
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* delete event btn */}

          <button
            onClick={handleDeleteEvent}
            type="button"
            className="btn btn-danger delete-btn"
          >
            Delete
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="article-card">
        <div className="d-img">
          <img className="event-img" src={events.img} alt="event image" />
        </div>

        {/* Header Detail */}
        <div className="card-detail">
          <div className="title-event-name">
            <div className="title-card-event-name">
              <h2 className="event-name-h2">{events.title}</h2>
            </div>
          </div>
          <div className="time-location">
            {/* Time */}

            <div className="card-tl">
              <h5 className="tilte-card-event">DATE & TIMES</h5>
              <div className="result-dt">
                {/* Date Event */}
                <div className="date-event-dmy">
                  <h2 className="date-event-d">{eventDay}</h2>
                  <div className="date-event-my">
                    <b className="m-event-dmy">{eventMonth}, </b>
                    <b className="y-event-dmy">{eventYear}</b>
                  </div>
                </div>

                {/* Time Event */}
                <div className="result-t">
                  <b>{`${eventHour}: `}</b>
                  <b>{eventMinute} </b>
                  <b style={{ marginLeft: "5px" }}> {amOrPm}</b>
                </div>
              </div>
            </div>
            {/* Location */}

            <div className="card-tl">
              <h5 className="tilte-card-event">LOCATION</h5>
              <p className="tilte-card-event-p">{events.location}</p>
            </div>
          </div>

          <div className="event-detail">
            <h5 className="tilte-card-event">EVENT INFO</h5>
            <p className="card-event-detail">{events.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

// const [eventItem, setEventItem] = useState([]);
