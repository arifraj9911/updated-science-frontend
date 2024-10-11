import { useState } from "react";
import bookReading from "../../../assets/images/book_reading.svg";
import reading from "../../../assets/images/reading.svg";
import videos from "../../../assets/images/videos.svg";
import assignment from "../../../assets/images/assignment.svg";
import { useNavigate } from "react-router-dom";

const ModuleAccordion = ({ modules, id }) => {
  const [openIndexes, setOpenIndexes] = useState({});
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleModuleContent = (content, module) => {
    // console.log(content)
    navigate(`/profile/practice-test/${id}/summery`, {
      state: { content, module },
    });
  };

  // console.log(modules)
  return (
    <div className="join join-vertical space-y-4 w-full ">
      {modules?.map((module, index) => (
        <div
          key={index}
          className={`collapse collapse-arrow join-item border-base-300 space-y-4 border ${
            openIndexes[index] ? "collapse-open" : "collapse-close"
          }`}
        >
          {/* Accordion title based on module_title */}
          <div
            className="collapse-title text-xl font-medium  bg-[#F7F7F7]"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex flex-col">
              <span className="text-primary-text font-inter text-xs uppercase">
                {module?.module_no}
              </span>
              <span className="font-poppins text-[#111928] font-semibold">
                {module?.module_title}
              </span>
            </div>
          </div>

          {/* Accordion content */}
          {openIndexes[index] && (
            <div className="collapse-content">
              {module.module_content.map((content, idx) => (
                <div
                  key={idx}
                  onClick={() => handleModuleContent(content, module)}
                  className="p-2 flex items-center gap-3 hover:bg-[#3758F90D] rounded-lg"
                >
                  <img src={bookReading} alt="bookReading" />
                  <div>
                    <p className="font-inter font-medium text-[#111928] ">
                      {content?.c_title}
                    </p>
                    <div className="flex items-center gap-4 text-secondary-text mt-1 text-sm font-poppins">
                      {content?.c_readings && (
                        <p className="flex items-center gap-2">
                          <img src={reading} alt="reading" />
                          Readings
                        </p>
                      )}
                      {content?.c_videos && (
                        <p className="flex items-center gap-2 dot-before">
                          <img src={videos} alt="videos" />
                          Videos
                        </p>
                      )}
                      {content?.c_assignment && (
                        <p className="flex items-center gap-2 dot-before">
                          <img src={assignment} alt="assignment" />
                          Assignments
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ModuleAccordion;
