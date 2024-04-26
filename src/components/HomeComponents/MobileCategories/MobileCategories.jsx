import { useGetCategoriesQuery } from "../../../Redux/category/categoryApi";
import CategoryCard from "../../Skeleton/CategoryCard/CategoryCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";

export default function MobileCategories() {
  const { data, isLoading, isError, error } = useGetCategoriesQuery();

  let content = null;
  if (isLoading) {
    content = (
      <div className="grid grid-cols-5 gap-2">
        <CategoryCard />
      </div>
    );
  }
  if (!isLoading && isError) {
    content = <p>{error.error}</p>;
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = (
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          100: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          350: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          600: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 2,
          },
        }}
        className="pb-px"
      >
        {data?.data?.map((category) => (
          <SwiperSlide key={category?._id}>
            <Link
              to={`shops/${category.slug}`}
              className="border rounded shadow bg-base-100 p-2 flex justify-center items-center text-center h-[90px]"
            >
              <div>
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/categories/${
                    category?.icon
                  }`}
                  alt=""
                  className="w-10 h-9 mx-auto"
                />
                <h1 className="mt-2 font-semibold text-[10px] md:text-xs lg:font-normal">
                  {category?.name}
                </h1>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="mt-1">
      <div className="container">
        <div className="flex items-center gap-1">
          <div className="border rounded shadow bg-base-100 w-24 md:w-36 p-2 flex justify-center text-center h-[90px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex justify-center items-center">
                <BiSolidCategoryAlt className="text-xl text-base-100" />
              </div>
              <h1 className="mt-2 font-semibold text-[10px] md:text-xs lg:text-[13px] lg:font-normal">
                Categories
              </h1>
            </div>
          </div>

          <div className="category_brand_content">{content}</div>
        </div>
      </div>
    </section>
  );
}
