import SectionTitle from '../components/SectionTitle';
import MyButton from "../components/button/button";
import '@fortawesome/fontawesome-free/css/all.min.css';


const ReservationSection = () => {
  return (
    <section className="bg-green-900 text-white py-16 flex justify-center">
      <div className="max-w-4xl w-full text-center px-6">
        {/* Section Title */}
        <SectionTitle
          heading1="Book your Table"
          heading2="Make your Reservation"
          heading2ClassName="text-white"
        />
        <div className='mt-0 py-0 font-lato text-gray-200'>
            <p  className>Call +1 (800) 555-1234 from 5a – 11p daily, or book online.<br></br>
            Reservations required for parties of 4 or more.</p>
        </div>
        <div>
        {/* Form */}
        <form className="mt-8 space-y-6 max-w-2xl mx-auto ">
        <div>
            <input
              type="text"
              placeholder="Your name"
              className="rounded-full px-4 py-2 w-full border-2 border-white  focus:outline-none focus:ring focus:ring-orange-500 bg-transparent"
            />
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone number"
              className="rounded-full px-4 py-2 w-full border-2 border-white focus:outline-none focus:ring focus:ring-orange-500 bg-transparent"
            />
            <input
              type="text"
              placeholder="Email address"
              className="rounded-full px-4 py-2 w-full border-2 border-white focus:outline-none focus:ring focus:ring-orange-500 bg-transparent"
            />
            
            <input
                type="text"
                placeholder='Date Time'
                className="bg-transparent rounded-full px-4 py-2 w-full border-2 border-white text-white focus:outline-none focus:ring focus:ring-orange-500 placeholder-gray-400"
            />
            <input
                type="number"
                placeholder="Seats"
                className="bg-transparent rounded-full px-4 py-2 w-full border-2 border-white text-white focus:outline-none focus:ring focus:ring-orange-500 placeholder-gray-400"
            />
        </div>

        <div>
          <textarea
            placeholder="Message"
            rows="4"
            className="rounded-3xl px-4 py-2 w-full border-2 border-white  focus:outline-none focus:ring focus:ring-orange-500 bg-transparent"
          />
        </div>
          <MyButton label="Book your Table"/>
        </form>

        {/* Social Icons */}
        <div className="mt-16 flex justify-center gap-4">
          <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex justify-center items-center text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex justify-center items-center text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex justify-center items-center text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex justify-center items-center text-white">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-10 text-xl font-lato text-gray-200">
        <div className='flex flex-row justify-center space-x-6'>
          <p>Developed by ZealousWeb</p>
          <p>Powered by Webflow</p>
        </div>
          <div className="mt-6 ">
            <a href="#" className="font-lato">
              Licenses
            </a>
            <span className="mx-2"></span>
            <a href="#" className="font-lato">
              Instructions
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ReservationSection;
