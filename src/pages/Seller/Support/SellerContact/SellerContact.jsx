import { IoLogoWechat, IoCall } from "react-icons/io5";
import { MdOutlineEmail, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SellerContact() {
  return (
    <section>
      <div className="flex items-center gap-2 sm:text-xl">
        <IoLogoWechat />
        <h1>Contact Us</h1>
      </div>

      <div className="mt-4 bg-base-100 shadow rounded p-4">
        <div className="grid sm:grid-cols-2 gap-4 items-center">
          <div>
            <h1 className="text-lg font-medium">
              Be a Part of Shopping Hobe Seller Community
            </h1>

            <div className="mt-3 text-gray-600 text-[15px]">
              <p>
                If you face any problem contact our call center or email us
                about your problem.
              </p>

              <div className="mt-3">
                <div className="flex items-center gap-1">
                  <p>
                    <IoCall />
                  </p>
                  <p>+8801906-198021</p>
                </div>

                <div className="flex items-center gap-1">
                  <p>
                    <MdOutlineEmail />
                  </p>
                  <p>suport@pmall.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/sellers/seller-contact.png"
              alt=""
              className="xl:w-[60%] h-60 md:h-80 mx-auto"
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 bg-base-100 shadow rounded p-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded">
            <div className="flex justify-between items-center bg-gray-100 p-3 border-b">
              <p>Facebook Group</p>
              <Link to="" className="flex items-center gap-[2px] text-[15px]">
                JOIN <MdKeyboardArrowRight className="text-xl" />
              </Link>
            </div>

            <div className="p-3">
              <p>
                Join the 'Shopping Hobe Seller' Facebook group for exclusive
                tips on selling more.
              </p>
            </div>
          </div>

          <div className="border rounded">
            <div className="flex justify-between items-center bg-gray-100 p-3 border-b">
              <p>Live Support</p>
              <Link to="" className="flex items-center gap-[2px] text-[15px]">
                Chat <MdKeyboardArrowRight className="text-xl" />
              </Link>
            </div>

            <div className="p-3">
              <p>
                Chat with us by clicking "Chat Now" from 10:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
