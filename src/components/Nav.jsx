import React, { useContext } from "react";
import { ProductsContext } from "./utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductsContext);
  let uniqeProducts =
    products && products.reduce((acc, curr) => [...acc, curr.category], []);
  uniqeProducts = [...new Set(uniqeProducts)];

const color = () => {
return `rgba(${(Math.random() * 255).toFixed()},${(
Math.random() * 255
).toFixed()}, ${(Math.random() * 255).toFixed()},0.5)`;
};

  return (
    <>
      <div className="h-screen w-[15%] bg-gray-300 p-5 text-center">
        <Link
          className="text-center px-4 py-2 text-blue-300 border border-blue-300 rounded hover:text-blue-600"
          to={"/create"}
        >
          Add new product
        </Link>

        <hr className="mt-10 w-[100%] border-gray-400" />
        <div className="flex flex-col items-center justify-center"> 
          <h3 className="mt-5 text-lg font-semibold">Filter Category</h3>
            <Link to={'/'} className="text-2xl border-b text-nowrap px-4 py-2 text-red-600"> 🏠 Home</Link>
          <div className="flex flex-nowrap gap-2 flex-col items-start">
            {uniqeProducts.map((c, i) => {
              return (
                <Link
                key={i}
                  to={`/?category=${c}`}
                  className="flex text-nowrap px-4 py-2 text-gray-900 items-center justify-center gap-1"
                >
                  <span style={{backgroundColor: color()}} key={i} className=" inline-block h-[15px] w-[15px] rounded-full"></span>
                 {c}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
