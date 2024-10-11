import Arrow_Left_MD from "../assets/adminPanel/Arrow_Left_MD.svg";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* Previous Button */}
      <button
        className={`flex justify-center items-center w-10 h-10 rounded-full border transition-colors duration-200 ${
          currentPage === 1
            ? "cursor-not-allowed opacity-50 border-gray-300"
            : "border-mystic hover:bg-gray-100"
        }`}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <img src={Arrow_Left_MD} alt="Previous" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx}
          className={`flex justify-center items-center w-10 h-10 rounded-full border text-biscay transition-colors duration-200 ${
            currentPage === idx + 1
              ? "border-biscay bg-blue-50 text-biscay"
              : "border-gray-300 hover:bg-gray-100"
          }`}
          onClick={() => setCurrentPage(idx + 1)}
        >
          <span className="text-biscay font-poppins text-base font-semibold">
            {`0${idx + 1}`.slice(-2)}
          </span>
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`flex justify-center items-center w-10 h-10 rounded-full border transition-colors duration-200 ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50 border-gray-300"
            : "border-mystic hover:bg-gray-100"
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <img src={Arrow_Left_MD} alt="Next" className="rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
