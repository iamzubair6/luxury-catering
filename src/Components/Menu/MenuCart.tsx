import React from "react";
interface MenuCartProps {
  image: string;
}
const MenuCart: React.FC<MenuCartProps> = ({ image }) => {
  return (
    <img src={image} alt="menu" className="h-[500px] w-full object-cover" />
  );
};

export default MenuCart;
