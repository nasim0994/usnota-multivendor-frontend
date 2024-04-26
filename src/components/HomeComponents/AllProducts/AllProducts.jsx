import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../Redux/product/productApi";
import ProductCard from "../../ProductCard/ProductCard";
import ProductCards from "../../Skeleton/ProductCards/ProductCards";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const query = {};
  const [limit, setLimit] = useState(15);
  const [load, setLoad] = useState(false);
  const [loadBtn, setLoadBtn] = useState(true);

  query["page"] = 1;
  query["limit"] = limit;
  const { data, isLoading, isError, error } = useGetAllProductsQuery({
    ...query,
  });

  const products = data?.data;

  let content = null;
  if (isLoading) {
    content = <ProductCards />;
  }
  if (!isLoading && isError) {
    content = <p>{error.error}</p>;
  }
  if (!isLoading && !isError && products?.length > 0) {
    content = products?.map((product) => (
      <ProductCard key={product?._id} product={product} />
    ));
  }

  const handleLoadMore = () => {
    setLimit(limit + 10);
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  };

  useEffect(() => {
    if (data?.meta?.total <= limit) {
      setLoadBtn(false);
    }
  }, [products?.length, limit]);

  return (
    <section>
      <div className="container bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between sm:items-center border-b pb-2 border-primary">
          <h1 className="md:text-xl font-medium md:font-semibold text-neutral">
            Just for You
          </h1>

          <div>
            <Link
              to="/shops"
              className="w-max flex items-center text-primary font-semibold hover-go"
            >
              <h1 className="text-sm md:text-[15px] font-normal">Shop More</h1>
              <MdKeyboardArrowRight className="text-[22px] pt-px duration-200" />
            </Link>
          </div>
        </div>

        {/* Product Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2">
          {content}
        </div>
      </div>

      {loadBtn && (
        <div className="mt-3 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="border rounded border-primary text-primary px-8 py-2 text-sm"
          >
            {load ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
}
