import React from "react";
import { thumbnail1, bin } from "../assets";

export const Cart = ({ items, remove }) => {
  return (
    <div className="absolute xl:-right-20 right-4 flex flex-col mx-auto top-24 bg-white drop-shadow-2xl rounded-lg z-20 sm:w-[325px] w-[93%] min-h-[225px] max-h-screen">
      <h4 className="font-bold p-5 border-b-2 border-GrayishBlue">Cart</h4>
      {items.length === 0 ? (
        <div className="p-5 flex items-center justify-center w-full mt-auto text-GrayishBlue text-xs font-bold">
          Your Cart is empty
        </div>
      ) : (
        items.map((item, index) => (
          <div className="p-5 flex justify-between items-center" key={index}>
            <img src={thumbnail1} alt="product1" className="rounded-lg w-12" />
            <div>
              <p className="text-DarkGrayishBlue text-sm">
                Fall Limited Edition Sneakers
              </p>
              <p className="text-DarkGrayishBlue text-sm">
                $125.00 <span>x{item}</span> &nbsp;
                <span className="font-bold text-VeryDarkBlue">
                  ${125 * item}.00
                </span>
              </p>
            </div>
            <button onClick={() => remove(index)}>
              <img src={bin} alt="" />
            </button>
          </div>
        ))
      )}

      <div className="p-5 mt-auto">
        <button className="w-full p-3 rounded-lg font-bold text-white bg-primary">
          Checkout
        </button>
      </div>
    </div>
  );
};
