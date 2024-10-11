
import MembershipPricing from "../../Pages/Shared/Membership Pricing/MembershipPricing";

const Pricing = () => {
  return (
    <div className="pb-[150px]">
      <h1 className="text-[#1A416A] text-[40px] font-semibold text-center mt-[50px] mb-[64px]">
        Our Pricing Plan
      </h1>

      {/* Pricing Cards */}
      <MembershipPricing></MembershipPricing>
    </div>
  );
};

export default Pricing;
