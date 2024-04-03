import { useParams } from "react-router-dom";
import { useSellerByIdQuery } from "../../../Redux/seller/seller/sellerApi";
import { useGetProductBySellerIdQuery } from "../../../Redux/product/productApi";
import Spinner from "../../../components/Spinner/Spinner";
import ProductCard from "../../../components/ProductCard/ProductCard";

export default function Store() {
  const { id } = useParams();
  const { data: sellerInfo, isLoading: sellerIsLoading } =
    useSellerByIdQuery(id);
  const seller = sellerInfo?.data;

  const { data, isLoading } = useGetProductBySellerIdQuery(id);
  const products = data?.data;

  if (sellerIsLoading || isLoading) {
    return <Spinner />;
  }

  return (
    <section className="pb-10">
      {/* profile */}
      <div>
        <div>
          <img
            src="/images/store/banner.jpg"
            alt=""
            className="w-full h-32 sm:h-48"
          />
        </div>
        <div className="container">
          <div className="flex justify-between">
            <div className="flex items-start gap-4">
              <div>
                <img
                  src="/images/store/logo.jpg"
                  alt=""
                  className="w-20 sm:w-40 h-20 sm:h-40 rounded-full shadow border -mt-6 sm:-mt-14"
                />
              </div>

              <div className="sm:pt-5">
                <h1 className="sm:text-2xl text-neutral font-medium">
                  {seller?.shopName}
                </h1>
                <div className="mt-1 flex items-center gap-4 text-neutral-content text-[11px] sm:text-[13px]">
                  <div className="flex items-center gap-1 border-r pr-1 sm:pr-4">
                    <p>Likes (0)</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p>Follows (0)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="primary_btn text-xs sm:text-base text-nowrap">
                + Follow
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mt-5">
        <div className="container">
          <div className="flex justify-between sm:items-center border-b pb-1 border-primary">
            <h1 className="md:text-lg font-medium md:font-semibold text-neutral">
              All Products
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-1">
            {products?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
