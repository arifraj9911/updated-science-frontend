import { useEffect, useState } from "react";
import MembershipPricing from "../Shared/Membership Pricing/MembershipPricing";
import UnsubscribeModal from "../Shared/Membership Pricing/UnsubscribeModal";

const Membership = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(false);
  };

  const currentSubscription = "";

  return (
    <div className="max-w-screen-desktop mx-auto  md:px-5 font-poppins">
      {/* top heading */}
      <section className="py-3">
        <h3 className="font-semibold text-primary-blue ">Pricing Table</h3>

        <h1 className="text-[40px] font-semibold mb-2">Our Pricing Plan</h1>

        <p className="max-w-[656px] text-[#637381]">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </section>

      <section className="mt-4">
        <div className="flex justify-end mb-5 md:mb-8">
          {/* unsubscribe button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 h-[56px] bg-[#FEEBEB] text-[#F04545] font-medium rounded-2xl"
          >
            Unsubscribe current plan
          </button>
        </div>

        {/* pricing component */}
        <MembershipPricing></MembershipPricing>
      </section>

      {/* modal */}
      {isModalOpen && (
        <UnsubscribeModal
          onClose={onClose}
          currentSubscription={currentSubscription}
        ></UnsubscribeModal>
      )}
    </div>
  );
};

export default Membership;
