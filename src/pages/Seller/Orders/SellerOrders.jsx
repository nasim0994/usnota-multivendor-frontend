import { useSelector } from "react-redux";
import OrderTable from "../../../components/SellerComponents/Orders/OrderTable";
import { useState } from "react";
import { useGetSellerOrderByIdQuery } from "../../../Redux/order/orderApi";
import Pagination from "../../../components/Pagination/Pagination";
import Spinner from "../../../components/Spinner/Spinner";

export default function SellerOrders() {
  const { loggedSeller } = useSelector((state) => state.seller);
  const sellerId = loggedSeller?.data?._id;

  const [currentPage, setCurrentPage] = useState(1);
  const query = {};
  query["page"] = currentPage;
  query["limit"] = 10;

  const { data: orders, isLoading } = useGetSellerOrderByIdQuery({
    sellerId,
    query,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <OrderTable orders={orders?.data} />

      <Pagination
        pages={orders?.meta?.pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
