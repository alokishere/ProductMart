import React, { useContext, useState } from "react";
import { ProductsContext } from "./utils/Context";
import { nanoid } from "nanoid";
const Create = () => {
    const [products, setProducts] = useContext(ProductsContext)
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const Product = {
        id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
   setProducts([...products, Product])
    // settitle("");
    // setimage("");
    // setcategory("");
    // setprice("");
    // setdescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-[5%] w-screen h-auto bg-gray-100"
    >
      <h1 className="mb-5 w-1/2 text-3xl font-bold text-center text-gray-700">
        Add New Product
      </h1>

      <input
        type="url"
        placeholder="Image URL"
        className="text-lg bg-white border border-gray-300 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
        required
      />

      <input
        type="text"
        placeholder="Title"
        className="text-lg bg-white border border-gray-300 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
        required
      />

      <input
        type="text"
        placeholder="Category"
        className="text-lg bg-white border border-gray-300 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setcategory(e.target.value)}
        value={category}
        required
      />

      <input
        type="number"
        placeholder="Price"
        className="text-lg bg-white border border-gray-300 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setprice(e.target.value)}
        value={price}
        required
      />

      <textarea
        placeholder="Description"
        className="text-lg bg-white border border-gray-300 rounded p-3 w-1/2 mb-3 h-32"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
       Add new product
      </button>
    </form>
  );
};

export default Create;
