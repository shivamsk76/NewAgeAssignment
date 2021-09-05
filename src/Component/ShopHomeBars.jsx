import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/ShopHome.css";

function ShopHomeBars() {
  const [data, setData] = useState([]);

  useEffect(() => {
    data.splice(0);
    console.log("called");
    axios
      .get(
        "https://shopnewage.com/collections/home-bar/products/home-bar-display-cabinet-21-61005.json"
      )
      .then((res) => {
        setData([res.data.product]);
      });
  }, []);
  return (
    <div className="center" style={{ margin: "2%" }}>
      <h4 className="fade-in">Shop Home Bars</h4>
      <p className="fade-in">
        Choose from a variety of different style to suit your home
      </p>

      {data.map((data, idx) => {
        return (
          <div className="row rowStyle " key={idx}>
            <div className="col colStyle1">
              <div className="card " style={{ border: "0px" }}>
                <div className="card-body">
                  <img alt="" src={data.image.src} className="imgStyle" />

                  <p>
                    <del>$469.99</del>
                  </p>
                  <h4 style={{ color: "blue", fontWeight: "bolder" }}>
                    $399.49
                  </h4>
                  <p>{data.title}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col colStyle1">
              <div className="card" style={{ border: "0px" }}>
                <div className="card-body">
                  <img alt="" src={data.image.src} className="imgStyle" />

                  <p>
                    <del>$469.99</del>
                  </p>
                  <h4 style={{ color: "blue", fontWeight: "bolder" }}>
                    $399.49
                  </h4>
                  <p>{data.title}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col colStyle1">
              <div className="card" style={{ border: "0px" }}>
                <div className="card-body">
                  <img alt="" src={data.image.src} className="imgStyle" />

                  <p>
                    <del>$469.99</del>
                  </p>
                  <h4 style={{ color: "blue", fontWeight: "bolder" }}>
                    $399.49
                  </h4>
                  <p>{data.title}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <br />
            <div className="col colStyle1">
              <div className="card" style={{ border: "0px" }}>
                <div className="card-body">
                  <img alt="" src={data.image.src} className="imgStyle" />

                  <p>
                    <del>$469.99</del>
                  </p>
                  <h4 style={{ color: "blue", fontWeight: "bolder" }}>
                    $399.49
                  </h4>
                  <p>{data.title}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col colStyle1">
              <div className="card" style={{ border: "0px" }}>
                <div className="card-body">
                  <img alt="" src={data.image.src} className="imgStyle" />

                  <p>
                    <del>$469.99</del>
                  </p>
                  <h4 style={{ color: "blue", fontWeight: "bolder" }}>
                    $399.49
                  </h4>
                  <p>{data.title}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col colStyle1">
              <div className="card" style={{ border: "0px" }}>
                <div className="card-body">
                  <img alt="" src={data.image.src} className="imgStyle" />

                  <p>
                    <del>$469.99</del>
                  </p>
                  <h4 style={{ color: "blue", fontWeight: "bolder" }}>
                    $399.49
                  </h4>
                  <p>{data.title}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShopHomeBars;
