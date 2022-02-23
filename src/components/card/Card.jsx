import "./Card.css";

function Card() {
  return (
    <div className="main-card">
      <article className="article-card">
        <div className="img-box">
          <img
            src="https://res.cloudinary.com/do58tgs2e/image/upload/v1644747658/event1_dsnwrb.jpg"
            alt=""
            className="article-banner"
          />
        </div>

        <div className="article-content">
          <a href="#">
            <h3 className="article-title">Lorem ipsum dolor sit amet.</h3>
          </a>

          <p className="article-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dolore dignissimos dicta, quod ad excepturi quas impedit amet quos
            ipsam vitae corrupti error beatae eaque quo fuga iste harum tenetur!
          </p>
          <div className="article-content-footer">
            <div className="author">
              <img
                src="https://res.cloudinary.com/do58tgs2e/image/upload/v1644151385/hckp0lvufphwm2okcjqq.jpg"
                alt=""
                className="author-avatar"
              />
            </div>

            <div className="author-info">
              <a href="#">
                <h4 className="author-name">Michelle Appleton</h4>
              </a>
              <div className="publish-date">28 Jun 2020</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
