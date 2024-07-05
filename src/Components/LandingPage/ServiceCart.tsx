import React from "react";

type ServiceCartProps = {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};
const ServiceCart: React.FC<ServiceCartProps> = ({ data }) => {
  return (
    <div key={data.id} className="flex flex-col gap-4 items-center">
      <img
        className="w-full h-[354px] object-cover"
        src={data.image}
        alt="services we offer"
      />
      <h2 className="font-fjalla font-semibold text-2xl">{data.title}</h2>
      <p className="text-center">{data.description}</p>
    </div>
  );
};

export default ServiceCart;
