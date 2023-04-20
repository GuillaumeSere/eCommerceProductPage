import React, { useState } from "react";
import { next } from '../assets';
import { previous } from '../assets';

import { products } from "../constants";

import LightBox from "./LightBox";

const ImageGallery = () => {
    const [image, setImage] = useState(0);

    const [open, setOpen] = useState(false);

    const imagePrev = () =>
        setImage(image === 0 ? products.length - 1 : image - 1);

    const imageNext = () =>
        setImage(image === products.length - 1 ? 0 : image + 1);

    return (
        <div className="lg:px-14 lg:pt-14 flex lg:flex-col flex-row sm:gap-8">
            <div
                className="lg:w-[450px] sm:w-[450px] relative"
                onClick={() => setOpen(true)}
            >
                <button
                    className="sm:hidden absolute top-44 left-2 bg-white rounded-full w-10 h-10 font-bold flex items-center justify-center"
                    onClick={imagePrev}
                >
                    <svg className="svg" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                </button>
                <button
                    className="sm:hidden absolute top-44 right-2 bg-white rounded-full w-10 h-10 font-bold flex items-center justify-center"
                    onClick={imageNext}
                >
                    <svg className="svg" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                </button>
                <img
                    src={products[image].image}
                    alt={products[image]}
                    className="sm:rounded-2xl sm:cursor-pointer"
                />
            </div>
            <div className="w-full gallery">
                <ul className="hidden sm:flex  lg:flex-row flex-col justify-between list-none gap-4 items-center">
                    {products.map(({ thumb }, index) => (
                        <li
                            key={index}
                            className="w-[100px] relative"
                            onClick={() => setImage(index)}
                        >
                            <img src={thumb} alt={thumb.index} className="rounded-xl" />
                            <span
                                className={`absolute top-0 w-full h-full z-10 hover:bg-white rounded-xl opacity-30 ${image === index ? "bg-white border-primary border-[2px]" : ""
                                    }`}
                            ></span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sm:block hidden">
                {open && <LightBox onClose={() => setOpen(false)} imageIndex={image} />}
            </div>
        </div>
    );
};

export default ImageGallery;
