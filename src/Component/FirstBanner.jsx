import React from "react";
import img from "./images/img.png";

function FirstBanner() {
  return (
    <div className="center">
      <img alt="" src={img} />
      <h2 className="first-txt fadeInAnimation ">
        Lorem Ipsum is simply dummy text
      </h2>

      <p className="second-txt fadeInAnimation">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus obcaecati
        saepe in minima omnis reiciendis, laudantium laboriosam labore vitae
        accusantium perspiciatis corrupti eveniet tenetur officiis praesentium
        assumenda blanditiis consequatur. Iusto!
      </p>
    </div>
  );
}

export default FirstBanner;
