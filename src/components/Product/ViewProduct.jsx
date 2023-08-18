import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import { useCart } from '../../context/cartContext';

const ViewProduct = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      const selectedSizeValue = product.viewProducts.sizes[selectedSize];
      addToCart({ ...product, quantity, selectedSize: selectedSizeValue });
      setSelectedSize(0);
      setQuantity(1);
      setModalVisible(true);
    }
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    const galery = JSON.parse(localStorage.getItem('galery'));
    const productData = galery.find(item => slugify(item.name, { lower: true }) === slug);
    //const productData = galery.find(item => item.id === Number(id));
    setProduct(productData);

    // Inicializamos selectedImage con la URL de la primera imagen
    if (productData && productData.viewProducts.images.length > 1) {
      setSelectedImage(productData.viewProducts.images[0]);
    }

    if (productData && productData.viewProducts.sizes && productData.viewProducts.sizes.length > 0) {
      setSelectedSize(0); // Inicializa con el índice del primer elemento
    }

    // Actualiza la cantidad seleccionada cuando el producto cambia
    setQuantity(1); // Esto establecerá la cantidad nuevamente en 1 cada vez que cambie el producto
  }, [slug]);
  return (
    <>
      {product ? (
        <div className="flex md:flex-row flex-col gap-6 md:gap-10 my-20 md:my-28">
          <section className="flex md:flex-row flex-col gap-4">
            <div className=" md:grid flex flex-wrap gap-3 md:justify-start justify-center h-auto place-content-start">
              {product.viewProducts.images.map((image, index) => (
                <figure key={index} onClick={() => handleImageClick(image)}>
                  <img
                    className="w-[90px] h-[90px]  rounded-3xl object-cover cursor-pointer"
                    src={`/src/assets/img/products/${image}`}
                  />
                </figure>
              ))}
            </div>
            <div>
              {selectedImage && (
                <figure>
                  <img
                    src={`/src/assets/img/products/${selectedImage}`}
                    alt="Selected"
                    className="max-w-[400px] m-auto object-cover rounded-[120px] h-auto "
                  />
                </figure>
              )}
            </div>
          </section>

          <section className="grid place-content-start justify-center gap-y-5">
            <p className="px-5 py-[10px] rounded-3xl text-white text-center bg-primary_green md:w-min">
              {product.type}
            </p>
            <h1 className="font-sans-whyteinktrap box-content md:text-start text-center text-dynamic-h2 leading-tight">
              {product.name}
            </h1>

            <div className="flex gap-x-2 md:justify-start justify-center">
              {product.viewProducts.sizes &&
                product.viewProducts.sizes.length > 0 &&
                product.viewProducts.sizes.map((size, index) => (
                  <label
                    key={size}
                    className={`w-[50px] h-[50px] text-primary_black border-2 font-semibold border-primary_black rounded-full flex items-center justify-center cursor-pointer ${
                      selectedSize === index ? 'bg-black text-white' : ''
                    }`}
                    onClick={() => setSelectedSize(index)}
                  >
                    {size}
                  </label>
                ))}
            </div>
            <div className="flex items-center gap-x-2">
              <button
                className="w-[50px] h-[50px] hover:bg-black hover:text-white font-semibold  text-primary_black border-2 border-primary_black rounded-full"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <input
                className="md:max-w-[60px] w-full text-center"
                type="number"
                value={quantity}
                onChange={event => setQuantity(event.target.value)}
                readOnly
              />
              <button
                className="w-[50px] h-[50px] hover:bg-black hover:text-white font-semibold text-primary_black border-2 border-primary_black rounded-full"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <div>
              <input
                className="bg-transparent cursor-pointer font-bold text-dynamic-description hover:bg-black hover:text-white rounded-full w-full text-center outline-none border-2 border-black py-[10px]"
                type="button"
                value={`ADD $${product.price}`}
                onClick={handleAddToCart}
              />
            </div>
            <div className="font-semibold text-dynamic-description">
              <p className="mb-2 lg:mb-5">{product.description.review}</p>
              <p>{product.description.detail}</p>
            </div>
          </section>
        </div>
      ) : (
        <p>Product not found</p>
      )}

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-2">Producto agregado al carrito</p>
            <p>¡El producto se ha añadido exitosamente al carrito!</p>
            <button
              className="mt-4 bg-primary_green text-white px-4 py-2 rounded-md"
              onClick={() => {
                setModalVisible(false);
              }}
            >
              Continuar comprando
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewProduct;
