const Footer = () => {
  return (
    <div>
      <div className="bg-[rgb(235,230,225)] py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2 font-fjalla">HOURS</h2>
            <p>Open everyday</p>
            <p>10am — 10pm</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 font-fjalla">SOCIALS</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 font-fjalla">
              LUXURY CATERING
            </h2>
            <p>017-55-66-44-55</p>
            <p>
              <a
                href="mailto:orders@alphacateringservices.com"
                className="hover:underline"
              >
                orders@alphacateringservices.com
              </a>
            </p>
            <p>786 Ibrahimpur</p>
            <p>Cantonment, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
