import "./SideBar.css";
import { linksData } from "../../utils/data";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

const SideBar = () => {
  return (
    <>
      <div className="app__sidebar">
        <Link className="logos" to={"/"}>
          <img src="/tv.png" alt="logo" />
          <h3>MovieBox</h3>
        </Link>

        <div className="sidebar__links__container">
          {linksData.map((link) => (
            <Link
              key={link.id}
              className={link.selected ? "selected" : "sidebar__link"}
              to={link.linkTo && `${link.linkTo}`}
            >
              <i>{link.icon}</i>
              <p>{link.linkName}</p>
            </Link>
          ))}
        </div>

        <div className="sidebar__quiz">
          <p>
            Play movie quizes <br />
            and earn <br /> free tickets
          </p>
          <p>
            50k people are playing <br />
            now
          </p>
          <button>Start Playing</button>
        </div>

        <div className="sidebar__logout">
          <TbLogout fontSize={"1.5rem"} />
          <p>Log out</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
