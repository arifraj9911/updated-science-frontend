// import signupImage from "./../../assets/images/Sign-up/shapes.png";
import signupImage from "./../../assets/images/Sign-up/shapes New.png";
// import logo from "./../../assets/images/Sign-up/Group 10.svg";
import { useState } from "react";
import MemberForm from "./MemberForm/MemberForm";
import PartnerForm from "./PartnerForm/PartnerForm";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [confirmedRole, setConfirmedRole] = useState("");

  const handleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleConfirmation = () => {
    setConfirmedRole(selectedRole);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-[8%] py-10 lg:py-0 lg:px-[10%]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 lg:min-h-[86vh] lg:max-h-[95vh]">
        {/* Left Side (Logo and Welcome message) */}
        <div
          style={{
            background: `url(${signupImage}) no-repeat center center`,
            backgroundSize: "cover",
          }}
          className=" text-white 8 rounded-l-lg relative h-full hidden lg:block"
        >
          {/* <div className="flex flex-col justify-center items-center h-full">
            <img src={logo} alt="" />
          </div> */}

          <div className="absolute bottom-9 left-9 font-inter text-3xl font-semibold leading-[35px]">
            <p>Welcome to </p>
            <p>Science academy</p>
          </div>
        </div>
        {/* Right Side (Form) */}
        {!confirmedRole && (
          <div className="flex justify-center items-center h-full">
            <div className="px-10 text-center py-10">
              <h1 className="text-2xl font-bold mb-8 ">
                Are You Signing Up As A Member Or A Partner?
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-[90%] mx-auto">
                {/* Member Card */}
                <div
                  onClick={() => handleSelection("member")}
                  className={`cursor-pointer p-6 border rounded-lg  text-center 
              ${
                selectedRole === "member"
                  ? "shadow-lg bg-[#1A416A] text-white"
                  : "border-gray-300"
              }`}
                >
                  <h2 className="text-xl font-semibold mb-2">Member</h2>
                  <p className="text-center text-wrap">
                    Join us as a student or general user interested in science.
                  </p>
                </div>

                {/* Partner Card */}
                <div
                  onClick={() => handleSelection("partner")}
                  className={`cursor-pointer p-6 border rounded-lg  text-center 
              ${
                selectedRole === "partner"
                  ? "shadow-lg bg-[#1A416A] text-white"
                  : "border-gray-300"
              }`}
                >
                  <h2 className="text-xl font-semibold mb-2">Partner</h2>
                  <p className="text-center text-wrap">
                    Explore partnership opportunities with us.
                  </p>
                </div>
              </div>
              {/* Confirmation Button */}
              {selectedRole ? (
                <button
                  onClick={handleConfirmation}
                  className="text-white bg-[#1A416A] px-5 py-2 rounded-lg"
                >
                  Continue
                </button>
              ) : (
                <button
                  disabled
                  className="text-gray-400 bg-gray-200 px-5 py-2 rounded-lg cursor-not-allowed"
                >
                  Continue
                </button>
              )}

              <div className="mt-4 space-y-2">
                {/* <p>or</p> */}
                <p>
                  <span className="text-blue-[#1A416A] font-medium underline">
                    <Link to={"/signup-alternative"}>Alternative SignUp</Link>
                  </span>{" "}
                  Signup With Only Email Or Google
                </p>
                <p>
                  <span className="text-blue-[#1A416A] font-medium underline">
                    <Link to={"/signin"}>Login</Link>
                  </span>{" "}
                  If You Are Already A Member/Partner
                </p>
              </div>
            </div>
          </div>
        )}

        {/* member */}
        {confirmedRole === "member" && (
          <div>
            <MemberForm />
          </div>
        )}
        {/* partner */}
        {confirmedRole === "partner" && (
          <div>
            <PartnerForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
