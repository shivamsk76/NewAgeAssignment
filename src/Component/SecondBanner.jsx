import React from "react";
import img from "./images/img.png";

function SecondBanner() {
  return (
    <div className="center" style={{ marginTop: "1%" }}>
      <img alt="" src={img} />
      <h2 className="sfirst-txt fade-in ">
        Lorem Ipsum is simply dummy text
        <p className="ssecond-txt  fade-in">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          obcaecati saepe in minima omnis reiciendis, laudantium laboriosam
          labore vitae accusantium perspiciatis corrupti eveniet tenetur
          officiis praesentium assumenda blanditiis consequatur. Iusto!
        </p>
      </h2>
    </div>
  );
}

export default SecondBanner;
