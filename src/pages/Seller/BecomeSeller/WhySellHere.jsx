import { useGetWhySellHereQuery } from "../../../Redux/admin/sellerPage/whySellHereApi";
import { useGetBusinessInfoQuery } from "../../../Redux/businessInfoApi/businessInfoApi";

export default function WhySellHere() {
  const { data, isLoading } = useGetWhySellHereQuery();
  const whySell = data?.data;

  const { data: businessInfo } = useGetBusinessInfoQuery();
  const business = businessInfo?.data[0];
  console.log(business);

  if (isLoading) {
    return <div className="h-32 lg:h-60 w-full bg-gray-300"></div>;
  }
  return (
    <div className="py-10">
      <div className="container">
        <h1 className="text-3xl font-semibold">
          WHY SELL ON {business?.companyName}?
        </h1>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {whySell?.map((item) => (
            <div className="flex gap-4">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/sellerWhySellHere/${
                  item?.icon
                }`}
                alt=""
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-2xl font-medium">{item?.title}</h2>
                <p className="text-sm mt-2">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
