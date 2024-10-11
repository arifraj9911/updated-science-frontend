import { useState } from "react";
import logo from "./../assets/images/Sign-in/Science Academy Logo 1.svg";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const [error, setError] = useState("");

  const changePassword = async (currentPass, newPass, token, form) => {
    try {
      const response = await fetch(
        "http://104.248.122.19:5001/scienceacademyapi/v1/auth/password/change",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            current_password: currentPass,
            new_password: newPass,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // console.log(data.errors);
        if (data.errors?.current_password) {
          setError(data.errors.current_password[0]);
        } else if (data.errors?.new_password) {
          setError(data.errors.new_password[0]);
        } else {
          setError(data.message || "Something went wrong. Please try again.");
        }
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "password change successful",
          showConfirmButton: false,
          timer: 1500,
        });
        // Clear the error message if successful
        setError("");
        form.reset();
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    const form = e.target;
    const currentPass = form.currentPass.value;
    const newPass = form.newPass.value;

    const token = localStorage.getItem("authToken");

    changePassword(currentPass, newPass, token, form);
  };

  return (
    <div className="w-[90%] md:w-[520px] md:h-[420px] border bg-white rounded-lg shadow-sm p-5 md:p-[60px] font-inter mx-auto mt-28">
      <div className="flex flex-col items-center pb-5">
        <img className="" src={logo} alt="logo" />
        <h1 className="text-2xl font-semibold">Change Password</h1>
      </div>
      <form onSubmit={handleChangePassword} className="flex flex-col ">
        <input
          type="text"
          name="currentPass"
          placeholder="enter your current password"
          className="w-full py-3 px-5 outline-none focus:ring-1 ring-[#3758F9] border border-[#DFE4EA] rounded-md"
        />
        <input
          type="text"
          name="newPass"
          placeholder="enter your new password"
          className="w-full py-3 px-5 mt-5 outline-none focus:ring-1 ring-[#3758F9] border border-[#DFE4EA] rounded-md"
        />

        <input
          type="submit"
          value="Change Password"
          className="mt-[22px] w-full h-[50px] bg-[#1A416A] rounded-md font-medium text-white hover:bg-[#1A416A] hover:font-semibold cursor-pointer transition-all ease-in-out duration-300"
        />
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default ChangePassword;
