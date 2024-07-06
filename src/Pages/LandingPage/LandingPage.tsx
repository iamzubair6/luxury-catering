import image from "@assets/landing/image3.webp";
import image1 from "@assets/landing/image4.webp";
import image2 from "@assets/landing/image5.webp";
import image3 from "@assets/landing/image6.webp";
import Offer from "@Components/LandingPage/Offer";
import Review from "@Components/LandingPage/Review";
import ServiceCart from "@Components/LandingPage/ServiceCart";
import Terms from "@Components/LandingPage/Terms";
import React from "react";

const LandingPage: React.FC = () => {
  const cartData = [
    {
      id: 1,
      title: "Service",
      description:
        "Whether you need them to manage a buffet counter, serve platters on tables, or discreetly pass around finger foods, our professional serving team will always be up to the task.",
      image: image,
    },
    {
      id: 2,
      title: "CHAFING DISHES",
      description:
        "Essential not just to keep your food fresh, but to also present a delightful buffet setting.",
      image: image1,
    },
    {
      id: 3,
      title: "PLATES, GLASSES",
      description:
        "Why deal with the hassle of washing and preparing your own crockery?",
      image: image2,
    },
    {
      id: 4,
      title: "TABLES, CHAIRS",
      description:
        "We have simple as well as sophisticated arrangements for your specific needs.",
      image: image3,
    },
    {
      id: 5,
      title: "UNIQUE ITEMS",
      description:
        "If you’re bored of the usual white crockery sets, and want a creative touch of elegance in your event, we have the goods.",
      image: image,
    },
    {
      id: 6,
      title: "360 EVENT MANAGEMENT",
      description:
        "Sounds, lights, and everything in between! From corporate roadshows to grand weddings, we are adept at flawless execution.",
      image: image1,
    },
  ];
  return (
    <div>
      <Offer />
      <div className="pt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-9 h-full">
        {cartData.map((data) => (
          <ServiceCart data={data} />
        ))}
      </div>
      <Terms />
      <Review />
    </div>
  );
};

export default LandingPage;
