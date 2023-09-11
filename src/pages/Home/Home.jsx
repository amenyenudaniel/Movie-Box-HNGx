import "./Home.css";
import { Hero, SearchBar } from "../../components";
import logo from "../../assets/Logo.png";
import Menu from "../../assets/Menu.png";
import { Link } from "react-router-dom";
const Navbar = () => (
  <nav>
    <Link to="/">
      <img src={logo} alt="logo" className="logo" />
    </Link>

    <SearchBar />
    <div className="app__signIn">
      <p>Sign in</p>
      <img src={Menu} alt="menu" />
    </div>
  </nav>
);

const Home = () => {
  return (
    <div className="app__home">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
