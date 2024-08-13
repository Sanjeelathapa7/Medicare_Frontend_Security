import React, { useEffect, useState } from "react";
import { getAllProductsApi } from "../../apis/Apis";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const UserDashboard = () => {
  // to load all products
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllProductsApi().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="py-4">
        <div id="carouselExample" className="carousel slide mb-5">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/images/a.png"
                alt="al"
                className="d-block w-100"
                style={{ width: "100%", height: "450px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/b.png"
                alt="al"
                className="d-block w-100"
                style={{ width: "100%", height: "450px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/c.png"
                alt="al"
                className="d-block w-100"
                style={{ width: "100%", height: "450px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="search-bar ms-5 ps-4 mb-4 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="user-content">
        <div className="container">
          <h3 className="mb-3">All Products</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 gy-3">
            {filteredProducts.map((product) => (
              <div className="col mb-3" key={product._id}>
                <Link
                  to={`/user/productDetails/${product._id}`}
                  className="text-decoration-none"
                >
                  <div
                    className="card rounded d-flex flex-column"
                    style={{
                      height: "100%",
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    }}
                  >
                    <img
                      src={product.productImageUrl}
                      className="card-img-top"
                      alt={product.productName}
                      style={{
                        height: "190px",
                        objectFit: "cover",
                        borderTopLeftRadius: "0.25rem",
                        borderTopRightRadius: "0.25rem",
                      }}
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text">
                          Price: NPR. {product.productPrice}
                        </p>
                        <p className="card-text mb-3">
                          {product.productDescription.length > 50
                            ? product.productDescription.slice(0, 50) + "..."
                            : product.productDescription}
                        </p>
                      </div>
                      {/* <button className="btn btn-danger align-self-start">
                        Add to cart
                      </button> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
