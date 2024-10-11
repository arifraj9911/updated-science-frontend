import React from "react";
import HeroButton from "../../components/home/HeroButton";
import Courses from "../../components/home/Courses";
import math from "../../assets/math.svg";
import progress from "../../assets/progress.svg";
import dot from "../../assets/dot.svg";
import time from "../../assets/time.svg";
import graph from "../../assets/graph.svg";
import UserNav from "./UserNav";

const quizzes = [
  {
    title: "Maths Methods Probability",
    progress: "74%",
    time: "30",
  },
  {
    title: "Specialist maths differential equations",
    progress: "74%",
    time: "30",
  },
  {
    title: "physics U3&4 electricity",
    progress: "74%",
    time: "30",
  },
  {
    title: "physics U3&4 motion",
    progress: "74%",
    time: "30",
  },
];

const UserLanding = () => {
  return (
    <div className="bg-[#F6F9FF]">
      <UserNav />
      <div className="">
        <h1 className="text-[#1A416A] font-inter text-[64px] font-bold leading-[64px] text-center pt-[180px]">
          Lorem ipsum dolor sit amet <br />
          consectetur.
        </h1>
        <h1 className="font-poppins text-center leading-[30px] text-[#637381] mt-[24px]">
          Lorem ipsum dolor sit amet consectetur. Urna magna magna convallis
          tincidunt fermentum <br /> velit ornare. Lorem pretium pharetra quis
          convallis amet.
        </h1>
        <div className="flex items-center justify-center mt-[24px]">
          <HeroButton />
        </div>
        <div className="mt-[20px] max-w-screen-desktop mx-auto">
          <Courses />
        </div>
      </div>
      <div className="max-w-screen-desktop mx-auto">
        <h1 className="text-[#1A416A] font-semibold font-poppins text-[32px]">
          Summary
        </h1>
        <h1 className="text-[#637381] font-inter mt-[12px]">
          Lorem ipsum dolor sit amet consectetur. Urna magna magna convallis
          tincidunt
        </h1>
        <div className="text-[12px] text-[#374151] font-poppins flex gap-[16px] mt-[28px]">
          <h1 className="border border-[#D1D5DB] hover:border-none hover:bg-[#E5E7EB80] cursor-pointer rounded-[8px] px-[24px] py-[8px]">
            Daily
          </h1>
          <h1 className="border border-[#D1D5DB] hover:border-none hover:bg-[#E5E7EB80] cursor-pointer rounded-[8px] px-[24px] py-[8px]">
            Weekly
          </h1>
          <h1 className="border border-[#D1D5DB] hover:border-none hover:bg-[#E5E7EB80] cursor-pointer rounded-[8px] px-[24px] py-[8px]">
            Final
          </h1>
        </div>
      </div>
      <hr className="mt-[48px] pb-[40px] max-w-screen-desktop mx-auto" />
      <div className="max-w-screen-desktop mx-auto flex gap-[40px] pb-[120px]">
        <div>
          {quizzes.map((quiz, index) => (
            <div
              key={index}
              className={`grid grid-cols-5 bg-white rounded-[30px] px-[32px] py-[28px] ${
                index === 0 ? "" : "mt-[24px]"
              }`}
            >
              <div className="col-span-4">
                <div className="flex gap-[25px]">
                  {/* Image for the subject (Maths in this case) */}
                  <img src={math} alt="math" />

                  <div>
                    <h1 className="text-[#1A416A] text-[24px] font-poppins font-semibold">
                      {quiz.title}
                    </h1>
                    <div className="flex mt-[15px] gap-[16px]">
                      <img src={progress} alt="progress" />
                      <h1 className="text-[#696A6F] text-[14px] font-poppins">
                        {quiz.progress} Completion
                      </h1>
                      <div className="flex gap-[8px]">
                        <img src={dot} alt="" />
                        <img src={time} alt="" />
                        <h1 className="text-[#696A6F] text-[14px] font-poppins">
                          {quiz.time} Mins
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[8px]">
                <h1 className="text-[#1A416A] font-poppins w-[155px] px-[24px] py-[16px] border rounded-[16px] cursor-pointer hover:border-none hover:bg-[#3758F9] hover:text-white">
                  Re-Take quiz
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img src={graph} alt="" className="w-[]" />
        </div>
      </div>
    </div>
  );
};

export default UserLanding;
