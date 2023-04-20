import React, { useState } from "react";
import { products } from "../constants";
import { close } from "../assets";
import {next} from '../assets';
import {previous} from '../assets';

const LightBox = ({ onClose, imageIndex }) => {
  const [image, setImage] = useState(imageIndex);

  const imagePrev = () =>
    setImage(image === 0 ? products.length - 1 : image - 1);

  const imageNext = () =>
    setImage(image === products.length - 1 ? 0 : image + 1);

  return (
    <>
      <div className="bg-black bg-opacity-70 fixed top-0 left-0 w-full z-20">
        <div className="flex flex-col items-center justify-center h-screen gap-5 w-[500px] mx-auto">
          <div
            className="cursor-pointer w-full flex justify-end "
            onClick={onClose}
          >
            <svg className="svg-close" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#fbfbfb" fill-rule="evenodd"/></svg>
          </div>

          <div className="relative">
            <button
              className="absolute left top-56 -left-5 bg-white rounded-full w-10 h-10 font-bold flex items-center justify-center"
              onClick={imagePrev}
            >
              <svg className="svg" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </button>
            <button
              className="absolute right top-56 -right-5 bg-white rounded-full w-10 h-10 font-bold flex items-center justify-center"
              onClick={imageNext}
            >
              <svg className="svg" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </button>
            <img
              src={products[image].image}
              alt={products[image]}
              className="rounded-2xl"
            />
            <ul className="list-none flex gap-5 mt-5">
              {products.map(({ thumb }, index) => (
                <li
                  className="relative"
                  key={index}
                  onClick={() => setImage(index)}
                >
                  <img
                    src={thumb}
                    alt={index}
                    className={`${
                      image === index ? "border-[2px] border-primary" : ""
                    } rounded-xl`}
                  />
                  {image === index ? (
                    <span className="absolute top-0 z-20 w-full h-full rounded-xl bg-white opacity-40"></span>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightBox;
