import { FiHeart, FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { FaOpencart } from "react-icons/fa";
import { useState } from "react";
import { UseContext } from "../../ContextApi/ContextApi";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ product }) => {
  const navigate = useNavigate();
  const { wishlists, setCarts, handelAddToCart, handelAddToWishlist } =
    UseContext();
  const isWishlist = wishlists?.find((item) => item.id === product.id);
  const [quantity, setQuantity] = useState(1);

  const { title, image, discount, brand, category, price, size, color, stock } =
    product;

  const handelIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handelDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    const cartProduct = {
      id: product.id,
      title: product.title,
      image: product.image,
      discount: product.discount,
      price: product.price,
      quantity: quantity || 1,
    };

    setCarts([cartProduct]);
    navigate("/checkout");
  };

  return (
    <div className="lg:flex gap-6">
      {/* Image */}
      <div className="lg:w-[42%]">
        <div className="relative">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/images/products/${image}`}
            alt=""
            className="w-full h-[350px] rounded"
          />

          {/* Discount */}
          <div className="absolute top-1 text-base-100 right-0 bg-red-600 w-max rounded-l-full px-2 py-px">
            <p>{discount}%</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="lg:w-[58%] mt-4 lg:mt-0">
        {/* title  */}
        <div>
          <h1 className="text-2xl font-medium text-neutral">{title}</h1>
          <div className="text-sm">
            <p>
              <span className="text-neutral/80">Brand:</span>{" "}
              <span>{brand}</span>
            </p>
            <p>
              <span className="text-neutral/80">Category:</span>{" "}
              <span>{category}</span>
            </p>
            <p>
              <span className="text-neutral/80">Available Stock:</span>{" "}
              <span>{stock}</span>
            </p>
            {size && size !== "" && (
              <>
                <p>
                  <span className="text-neutral/80">Size:</span>{" "}
                  <span>{size}</span>
                </p>
              </>
            )}
            {color && color !== "" && (
              <>
                <p>
                  <span className="text-neutral/80">Color:</span>{" "}
                  <span>{color}</span>
                </p>
              </>
            )}
          </div>
        </div>

        {/*  wishlist */}
        <div className="flex justify-between items-center">
          <p></p>

          <button
            onClick={() => handelAddToWishlist(product)}
            className={`shadow-lg p-3 rounded-full ${
              isWishlist && "bg-primary text-base-100"
            }`}
          >
            <FiHeart />
          </button>
        </div>

        {/* Price */}
        <div className="py-3 border-y mt-3">
          <div className="flex gap-6 items-center">
            <p className="text-neutral opacity-70">Price: </p>

            <div className="flex items-end gap-2">
              <p className="text-primary text-2xl font-medium">
                ৳{parseInt(price - (price * discount) / 100)}
              </p>
              {discount > 0 && <del className="text-neutral/70">৳{price}</del>}
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div className="py-3 flex gap-4 items-center border-y">
          <h3>Quantity: </h3>

          <div className="flex gap-2">
            <button
              onClick={handelDecrease}
              className="text-2xl hover:text-neutral duration-200"
            >
              <FiMinusCircle />
            </button>
            <div>
              <p className="w-10 font-semibold text-center">{quantity}</p>
            </div>
            <button
              onClick={handelIncrease}
              className="text-2xl hover:text-neutral duration-200"
            >
              <FiPlusCircle />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 items-center mt-6">
          <button
            onClick={handleBuyNow}
            className="w-40 bg-primary text-base-100 px-2 py-1.5 rounded scale-[.97] hover:scale-[1] duration-300"
          >
            Buy Now
          </button>

          <button
            onClick={() =>
              handelAddToCart({
                product,
                quantity,
              })
            }
            className="w-40 bg-primary text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300"
          >
            <FaOpencart />
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
