import MenuList from "../components/MenuList";
import "./home-menu.scss";

export default function HomeMenu({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div className={"homeMenu " + (isOpen && "active")}>
      <ul>
        <MenuList content="Home" href="/home" handleClick={handleClick} />
        <MenuList content="Shop" href="/products" handleClick={handleClick} />
        <MenuList content="About" href="/cart" handleClick={handleClick} />
        <MenuList content="Login" href="/login" handleClick={handleClick} />
      </ul>
      <div className="icons">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
}
