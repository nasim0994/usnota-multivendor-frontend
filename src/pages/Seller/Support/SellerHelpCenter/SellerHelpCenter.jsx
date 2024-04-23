import { Link } from "react-router-dom";
import { IoBagAdd, IoDocumentText } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { CgTrack } from "react-icons/cg";
import { GiReceiveMoney, GiMoneyStack } from "react-icons/gi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineVerified, AiOutlineLineChart } from "react-icons/ai";
import { SiTimescale } from "react-icons/si";
import {
  MdOutlinePolicy,
  MdAssignmentReturn,
  MdAutofpsSelect,
  MdOutlineReportOff,
} from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";

export default function SellerHelpCenter() {
  return (
    <section>
      <h1 className="text-lg font-medium">Seller Help Center </h1>

      <div className="mt-4 lg:px-28 bg-base-100 p-6 rounded-lg">
        {/* Self Service Tools */}
        <div>
          <div className="text-center relative">
            <h1>Self Service Tools</h1>
            <div className="w-10 h-[2px] bg-secondary left-1/2 absolute translate-x-[-50%] top-7"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-gray-600 text-sm text-center">
            <Link className="flex justify-center items-center border cursor-pointer rounded hover:bg-sky-50 duration-300">
              <div className="py-6">
                <IoBagAdd className="text-xl mx-auto mb-4" />
                <h6>Add Product</h6>
              </div>
            </Link>
            <Link className="flex justify-center items-center border cursor-pointer rounded hover:bg-sky-50 duration-300">
              <div className="py-6">
                <IoMdPersonAdd className="text-xl mx-auto mb-4" />
                <h6>Add User</h6>
              </div>
            </Link>
            <Link className="flex justify-center items-center border cursor-pointer rounded hover:bg-sky-50 duration-300">
              <div className="py-6">
                <MdOutlinePolicy className="text-xl mx-auto mb-4" />
                <h6>Compliance Policy Summary</h6>
              </div>
            </Link>
            <Link className="flex justify-center items-center border cursor-pointer rounded hover:bg-sky-50 duration-300">
              <div className="py-6">
                <SiTimescale className="text-xl mx-auto mb-4" />
                <h6>Hub Timing</h6>
              </div>
            </Link>
            <Link className="flex justify-center items-center border cursor-pointer rounded hover:bg-sky-50 duration-300">
              <div className="py-6">
                <AiOutlineVerified className="text-xl mx-auto mb-4" />
                <h6>Order Re-verification</h6>
              </div>
            </Link>
            <Link className="flex justify-center items-center border cursor-pointer rounded hover:bg-sky-50 duration-300">
              <div className="py-6">
                <HiClipboardDocumentList className="text-xl mx-auto mb-4" />
                <h6>Relisting Form</h6>
              </div>
            </Link>
            <Link className="flex justify-center items-center border cursor-pointer rounded hover:bg-sky-50 duration-300">
              <div className="py-6">
                <GiReceiveMoney className="text-xl mx-auto mb-4" />
                <h6>Seller Commission</h6>
              </div>
            </Link>
            <Link className="flex justify-center items-center border cursor-pointer rounded hover:bg-sky-50 duration-300">
              <div className="py-6">
                <CgTrack className="text-xl mx-auto mb-4" />
                <h6>Track Product Performance</h6>
              </div>
            </Link>
          </div>
        </div>

        {/* Top Questions */}
        <div className="mt-20">
          <div className="text-center relative">
            <h6>Top Questions</h6>
            <div className="w-10 h-[2px] bg-secondary left-1/2 absolute translate-x-[-50%] top-7"></div>
          </div>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8 text-gray-600 text-sm bg-base-100 list-disc">
            <li>
              <Link className="hover:text-[#2A4666] duration-300">
                How to Sign up For Daraz Advertising Solution - DAS?
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2A4666] duration-300">
                How to Sign up For Daraz Advertising Solution - DAS?
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2A4666] duration-300">
                How to Sign up For Daraz Advertising Solution - DAS?
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2A4666] duration-300">
                How to Sign up For Daraz Advertising Solution - DAS?
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2A4666] duration-300">
                How to Sign up For Daraz Advertising Solution - DAS?
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2A4666] duration-300">
                How to Sign up For Daraz Advertising Solution - DAS?
              </Link>
            </li>
          </ul>
        </div>

        {/* Live Support */}
        <div className="mt-20">
          <div className="text-center">
            <p>
              Still Need Help? <br /> Chat with us by clicking "Live Support"
              from 10:00 AM - 10:00 PM.
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link className="px-8 py-4 shadow-lg rounded flex gap-6 items-center">
              <BiSupport className="text-3xl" />
              <div>
                <h6 className="font-medium">Live Support</h6>
                <p className="text-sm text-gray-500">10:00 AM to 10:00 PM</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
