import { useRef, useState } from "react";
import { BsUpload } from "react-icons/bs";
import JoditEditor from "jodit-react";
import Select from "react-dropdown-select";
import { UseContext } from "../../../ContextApi/ContextApi";
const sizes = [
  { id: 1, name: "36" },
  { id: 2, name: "38" },
  { id: 3, name: "40" },
  { id: 4, name: "42" },
  { id: 5, name: "44" },
  { id: 6, name: "sm" },
  { id: 7, name: "lg" },
  { id: 7, name: "xl" },
  { id: 7, name: "xxl" },
];

const colors = [
  { id: 1, name: "red" },
  { id: 2, name: "orange" },
  { id: 3, name: "yellow" },
  { id: 4, name: "green" },
  { id: 5, name: "blue" },
  { id: 6, name: "indigo" },
  { id: 7, name: "violet" },
];

export default function AddProduct() {
  const { categories } = UseContext();
  const editor = useRef(null);
  const [image, setImage] = useState("");
  const [details, setDetails] = useState("");
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const price = form.price.value;
    const discount = form.discount.value;
    const stock = form.stock.value;
    const brand = form.brand.value;
    const description = details;
    const colors = color;
    const sizes = size;
    const service = form.service.value;

    const formData = new FormData();
    formData.append("image", image);

    const product = {
      title,
      category,
      price,
      discount,
      stock,
      brand,
      description,
      colors,
      sizes,
      service,
    };

    setLoading(true);

    fetch("http://localhost:5000/v1/product/post-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("eshop_jwt")}`,
      },
      body: formData,
      dataType: "multipart/form-data",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.acknowledged) {
        //   toast("product successfuly added");
        //   setLoading(false);
        //   reset();
        // }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="add_product text-neutral-content">
      <h3 className="text-lg">Add Product</h3>
      <form
        onSubmit={handleAddProduct}
        className="mt-2 grid grid-cols-3 gap-4 items-start"
      >
        <div>
          <div className="border rounded p-4">
            <div>
              <p className="text-sm">Add Image</p>
              <div className="border border-dashed rounded mt-2 h-40 relative overflow-hidden">
                <input type="file" name="image" onChange={handleImageChange} />

                <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-6">
                  <img src="/images/gallery.png" alt="" className="w-16" />
                  <h3 className="flex items-center gap-2">
                    <BsUpload />
                    Choose File
                  </h3>
                </div>
              </div>

              {image && (
                <div className="mt-2 border rounded border-dashed p-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="upload image"
                      className="w-9 h-10 rounded"
                    />
                    <p className="text-sm">{image?.name}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 border rounded p-4 flex flex-col gap-3">
            <div>
              <p className="text-sm">Color</p>
              <Select
                options={colors}
                onChange={(e) => setColor(e)}
                values={color}
                labelField="name"
                valueField="id"
                multi={true}
                searchBy="name"
                closeOnSelect={true}
              />
            </div>

            <div>
              <p className="text-sm">Size</p>
              <Select
                options={sizes}
                onChange={(e) => setSize(e)}
                values={size}
                labelField="name"
                valueField="id"
                searchBy="name"
                closeOnSelect={true}
                multi={true}
              />
            </div>

            <div className="form_group">
              <p className="text-sm">Service</p>
              <select name="service">
                <option value="No Service Avaibale">No Service Avaibale</option>
                <option value="7 days return">7 days return</option>
                <option value="6 month warenty">6 month warenty</option>
                <option value="1 year warenty">1 year warenty</option>
                <option value="2 year warenty">2 year warenty</option>
                <option value="3 year + warenty">3 year + warenty</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-span-2 border rounded p-4 form_group flex flex-col gap-3">
          <div>
            <p className="text-sm">Product Title</p>
            <input type="text" name="title" />
          </div>

          <div>
            <p className="text-sm">Category</p>
            <select name="category">
              {categories?.data?.map((category) => (
                <option key={category?._id} value={category?.slug}>
                  {category?.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm">Price</p>
              <input type="number" name="price" />
            </div>

            <div>
              <p className="text-sm">Discount(%)</p>
              <input type="number" name="discount" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm">Stock</p>
              <input type="number" name="stock" />
            </div>

            <div>
              <p className="text-sm">Brand</p>
              <input type="text" name="brand" />
            </div>
          </div>

          <div>
            <p className="text-sm">Description</p>

            <div className="mt-2">
              <JoditEditor
                ref={editor}
                value={details}
                onBlur={(text) => setDetails(text)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            disabled={loading && "disabled"}
            className="bg-primary text-base-100 px-10 py-2 rounded"
          >
            {loading ? "loading..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}