import customer1 from "/customer1.png";
import customer2 from "/customer2.png";

const Testimonials = () => {
  return (
    <section className="px-4 lg:px-20">
      <h3 className="text-primaryColor font-semibold text-xl text-center py-4">
        What Our Customers Are Saying
      </h3>
      <div className="flex gap-4">
        <div className="lg:flex bg-secondaryColor lg:bg-primaryColor text-primaryColor lg:text-white items-center">
          <img src={customer1} alt="" className="w-full" />
          <div className="px-2 py-2 lg:py-0 lg:px-10 text-xs lg:text-normal">
            <p>
              FLAURY offers superb profesionals to offer their services... My
              ability to source for freelancers even from other location made my
              search very easy...
            </p>
            <span>__Mary Jones</span>
          </div>
        </div>
        <div className="lg:flex bg-secondaryColor lg:bg-primaryColor text-primaryColor lg:text-white items-center">
          <img src={customer2} alt="" className="w-full" />
          <div className="px-2 py-2 lg:py-0 lg:px-10 text-xs lg:text-normal">
            <p>
              FLAURY offers superb profesionals to offer their services... My
              ability to source for freelancers even from other location made my
              search very easy...
            </p>
            <span>__Mary Jones</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
