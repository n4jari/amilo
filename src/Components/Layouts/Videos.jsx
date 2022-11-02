import { VideoItems } from "./VideoItems";
import { BACKGROUND, DARKGRAY, FORGROUND } from "../../Helper/Colors";
const Videos = () => {
  return (
    <div className="video container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {VideoItems.map((item) => (
          <div className="col" key={item.id}>
            <div
              className="box card h-100 shadow"
              style={{ backgroundColor: BACKGROUND, borderColor: DARKGRAY }}
            >
              <video controls poster={item.poster} className="card-img-top ">
                <source src={item.url} type="video/mp4" />
              </video>

              <div
                className="content card-body text-center"
                style={{ color: FORGROUND }}
              >
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Videos;
