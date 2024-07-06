import React from "react";

interface OfferProps {
  title: string;
  subTitle: string;
  nestedSubTitle: string;
}
const Offer: React.FC<OfferProps> = ({ title, nestedSubTitle, subTitle }) => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 pb-[30px] gap-8">
      <h1 className="font-fjalla text-4xl md:text-5xl font-semibold">
        {title}
      </h1>
      <div>
        {subTitle} <p className="mt-5"> {nestedSubTitle}</p>
      </div>
    </div>
  );
};

export default Offer;
