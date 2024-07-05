import image from "@assets/landing/image3.webp";
import image1 from "@assets/landing/image4.webp";
import image2 from "@assets/landing/image5.webp";
import image3 from "@assets/landing/image6.webp";
import Service from "@Components/LandingPage/Service";
import ServiceCart from "@Components/LandingPage/ServiceCart";
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
      <div className="grid grid-cols-2 pb-[30px]">
        <h1 className="font-fjalla text-5xl font-semibold">
          Services We Offer
        </h1>
        <div>
          Often it’s not enough to just get your event’s food catered; you might
          need a host of other supports like waiters/servers, chafing dishes,
          cutlery and so on. <p className="mt-5"> We can provide them all.</p>
        </div>
      </div>
      <div className="pt-[30px] grid grid-cols-3 gap-y-16 gap-x-9 h-full">
        {cartData.map((data) => (
          <ServiceCart data={data} />
        ))}
      </div>
      <Service />
    </div>
  );
};

export default LandingPage;
