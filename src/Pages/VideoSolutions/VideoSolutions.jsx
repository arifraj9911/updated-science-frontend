import { useState } from "react";
import NavbarShared from "../../components/NavbarShared";
import arrowBtn from "../../assets/images/arrow.svg";
import filterViewsIcon from "../../assets/images/filter_views.svg";
import arrowRight from "../../assets/images/arrow_right.svg";
import arrowLeft from "../../assets/images/Arrow_Left_LG.svg";
import threeDot from "../../assets/images/More_Vertical.svg";
import videosData from "../../data/videosData";

import { useNavigate } from "react-router-dom";

const categories = ["All", "Tests", "Exams", "Textbook"];
const courses = ["CSE", "EEE", "ICT", "CIVIL"];
const subjects = ["Physics", "Chemistry", "Biology", "Mathematics"];
const views = ["Grid View", "List View"];

const VideoSolutions = () => {
  const [selected, setSelected] = useState("All");
  const [courseSelected, setCourseSelected] = useState("Course");
  const [subSelected, setSubSelected] = useState("Subject");
  const [viewSelected, setViewSelected] = useState("Grid View");

  const [toggleCourse, setToggleCourse] = useState(false);
  const [toggleSub, setToggleSub] = useState(false);
  const [toggleView, setToggleView] = useState(false);

  const navigate = useNavigate();

  const handleGridDetails = (id) => {
    navigate(`/profile/video-solutions/${id}`);
  };

  const handleListDetails = (id) => {
    navigate(`/profile/video-solutions/${id}`);
  };

  return (
    <div>
      {/* navbar start */}
      <NavbarShared search={true} />
      {/* navbar end */}

      <div className="mt-11">
        <h3 className="text-[32px] text-primary-heading font-semibold font-poppins ">
          Video Solutions
        </h3>
        <p className="text-primary-text text-[16px] mt-4 mb-10 font-inter">
          Lorem ipsum dolor sit amet consectetur. Urna magna magna convallis
          tincidunt
        </p>

        {/* filtering options start*/}
        <div className="flex items-center justify-between">
          {/* category filter */}
          <div className="flex items-center gap-2 font-poppins text-[#374151] font-medium">
            {categories.map((category, index) => (
              <p
                onClick={() => setSelected(category)}
                key={index}
                className={`px-6 py-2 border border-[#D1D5DB] rounded-lg ${
                  selected === category ? "bg-[#E5E7EB80] border-none " : ""
                }`}
              >
                {category}
              </p>
            ))}
          </div>

          {/* course/subject/grid filter */}
          <div className="font-poppins flex items-center gap-4">
            {/* course start*/}
            <div
              onClick={() => setToggleCourse(!toggleCourse)}
              className="flex items-center  gap-4 border py-2 px-4 relative border-[#D1D5DB] rounded-lg"
            >
              <span>{courseSelected}</span>
              <img
                src={arrowBtn}
                className={`duration-200 transition-transform ease-in-out ${
                  toggleCourse ? "rotate-180" : "rotate-0"
                }`}
                alt="arrow_btn"
              />

              {toggleCourse && (
                <div className="absolute flex flex-col bg-[#FFF] w-full top-12 right-0 p-3 gap-2 rounded-lg border cursor-pointer">
                  {courses.map((course, index) => (
                    <span
                      onClick={() => {
                        setCourseSelected(course);
                        setToggleCourse(false);
                      }}
                      key={index}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* course end*/}

            {/* subject start*/}
            <div
              onClick={() => setToggleSub(!toggleSub)}
              className="flex items-center  gap-4 border py-2 px-4 relative border-[#D1D5DB] rounded-lg"
            >
              <span>{subSelected}</span>
              <img
                src={arrowBtn}
                className={`duration-200 transition-transform ease-in-out ${
                  toggleSub ? "rotate-180" : "rotate-0"
                }`}
                alt="arrow_btn"
              />

              {toggleSub && (
                <div className="absolute flex flex-col bg-[#FFF] w-full top-12 right-0 p-3 gap-2 rounded-lg border cursor-pointer">
                  {subjects.map((subject, index) => (
                    <span
                      onClick={() => {
                        setSubSelected(subject);
                        setToggleSub(false);
                      }}
                      key={index}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* subject end*/}

            {/* view start*/}
            <div
              onClick={() => setToggleView(!toggleView)}
              className="flex items-center  gap-4 border py-2 px-4 relative border-[#D1D5DB] rounded-lg"
            >
              <img src={filterViewsIcon} alt="filter_view_icon" />
              <span>{viewSelected}</span>
              <img
                src={arrowBtn}
                className={`duration-200 transition-transform ease-in-out ${
                  toggleView ? "rotate-180" : "rotate-0"
                }`}
                alt="arrow_btn"
              />

              {toggleView && (
                <div className="absolute flex flex-col bg-[#FFF] w-full top-12 right-0 p-3 gap-2 rounded-lg border cursor-pointer">
                  {views.map((view, index) => (
                    <span
                      onClick={() => {
                        setViewSelected(view);
                        setToggleView(false);
                      }}
                      key={index}
                    >
                      {view}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* subject end*/}
          </div>
        </div>
        {/* filtering options end*/}

        <hr className="my-8" />

        {/* video section start*/}
        {/* for grid view */}
        {viewSelected === "Grid View" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 mb-8 gap-4">
            {videosData?.map((video) => (
              <div className=" w-full" key={video.id}>
                <iframe
                  className="rounded-t-lg w-full "
                  // width="354"
                  height="246"
                  src={video.youtube_link}
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => handleGridDetails(video?.id)}
                  className="bg-[#111928CC] -mt-[1px] flex items-center font-poppins font-semibold text-left rounded-b-lg py-2 gap-2 w-full   px-6 text-white"
                >
                  View Details
                  <img src={arrowRight} alt="arrow_right" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* for list view */}
        {viewSelected === "List View" && (
          <div className=" mb-8 gap-4 flex flex-col  ">
            {videosData?.map((video) => (
              <div key={video?.id} className="flex justify-between">
                <div className=" w-full gap gap-6 flex items-center">
                  <iframe
                    className="rounded-lg w-1/3 "
                    //   width="248"
                    height="184"
                    src={video?.youtube_link}
                    allowFullScreen
                  ></iframe>
                  <div>
                    <h4 className="text-xl font-inter font-medium text-[#111928]">
                      {video?.subject_title}
                    </h4>
                    <div className="mt-4 mb-6 text-primary-text flex items-center gap-2 text-[16px]">
                      <span>{video?.subject_name} </span>
                      <span className="dot-before">{video?.total_views}</span>
                      <span className="dot-before">{video?.uploaded_time}</span>
                    </div>
                    <button
                      onClick={() => handleListDetails(video?.id)}
                      className="font-poppins flex items-center gap-3 text-[#111928] font-semibold"
                    >
                      View Details
                      <img src={arrowLeft} alt="arrow_right" />
                    </button>
                  </div>
                </div>
                <img src={threeDot} alt="three_dot" />
              </div>
            ))}
          </div>
        )}
        {/* video section end*/}
      </div>
    </div>
  );
};

export default VideoSolutions;
