import { BLACK, FORGROUND } from "../Helper/Colors";
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer style={{ color: FORGROUND, backgroundColor: BLACK }}>
      copyright &copy;
      <a href="https://n4jari.ir" style={{ color: FORGROUND }} target="_blank">
        najari
      </a>{" "}
      {date}{" "}
    </footer>
  );
};
export default Footer;
