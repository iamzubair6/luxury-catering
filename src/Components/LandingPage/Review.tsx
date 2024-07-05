import user from "@assets/landing/user1.jpeg";
import user1 from "@assets/landing/user2.jpg";
import user2 from "@assets/landing/user3.jpeg";
const Review = () => {
  return (
    <div className="mt-16 mb-4">
      <h2 className="text-5xl font-semibold  mb-8 font-fjalla">REVIEWS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            src={user2}
            alt="Tahsin Choudhury"
            className="w-16 h-16 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-2 font-fjalla">
            TAHSIN CHOUDHURY
          </h3>
          <p className="mb-4">
            “Excellent food! The service was even better. Really very very
            satisfied!”
          </p>
          <p className="text-black text-2xl">★★★★★</p>
        </div>
        <div>
          <img
            src={user}
            alt="Labib Tarafder"
            className="w-16 h-16 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-2 font-fjalla">LABIB TARAFDER</h3>
          <p className="mb-4">
            “Thoroughly impressed with the food, service and customer care. They
            have been super fast in responding every time and even accommodated
            a last minute requirement with ease. HIGHLY RECOMMENDED!”
          </p>
          <p className="text-black text-2xl">★★★★★</p>
        </div>
        <div>
          <img
            src={user1}
            alt="Nusrat Tanha"
            className="w-16 h-16 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-2 font-fjalla">NUSRAT TANHA</h3>
          <p className="mb-4">
            “Got very good feedback from the people I threw an office party for.
            Glad that I ordered from them.”
          </p>
          <p className="text-black text-2xl">★★★★★</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
