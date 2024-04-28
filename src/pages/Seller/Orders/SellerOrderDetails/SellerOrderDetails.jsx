import { useParams } from "react-router-dom";
import { useGetSellerOrderByOrderIdQuery } from "../../../../Redux/order/orderApi";

export default function SellerOrderDetails() {
  const { id } = useParams();
  const { data } = useGetSellerOrderByOrderIdQuery(id);
  const order = data?.data;

  console.log(order);

  return (
    <section>
      <div className="bg-base-100 rounded p-4 xl:w-1/2 mx-auto">
        <div className="border-b pb-2 mb-2 flex justify-between items-center">
          <p>Status:</p>

          {order?.mainOrderId?.status == "processing" ||
          order?.mainOrderId?.status == "shipped" ||
          order?.mainOrderId?.status == "delivered" ? (
            <p
              className={`text-sm ${
                order?.mainOrderId?.status === "processing"
                  ? "text-indigo-500"
                  : order?.mainOrderId?.status === "shipped"
                  ? "text-green-400"
                  : "text-red-500"
              }`}
            >
              {order?.mainOrderId?.status}
            </p>
          ) : (
            <p
              className={`${
                order?.status === "pending"
                  ? "text-yellow-500"
                  : order?.status === "processing"
                  ? "text-indigo-400"
                  : "text-green-500"
              }`}
            >
              {order?.status}
            </p>
          )}
        </div>
        <div>
          <div className="flex justify-between items-center border-b pb-3">
            <p>{order?._id}</p>
            <p>#{order?.mainOrderId?.invoiceNumber}</p>
          </div>

          <div className="mt-4">
            <h1 className="mb-4">Products:</h1>
            {order?.products?.map((product) => {
              const selectedvariant = product?.productId?.variants?.find(
                (variant) =>
                  variant?.color == product?.color &&
                  variant?.size == product?.size
              );

              return (
                <div
                  key={product?._id}
                  className="border-b pb-3 flex justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/products/${
                          product?.productId?.images[0]
                        }`}
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                    </div>
                    <div>
                      <p>
                        {product?.productId?.title} * {product?.quantity}
                      </p>
                      <p className="text-sm text-neutral-content">
                        {product?.color} {product?.size && "-" + product?.size}
                      </p>
                    </div>
                  </div>

                  <div>
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
