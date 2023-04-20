import { useState } from "react";
import { logo, avatar, cart, menu, close } from "../assets";
import { Cart } from "./Cart";

const navlinks = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = ({ remove, items }) => {
  const [active, setactive] = useState("");
  const [Open, setOpen] = useState(false);
  const [Toggle, setToggle] = useState(false);

  return (
    <nav className="z-10 flex w-full items-center ">
      <div className="px-6 w-full relative sm:py-8 py-6 max-w-6xl mx-auto flex justify-between items-center gap-20 border-GrayishBlue sm:border-b-2">
        <div className="flex items-center w-full justify-start sm:gap-20">
          <button
            className="w-10 sm:hidden block z-20"
            onClick={() => setToggle(!Toggle)}
          >
            <img src={!Toggle ? menu : close} alt="mobile-menu" />
          </button>
          <a href="/">
            <img src={logo} alt="sneakers" />
          </a>

          <ul className="hidden sm:flex w-full max-w-md items-center list-none">
            {navlinks.map((item, index) => (
              <li
                key={index}
                className={`${
                  active === item
                    ? "text-black navlink relative"
                    : "text-GrayishBlue"
                } cursor-pointer`}
                onClick={() => setactive(item)}
              >
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>

          {/* mobile navbar */}
        </div>
        {Toggle && (
          <ul className="responsive-nav sm:hidden flex flex-col gap-5 absolute left-0 top-0 bg-white z-10 pt-28  w-1/2 h-screen p-6">
            {navlinks.map((item, index) => (
              <li
                key={index}
                className={`${
                  active === item ? "text-black font-bold" : "text-black font-bold"
                } cursor-pointer`}
                onClick={() => {
                  setactive(item);
                  setToggle(!Toggle);
                }}
              >
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        )}
        <div className="flex w-full max-w-fit sm:gap-10 gap-5 items-center justify-end">
          <button onClick={() => setOpen(!Open)}>
            <div className="relative">
              <span className="absolute -top-2 -right-2 text-white bg-primary rounded-2xl text-xs px-2">
                {items.length}
              </span>
            </div>
            <img src={cart} alt="cart" />
          </button>
          <button className="rounded-full sm:w-12 w-8 hover:border-[3px] border-primary border-solid px-0">
            <img src={avatar} alt="profile" />
          </button>
        </div>
        {Open && <Cart items={items} remove={remove} />}
      </div>
    </nav>
  );
};

export default Navbar;
