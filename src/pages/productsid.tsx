import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProduct } from "../counterSlice";

export const loader = async ({ params }: any) => {
  const req = await customFetch(`/products/${params.id}`);
  const product = req.data;
  return { product };
};

function Productsid() {
  const dispatch = useDispatch();
  const { product }: any = useLoaderData();

  const [productAmount, setProductAmount] = useState(1);

  const setAmount = (type: string) => {
    if (type == "decrease" && productAmount > 1) {
      setProductAmount((prev) => prev - 1);
    } else if (type == "increase") {
      setProductAmount((prev) => prev + 1);
    }
  };
  console.log(product);

  const addToBag = () => {
    const newProdact = {
      ...product,
      amount: productAmount,
    };
    dispatch(addProduct(newProdact));
  };
  return (
    <>
      <div className="py-20 items-senter">
        <p className="flex items-center pl-52 pb-4 text-[#7D7D7D]">Go Back</p>
        <div className="flex text-left items-center gap-24 justify-center flex-wrap w-full">
          <img
            src={product.thumbnail}
            alt={product.title}
            width={540}
            height={560}
          />
          <div className="text-left flex flex-col gap-5 text-start">
            <p className="letter_space_2">NEW PRODUCT</p>
            <h2 className="text-4xl">{product.title}</h2>
            <p className="w-96">{product.description}</p>
            <p className="w-96"></p>
            <div className="max-w-6xl mx-auto flex flex-col">
              <div className="flex gap-5 items-center">
                <div className="flex items-center py-4 px-6 rounded-lg bg-[#F1F1F1] gap-10 justify-center text-xl">
                  <button
                    onClick={() => setAmount("decrease")}
                    className=""
                    disabled={productAmount == 1 ? true : false}
                  >
                    -
                  </button>
                  <h3>{productAmount}</h3>

                  <button onClick={() => setAmount("increase")} className="">
                    +
                  </button>
                </div>
                <button onClick={addToBag} className="btn">
                  ad to bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productsid;
