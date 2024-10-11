const UnsubscribeModal = ({ onClose, currentSubscription }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  //   handle unsubscribe
  const handleUnsubscribe = () => {
    console.log(currentSubscription);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#162647E5] z-50 font-poppins"
      onClick={handleOverlayClick}
    >
      <section className="bg-white min-h-[310px] w-[80%] md:w-[588px] rounded-lg p-10 text-center flex flex-col justify-center">
        <h1 className="text-2xl font-semibold mb-4 leading-[40px]">
          Are you sure you want to unsubscribe current plan?
        </h1>
        <h3 className="text-[#637381] leading-7">
          You are currently subscribed to{" "}
          <span className="text-black underline">‘Personal Plan’</span>
        </h3>
        {/* action buttons */}
        <div className="mt-10 grid grid-cols-2 gap-4 ">
          {/* cancel */}
          <button
            onClick={onClose}
            className="h-[50px] border border-[#DFE4EA] font-inter font-medium rounded-2xl text-[#637381]"
          >
            Cancel
          </button>
          {/* Unsubscribe */}
          <button
            onClick={handleUnsubscribe}
            className="h-[50px]  font-inter font-medium  bg-[#FEEBEB] text-[#F23030] rounded-2xl"
          >
            Unsubscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default UnsubscribeModal;
