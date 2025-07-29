import axios from "./utils/axios";
import React, { useContext, useEffect, useState } from "react";
import { set } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductsContext } from "./utils/Context";

const Details = () => {
  const [products, setProducts] = useContext(ProductsContext)
  const { id } = useParams();
const navigate = useNavigate()

  const [product, setproduct] = useState(null)
  // const getSingleProducts = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  // setproduct(data)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
 useEffect(() => {
  if (!product && products.length > 0) {
    const singleProduct = products.find((p) => p.id == id);
    setproduct(singleProduct);
  }
}, [products, id, product]);


  return ( product?
    <div>
      <h1 className="text-center text-2xl font-bold mt-10">Product Details</h1>

                  <Link onClick={()=>navigate(-1)} className="absolute left-[20%] top-[3%] text-2xl border-b text-nowrap px-4 py-2 text-red-600">⬅ Go Back</Link>
      <div className="flex justify-center mt-5">
        <div className="flex items-center justify-center p-5 shadow rounded w-[70%] gap-10">
          <img
            className="w-[40%] h-auto object-contain"
            src={product.image}
            alt={product.title}
          />
          <div className="w-[60%]  flex flex-col">
            <h2 className="text-4xl font-semibold">
              {product.title}
            </h2>
            <h2 className="text-md text-gray-400">{product.category}</h2>
            <p className="mt-2 text-gray-700">
              {product.description}
            </p>
            <p className="mt-3 text-2xl text-red-400 font-bold">${product.price}</p>
            <div className="flex gap-5">
              <Link className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-start">
                Edit
              </Link>
              <Link className="mt-5 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 self-start">
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>:<Loading/>
  );
};

export default Details;
