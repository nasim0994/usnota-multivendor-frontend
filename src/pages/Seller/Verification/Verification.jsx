import { useState } from "react";
import "./SellerVerification.css";

import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";

import { BsShop } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import { useSelector } from "react-redux";

import { MdVerified } from "react-icons/md";
import Swal from "sweetalert2";
import { useUpdateInfoForVerifyMutation } from "../../../Redux/seller/seller/sellerApi";
import { Link } from "react-router-dom";

export default function Verification() {
  const { loggedSeller } = useSelector((state) => state.seller);
  const [updateInfoForVerify, { isLoading }] = useUpdateInfoForVerifyMutation();

  const [activeStep, setActiveStep] = useState(1);
  const [successStep1, setSuccessStep1] = useState(false);
  const [successStep2, setSuccessStep2] = useState(false);
  const [successStep3, setSuccessStep3] = useState(false);

  const seller = loggedSeller?.data;

  // Seller data state
  const [shopName, setShopName] = useState(
    seller?.shopName ? seller?.shopName : ""
  );
  const [email, setEmail] = useState(seller?.email ? seller?.email : "");
  const [phone, setPhone] = useState(seller?.phone ? seller?.phone : "");
  const [name, setName] = useState(seller?.name ? seller?.name : "");

  const [country, setCountry] = useState("Bangladesh");
  const [city, setCity] = useState(seller?.city ? seller?.city : "");
  const [area, setArea] = useState(seller?.area ? seller?.area : "");
  const [state, setState] = useState(seller?.state ? seller?.state : "");
  const [fullAddress, setFullAddress] = useState(
    seller?.fullAddress ? seller?.fullAddress : ""
  );
  const [storeLink, setStoreLink] = useState(
    seller?.storeLink ? seller?.storeLink : ""
  );

  const [idCard, setIDCard] = useState(seller?.idCard ? seller?.idCard : "");
  const [idName, setIdName] = useState(seller?.idName ? seller?.idName : "");
  const [idNumber, setIdNumber] = useState(
    seller?.idNumber ? seller?.idNumber : ""
  );

  const handelStep1Form = (e) => {
    e.preventDefault();

    if (shopName === "" || email === "" || phone === "" || name === "") {
      return alert("input must be fellup");
    } else {
      setSuccessStep1(true);
      setActiveStep(2);
    }
  };

  const handelStep2Form = (e) => {
    e.preventDefault();
    setActiveStep(3);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!idCard) {
      return Swal.fire("", "Please Upload ID", "warning");
    }

    const id = seller?._id;
    const idCardImage = idCard?.file;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("shopName", shopName);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("area", area);
    formData.append("fullAddress", fullAddress);
    formData.append("storeLink", storeLink);
    formData.append("idCard", idCardImage);
    formData.append("idName", idName);
    formData.append("idNumber", idNumber);

    const res = await updateInfoForVerify({ id, formData });
    if (res?.data?.success) {
      Swal.fire("", "Verificcation info send success", "success");
    } else {
      Swal.fire("", "Something went wrong", "error");
    }
  };
  console.log(seller?.verify);
  if (seller?.verify) {
    return (
      <div className="w-full h-[85vh] bg-base-100 rounded p-4 flex justify-center items-center flex-col gap-4">
        <MdVerified className="text-green-600 text-3xl" />
        You are already Verified.
        <Link to="/seller/product/add-product" className="primary_btn">
          Upload Product
        </Link>
      </div>
    );
  } else {
    return (
      <section>
        <div className="rounded-md p-4 shadow-lg bg-base-100 border">
          <div className="border-b pb-4 mb-4">
            <div className="flex gap-3 items-start text-lg">
              <p className="mt-2">
                <BsShop />
              </p>
              <div>
                <h6 className="font-medium">New Seller Verification</h6>
                <p className="text-xs text-secondary">
                  YOUR STORE IS INACTIVE UNTIL YOU COMPLETE THE STEPS BELOW
                </p>
              </div>
            </div>
          </div>

          <div>
            {/* Step */}
            <div className="grid gap-4 lg:gap-0 lg:grid-cols-3 px-2 md:px-6">
              <button
                onClick={() => setActiveStep(1)}
                className={`step ${successStep1 && "success-step"} ${
                  activeStep === 1 && "active-step"
                }`}
              >
                <div className="step-icon">
                  <div className="step-icon-inner">
                    {successStep1 ? (
                      <AiOutlineCheck className="text-xl" />
                    ) : (
                      "1"
                    )}
                  </div>
                </div>
                <div className="step-text">Add Profile</div>
              </button>

              <button
                onClick={() => setActiveStep(2)}
                className={`step ${successStep2 && "success-step"} ${
                  activeStep === 2 && "active-step"
                }`}
              >
                <div className="step-icon">
                  <div className="step-icon-inner">
                    {successStep2 ? (
                      <AiOutlineCheck className="text-xl" />
                    ) : (
                      "2"
                    )}
                  </div>
                </div>
                <div className="">Add Address</div>
              </button>

              <button
                onClick={() => setActiveStep(3)}
                className={`step ${successStep3 && "success-step"} ${
                  activeStep === 3 && "active-step"
                }`}
              >
                <div className="step-icon">
                  <div className="step-icon-inner">
                    {successStep3 ? (
                      <AiOutlineCheck className="text-xl" />
                    ) : (
                      "3"
                    )}
                  </div>
                </div>
                <div className="">Verify ID & Bank</div>
              </button>
            </div>

            {/* Form */}
            <div className="mt-8 md:px-4 form_group">
              {/* Step 1 / Personal info */}
              {activeStep === 1 && (
                <form onSubmit={handelStep1Form}>
                  <h6 className="text-xl font-semibold mb-4">
                    Profile Information
                  </h6>

                  <div className="border border-gray-300 rounded-md p-4">
                    <div className="grid md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="text-sm pl-1">Store Name</label>
                        <div>
                          <input
                            type="text"
                            placeholder="Store Name"
                            defaultValue={shopName}
                            required
                            onChange={(e) => setShopName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm pl-1">Email</label>
                        <div>
                          <input
                            type="email"
                            placeholder="Email"
                            defaultValue={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm pl-1">Phone Number</label>
                        <div>
                          <input
                            type="text"
                            placeholder="Phone Number"
                            defaultValue={phone}
                            required
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm pl-1">Owner Name</label>
                        <div>
                          <input
                            type="text"
                            placeholder="Owner Name"
                            defaultValue={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-60 py-2 rounded-md bg-primary text-base-100"
                    >
                      Next
                    </button>
                  </div>
                </form>
              )}

              {/* Step 2 / Address info */}
              {activeStep === 2 && (
                <form onSubmit={handelStep2Form}>
                  <h6 className="text-xl font-semibold mb-4">Store Address</h6>

                  <div className="border border-gray-300 rounded-md p-4">
                    {/* Address */}
                    <div>
                      <div className="grid md:grid-cols-2 items-end gap-5 mb-4">
                        <div>
                          <label className="text-sm pl-1">Country*</label>
                          <div>
                            <input
                              type="text"
                              defaultValue={country}
                              disabled
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm pl-1">City*</label>
                          <div>
                            <input
                              type="text"
                              defaultValue={city}
                              onChange={(e) => setCity(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid items-end md:grid-cols-2 gap-5 mb-4">
                        <div>
                          <label className="text-sm pl-1">Area*</label>
                          <div>
                            <input
                              type="text"
                              defaultValue={area}
                              onChange={(e) => setArea(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm pl-1">State</label>
                          <div>
                            <input
                              type="text"
                              defaultValue={state}
                              onChange={(e) => setState(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm pl-1">
                          Please enter the full address(include house floor/unit
                          number, street & road).
                        </label>
                        <div>
                          <textarea
                            name="fullAddress"
                            rows="4"
                            placeholder="Type your full address..."
                            defaultValue={fullAddress}
                            onChange={(e) => setFullAddress(e.target.value)}
                          ></textarea>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm pl-1">
                          Facebook/website Link
                        </label>
                        <div>
                          <input
                            type="text"
                            defaultValue={storeLink}
                            onChange={(e) => setStoreLink(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-60 py-2 rounded-md bg-primary text-base-100"
                    >
                      Next
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3 / Verify ID */}
              {activeStep === 3 && (
                <form onSubmit={handelSubmit}>
                  <h6 className="text-xl font-semibold mb-4">
                    ID & Bank Account Information
                  </h6>

                  <div className="border border-gray-300 rounded-md p-4">
                    <h6 className="mb-2">Verify Identification Card</h6>

                    <div className="grid md:grid-cols-2 items-end gap-5 mb-5">
                      <div>
                        <label className="text-sm pl-1">ID Card</label>
                        <label className="cursor-pointer mt-2 border border-dashed border-red-500 rounded-md flex">
                          <ImageUploader
                            onFileAdded={(img) => setIDCard(img)}
                          />
                        </label>
                      </div>

                      <div>
                        {seller?.idCard && (
                          <img
                            src={`${
                              import.meta.env.VITE_BACKEND_URL
                            }/seller/profile/${seller?.idCard}`}
                            alt=""
                            className="rounded w-full h-40"
                          />
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 items-end gap-5 mb-5">
                      <div>
                        <input
                          type="text"
                          placeholder="ID Name"
                          defaultValue={idName}
                          onChange={(e) => setIdName(e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="ID Number"
                          defaultValue={idNumber}
                          onChange={(e) => setIdNumber(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-60 py-2 rounded-md bg-primary text-base-100"
                    >
                      {isLoading ? "Loading..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
