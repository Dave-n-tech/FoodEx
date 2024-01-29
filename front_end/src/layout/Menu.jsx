import MenuList from "../components/MenuList";
import SignUpButton from "../components/SignUpButton";
import "./Menu.scss"

export default function Menu({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div className={"Menu " + (isOpen && "active")}>
      <ul>
        <MenuList content="Home" href="#Hero" handleClick={handleClick} />
        <MenuList content="Features" href="#Features" handleClick={handleClick} />
        <MenuList content="Testimonials" href="#Testimonials" handleClick={handleClick} />
        <MenuList content="Contact" href="#Footer" handleClick={handleClick} />
      </ul>
      <SignUpButton />
    </div>
  );
}
