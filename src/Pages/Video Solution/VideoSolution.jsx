import { useState } from "react";
import { AiOutlineCloudUpload, AiOutlinePlus } from "react-icons/ai";
import { IoPencilSharp } from "react-icons/io5";
import "react-quill/dist/quill.snow.css";
import { NavLink } from "react-router-dom";
import SaveButton from "../../components/admin/SaveButton";

const VideoSolution = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Courses");
  const [selectedTopic, setSelectedTopic] = useState("Topic 1");

  const subjects = [
    "All Courses",
    "Maths Methods",
    "Year 12 Physics",
    "Specialist Maths",
    "Marketing",
  ];

  const topics = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"];

  const handleSave = () => {
    const formData = {
      videoTitle,
    };
    console.log("Form Data", formData);
  };

  return (
    <div className="px-4 py-6 sm:p-10">
      <div>
        <h1 className="text-primary-heading font-poppins text-[1.5rem] sm:text-[2rem] font-semibold mb-2">
          Video Solutions
        </h1>
        <p className="text-pale_sky font-inter text-sm sm:text-base mb-8">
          Lorem ipsum dolor sit amet consectetur. Volutpat sit vestibulum
          molestie.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row">
        {/* Subject and Topic Dropdowns for Mobile */}
        <div className="sm:hidden mb-8">
          {/* Subjects Dropdown (Mobile Only) */}
          <label className="block text-sm font-semibold text-ebony_clay font-inter mb-2">
            Select Subject
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-primary-blue bg-athens_gray rounded-md focus:outline-none"
          >
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>

          {/* Topics Dropdown (Mobile Only) */}
          <label className="block text-sm font-semibold text-ebony_clay font-inter mb-2">
            Select Topic
          </label>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-primary-blue bg-athens_gray rounded-md focus:outline-none"
          >
            {topics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        {/* Subjects and Topics List for Desktop */}
        <div className="hidden sm:flex flex-col sm:flex-row">
          {/* Subject List */}
          <aside className="mb-8 sm:mb-0 sm:px-8 sm:border-r border-mercury">
            <h3 className="text-gray_chateau font-inter text-sm font-medium mb-4">
              Subjects
            </h3>
            <ul className="space-y-4">
              {subjects.map((subject, index) => (
                <li key={index}>
                  <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                    {subject}
                  </NavLink>
                </li>
              ))}
            </ul>
          </aside>

          {/* Topic List */}
          <aside className="sm:px-8 sm:border-r border-mercury">
            <h3 className="text-gray_chateau font-inter text-sm font-medium mb-4">
              Maths Methods
            </h3>
            <ul className="space-y-4">
              {topics.map((topic, index) => (
                <li key={index}>
                  <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                    {topic}
                  </NavLink>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Right Content Section */}
        <div className="w-full sm:w-[35rem] sm:ml-8">
          {/* Video Name and Add Button */}
          <div className="flex flex-col sm:flex-row items-center mb-4 mt-4 sm:mt-0">
            <input
              type="text"
              id="videoName"
              placeholder="Enter Video Name"
              className="w-full px-4 py-3 text-primary-heading font-inter text-sm sm:text-base border border-primary-blue bg-athens_gray rounded-md focus:outline-none mb-4 sm:mb-0"
            />
            <button
              type="button"
              className="w-full sm:w-[50%] ml-0 sm:ml-2 bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 flex items-center justify-center gap-1"
            >
              <AiOutlinePlus size={18} /> <span>Add New Material</span>
            </button>
          </div>

          {/* Video Upload Section */}
          <div className="mb-4 sm:mb-12">
            <label className="block mb-3 text-sm sm:text-base font-semibold text-ebony_clay font-inter">
              Upload Video
            </label>

            <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
              <div className="mb-2">
                <label className="block mb-2 text-sm sm:text-base font-semibold text-ebony_clay font-inter">
                  Video Title
                </label>
                <div className="flex items-center text-gray-500">
                  <input
                    type="text"
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                    className="w-full p-2 bg-transparent border-none focus:border-none focus:outline-none text-sm sm:text-base text-gray-700"
                    placeholder="Enter Video Title"
                  />
                  <IoPencilSharp size={16} />
                </div>
              </div>

              <div className="w-full">
                <input
                  type="text"
                  id="videoLink"
                  placeholder="Enter Video Link"
                  className="w-full px-5 py-3 text-primary-heading font-inter text-sm sm:text-base border border-primary-blue bg-athens_gray rounded-md focus:outline-none mb-4"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <button className="bg-transparent px-4 py-2 rounded-md border text-wood_smoke font-inter text-sm font-medium">
                  Cancel
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-md font-inter text-sm font-medium">
                  Upload
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <SaveButton onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default VideoSolution;
