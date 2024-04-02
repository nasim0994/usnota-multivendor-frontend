import { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  useDeleteReviewMutation,
  useGetReviewsByUserIdQuery,
} from "../../../Redux/review/reviewApi";
import Pagination from "../../../components/Pagination/Pagination";
import Rating from "../../../components/Rating/Rating";
import ReviewEditForm from "../../ProductDetails/Review/ReviewEditForm";

export default function MyReviews() {
  const [editModal, setEditModal] = useState(false);
  const { loggedUser } = useSelector((state) => state.user);
  const userId = loggedUser?.data?._id;
  const [currentPage, setCurrentPage] = useState(1);

  const query = {};
  query["limit"] = 5;
  query["page"] = currentPage;

  const { data } = useGetReviewsByUserIdQuery({ userId, ...query });
  const [deleteReview] = useDeleteReviewMutation();

  console.log(data);

  const pages = Math.ceil(
    parseInt(data?.meta?.total) / parseInt(data?.meta?.limit)
  );

  const handleReviewDelete = async (reviewId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (!confirm) return;

    const data = {
      user: userId,
    };
    await deleteReview({ reviewId, data }).unwrap();
    Swal.fire("", "Review deleted successfully", "success");
  };

  // Edit Review
  const [editedReview, setEditedReview] = useState({});
  const handleReviewEdit = (review) => {
    setEditedReview(review);
    setEditModal(true);
  };

  return (
    <div>
      <div className="border-b pb-1 mb-3">
        <h3>All Reviews</h3>
      </div>

      <div className="flex flex-col gap-2">
        {data?.data?.map((review) => (
          <div key={review?._id} className="border-b p-3 relative">
            <div className="flex items-center gap-5">
              <img
                src={
                  review?.user?.image === "" || review?.user?.image === null
                    ? "/images/demo_user.jpg"
                    : `${import.meta.env.VITE_BACKEND_URL}/user/${
                        review?.user?.image
                      }`
                }
                alt=""
                className="w-9 h-9 rounded-full"
              />
              <div>
                <div className="flex items-center gap-1">
                  <p>{review?.user?.name}</p>
                  <p className="text-neutral-content text-sm">
                    {review?.createdAt?.split("T")[0]}
                  </p>
                </div>
                <Rating rating={review?.rating} />
              </div>
            </div>

            <p className="mt-2.5 text-sm text-neutral-content">
              {review?.description}
            </p>

            <div className="absolute top-3 right-3 flex items-center gap-1">
              <button
                onClick={() => handleReviewEdit(review)}
                className="text-lg text-neutral-content hover:text-primary duration-200 "
              >
                <MdEdit />
              </button>

              <ReviewEditForm
                editModal={editModal}
                setEditModal={setEditModal}
                review={editedReview}
              />

              <button
                onClick={() => handleReviewDelete(review?._id)}
                className="text-lg text-neutral-content hover:text-primary duration-200 "
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ))}

        {/* pagination */}
        <div className="p-3">
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pages={pages}
          />
        </div>
      </div>
    </div>
  );
}
