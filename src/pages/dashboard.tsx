

// const watches = [
//   { id: 1, image: watch1, name: "Product 1", price: "$99.99", link: "link1" },
//   { id: 2, image: watch2, name: "Product 2", price: "$149.99", link: "link1" },
//   { id: 3, image: watch3, name: "Product 3", price: "$79.99", link: "link1" },
//   { id: 4, image: watch4, name: "Product 4", price: "$45.99", link: "link1" },
//   { id: 5, image: watch5, name: "Product 5", price: "$76.99", link: "link1" },
// ];

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// const mobiles = [
//   { id: 1, image: mobile1, name: "Product 1", price: "$99.99" },
//   { id: 2, image: mobile2, name: "Product 2", price: "$149.99" },
//   { id: 3, image: mobile3, name: "Product 3", price: "$79.99" },
//   { id: 4, image: mobile4, name: "Product 4", price: "$45.99" },
//   { id: 5, image: mobile5, name: "Product 5", price: "$76.99" },
// ];
 const Dashboard = () => {
//   const { products } = useProducts();
  const navigate = useNavigate();
  return (
    <section aria-label="Product List" className="product-list-section">
      <div className="slide-view-product">
        <div className="slide-track">
          {/* <img className="slide-img delay-0" src={scroll1} alt="scroll 1" />
          <img className="slide-img delay-1" src={scroll2} alt="scroll 2" />
          <img className="slide-img delay-2" src={scroll3} alt="scroll 3" />
          <img className="slide-img delay-3" src={scroll4} alt="scroll 4" />
          <img className="slide-img delay-4" src={scroll5} alt="scroll 5" /> */}
        </div>
      </div>

      <div className="new-content">
        <strong>
          <h1>WHAT'S SPECIAL</h1>
        </strong>
        <hr className="line"></hr>
        <b>
          <p>FOR TODAY?</p>
        </b>
      </div>

      <div className="new-content1">
        <div className="newd">
          {/* <img className="newd1" src={newDay1} />
          <img className="newd2" src={newDay2} />
          <img className="newd3" src={newDay3} /> */}
        </div>
      </div>
      <br />
      <div className="arrivals">
        <h1 style={{ width: "92%" }}>NEW ARRIVALS</h1>
      </div>
      {/* <img src={dispwatch} alt="dispwatch" className="dispwatch" /> */}
      <div className="watch_container">
        <h2 className="text-2xl font-bold mb-4">Watches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* {products.map(p => ( */}
            <article
            //   key={p.id}
              className="bg-white p-4 rounded shadow"
              style={{ backgroundColor: "seashell" }}
            >
              <img
                className="w-full h-40 object-cover mb-2 rounded"
                // src={p.image}
              ></img>
              {/* <p className="text-gray-700">{p.price}</p>
               <p className="text-gray-700">{p.name}</p> */}
              {/* <Link to={`/watchpage/${p.id}`}> */}
                <Button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  style={{ backgroundColor: "black" }}
                //   onClick={() => navigate(`/watchpage/${p.id}`)}
                >
                  View Product
                </Button>
            </article>
          {/* ))} */}
        </div>

        <h2 className="text-2xl font-bold mb-4">Mobiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {mobiles.map((product) => ( */}
            <article
            //   key={product.id}
              className="bg-white p-4 rounded shadow"
              style={{ backgroundColor: "seashell" }}
            >
              <img
                className="w-full h-40 object-cover mb-2 rounded"
                // src={product.image}
              ></img>
              {/* <p className="text-gray-700">{product.price}</p> */}
              {/* <Link to={`/mobile/${product.id}`}> */}
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  style={{ backgroundColor: "black" }}
                >
                  View Product
                </button>
              {/* </Link> */}
            </article>
          {/* ))} */}
        </div>
        <br />
      </div>
      {/* <img src={dispreturn} alt="dispwatch" className="dispreturn" /> */}
      <br />
      {/* <BackToTop /> */}
    </section>
  );
};

export default Dashboard;