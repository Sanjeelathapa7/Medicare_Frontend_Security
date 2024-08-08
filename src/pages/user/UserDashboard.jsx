import React, { useEffect, useState } from "react";
import { getAllProductsApi } from "../../apis/Apis";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  //to load all products
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
      <div id="carouselExample" class="carousel slide mb-5">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/assets/images/1.png"
              alt="al"
              className="d-block w-100"
              style={{ maxWidth: "auto", height: "500px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/two.png"
              alt="al"
              className="d-block w-120"
              style={{ maxWidth: "2100px", height: "500px" }}
            />{" "}
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/3.png"
              alt="al"
              className="d-block w-100"
              style={{ maxWidth: "auto", height: "500px" }}
            />{" "}
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/4.png"
              alt="al"
              className="d-block w-90"
              style={{ maxWidth: "1800px", height: "500px" }}
            />{" "}
          </div>
          <div class="carousel-item">
            <img src="/assets/images/1.jpg" alt="al" className="d-block w-90" />{" "}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="search-bar ms-5 ps-4 mb-4 w-50">
        <input
          type="text"
          className="form-control "
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
