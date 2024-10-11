import searchIcon from "../assets/images/search-normal.svg";
import avatar from "../assets/images/avatar.svg";

const NavbarShared = ({ search, about,practice }) => {
  return (
    <div className="  flex items-center  justify-between">
      {/* search start */}
      {search && (
        <div className="relative">
          <img
            className="absolute top-3 left-4"
            src={searchIcon}
            alt="search"
          />
          <input
            type="text"
            name=""
            placeholder="Search video"
            className="border border-[#DFE4EA] text-secondary-text rounded-2xl py-3 pl-12 pr-4 outline-none"
            id=""
          />
        </div>
      )}
      {/* search end */}

      {/* avatar */}
      <div className="flex justify-end items-center  w-full">
        {about && (
          <div className="flex gap-2 items-center mr-6">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 15C10.62 15 9.5 13.88 9.5 12.5C9.5 11.12 10.62 10 12 10C13.38 10 14.5 11.12 14.5 12.5C14.5 13.88 13.38 15 12 15Z"
                  fill="#513DEB"
                />
              </svg>
            </span>
            <span className="text-lg font-poppins font-semibold">250P</span>
          </div>
        )}

        {
          practice && <button className="capitalize text-[#3758F9] font-poppins py-3 px-6 border border-[#3758F9] rounded-2xl mr-6">
          Become a member
        </button>
        }
        

        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default NavbarShared;
