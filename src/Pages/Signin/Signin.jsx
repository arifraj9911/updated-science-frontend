import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/Sign-in/Science Academy Logo 1.svg";
import Swal from "sweetalert2";
import { useState } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import Swal from "sweetalert2";

const Signin = () => {
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();

  // const { loginUser, googleSignin, facebookSignin } = useContext(AuthContext);

  const signIn = async (email, password) => {
    try {
      const response = await fetch(
        "https://api.scopioe.com/scienceacademyapi/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      // Parse the response data
      const data = await response.json();
      console.log("Response Data:", data);

      // Clear previous error messages
      setEmailError("");
      setPassError("");

      // Check if the response status is not OK (indicating an error)
      if (!response.ok) {
        // Handle email-related errors
        if (data.errors && data.errors.email) {
          setEmailError(data.errors.email);
        }
        // Handle password-related errors or generic errors
        if (data.message) {
          if (data.message.toLowerCase().includes("email")) {
            setEmailError(data.message); // Set email error if message mentions email
          } else if (data.message.toLowerCase().includes("credentials")) {
            setPassError(data.message); // Set password error if message mentions credentials
          }
        }
        return; // Stop further execution in case of error
      }

      if (data.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "login successful",
          showConfirmButton: false,
          timer: 1500,
        });

        // Store the token in localStorage
        localStorage.setItem("authToken", data.payload.token);

        setEmailError("");
        setPassError("");
        navigate("/user/home");
        console.log(data);
      }
    } catch (error) {
      // Display the error message
      console.error("Error:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password);

    // loginUser(email, password)
    //   .then((res) => {
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Signin Success",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     }).then(() => {
    //       navigate("/user/home");
    //     });
    //   })
    //   .catch((error) => {
    //     Swal.fire({
    //       position: "center",
    //       icon: "Error",
    //       title: "couldn't signin!",
    //       text: `Error : ${error.message}`,
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   });
    // console.log(email, password);
  };

  // const handleGoogleLogin = () => {
  //   googleSignin()
  //   .then((res) => {
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Signin Success",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     }).then(() => {
  //       navigate("/user/home");
  //     });
  //   })
  //   .catch((error) => {
  //     Swal.fire({
  //       position: "center",
  //       icon: "Error",
  //       title: "couldn't signin!",
  //       text: `Error : ${error.message}`,
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   });
  // };

  // const handleFacebookLogin = () => {
  //   facebookSignin()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => console.log(error));
  // };
  return (
    <div className="bg-[#F7F8FA] min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[520px] md:h-[546px] border bg-white rounded-lg shadow-sm p-5 md:p-[60px] font-inter">
        {/* img/logo */}
        {/* <img className="mb-[68px]" src={logo} alt="logo" /> */}
        <div className="flex flex-col items-center gap-5 pb-5">
          <img className="" src={logo} alt="logo" />
          <h1 className="text-2xl font-semibold">SignIn</h1>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-3 px-5 outline-none focus:ring-1 ring-[#3758F9] border border-[#DFE4EA] rounded-md"
            />
            {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
          </div>

          {/* password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="mt-[22px] w-full py-3 px-5 outline-none focus:ring-1 ring-[#3758F9] border border-[#DFE4EA] rounded-md"
            />
            {passError && <p className="text-red-400 text-sm mt-1">{passError}</p>}
          </div>
          {/* submit button */}
          <input
            type="submit"
            value="Sign In"
            className="mt-[22px] w-full h-[50px] bg-[#1A416A] rounded-md font-medium text-white hover:bg-[#1A416A] hover:font-semibold cursor-pointer transition-all ease-in-out duration-300"
          />
        </form>

        {/* connect with google, twitter, fb */}
        {/* connect with line */}
        {/* <div className="flex items-center justify-center mt-6 md:mt-9">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-4 text-[#8899A8]">Connect With</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div> */}
        {/* buttons */}
        <div className="my-5 md:my-8">
          {/* <div className="grid grid-cols-3 gap-5 my-8"> */}
          {/* facebook */}
          {/* <button
            // onClick={handleFacebookLogin}
            className="bg-[#4064AC] rounded-md flex items-center justify-center h-[45px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.8127 8.0625H13.0627H12.4377V7.4375V5.5V4.875H13.0627H14.3752C14.719 4.875 15.0002 4.625 15.0002 4.25V0.9375C15.0002 0.59375 14.7502 0.3125 14.3752 0.3125H12.094C9.62524 0.3125 7.90649 2.0625 7.90649 4.65625V7.375V8H7.28149H5.15649C4.71899 8 4.31274 8.34375 4.31274 8.84375V11.0938C4.31274 11.5312 4.65649 11.9375 5.15649 11.9375H7.21899H7.84399V12.5625V18.8438C7.84399 19.2812 8.18774 19.6875 8.68774 19.6875H11.6252C11.8127 19.6875 11.969 19.5938 12.094 19.4688C12.219 19.3438 12.3127 19.125 12.3127 18.9375V12.5938V11.9688H12.969H14.3752C14.7815 11.9688 15.094 11.7188 15.1565 11.3438V11.3125V11.2812L15.594 9.125C15.6252 8.90625 15.594 8.65625 15.4065 8.40625C15.344 8.25 15.0627 8.09375 14.8127 8.0625Z"
                fill="white"
              />
            </svg>
          </button> */}
          {/* Twitter */}
          {/* <button className="bg-[#1C9CEA] rounded-md flex items-center justify-center h-[45px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.2941 5.37494C18.4055 5.24509 18.2603 5.07539 18.0955 5.13618C17.7276 5.27185 17.3915 5.36134 16.8943 5.41659C17.5058 5.07609 17.7902 4.58941 18.0215 3.99333C18.0773 3.84955 17.909 3.71909 17.7641 3.78777C17.1755 4.06684 16.5405 4.27389 15.8726 4.39623C15.2125 3.74204 14.2716 3.33325 13.2308 3.33325C11.2321 3.33325 9.61137 4.84056 9.61137 6.69923C9.61137 6.96309 9.64371 7.22012 9.70471 7.46621C6.83167 7.33235 4.2698 6.10333 2.48994 4.21876C2.36795 4.08959 2.14659 4.10674 2.07063 4.26428C1.868 4.68458 1.75503 5.15083 1.75503 5.64172C1.75503 6.80929 2.3938 7.83944 3.36482 8.44308C2.92944 8.43 2.51308 8.34517 2.12938 8.2012C1.94256 8.13112 1.72841 8.25429 1.75351 8.44267C1.9462 9.88925 3.11738 11.0827 4.62912 11.3647C4.32553 11.4419 4.00578 11.4829 3.67501 11.4829C3.59481 11.4829 3.5153 11.4804 3.43652 11.4756C3.23604 11.4632 3.07311 11.6425 3.15906 11.8141C3.72615 12.9459 4.95066 13.7361 6.37562 13.7607C5.13704 14.6637 3.57651 15.2017 1.88073 15.2017C1.67163 15.2017 1.58193 15.4705 1.76743 15.5617C3.20013 16.2659 4.83167 16.6666 6.56527 16.6666C13.2227 16.6666 16.8627 11.5377 16.8627 7.08955C16.8627 6.94395 16.859 6.79834 16.8525 6.65411C17.3928 6.29109 17.8785 5.85941 18.2941 5.37494Z"
                fill="white"
              />
            </svg>
          </button> */}
          {/* Google */}
          {/* <button
            // onClick={handleGoogleLogin}
            className="bg-[#D64937] rounded-md flex items-center justify-center h-[45px] w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_39_42463)">
                <path
                  d="M19.2193 9.12515H10.2505V11.7814H16.688C16.3443 15.4689 13.3443 17.0627 10.438 17.0627C6.7505 17.0627 3.46925 14.1877 3.46925 10.0314C3.46925 6.0314 6.59425 3.00016 10.438 3.00016C13.3755 3.00016 15.1568 4.9064 15.1568 4.9064L16.9693 3.00016C16.9693 3.00016 14.5318 0.343906 10.313 0.343906C4.7505 0.312656 0.500488 4.9689 0.500488 10.0002C0.500488 14.8752 4.5005 19.6877 10.4068 19.6877C15.6255 19.6877 19.3755 16.1564 19.3755 10.8752C19.4068 9.7814 19.2193 9.12515 19.2193 9.12515Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_39_42463">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button> */}
        </div>

        {/* forget pw and not a member */}
        <div className="text-center space-y-2">
          <p className="cursor-pointer">Forget Password?</p>
          <p className="text-[#8899A8]">
            Not a member yet?
            <span className="text-[#3758F9] ml-1">
              <Link to={"/signup"}>Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
