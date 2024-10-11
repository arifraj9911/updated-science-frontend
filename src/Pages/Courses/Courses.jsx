import { NavLink } from "react-router-dom";
import SaveButton from "../../components/admin/SaveButton";
import { AiOutlinePlus } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useState } from "react"; // Use state for dropdown

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // Store selected category

  const categories = [
    "All Courses",
    "Maths Methods",
    "Year 12 Physics",
    "Specialist Maths",
    "Marketing",
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // Update selected category
  };

  return (
    <div className="px-6 sm:px-14 pt-10 sm:pt-24">
      {/* Header Section */}
      <div>
        <h1 className="text-primary-heading font-poppins text-[1.5rem] sm:text-[2rem] font-semibold mb-2">
          Courses
        </h1>
        <p className="text-pale_sky font-inter text-sm sm:text-base mb-8">
          Lorem ipsum dolor sit amet consectetur. Volutpat sit vestibulum molestie.
        </p>
      </div>

      <div className="sm:flex">
        {/* Sidebar as Dropdown (Mobile Only) */}
        <aside className="block sm:hidden mb-8">
          <label
            htmlFor="categoryDropdown"
            className="block mb-3 text-sm sm:text-base font-semibold text-ebony_clay font-inter"
          >
            CATEGORIES
          </label>
          <select
            id="categoryDropdown"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="block w-full px-5 py-3 text-primary-heading font-inter text-sm sm:text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </aside>

        {/* Sidebar as List (Desktop Only) */}
        <aside className="hidden sm:block mb-8 sm:mb-0 sm:px-8 sm:border-r border-mercury">
          <h3 className="text-gray_chateau font-inter text-sm font-medium mb-4">
            CATEGORIES
          </h3>
          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index}>
                <NavLink className="p-2 rounded text-dove_gray text-sm font-medium">
                  {category}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full sm:w-[31.75rem] sm:ml-6">
          <form>
            {/* Course Name */}
            <label
              htmlFor="courseName"
              className="block mb-3 text-sm sm:text-base font-semibold text-ebony_clay font-inter"
            >
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              placeholder="Enter your full Course Name"
              className="block w-full px-5 py-3 text-primary-heading font-inter text-sm sm:text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
            />

            {/* Number of Courses */}
            <label
              htmlFor="numberOfCourses"
              className="block mb-3 text-sm sm:text-base font-semibold text-ebony_clay font-inter"
            >
              Number of Course
            </label>
            <input
              type="text"
              id="numberOfCourses"
              placeholder="Enter Number of Subjects"
              className="block w-full px-5 py-3 text-primary-heading font-inter text-sm sm:text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
            />

            {/* Delete Course with Add Button */}
            <label
              htmlFor="deleteCourse"
              className="block mb-3 text-sm sm:text-base font-semibold text-ebony_clay font-inter"
            >
              Delete Course
            </label>
            <div className="flex flex-col sm:flex-row items-stretch mb-4">
              <input
                type="text"
                id="deleteCourse"
                placeholder="Enter your full Course Name"
                className="flex-grow px-5 py-3 text-primary-heading font-inter text-sm sm:text-base border border-primary-blue bg-athens_gray rounded-md focus:outline-none mb-4 sm:mb-0"
              />
              <button
                type="button"
                className="sm:ml-2 bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 flex items-center justify-center gap-1"
              >
                <AiOutlinePlus size={18} className="mt-[1px]" /> <span>Add</span>
              </button>
            </div>

            {/* Select Course */}
            <label
              htmlFor="selectCourse"
              className="block mb-3 text-sm sm:text-base font-semibold text-ebony_clay font-inter"
            >
              Select Course
            </label>
            <select
              id="selectCourse"
              className="block w-full px-5 py-3 text-primary-heading font-inter text-sm sm:text-base border border-primary-blue bg-athens_gray rounded-md mb-4 focus:outline-none"
            >
              <option value="">Select Subjects</option>
              <option value="Maths">Maths</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
            </select>

            {/* Delete Course with Dropdown */}
            <label
              htmlFor="deleteCourseDropdown"
              className="block mb-3 text-sm sm:text-base font-semibold text-ebony_clay font-inter"
            >
              Delete Course
            </label>
            <div className="flex flex-col sm:flex-row mb-6">
              <select
                id="deleteCourseDropdown"
                className="flex-grow px-5 py-3 text-primary-heading font-inter text-sm sm:text-base border border-primary-blue bg-athens_gray rounded-md focus:outline-none mb-4 sm:mb-0"
              >
                <option value="">Select Course</option>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
              </select>
              <button
                type="button"
                className="sm:ml-2 bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 flex items-center justify-center gap-1"
              >
                <IoClose size={18} className="mt-[1px]" /> <span>Delete</span>
              </button>
            </div>

            {/* Save Button */}
            <SaveButton />
          </form>
        </main>
      </div>
    </div>
  );
};

export default Courses;
