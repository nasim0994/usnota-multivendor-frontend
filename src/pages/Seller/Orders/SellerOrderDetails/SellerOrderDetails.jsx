import { useParams } from "react-router-dom";
import { useGetSellerOrderByOrderIdQuery } from "../../../../Redux/order/orderApi";

export default function SellerOrderDetails() {
  const { id } = useParams();
  const { data } = useGetSellerOrderByOrderIdQuery(id);
  const order = data?.data;
  console.log(order);

  return (
    <section>
      <div className="bg-base-100 rounded p-4 md:w-1/2 mx-auto">
        <div className="flex justify-between items-center border-b pb-3">
          <p>{order?._id}</p>
          <p>#{order?.mainOrderId?.invoiceNumber}</p>
        </div>

        <div className="mt-4">
          <h1 className="mb-4">Products:</h1>
          {order?.products?.map((product) => (
            <div key={product?._id} className="border-b pb-3">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
