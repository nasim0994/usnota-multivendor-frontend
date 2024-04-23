import { useState } from "react";
import { useGetAllSellerFAQQuery } from "../../../Redux/admin/sellerPage/sellerPageApi";
import Spinner from "../../../components/Spinner/Spinner";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function FAQ() {
  const { data, isLoading } = useGetAllSellerFAQQuery();
  const faqs = data?.data;

  const [toggleFAQ, setToggleFAQ] = useState(null);
  const handelToggleFAQ = (i) => {
    if (toggleFAQ === i) {
      return setToggleFAQ(null);
    }
    setToggleFAQ(i);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="py-10 bg-gray-100">
      <div className="w-[95%] xl:w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 justify-between gap-10">
          <div>
            <img src="/images/faq.svg" alt="" />
          </div>
          <div>
            <h1 className="text-4xl text-primary font-bold">FAQ</h1>

            <div className="mt-4">
              {faqs?.map((faq, i) => (
                <div key={faq?._id} className="mb-2">
                  <button
                    onClick={() => handelToggleFAQ(i)}
                    className="bg-base-100 w-full flex justify-between items-center p-4 font-medium text-neutral rounded"
                  >
                    <h6>{faq?.question}</h6>
                    <span>
                      {toggleFAQ === i && "activeFAQ" ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </button>

                  {/* Content/Ans */}
                  <div
                    className={`text-justify text-neutral duration-500 faq-content ${
                      toggleFAQ === i && "activeFAQ"
                    }`}
                  >
                    <p className="pb-5 p-3">{faq.ans}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
