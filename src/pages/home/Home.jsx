import Card from "../../components/card/Card";
import "./Home.css";
import axios from "../../config/axios";
import { useState, useEffect } from "react";

function Home() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get("event")
      .then((res) => {
        setEvent(res.data.event);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="main-home">
        <img
          src="https://res.cloudinary.com/do58tgs2e/image/upload/v1644938096/home_v5_kuvvpo.jpg"
          alt=""
        />
      </div>
      <h1 className="header-event">Events</h1>
      <div className="home-card">
        {event.map((item) => {
          return (
            <Card
              key={item.id}
              events={item}
              setEvent={setEvent}
              event={event}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
