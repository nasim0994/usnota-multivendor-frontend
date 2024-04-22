import Swal from "sweetalert2";
import { useUpdateSellerProfileInfoMutation } from "../../../../Redux/seller/sellerProfile/sellerProfileApi";

export default function ProfileForm({ setProfileUpdate, seller, sellerId }) {
  const [updateSellerProfileInfo, { isLoading }] =
    useUpdateSellerProfileInfoMutation();

  const handleUpdateSellerProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const shopName = form.shopName.value;
    const name = form.ownerName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const country = form.country.value;
    const city = form.city.value;
    const area = form.area.value;
    const state = form.state.value;
    const fullAddress = form.fullAddress.value;
    const storeLink = form.storeLink.value;

    const profileInfo = {
      shopName,
      name,
      phone,
      email,
      country,
      city,
      area,
      state,
      fullAddress,
      storeLink,
    };

    const res = await updateSellerProfileInfo({ sellerId, profileInfo });
    if (res?.data?.success) {
      Swal.fire("", "Profile update success", "success");
    } else {
      Swal.fire("", "Something went wrong", "error");
    }
  };
  return (
    <section>
      <form onSubmit={handleUpdateSellerProfile} className="form_group">
        <div className="border p-3 rounded grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm">Shop Name</p>
            <input
              type="text"
              name="shopName"
              defaultValue={seller?.shopName}
            />
          </div>

          <div>
            <p className="text-sm">Owner Name</p>
            <input type="text" name="ownerName" defaultValue={seller?.name} />
          </div>

          <div>
            <p className="text-sm">Phone Number</p>
            <input type="text" name="phone" defaultValue={seller?.phone} />
          </div>

          <div>
            <p className="text-sm">Email Address</p>
            <input type="text" name="email" defaultValue={seller?.email} />
          </div>

          <div>
            <p className="text-sm">Country</p>
            <input
              type="text"
              name="country"
              defaultValue={seller?.country}
              disabled
            />
          </div>

          <div>
            <p className="text-sm">City</p>
            <input type="text" name="city" defaultValue={seller?.city} />
          </div>

          <div>
            <p className="text-sm">Area</p>
            <input type="text" name="area" defaultValue={seller?.area} />
          </div>

          <div>
            <p className="text-sm">State</p>
            <input type="text" name="state" defaultValue={seller?.state} />
          </div>

          <div>
            <p className="text-sm">Full Address</p>
            <input
              type="text"
              name="fullAddress"
              defaultValue={seller?.fullAddress}
            />
          </div>

          <div>
            <p className="text-sm">Store Link</p>
            <input
              type="text"
              name="storeLink"
              defaultValue={seller?.storeLink}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <div
            onClick={() => setProfileUpdate(false)}
            className="bg-red-600 px-4 py-2 rounded text-base-100 cursor-pointer"
          >
            Cancel
          </div>

          <button className="primary_btn">
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </section>
  );
}
