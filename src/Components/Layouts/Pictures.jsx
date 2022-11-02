import { PictureItems } from "./PictureItems";

const Pictures = () => {
  return (
    <div className="pics container">
      <div className="gallery">
        {PictureItems.map((item) => (
          <div className="pic" key={item.id}>
            <img src={item.src} className="rounded shadow" />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
export default Pictures;
