import { TbTruckDelivery } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { AiOutlineRedo } from "react-icons/ai";

const Services = () => {
  return (
    <div className="pt-5">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-center">
          <div className="border rounded p-4 flex flex-col sm:flex-row sm:gap-4 justify-center items-center bg-base-100 shadow">
            <div>
              <TbTruckDelivery className="text-4xl text-primary" />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg">Cash On Delivery</h1>
              <p className="text-[10px] sm:text-[13px] text-neutral/90">
                Cash On Delivery available
              </p>
            </div>
          </div>

          <div className="border rounded p-4 flex flex-col sm:flex-row sm:gap-4 justify-center items-center bg-base-100 shadow">
            <div>
              <MdVerified className="text-3xl  text-secondary" />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg">100% Authentic Product</h1>
              <p className="text-[10px] sm:text-[13px] text-neutral/90">
                Our all product 100% Authentic
              </p>
            </div>
          </div>

          <div className="border rounded p-4 flex flex-col sm:flex-row sm:gap-4 justify-center items-center bg-base-100 shadow">
            <div>
              <AiOutlineRedo className="text-3xl text-primary" />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg">Return Policy</h1>
              <p className="text-[10px] sm:text-[13px] text-neutral/90">
                7 days return policy
              </p>
            </div>
          </div>

          <div className="border rounded p-4 flex flex-col sm:flex-row sm:gap-4 justify-center items-center bg-base-100 shadow">
            <div>
              <BiSupport className="text-3xl text-green-500" />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg">Support 24/7</h1>
              <p className="text-[10px] sm:text-[13px] text-neutral/90">
                Contact us 24 hours a day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
