import "./CardPerformance.css";
import axios from "../../config/axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function CardPerformance({ performance, performances, setPerformance }) {
  const [title, setTitle] = useState(performances.title);
  const [detail, setDetail] = useState(performances.detail);

  const { userData } = useContext(AuthContext);

  const handleDeletePerformance = async (e, id) => {
    try {
      const res = await axios.delete(`/performance/${performances.id}`);
      const newPerformance = performance.filter(
        (item) => item.id !== performances.id
      );
      setPerformance(newPerformance);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUpdatePerformance = async (e) => {
    e.preventDefault();

    try {
      const idx = performance.findIndex((item) => item.id === performances.id);
      const newPerformance = [...performance];
      const res = await axios.patch(`/performance/${performances.id}`, {
        title,
        detail,
      });

      newPerformance[idx] = res.data.performances;
      setPerformance(newPerformance);
      // console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container-performance">
      {userData.isAdmin ? (
        <div className="ed-performance">
          {/* Edit Performance btn */}
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="btn btn-primary btn-edit-per"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal${performances.id}`}
          >
            Edit
          </button>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id={`exampleModal${performances.id}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <form
              onSubmit={handleUpdatePerformance}
              className="performance-form"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Edit Performance
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* Performance Name */}

                    <div className="mb-3">
                      <label htmlFor="performanceName" className="form-label">
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

                    {/* Performance video */}
                    <div className="mb-3">
                      <label htmlFor="performanceLink" className="form-label">
                        Performance Youtube Link
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="performanceLink"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                      />
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
            // onClick={handleDeletePerformance}
            type="button"
            className="btn btn-danger"
            onClick={handleDeletePerformance}
          >
            Delete
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="main-cpm">
        <div className="video-yt">
          <iframe
            width="440"
            height="240"
            src={`https://www.youtube.com/embed/${
              performances.detail.split("?v=")[1]
            }`}
          ></iframe>
        </div>
        <h6 className="video-title">{performances.title}</h6>
      </div>
    </div>
  );
}

export default CardPerformance;
