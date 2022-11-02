import { NavLink } from "react-router-dom";
import { NavItems1, NavItems2 } from "./NavItems";
import { toast } from "react-toastify";
import { BACKGROUND, FORGROUND } from "../Helper/Colors";

const Nav = () => {
  return (
    <nav style={{ backgroundColor: BACKGROUND }} className="shadow">
      {NavItems1.map((item) => (
        <NavLink key={item.id} to={item.link} style={{ color: FORGROUND }}>
          {item.text}
        </NavLink>
      ))}

      {NavItems2.map((item) => (
        <a
          href={item.link}
          key={item.id}
          target="_blank"
          style={{ color: FORGROUND }}
        >
          {item.text}
        </a>
      ))}

      <a
        style={{
          color: FORGROUND,
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => {
          toast.dark(
            "پیام خود را به آدرس ایمیل the4milo@gmail.com ارسال کنید."
          );
        }}
      >
        Support
      </a>
    </nav>
  );
};
export default Nav;
