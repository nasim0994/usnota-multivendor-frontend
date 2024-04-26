import CategoryLists from "../../CategoryLists/CategoryLists";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { useGetBannersQuery } from "../../../Redux/banner/bannerApi";
import Banner from "../../Skeleton/Banner/Banner";
import { Link } from "react-router-dom";

export default function Hero() {
  const { data, isLoading, isError } = useGetBannersQuery();

  let content = null;

  if (isLoading) {
    content = <Banner />;
  }
  if (!isLoading && !isError) {
    content = data?.data?.map((banner) => (
      <SwiperSlide key={banner._id}>
        <Link to={banner?.link}>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/banner/${banner?.image}`}
            alt=""
            className="w-full h-full rounded"
          />
        </Link>
      </SwiperSlide>
    ));
  }

  return (
    <section className="mt-1">
      <div className="container">
        <div className="h-36 sm:h-52 lg:h-[300px] mt-2 lg:mt-0">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper w-full h-full"
          >
            {content}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
