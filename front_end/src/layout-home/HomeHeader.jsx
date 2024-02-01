import "./home-header.scss";

export default function HomeHeader({ isOpen, setIsOpen }) {
  return (
    <header className={"homeHeader " + (isOpen && "active")}>
      <div className="content-wrapper">
        <div className="header-left">
          <h1 className="Title">
            <a href="/">FoodEx</a>
          </h1>
        </div>
        <div className="header-right">
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
