import React from "react";
import img from "./images/nature.jpeg";
import "./css/LeftRight.css";

function LeftRight() {
  return (
    <div>
      <div className="row">
        <div className="col  slide-in from-left " style={{ width: "20%" }}>
          <h4 className="lefth"> Lorem Ipsum is simply dummy text</h4>

          <p className="leftp slide-in from-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            omnis, eaque quod similique voluptas corporis consectetur, ea nobis
            sint sit dolorum fuga doloribus non, at labore harum saepe! Maxime,
            ipsam.
          </p>
        </div>
        <div className="col slide-in from-right">
          <img alt="" className="leftimg" src={img} />
        </div>
      </div>
      <div className="row">
        <div className="col slide-in from-left">
          <img alt="" className="leftimg" src={img} />
        </div>
        <div className="col slide-in from-right" style={{ width: "20%" }}>
          <h4 className="righth"> Lorem Ipsum is simply dummy text</h4>

          <p className="rightp">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            omnis, eaque quod similique voluptas corporis consectetur, ea nobis
            sint sit dolorum fuga doloribus non, at labore harum saepe! Maxime,
            ipsam.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col slide-in from-left" style={{ width: "20%" }}>
          <h4 className="lefth"> Lorem Ipsum is simply dummy text</h4>

          <p className="leftp">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            omnis, eaque quod similique voluptas corporis consectetur, ea nobis
            sint sit dolorum fuga doloribus non, at labore harum saepe! Maxime,
            ipsam.
          </p>
        </div>
        <div className="col slide-in from-right">
          <img alt="" className="leftimg" src={img} />
        </div>
      </div>
      <div className="row">
        <div className="col slide-in from-left">
          <img alt="" className="leftimg" src={img} />
        </div>
        <div className="col slide-in from-right" style={{ width: "20%" }}>
          <h4 className="righth"> Lorem Ipsum is simply dummy text</h4>

          <p className="rightp">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            omnis, eaque quod similique voluptas corporis consectetur, ea nobis
            sint sit dolorum fuga doloribus non, at labore harum saepe! Maxime,
            ipsam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftRight;
