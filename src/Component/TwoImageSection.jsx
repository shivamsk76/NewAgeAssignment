import React from "react";
import img from "./images/images.jpeg";

function TwoImageSection() {
  return (
    <div className="row center">
      <div className="col fade-in" style={{ maxWidth: "30%" }}>
        <img
          alt=""
          src={img}
          style={{ maxWidth: "400px", maxHeight: "300px" }}
        />
        <h4>Lorem Ipsum is simply dummy text</h4>
        <p className="fade-in">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt error
          aperiam, corrupti harum debitis possimus nisi quas. Consequatur minima
          ipsam neque, obcaecati, ullam, odit enim ea voluptatem provident rerum
          quidem!
        </p>
      </div>
      <div className="col fade-in" style={{ maxWidth: "30%" }}>
        <img
          alt=""
          src={img}
          style={{ maxWidth: "400px", maxHeight: "300px" }}
        />
        <h4>Lorem Ipsum is simply dummy text</h4>

        <p className="fade-in">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt error
          aperiam, corrupti harum debitis possimus nisi quas. Consequatur minima
          ipsam neque, obcaecati, ullam, odit enim ea voluptatem provident rerum
          quidem!
        </p>
      </div>
    </div>
  );
}

export default TwoImageSection;
