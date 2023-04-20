import { useState } from "react";
import { Navbar, ProductInfo, ImageGallery } from "./components";

const App = () => {
  const [Item, setItem] = useState([]);
  const [Qty, setQty] = useState(0);

  const removeItem = (itemId) => {
    const updatedItems = Item.filter((item, index) => index !== itemId);
    setItem(updatedItems);
  };

  return (
    <div className="App">
      <Navbar items={Item} remove={removeItem} />
      <section className="grid lg:grid-cols-2 grid-cols-1 sm:max-w-6xl items-center sm:p-6 pb-6 mx-auto">
        <ImageGallery />
        <ProductInfo
          addToCart={() => {
            setItem([...Item, Qty]);
            setQty(0);
          }}
          qty={Qty}
          add={() => setQty(Qty + 1)}
          subtract={() => setQty(Qty === 0 ? 0 : Qty - 1)}
        />
      </section>
    </div>
  );
};

export default App;
