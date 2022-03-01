import "./Performance.css";
import CardPerformance from "../../components/cardPerformance/CardPerformance";
import axios from "../../config/axios";
import { useEffect, useState } from "react";

function Performance() {
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    axios
      .get("/performance")
      .then((res) => {
        setPerformance(res.data.performance);
        console.log(res);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="main-performance">
        <div className="title-performance">
          <div className="text-title-per">
            <h2>
              <strong style={{ color: "#02a89e", fontWeight: 600 }}>
                Historic Performances
              </strong>
            </h2>
            <p>
              Enjoy decades of magnificent Feroci Philharmonic Orchestra
              concerts curated from decades of Live from Thialand Cultural
              Center telecasts and our popular Facebook Live broadcasts.
            </p>
          </div>
          <div className="pic-title-per">
            <img
              className="pic-per"
              src="https://nyphil.org/~/media/images/newsroom/1920/photo-gallery/jaap-van-zweden-action-by-chris-lee-full.jpg"
            />
          </div>
        </div>

        {/* video */}
        <hr className="per-hr" />

        <div className="main-video-performance">
          {performance.map((item) => {
            return (
              <CardPerformance
                key={item.id}
                performances={item}
                performance={performance}
                setPerformance={setPerformance}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Performance;
