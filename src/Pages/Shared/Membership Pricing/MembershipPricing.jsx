import { useEffect, useState } from "react";
import shape from "./../../../assets/images/membership pricing/shape.png";
import { useNavigate } from "react-router-dom";

const MembershipPricing = () => {
  // const [subscribeType, setSubscribeType] = useState("monthly");

  const [allPricingData, setAllPricingData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://104.248.122.19:5001/scienceacademyapi/v1/pricing-plan/all")
      .then((res) => res.json())
      .then((data) => setAllPricingData(data.payload.services));
  }, []);

  const yearlyPricing = allPricingData?.find(
    (pricing) => pricing.recurrence_type == "yearly"
  );
  console.log(yearlyPricing);

  const handleSelected = (selected) => {
    navigate("/profile/membership/payment", {
      state: { selectedPlan: selected, allPricingData },
    });
  };

  return (
    <div className="font-poppins">
      {/* Subscription Type Buttons */}
      {/* <section className="flex items-center justify-between mb-8">
        <div className="flex items-center bg-[#F3F4F6] font-medium rounded-2xl p-1.5 h-[56px]">
          <button
            className={`h-full w-[120px] rounded-xl  ${
              subscribeType === "monthly" ? "bg-[#F3F4F6]" : "bg-white"
            }`}
            onClick={() => setSubscribeType("monthly")}
          >
            Monthly
          </button>
          <button
            className={`h-full w-[120px] rounded-xl  ${
              subscribeType === "yearly" ? "bg-[#F3F4F6]" : "bg-white"
            }`}
            onClick={() => setSubscribeType("yearly")}
          >
            Yearly
          </button>
        </div>
        
      </section> */}

      {/* Pricing Cards */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-9 text-white ">
        {/* monthly */}
        <div className="bg-[#0C2845] rounded-[30px] p-7 md:p-[50px] w-full md:w-[422px] relative overflow-hidden">
          {/* note */}
          <div className="absolute top-0 right-0 bg-[#FFAA6C] w-[127px] h-[87px] rounded-bl-[30px] flex items-center justify-center flex-col text-black text-xs md:text-sm font-bold">
            <h1>One Year</h1>
            <h1>Subscription</h1>
            <h1>Access</h1>
          </div>
          {/* price */}
          <h1 className="text-5xl md:text-[75px] font-bold flex items-center gap-1.5 mt-6">
            $150
            <div className="flex flex-col h-full justify-between">
              <span className="font-medium text-base">/ month</span>
              <span className="font-medium text-base mt-1 text-[#8899A8] line-through">
                $250
              </span>
            </div>
          </h1>

          {/* divider */}
          <hr className="border-t border-white mt-5 mb-[30px]" />

          {/* lists */}
          <ul className="list list-disc pl-5 text-[#DFE4EA] font-light space-y-3">
            <li>Step-by-step video solutions to all your textbook questions</li>
            <li>Step-by-step video solutions to past exams</li>
            <li>Access to a tutor</li>
            <li>Access to questions asked by other students</li>
            <li>
              Access to one custom video solution per week for any questions you
              may have
            </li>
          </ul>

          {/* button */}
          <div>
            <button
              onClick={() => {
                handleSelected("yearly");
              }}
              className="w-full h-[50px] bg-white flex items-center justify-center text-[#1A416A] font-medium rounded-2xl mt-11"
            >
              Select
            </button>
          </div>
        </div>

        {/* yearly */}
        <div className="bg-[#255384] rounded-[30px] p-7 md:p-[50px] w-full md:w-[422px] relative overflow-hidden">
          {/* note */}
          <div className="absolute top-0 right-0 bg-[#37EEC0] w-[127px] h-[87px] rounded-bl-[30px] flex items-center justify-center flex-col text-black text-xs md:text-sm font-bold">
            <h1>Limited</h1>
            <h1>Time Only</h1>
          </div>
          {/* price */}
          <h1 className="text-5xl md:text-[75px] font-bold flex items-center gap-1.5 mt-6 md:mt-5">
            ${yearlyPricing?.price}
            <span className="font-medium text-base">/ year</span>
          </h1>

          {/* divider */}
          <hr className="border-t border-white mt-6 mb-[30px]" />

          {/* lists */}
          <ul className="list list-disc pl-5 text-[#DFE4EA]  font-light space-y-3">
            <li>Step-by-step video solutions to all your textbook questions</li>
            <li>Step-by-step video solutions to past exams</li>
            <li>Access to a tutor</li>
            <li>Access to questions asked by other students</li>
            <li>
              Access to one custom video solution per week for any questions you
              may have
            </li>
          </ul>

          {/* button */}
          <div>
            <button
              onClick={() => {
                handleSelected("yearly");
              }}
              className="w-full h-[50px] bg-white flex items-center justify-center text-[#1A416A] font-medium rounded-2xl mt-11"
            >
              Select
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPricing;
