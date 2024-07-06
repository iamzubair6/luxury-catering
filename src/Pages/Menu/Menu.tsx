import Review from "@Components/LandingPage/Review";
import Terms from "@Components/LandingPage/Terms";
import LiveMenu from "@Components/Menu/LiveMenu";
import MenuCart from "@Components/Menu/MenuCart";
import Offer from "@Components/Shared/Offer";
import SEO from "@Components/Shared/SEO";
import menu1 from "@assets/menu/menu1.jpg";
import menu2 from "@assets/menu/menu2.jpg";
import menu3 from "@assets/menu/menu3.png";
import menu4 from "@assets/menu/menu4.jpg";
import menu5 from "@assets/menu/menu5.webp";

const Menu = () => {
  const menuImage = [
    {
      id: 1,
      image: menu1,
    },
    {
      id: 2,
      image: menu2,
    },
    {
      id: 3,
      image: menu3,
    },
    {
      id: 4,
      image: menu4,
    },
    {
      id: 5,
      image: menu5,
    },
    {
      id: 6,
      image: menu3,
    },
  ];
  return (
    <div>
      <SEO title="OUR MENU" />
      <Offer
        title="EXPLORE OUR MENU"
        subTitle="Whether you want Deshi, Indian, Chinese or Continental cuisine, we have a rich selection of delectable items to complement your event. From finger foods to main dishes to desserts."
        nestedSubTitle="Minimum order quantity for most items is 10. For Kacchi, it is 20."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-[80px]">
        {menuImage.map((item) => (
          <MenuCart key={item.id} image={item.image} />
        ))}
      </div>
      <LiveMenu />
      <Terms />
      <Review />
    </div>
  );
};

export default Menu;
