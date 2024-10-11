import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MemberForm = () => {
  const navigate = useNavigate();
  const [formPage, setFormPage] = useState(1);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    date_of_birth: "",
    address: "",
    email: "",
    parent_email_one: "",
    parent_email_two: "",
    student: {
      avatar: "",
      bio: "",
      academic_info: [
        {
          school_name: "",
          year_level: "",
        },
      ],
    },
    gender: "",
    username: "",
    password: "",
    secret_question: "Your name?",
    secret_question_answer: "Mim",
    mobile_no: "",
    user_type: "student",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep = () => {
    let isValid = true;
    let isMissingField = false;

    if (formPage === 1) {
      // Check if any required field in step 1 is empty
      isMissingField =
        !formData.firstname ||
        !formData.lastname ||
        !formData.date_of_birth ||
        !formData.email ||
        !formData.parent_email_one ||
        !formData.mobile_no ||
        !formData.gender;
    } else if (formPage === 2) {
      // Check if any required field in step 2 is empty
      isMissingField =
        !formData.student.academic_info[0].school_name ||
        !formData.student.academic_info[0].year_level;
    } else if (formPage === 3) {
      // Check if any required field in step 3 is empty
      isMissingField = !formData.username || !formData.password;
    }

    if (isMissingField) {
      setFormError("Please fill out all required fields.");
      isValid = false;
    } else {
      setFormError("");
    }

    return isValid;
  };

  const signUp = async () => {
    try {
      const response = await fetch(
        "https://api.scopioe.com/scienceacademyapi/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      // Show a success alert if signup is successful
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered!",
          confirmButtonText: "OK",
        });
        navigate("/user/home");
      } else {
        // Show an error alert if there is an error
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: data.message || "An error occurred during registration.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp();
  };

  const handleNext = () => {
    if (validateStep()) {
      setFormPage(formPage + 1);
    }
  };

  const progressValue = (formPage / 4) * 100;
  return (
    <div className="px-6 xl:px-16 py-7 md:py-[50px] font-inter max-h-full overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-5">
        Become a Member
      </h2>
      <p className="text-lg md:text-xl font-medium text-[#3D5AF1]">
        {formPage === 1 && "Personal Information"}
        {formPage === 2 && "Academic Information"}
        {formPage === 3 && "Account Setup and Security"}
      </p>
      <p className="text-sm text-[#9CA3AF] mb-2 md:mb-3">
        {formPage === 1 && "Please enter your Personal Information"}
        {formPage === 2 && "Please enter your Academic Information"}
        {formPage === 3 && "Please enter your Account Setup and Security"}
      </p>
      {/* progress bar */}
      <div className="mb-3">
        <progress
          className="progress progress-success w-full"
          value={progressValue}
          max="100"
        ></progress>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="text-[#1F2A37]">
        {/* Display common error message */}
        {formError && (
          <p className="text-red-500 text-sm mb-2 md:mb-3">{formError}</p>
        )}

        {/* Form page 1: Personal Information */}
        {formPage === 1 && (
          <div className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
                <label className="font-medium md:font-semibold">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
              <div>
                <label className="font-medium md:font-semibold">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
                <label className="font-medium md:font-semibold">
                  Mobile No*
                </label>
                <input
                  type="text"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
              <div>
                <label className="font-medium md:font-semibold">
                  Date of Birth*
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleInputChange}
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
            </div>

            <div>
              <label className="font-medium md:font-semibold">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
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
              <div>
                <label className="font-medium md:font-semibold">Gender*</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  placeholder="Enter your gender"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
                <label className="font-medium md:font-semibold">
                  Parent Email One*
                </label>
                <input
                  type="email"
                  name="parent_email_one"
                  value={formData.parent_email_one}
                  onChange={handleInputChange}
                  placeholder="Enter parent email one"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                  required
                />
              </div>
              <div>
                <label className="font-medium md:font-semibold">
                  Parent Email Two
                </label>
                <input
                  type="email"
                  name="parent_email_two"
                  value={formData.parent_email_two}
                  onChange={handleInputChange}
                  placeholder="Enter parent email two"
                  className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                />
              </div>
            </div>
          </div>
        )}

        {/* Form page 2: Academic Information */}
        {formPage === 2 && (
          <div className="space-y-2">
            <div>
              <label className="font-medium md:font-semibold">
                School Name*
              </label>
              <input
                type="text"
                name="school_name"
                value={formData.student.academic_info[0].school_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    student: {
                      ...formData.student,
                      academic_info: [
                        {
                          ...formData.student.academic_info[0],
                          school_name: e.target.value,
                        },
                      ],
                    },
                  })
                }
                placeholder="Enter your school name"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>
            <div>
              <label className="font-medium md:font-semibold">
                Year Level*
              </label>
              <input
                type="text"
                name="year_level"
                value={formData.student.academic_info[0].year_level}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    student: {
                      ...formData.student,
                      academic_info: [
                        {
                          ...formData.student.academic_info[0],
                          year_level: e.target.value,
                        },
                      ],
                    },
                  })
                }
                placeholder="Enter your year level"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>
          </div>
        )}

        {/* Form page 3: Account Setup */}
        {formPage === 3 && (
          <div className="space-y-2">
            <div>
              <label className="font-medium md:font-semibold">Username*</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Choose a username"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>

            <div>
              <label className="font-medium md:font-semibold">Password*</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                className="w-full text-sm md:text-base px-4 py-2 border rounded-lg bg-[#F3F4F6] mt-1 outline-none focus:ring-1"
                required
              />
            </div>
          </div>
        )}

        <div className="mt-4">
          {formPage > 1 && (
            <button
              type="button"
              className="bg-[#F3F4F6] text-[#3D5AF1] border border-[#3D5AF1] rounded-lg px-4 py-2 mr-2"
              onClick={() => setFormPage(formPage - 1)}
            >
              Back
            </button>
          )}
          {formPage < 3 ? (
            <button
              type="button"
              className="bg-[#3D5AF1] text-white rounded-lg px-4 py-2"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-[#3D5AF1] text-white rounded-lg px-4 py-2"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
