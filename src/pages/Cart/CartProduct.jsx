import React from 'react';
import { useCart } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const CartProduct = () => {
  const { cart, removeFromCart } = useCart();

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + calculateSubtotal(item.price, item.quantity), 0);
  };

  return (
    <>
      <section className="md:gap-16 my-20 md:my-32 ">
        <h3 className="font-sans-whyteinktrap text-dynamic-h1 after:block after:border-b-4 after:border-primary_black after:w-full after:mt-4">
          {cart.length} items in Cart
        </h3>
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-2">
          {cart.length > 0 ? (
            <>
              {cart.map((item, index) => (
                <div key={index} className="py-5 grid md:grid-cols-3 grid-cols-2 place-items-center gap-2 text-center ">
                  <img
                    className="w-60 h-auto rounded-3xl object-cover"
                    src={`/assets/img/galery/${item.images.image}`}
                    alt={item.alt}
                  />
                  <div>
                    <h2 className="font-mono font-bold text-dynamic-detailName leading-tight">{item.name}</h2>
                    <p className="text-dynamic-detailText font-semibold ">{item.selectedSize}</p>
                    <p className="text-dynamic-detailText font-semibold">${item.price}</p>
                    <p className="text-dynamic-detailText font-semibold">{item.quantity} unid.</p>
                    <p className="text-dynamic-detailText font-semibold">${item.price * item.quantity}</p>
                  </div>
                  <div className="md:grid inline-grid col-span-3 md:col-auto w-full md:w-auto ">
                    <Link
                      to={`/product/${item.url}`} // Replace with the actual path for the product page
                      className="bg-primary_green rounded hover:bg-primary_white hover:text-primary_green border-2 border-primary_green transition-all duration-500 font-semibold text-white px-4 py-2 mt-2"
                    >
                      Back to Product
                    </Link>
                    <button
                      className="bg-red-500 text-white  px-4 py-2 rounded mt-2 hover:bg-primary_white hover:text-red-500 border-2 border-red-500 transition-all duration-500"
                      onClick={() => removeFromCart(item.id)} // Llama a la función para eliminar el producto
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center col-span-3 md:mb-20 mb-10 ">
              <h2 className="font-sans-whyteinktrap text-dynamic-h2 md:my-20 my-10">EMPTY CART</h2>
              <Link
                to="/"
                className="bg-primary_black rounded-full hover:bg-primary_white hover:text-black border-2 border-black transition-all duration-500 font-semibold text-white px-10 py-[10px] "
              >
                SEE ALL PRODUCTS
              </Link>
            </div>
          )}
        </section>
        <div className="font-semibold mt-6 text-right before:block before:border-b-4 before:border-primary_black before:w-full before:mt-4">
          <p className=" text-2xl text-center mt-3 md:mt-4 md:text-end">Total: ${calculateTotal().toFixed(2)}</p>
        </div>
      </section>
    </>
  );
};

export default CartProduct;
