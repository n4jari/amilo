import { DARKGRAY, FORGROUND, BACKGROUND } from "../../Helper/Colors";
import { TrackItems } from "./TrackItems";

const Buy = () => {
  return (
    <div className="buy container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {[...TrackItems].reverse().map((item) => (
          <div className="col" key={item.id}>
            <div
              className="card h-100 shadow"
              style={{ backgroundColor: BACKGROUND, borderColor: DARKGRAY }}
            >
              <img
                src={item.pic}
                className="card-img-top p-2"
                alt={item.name}
              />
              <div
                className="card-body text-center"
                style={{ color: FORGROUND }}
              >
                <h3 className="card-title fw-bold mb-4 ">{item.tName}</h3>
                <p className="card-text">{item.aName}</p>
                <p className="card-text">{item.writter}</p>
                <p className="card-text">{item.producer}</p>
                <p className="card-text">{item.aGuitar}</p>
                <p className="card-text">{item.mix}</p>
                <p className="card-text">{item.master}</p>
                <p className="card-text">{item.cover}</p>
                <p className="card-text"> {item.date}</p>

                <div className="modal fade " id={`id${item.id}`}>
                  <div className="modal-dialog">
                    <div
                      className="modal-content"
                      style={{ background: BACKGROUND, color: FORGROUND }}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Lyrics {item.tName}
                        </h5>
                        <button
                          type="button"
                          className="btn-close "
                          data-bs-dismiss="modal"
                        ></button>
                      </div>
                      <div className="modal-dialog modal-dialog-scrollable ">
                        {item.lyrics}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-dark"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <button
                  type="button"
                  className="btn btn-outline-light  btn-sm br-0"
                  style={{ opacity: ".8" }}
                  data-bs-toggle="modal"
                  data-bs-target={`#id${item.id}`}
                >
                  <i className="fa fa-file-text-o" /> Lyrics
                </button>

                <audio controls>
                  <source src={item.song} type="audio/mpeg" />
                </audio>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <a href={item.sURL} style={{ color: DARKGRAY }} target="_blank">
                  {item.single}
                </a>
                <a href={item.aURL} target="_blank" style={{ color: DARKGRAY }}>
                  {item.album}
                </a>
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
export default Buy;
