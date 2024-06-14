import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";

const url = "/products";

interface Product {
  id: number
  thumbnail: string
  title: string
  description: string
}

export const loader = async () => {
  const req = await customFetch(url);

  const products = req.data.products;
console.log(req);

  return { products };

};

function Home() {
  const { products }:any = useLoaderData();
  console.log(products);


  console.log(products);
  return (
    <>
      <main>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 flex max-w-6xl mx-auto px-2 my-20">
          {products.map((product: Product) => {
            return (
              <Link to={`/products/${product.id}`} key={product.id} className="hover:scale-105 shadow-xl shadow mb-3 max-w-sm flex justify-center items-center text-center">
                <div>
                  <img
                    className=" max-h-80 max-w-80 rounded-lg flex justify-items-center justify-center"
                    src={product.thumbnail}
                  />
                  <div className="card-body">
                    <h1>

                      {product.title}
                    </h1>
                    <p className="text-justify">{product.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
}
export default Home;
