import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import ProductCard from "../../ProductCard/ProductCard";
import { useGetFlashProductsQuery } from "../../../Redux/product/productApi";
import ProductCards from "../../Skeleton/ProductCards/ProductCards";

const FlashSale = () => {
  const { data, isLoading, isError, error } = useGetFlashProductsQuery();

  let content = null;
  if (isLoading) {
    content = <ProductCards />;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((product) => (
      <ProductCard key={product?.id} product={product} />
    ));
  }

  return (
    <div className="mt-4">
      <div className="container bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between sm:items-center border-b pb-2 border-primary">
          <h1 className="md:text-xl font-medium md:font-semibold text-neutral">
            FlashSale
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2">
          {content}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
