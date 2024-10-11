import { useState } from "react";

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    positionHeld: "",
    others: "",
    learned_about_us_form: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // You can handle the final submit here
  };

  return (
    <div className="px-6 xl:px-16 py-7 md:py-[50px] font-inter max-h-full overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-5">
        Become a Partner
      </h2>
      <p className="text-lg md:text-xl font-medium text-[#3D5AF1]">
        Admin Details
      </p>
      <p className="text-sm text-[#9CA3AF] mb-2 md:mb-3">
        Please enter your Admin details
      </p>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Email Field */}
        <div className="">
          <label className="font-medium md:font-semibold">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
            required
          />
        </div>

        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4">
          <div>
            <label className="font-medium md:font-semibold">First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
              required
            />
          </div>
          <div>
            <label className="font-medium md:font-semibold">Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
              required
            />
          </div>
        </div>

        {/* Password and Confirm Password */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4">
          <div>
            <label className="font-medium md:font-semibold">Password*</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
              required
            />
          </div>
          <div>
            <label className="font-medium md:font-semibold">
              Confirm Password*
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
              required
            />
          </div>
        </div>

        {/* Position Held */}
        <div className="">
          <label className="font-medium md:font-semibold">Position Held*</label>
          <input
            type="text"
            name="positionHeld"
            value={formData.positionHeld}
            onChange={handleInputChange}
            placeholder="Enter your position"
            className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
            required
          />
        </div>

        {/* Others Field */}
        <div className="">
          <label className="font-medium md:font-semibold">Others</label>
          <input
            type="text"
            name="others"
            value={formData.others}
            onChange={handleInputChange}
            placeholder="Any additional information"
            className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
          />
        </div>

        {/* How Did You Learn About Us? */}
        <div className="">
          <label className="font-medium md:font-semibold">
            How Did You Learn About Us?
          </label>
          <select
            name="learned_about_us_form"
            value={formData.learned_about_us_form}
            onChange={handleInputChange}
            className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
          >
            <option value="">Select an option</option>
            <option value="socialMedia">Social Media</option>
            <option value="friend">Friend</option>
            <option value="event">Event</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-3.5">
          <button
            type="submit"
            className="w-full border border-[#1A416A] bg-[#1A416A] text-white py-2 rounded-md"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
