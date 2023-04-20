import { minus, plus } from "../assets";

const ProductInfo = ({ addToCart, add, subtract, qty }) => {
    return (
        <div className="box-content p-6">
            <h3 className="text-primary uppercase font-bold text-sm my-4">
                sneaker company
            </h3>
            <h1 className="font-bold capitalize lg:text-[2.5rem] text-3xl leading-tight text-VeryDarkBlue my-2">
                fall limited edition sneakers
            </h1>
            <p className="lg:mt-10 mt-5 text-DarkGrayishBlue text-[16px]">
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they’ll withstand everything the
                weather can offer.
            </p>
            <p className="mt-6 font-bold text-3xl flex items-center">
                $125.00{" "}
                <span className="mx-6 bg-PaleOrange text-primary text-sm px-2 py-[2px] rounded-lg">
                    50%
                </span>
            </p>
            <p className="mt-2 line-through text-GrayishBlue font-bold">$250.00</p>
            <div className="flex sm:flex-row flex-col items-center gap-5 pt-10">
                <div className="flex items-center justify-between bg-LightGrayishBlue rounded-lg w-full lg:w-1/2">
                    <button
                        className="h-12 w-12 flex items-center justify-center"
                        onClick={subtract}
                    >
                        <img src={minus} alt="minus" />
                    </button>
                    <input type="text" value={qty} disabled className="w-5 text-center" />
                    <button
                        className="h-12 w-12 flex justify-center items-center"
                        onClick={add}
                    >
                        <img src={plus} alt="plus" />
                    </button>
                </div>
                <button
                    disabled={qty === 0 ? true : false}
                    onClick={addToCart}
                    className="btn flex gap-5 bg-primary text-white rounded-lg py-4 px-2 shadow-xl shadow-primary/40 text-sm font-bold w-60 justify-center disabled:bg-primary/70"
                >
                    <svg
                        className="font-bold"
                        width="22"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            fill="white"
                        />
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
