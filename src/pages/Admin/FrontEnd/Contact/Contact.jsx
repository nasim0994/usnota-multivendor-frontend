import { useEffect } from "react";
import Swal from "sweetalert2";
import {
  useAddContactMutation,
  useGetContactQuery,
  useUpdateContactMutation,
} from "../../../../Redux/contact/contactApi";
import Spinner from "../../../../components/Spinner/Spinner";

export default function Contact() {
  const { data, isLoading, isError, error } = useGetContactQuery();
  const [
    updateContact,
    {
      isLoading: updateLoading,
      isSuccess: updateSuccess,
      isError: updateError,
    },
  ] = useUpdateContactMutation();

  const [
    addContact,
    { isLoading: addLoading, isSuccess: addSuccess, isError: addError },
  ] = useAddContactMutation();

  const id = data?.data[0]?._id;

  const handleUpdateContact = async (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const whatsapp = form.whatsapp.value;
    const email = form.email.value;
    const address = form.address.value;
    const facebookGroupLink = form.facebookGroup.value;
    const facebookPageLink = form.facebookPage.value;
    const instagramLink = form.instagram.value;
    const youtubeLink = form.youtube.value;
    const linkedinLink = form.linkedin.value;

    const contactInfo = {
      phone,
      whatsapp,
      email,
      address,
      facebookGroupLink,
      facebookPageLink,
      instagramLink,
      youtubeLink,
      linkedinLink,
    };

    if (id) {
      await updateContact({ id, contactInfo });
    } else {
      await addContact(contactInfo);
    }
  };

  useEffect(() => {
    if (updateSuccess) {
      Swal.fire("", "Update Success", "success");
    }
    if (addSuccess) {
      Swal.fire("", "Add Success", "success");
    }
    if (addError) {
      Swal.fire("", "Somethin Wrong, please try again", "error");
    }
    if (updateError) {
      Swal.fire("", "Somethin Wrong, please try again", "error");
    }
  }, [updateSuccess, updateError, addSuccess, addError]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return (
      <p>
        {error?.data?.message ? error?.data?.message : "something went wrong"}
      </p>
    );
  }

  return (
    <section className="bg-base-100 shadow rounded pb-4 min-h-[86vh]">
      <div className="p-4 border-b text-neutral font-medium">
        <h3>Contact Info</h3>
      </div>
      <form
        onSubmit={handleUpdateContact}
        className="p-4 form_group flex flex-col gap-3 sm:mx-10 xl:mx-48 border rounded mt-3 text-sm"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-neutral-content">Phone</p>
            <input
              type="text"
              name="phone"
              defaultValue={data?.data[0]?.phone}
            />
          </div>

          <div>
            <p className="text-neutral-content">Email</p>
            <input
              type="email"
              name="email"
              defaultValue={data?.data[0]?.email}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-neutral-content">Whatsapp Link</p>
            <input
              type="text"
              name="whatsapp"
              defaultValue={data?.data[0]?.whatsapp}
            />
          </div>
        </div>

        <div>
          <p className="text-neutral-content">Address</p>
          <textarea
            name="address"
            rows="3"
            defaultValue={data?.data[0]?.address}
          ></textarea>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-neutral-content">Facebook Group Link</p>
            <input
              type="text"
              name="facebookGroup"
              defaultValue={data?.data[0]?.facebookGroupLink}
            />
          </div>

          <div>
            <p className="text-neutral-content">Facebook Page Link</p>
            <input
              type="text"
              name="facebookPage"
              defaultValue={data?.data[0]?.facebookPageLink}
            />
          </div>

          <div>
            <p className="text-neutral-content">Instagram Link</p>
            <input
              type="text"
              name="instagram"
              defaultValue={data?.data[0]?.instagramLink}
            />
          </div>

          <div>
            <p className="text-neutral-content">Youtube Link</p>
            <input
              type="text"
              name="youtube"
              defaultValue={data?.data[0]?.youtubeLink}
            />
          </div>

          <div>
            <p className="text-neutral-content">Linkedin Link</p>
            <input
              type="text"
              name="linkedin"
              defaultValue={data?.data[0]?.linkedinLink}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            disabled={updateLoading && "disabled"}
            className="primary_btn"
          >
            {updateLoading || addLoading ? "Loading..." : id ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </section>
  );
}
