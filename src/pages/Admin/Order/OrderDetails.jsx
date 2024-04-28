import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetOrderByIdQuery } from "../../../Redux/order/orderApi";
import Spinner from "../../../components/Spinner/Spinner";

export default function OrderDetails() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, isError, error } = useGetOrderByIdQuery(id);

  const order = data?.data;
  const products = data?.data?.products;

  let content = null;
  if (isLoading) {
    return (content = <Spinner />);
  }
  if (!isLoading && isError) {
    content = <p>{error.error}</p>;
  }

  if (!isLoading && !isError) {
    content = (
      <div>
        <div className="border p-4 rounded-md">
          <p className="text-lg">Order Details:</p>
          <p>
            Order Id:{" "}
            <span className="text-primary">#{order?.invoiceNumber}</span>
          </p>
        </div>

        <div className="mt-4 border p-4 rounded-md">
          <p className="text-lg">Shipping Details:</p>
          <div className="text-[15px] mt-1">
            <p className="text-sm">{order?.userId?.name}</p>
            <p className="text-sm">{order?.userId?.phone}</p>
            <p className="text-sm">{order?.userId?.email}</p>
            <p className="text-sm">{order?.shippingInfo?.street}</p>
            <p className="text-sm">
              {order?.shippingInfo?.city}, {order?.shippingInfo?.district}
            </p>
          </div>
        </div>

        <div className="mt-4 border p-4 rounded-md">
          <p className="text-lg">Product Details:</p>
          <div>
            {products?.map((seller) => (
              <div key={seller?._id}>
                <div className="border rounded p-3 mb-2">
                  <p className="text-primary font-medium">
                    {seller?.sellerId?.shopName}
                  </p>

                  <div className="mt-2">
                    {seller?.products?.map((product) => {
                      const selectedvariant =
                        product?.productId?.variants?.find(
                          (variant) =>
                            variant?.color == product?.color &&
                            variant?.size == product?.size
                        );

                      return (
                        <div key={product?._id}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <img
                                src={`${
                                  import.meta.env.VITE_BACKEND_URL
                                }/products/${product?.productId?.images[0]}`}
                                alt=""
                                className="w-9 h-9 rounded-full"
                              />
                              <div>
                                <p>
                                  {product?.productId?.title} *{" "}
                                  {product?.quantity}
                                </p>
                                <p className="text-sm">
                                  {product?.size && product?.size + "-"}
                                  {product?.color}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-end gap-2">
                              <p className="text-primary font-medium">
                                ৳{" "}
                                {product?.productId?.variants?.length > 0
                                  ? parseInt(
                                      selectedvariant?.sellingPrice -
                                        (selectedvariant?.sellingPrice *
                                          product?.productId?.discount) /
                                          100
                                    ) * parseInt(product?.quantity)
                                  : parseInt(
                                      product?.productId?.sellingPrice -
                                        (product?.productId?.sellingPrice *
                                          product?.productId?.discount) /
                                          100
                                    ) * parseInt(product?.quantity)}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}

            <div className="px-4 flex justify-between items-center text-lg">
              <p>Total</p>
              <h1 className="text-primary font-bold">৳ {order?.totalPrice}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}
