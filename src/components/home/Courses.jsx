import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import swiper1 from "../../assets/swiper1.png";
import swiper2 from "../../assets/swiper2.png";
import swiper3 from "../../assets/swiper3.png";
import head1 from "../../assets/head1.png";
import head2 from "../../assets/head2.png";
import head3 from "../../assets/head3.png";
import head4 from "../../assets/head4.png";
import head5 from "../../assets/head5.png";
import right from "../../assets/right-arrow.svg";
import left from "../../assets/left-arrow.svg";
const sliderData = [
  {
    image: swiper1,
    heads: [head1, head2, head3, head4, head5],
    title: "Maths Methods",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
  {
    image: swiper2,
    heads: [head1, head2, head3, head4, head5],
    title: "year 12 physics",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
  {
    image: swiper3,
    heads: [head1, head2, head3, head4, head5],
    title: "Specialist maths",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
  {
    image: swiper1,
    heads: [head1, head2, head3, head4, head5],
    title: "Maths Methods",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
  {
    image: swiper2,
    heads: [head1, head2, head3, head4, head5],
    title: "year 12 physics",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
  {
    image: swiper3,
    heads: [head1, head2, head3, head4, head5],
    title: "Specialist maths",
    totalStudents: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur. Non aenean nunc nunc mi porttitor molestie molestie nec id. Tristique massa mi arcu fringilla at mattis felis.",
  },
];

const Courses = () => {
  return (
    <div className="px-[20px] md:px-[20px] pt-[3rem] md:pt-[9rem] pb-[4rem] md:pb-[5.5rem]">
      <p className=" text-primary-heading font-poppins text-base">
        Lorem ipsum dolor{" "}
      </p>
      <div className="md:flex items-center justify-between">
        <div className="flex items-center justify-between md:justify-normal md:gap-4 mt-2">
          <h2 className=" text-primary-heading font-poppins text-[24px] md:text-[2rem] font-semibold capitalize">
            Explore Courses
          </h2>
          <Link className=" text-boulder underline text-base font-poppins">
            View All
          </Link>
        </div>
        <form action="" className="mt-[20px] md:mt-[0px] relative">
          <input
            type="text"
            placeholder="Search courses"
            className="w-[80%] md:w-[23.25rem] rounded-[0.93rem] bg-white py-3 md:py-5 px-4 md:px-6 outline-none border-none"
          />
          <CiSearch
            className="absolute right-6 top-1/2 -translate-y-1/2"
            size={24}
            color="#9CA3AF"
          />
        </form>
      </div>

      {/* cards  */}
      <div className="relative mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          loop
          modules={[Navigation]}
          className="mySwiper"
        >
          {sliderData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="rounded-[1.875rem] bg-white p-6"
            >
              <div className=" bg-sky_blue rounded-[1.25rem] flex items-center justify-center relative p-12 h-[24.3125rem]">
                <img src={item.image} alt="" />
                <div className="flex absolute -bottom-5 left-6">
                  {item.heads.map((head, i) => (
                    <div key={i} className=" -mr-4">
                      <img src={head} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-12">
                <div>
                  <h4 className=" text-primary-heading font-poppins text-[18px] md:text-2xl font-semibold capitalize">
                    {item.title}
                  </h4>
                  <p className=" text-primary-blue font-poppins text-base font-semibold capitalize mt-1 md:mt-2">
                    +{item.totalStudents}
                  </p>
                </div>
                <Link className="py-2 md:py-4 px-2 text-[12px] md:text-[16px] md:px-6 rounded-xl md:rounded-2xl border border-primary-heading bg-white">
                  Explore Course
                </Link>
              </div>
              <hr className="w-full h-[0.0625rem] bg-mystic mt-6 mb-4" />
              <p className=" text-pale_sky font-poppins text-base pb-2">
                {item.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-[50px] md:w-[64] md:h-[64] custom-prev absolute left-[2%] md:-left-24 top-1/3 md:top-1/2 transform -translate-y-1/2 flex items-center justify-center rounded-full z-10 cursor-pointer shadow-lg">
          <img src={left} alt="" />
        </div>
        <div className="w-[50px] md:w-[64] md:h-[64] custom-next absolute right-[2%] md:-right-24 top-1/3 md:top-1/2 transform -translate-y-1/2 flex items-center justify-center rounded-full z-10 cursor-pointer shadow-lg">
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Courses;
