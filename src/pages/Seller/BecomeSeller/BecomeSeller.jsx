import "../../../Style/Seller.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SellerForm from "./Form/SellerForm";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Footer from "../../../components/Footer/Footer";
import { useGetSellerLogoQuery } from "../../../Redux/logo/logoApi";

const faqs = [
  {
    question: "What categories can I sell on Shoping Hobe?",
    ans: `By signing up in Instantkaj.com, you can easily search for jobs in search job and earn by working from home.`,
  },
  {
    question: "What is Shoping Hobe Commission?",
    ans: `InstantKaj.com is the Best Freelancing platform in Bangladesh which acts like a bridge between freelancer and employee. Here Freelancers of Bangladesh can easily get their payouts through mobile banking. Employers can also make it Instantly! This is really efficient.`,
  },
  {
    question: "What documents do I need to provide during signup?",
    ans: `InstantKaj.com is the Best Freelancing platform in Bangladesh which acts like a bridge between freelancer and employee. Here Freelancers of Bangladesh can easily get their payouts through mobile banking. Employers can also make it Instantly! This is really efficient.`,
  },
  {
    question: "What if incorrect information is submitted during signup?",
    ans: `InstantKaj.com is the Best Freelancing platform in Bangladesh which acts like a bridge between freelancer and employee. Here Freelancers of Bangladesh can easily get their payouts through mobile banking. Employers can also make it Instantly! This is really efficient.`,
  },
];

export default function BecomeSeller() {
  const { data } = useGetSellerLogoQuery();
  const [formToggle, setFormToggle] = useState("login");
  const [toggleFAQ, setToggleFAQ] = useState(null);
  const handelToggleFAQ = (i) => {
    if (toggleFAQ === i) {
      return setToggleFAQ(null);
    }
    setToggleFAQ(i);
  };

  return (
    <div>
      {/* Header */}
      <header className="py-2 bg-base-100">
        <div className="container">
          <Link to="/seller">
            <img
              src={
                data?.data[0]?.logo === null
                  ? "/images/logo/seller-logo.png"
                  : `${import.meta.env.VITE_BACKEND_URL}/logo/${
                      data?.data[0]?.logo
                    }`
              }
              alt=""
              className="w-48"
            />
          </Link>
        </div>
      </header>

      {/* Banner */}
      <div
        style={{
          "--image-url": `linear-gradient(310deg, #000000ab, #000000c9) ,url(${"https://grabmerchanthelp.zendesk.com/hc/article_attachments/900006446566/Mod_3_EDM_5.gif"})`,
        }}
        className={`merchantBanner py-10 lg:min-h-[90vh] lg:flex justify-center items-center bg-[image:var(--image-url)]`}
      >
        <div className="container">
          <div className="lg:grid grid-cols-2 gap-40 justify-between items-center text-base-100">
            <div className="mb-10 lg:mb-0">
              <h1 className="text-4xl font-semibold mb-4">
                Dedicated to Make Small Business Thrive
              </h1>
              <p>
                pmall.com simplifies the lives of small business owners with its
                all-in-one e-commerce platform that's tailored to meet every
                business's unique Seller service needs.
              </p>
              <button
                onClick={() => setFormToggle("signup")}
                className="px-8 py-2 bg-primary mt-4 rounded scale-[.98] hover:scale-[1] duration-300"
              >
                Signup
              </button>
            </div>

            {/* Login/ Signup */}
            <div className="bg-base-100 text-neutral px-4 py-10 rounded-lg md:w-3/4 mx-auto">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold">Welcome</h2>
                <p className="text-sm">
                  To Shoping Hobe Seller Login/Registration Panel
                </p>
              </div>

              {/* Seller Signup/login Form */}
              <SellerForm
                formToggle={formToggle}
                setFormToggle={setFormToggle}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why PMall */}
      <div className="py-10">
        <div className="w-[95%] xl:w-[1280px] mx-auto">
          <h1 className="text-4xl font-bold">WHY SELL ON Shoping Hobe?</h1>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex gap-4">
              <img src="/images/whyPmall/1.png" alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Reach</h2>
                <p className="text-sm mt-2">
                  Millions of customers on Shoping Hobe, Bangladesh's most
                  visited shopping destination
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/images/whyPmall/2.png" alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Free Registration</h2>
                <p className="text-sm mt-2">
                  Account registration & listing items for sale is free
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/images/whyPmall/3.png" alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Reliable Shipping</h2>
                <p className="text-sm mt-2">
                  Fast, reliable and hassle free delivery through Daraz logistic
                  network
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/images/whyPmall/4.png" alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Timely Payments</h2>
                <p className="text-sm mt-2">
                  Funds are safely deposited directly to your bank account on a
                  weekly basis
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/images/whyPmall/5.png" alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Marketing Tools</h2>
                <p className="text-sm mt-2">
                  Find new customers & grow more with advertising and our whole
                  range of marketing tools
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/images/whyPmall/6.png" alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Support&Training</h2>
                <p className="text-sm mt-2">
                  Learn all about ecommerce for free and get help with seller
                  support and Daraz University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile app banner */}
      <div className="py-10">
        <div className="bg-gradient-to-r from-[#1E1436] to-primary md:h-96">
          <div className="w-[95%] xl:w-[1280px] mx-auto">
            <div className="md:flex justify-between py-10">
              <div className="md:w-[70%] text-base-100">
                <p>Go Mobile</p>
                <h6 className="text-4xl font-semibold">
                  USE THE FREE Shoping Hobe SELLER APP
                </h6>
                <p className="mt-4 w-4/5 text-[17px]">
                  The Shoping Hobe Seller app is packed with features to help
                  you manage and grow your ecommerce business wherever you are.
                  It gives you the freedom to take care of business details
                  right from your phone.
                </p>

                <Link to="">
                  <img
                    src="/images/play_store.png"
                    alt=""
                    className="w-44 mt-8"
                  />
                </Link>
              </div>

              <div className="md:w-[30%]">
                <img src="/images/mobileapp.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Step to Start Selling */}
      <div className="py-10">
        <div className="w-[95%] xl:w-[1280px] mx-auto">
          <h1 className="text-4xl font-bold">5 Simple Step to Start Selling</h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            <div>
              <img src="/images/step/signup.png" alt="" className="w-24 mb-2" />
              <h2 className="text-lg font-medium">Signup for Free</h2>
              <p className="text-sm mt-2">
                Create your account through our website or mobile app with just
                your phone number
              </p>
            </div>

            <div>
              <img
                src="/images/step/addinfo.png"
                alt=""
                className="w-14 mb-4"
              />
              <h2 className="text-lg font-medium">Add Profile Information</h2>
              <p className="text-sm mt-2">
                Complete your profile by providing your email and store name so
                that we can identify you
              </p>
            </div>

            <div>
              <img
                src="/images/step/addAddress.png"
                alt=""
                className="w-14 mb-4"
              />
              <h2 className="text-lg font-medium"> Add Address Information</h2>
              <p className="text-sm mt-2">
                Provide all address details of your business
              </p>
            </div>

            <div>
              <img
                src="/images/step/bankinfo.png"
                alt=""
                className="w-14 mb-4"
              />
              <h2 className="text-lg font-medium">Add ID & Bank Information</h2>
              <p className="text-sm mt-2">
                Add in your ID & Business related details. Include necessary
                bank information for payments
              </p>
            </div>

            <div>
              <img
                src="/images/step/addProducts.png"
                alt=""
                className="w-14 mb-3"
              />
              <h2 className="text-lg font-medium">List Products</h2>
              <p className="text-sm mt-2">
                Add products to your store through seller center. Start selling
                as soon as your products go live after going through quality
                control
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-10 bg-gray-100">
        <div className="w-[95%] xl:w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 justify-between gap-10">
            <div>
              <img src="/images/faq.svg" alt="" />
            </div>
            <div>
              <h1 className="text-4xl text-primary font-bold">FAQ</h1>
              <p className="text-neutral/80 py-4">
                Shoping Hobe.com simplifies the lives of small business owners
                with its all-in-one e-commerce platform that's tailored to meet
                every business's unique Seller service needs.
              </p>

              <div className="mt-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="mb-2">
                    <button
                      onClick={() => handelToggleFAQ(i)}
                      className="bg-primary/10 w-full flex justify-between items-center p-4 font-medium text-neutral rounded"
                    >
                      <h6>{faq.question}</h6>
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

      <Footer />
    </div>
  );
}
