import "./Hero.css";
import play from "../../assets/Play.png";
import IMBD from "../../assets/IMBD.png";
import Tom from "../../assets/tom.png";

const Hero = () => {
  return (
    <>
      <section className="app__hero">
        <div className="app__hero">
          <div className="app__hero__content">
            <h1>John Wick 3 : Parabellum</h1>
            <div className="rating">
              <img src={IMBD} alt="imbd__image" className="imbd__image" />
              <p className="rating__num">86.0 / 100</p>
              <div className="tomato__container">
                <img src={Tom} alt="tomato__img" />
                <p>97%</p>
              </div>
            </div>
            <p className="movie__description">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <button className="watch__button">
              <img src={play} alt="play__button" />
              <p>Watch Trailer</p>
            </button>
          </div>
        </div>
        <div className="app__hero__numbers">
          <p>1</p>
          <p>2</p>
          <div className="active">
            <div className="line"></div>
            <h6>3</h6>
          </div>
          <p>3</p>
          <p>5</p>
          <p>6</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
