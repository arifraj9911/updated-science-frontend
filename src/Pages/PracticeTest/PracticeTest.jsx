import { useState } from "react";
import NavbarShared from "../../components/NavbarShared";
import arrowBtn from "../../assets/images/arrow.svg";
import filterViewsIcon from "../../assets/images/filter_views.svg";
import clock from "../../assets/images/clock.svg";
import studyMaterial from "../../data/studyMaterialData";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Tests", "Exams", "Textbook"];
const courses = ["CSE", "EEE", "ICT", "CIVIL"];
const subjects = ["Physics", "Chemistry", "Biology", "Mathematics"];
const views = ["Grid View", "List View"];

const PracticeTest = () => {
  const [selected, setSelected] = useState("All");
  const [courseSelected, setCourseSelected] = useState("Course");
  const [subSelected, setSubSelected] = useState("Subject");
  const [viewSelected, setViewSelected] = useState("Grid View");

  const [toggleCourse, setToggleCourse] = useState(false);
  const [toggleSub, setToggleSub] = useState(false);
  const [toggleView, setToggleView] = useState(false);

  const navigate = useNavigate();

  const handleStudySelect = (id) => {
    // console.log(id)
    navigate(`/profile/practice-test/${id}`);
  };

  return (
    <div>
      {/* navbar start */}
      <NavbarShared search={true} practice={true} />
      {/* navbar end */}

      <div className="mt-11">
        <h3 className="text-[32px] text-primary-heading font-semibold font-poppins ">
          Study Material
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

        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {studyMaterial?.map((study) => (
            <div
              onClick={() => handleStudySelect(study?.id)}
              className="border cursor-default border-[#DFE4EA] rounded-3xl p-6"
              key={study?.id}
            >
              <img
                src={study?.icon}
                alt={study?.course_title}
                className="mb-[54px]"
              />

              {/* title and description area */}
              <div className="font-poppins space-y-4">
                <p className="font-semibold ">{study?.course_title}</p>
                <p className="text-primary-text ">
                  {study?.description.slice(0, 60)}
                </p>
              </div>

              {/* progress area */}
              <div className="mt-[22px] flex items-center gap-3  text-[#696A6F]">
                <div className="w-full h-[9px] rounded-3xl bg-gray-200 overflow-hidden">
                  <div
                    style={{
                      width: `${study?.completion}`,
                    }}
                    className="bg-[#3758F9] h-full text-center text-white"
                  ></div>
                </div>
                <p className="">{study?.completion}</p>

                <div className="flex items-center gap-1 dot-before  ">
                  <img src={clock} alt="clock" />
                  <p>{study?.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeTest;
