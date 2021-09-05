import React, { useEffect } from "react";
import "./css/Demo.css";
import FirstBanner from "./FirstBanner";
import Form from "./Form";
import LeftRight from "./LeftRight";
import SecondBanner from "./SecondBanner";
import ShopHomeBars from "./ShopHomeBars";
import TwoImageSection from "./TwoImageSection";

function Demo() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    };
    const sliders = document.querySelectorAll(".slide-in");

    const apperOnScroll = new IntersectionObserver(function (
      entries,
      apperOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          apperOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      apperOnScroll.observe(fader);
    });

    sliders.forEach((slider) => {
      apperOnScroll.observe(slider);
    });
  }, []);
  return (
    <div>
      <FirstBanner />
      <SecondBanner />
      <ShopHomeBars />
      <TwoImageSection />
      <LeftRight />
      <Form />
    </div>
  );
}

export default Demo;
