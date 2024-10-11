import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { NavLink } from "react-router-dom";
import SaveButton from "../../components/admin/SaveButton";
import { IoPencilSharp } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";

const PracticeTest = () => {
  const [questionSource, setQuestionSource] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [hintsCount, setHintsCount] = useState(0);
  const [hints, setHints] = useState(Array(6).fill(""));
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [acceptedDeviation, setAcceptedDeviation] = useState({
    from: "",
    to: "",
  });

  const handleHintsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setHintsCount(value);
  };

  const handleHintInputChange = (index, value) => {
    const newHints = [...hints];
    newHints[index] = value;
    setHints(newHints);
  };

  const handleSave = () => {
    const formData = {
      questionSource,
      questionText,
      videoTitle,
      hints: hints.slice(0, hintsCount),
      correctAnswer,
      acceptedDeviation,
    };
    console.log("Form Data", formData);
  };

  return (
    <div className="p-6">
      <div>
        <h1 className=" text-primary-heading font-poppins text-[2rem] font-semibold mb-2">
          Practice test
        </h1>
        <p className=" text-pale_sky font-inter text-base mb-8">
          Lorem ipsum dolor sit amet consectetur. Urna magna magna convallis
          tincidunt
        </p>
      </div>
      <div className="flex">
        {/* Left Sidebar */}
        <div className="flex">
          {/* Subject List */}
          <aside className="px-8 border-r border-mercury">
            <h3 className=" text-gray_chateau font-inter text-sm font-medium mb-4 pt-4">
              Subjects
            </h3>
            <ul className="space-y-4">
              <li>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                  All Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                  Maths Methods
                </NavLink>
              </li>
              <li>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                  Year 12 physics
                </NavLink>
              </li>
              <li>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                  Specialist maths
                </NavLink>
              </li>
              <li>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                  Marketing
                </NavLink>
              </li>
            </ul>
          </aside>

          {/* Topic List */}
          <aside className="px-8 border-r border-mercury">
            <h3 className=" text-gray_chateau font-inter text-sm font-medium mb-4 pt-4">
              Maths Methods
            </h3>
            <ul className="space-y-4">
              <li>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                  Topic
                </NavLink>
              </li>
              <li>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                  Topic
                </NavLink>
              </li>
              <li>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                  Topic
                </NavLink>
              </li>
              <li>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                  Topic
                </NavLink>
              </li>
              <li>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium whitespace-nowrap">
                  Topic
                </NavLink>
              </li>
            </ul>
          </aside>
        </div>

        {/* Right Content Section */}
        <div className="w-[35rem] ml-8">
          {/* Question Source */}
          <div className="mb-6 pt-4">
            <label className="block mb-3 text-base font-semibold text-ebony_clay font-inter">
              Question Source
            </label>
            <input
              type="text"
              value={questionSource}
              onChange={(e) => setQuestionSource(e.target.value)}
              className="block w-full px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
              placeholder="Question is from 2019 exam"
            />
          </div>
          <p className="block mb-6 text-base font-semibold text-ebony_clay font-inter border-b border-mystic pb-4">
            Question Content
          </p>
          {/* Question Text (Rich Text Editor) */}
          <div className="mb-4">
            <label className="block mb-3 text-base font-semibold text-ebony_clay font-inter">
              Question Text
            </label>
            <ReactQuill
              value={questionText}
              onChange={setQuestionText}
              className="border border-mystic rounded-md"
              placeholder="Enter a description..."
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                  ["undo", "redo"],
                ],
              }}
            />
          </div>

          {/* Additional image or video */}
          <div className="mb-12">
            <label className="block mb-3 text-base font-semibold text-ebony_clay font-inter">
              Additional image or video
            </label>

            {/* Video Title and Description */}
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
              <div className="mb-2">
                <label className="block mb-2 text-base font-semibold text-ebony_clay font-inter">
                  Video Title
                </label>
                <div className="flex items-center text-gray-500">
                  {/* Input for Video Title */}
                  <input
                    type="text"
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                    className="p-2 bg-transparent border-none focus:border-none focus:outline-none text-sm text-gray-700"
                    placeholder="Small description"
                  />
                  {/* Edit Icon */}
                  <IoPencilSharp size={16} />
                </div>
              </div>

              {/* Upload Section */}
              <label
                htmlFor="file"
                className="mt-4 mb-4 flex flex-col items-center justify-center border-dashed border border-purple-400 p-6 "
              >
                <div className="text-gray-400 h-32 flex justify-center items-center">
                  <AiOutlineCloudUpload size={48} />
                </div>
                <input id="file" type="file" className="hidden" />
              </label>
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

          <p className="block mb-6 text-base font-semibold text-ebony_clay font-inter border-b border-mystic pb-4">
            Hints
          </p>
          {/* Hints */}
          <div className="mb-4">
            <label className="block mb-3 text-base font-semibold text-ebony_clay font-inter">
              Number of Hints
            </label>
            <select
              value={hintsCount}
              onChange={handleHintsChange}
              className="block w-full px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
            >
              <option value="0">Enter Number of Hints</option>
              {[...Array(6)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {hints.slice(0, hintsCount).map((hint, index) => (
              <div key={index} className="mt-4">
                <label className="block mb-3 text-base font-semibold text-ebony_clay font-inter">
                  Hint {index + 1}
                </label>
                <input
                  type="text"
                  value={hint}
                  onChange={(e) => handleHintInputChange(index, e.target.value)}
                  className="block w-full px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
                  placeholder={`Enter Hint ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <p className="block mb-6 text-base font-semibold text-ebony_clay font-inter border-b border-mystic pb-4 mt-12">
            Answer Section
          </p>
          {/* Answer Section */}
          <div className="mb-4">
            <label className="block mb-3 text-base font-semibold text-ebony_clay font-inter">
              Correct Answer
            </label>
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              className="block w-full px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
              placeholder="Enter Answer"
            />
          </div>

          {/* Accepted Deviation */}
          <div className="mb-4">
            <label className="block mb-3 text-base font-semibold text-ebony_clay font-inter">
              Accepted Deviation
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                value={acceptedDeviation.from}
                onChange={(e) =>
                  setAcceptedDeviation({
                    ...acceptedDeviation,
                    from: e.target.value,
                  })
                }
                className="block w-full px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
                placeholder="From"
              />
              <input
                type="text"
                value={acceptedDeviation.to}
                onChange={(e) =>
                  setAcceptedDeviation({
                    ...acceptedDeviation,
                    to: e.target.value,
                  })
                }
                className="block w-full px-5 py-3 text-primary-heading font-inter text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
                placeholder="To"
              />
            </div>
          </div>

          {/* Save Button */}
          <SaveButton onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default PracticeTest;
