import { useEffect, useRef, useState } from "react";
import searchIcon from "./../../../assets/images/search-normal.svg";
import arrowBtn from "./../../../assets/images/arrow.svg";
// import CommunityLeaderboard from "../Community Experts Leaderboard/CommunityLeaderboard";
import { useParams } from "react-router-dom";
import NavbarShared from "../../../components/NavbarShared";
import { discussions } from "../../../data/forumData";

// icons
import likeIcon from "./../../../assets/images/forum/like.svg";
import replyIcon from "./../../../assets/images/forum/message.svg";
import viewIcon from "./../../../assets/images/forum/clock.svg";
import shareIcon from "./../../../assets/images/forum/repeat.svg";
import archiveIcon from "./../../../assets/images/forum/archive-tick.svg";
import menuIcon from "./../../../assets/images/forum/More_Vertical.png";
import points from "./../../../assets/images/forum/cd.svg";

const Discussions = () => {
  const param = useParams();
  const { topic_id } = param;

  const matchedDiscussions = discussions?.filter(
    (discussion) => discussion.topic_id == topic_id
  );

  const [discussionsData, setDiscussionsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setDiscussionsData(matchedDiscussions);
    setFilteredData(matchedDiscussions);
  }, []);

  // search related
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchInput(query);

    const filter = discussionsData?.filter((discussion) =>
      discussion?.topic?.toLowerCase().includes(query)
    );

    setFilteredData(filter);
  };

  // for filter
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [optionSelected, setOptionSelected] = useState("Recently Active");

  const options = [
    "Recent Discussions",
    "Popular Topics",
    "Trending Now",
    "New Arrivals",
    "Most Commented",
  ];

  // discussion menu related
  const [showMenu, setShowMenu] = useState(null);
  const showMenuRef = useRef(null);

  // handle click outside
  const handleClickOutsideMenu = (event) => {
    if (showMenuRef.current && !showMenuRef.current.contains(event.target)) {
      setShowMenu(null);
    }
  };

  // event listener for handle click outside
  useEffect(() => {
    // add event listener when menu open
    if (showMenu !== null) {
      document.addEventListener("click", handleClickOutsideMenu);
    }

    // cleanup even listener
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [showMenu]);

  // handle edit
  const handleEdit = (id) => {
    console.log("clicked Edit", id);
  };

  // handle delete
  const handleDelete = (id) => {
    console.log("clicked Delete", id);
  };

  // handle report
  const handleReport = (id) => {
    console.log("clicked Report", id);
  };

  // handle block
  const handleBlock = (id) => {
    console.log("clicked Block", id);
  };

  console.log(filteredData);
  return (
    <div>
      {/* nav */}
      <NavbarShared about={true} />

      {/* heading */}
      <section>
        <h1 className="text-[32px] font-semibold">Discussion</h1>
        {/* short desc and search/filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4">
          <p className="text-[#637381]">Join the Science Academy community</p>

          {/* search and filter */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-5">
            {/* search */}
            <div className="relative">
              <img
                className="absolute top-3 left-4"
                src={searchIcon}
                alt="search"
              />
              <input
                type="text"
                name=""
                placeholder="Search discussion"
                className="border border-[#DFE4EA] text-secondary-text rounded-2xl py-3 pl-12 pr-4 outline-none w-full md:w-auto"
                value={searchInput}
                onChange={handleSearch}
              />
            </div>

            {/* filter */}
            <div className="relative">
              <div
                onClick={() => setToggleDropdown(!toggleDropdown)}
                className="flex item-center gap-4 border py-3 px-4 border-[#DFE4EA] rounded-2xl cursor-pointer"
              >
                <span>{optionSelected}</span>
                <img
                  src={arrowBtn}
                  alt="arrow btn"
                  className={`duration-200 transition-transform ease-in-out ${
                    toggleDropdown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* dropdown options */}
              {toggleDropdown && (
                <div className="absolute mt-2 flex flex-col bg-white w-full top-12 right-0 p-3 gap-2 rounded-2xl border border-[#DFE4EA] z-10">
                  {options.map((discussion, index) => (
                    <span
                      className="cursor-pointer"
                      key={index}
                      onClick={() => {
                        setOptionSelected(discussion);
                        setToggleDropdown(false);
                      }}
                    >
                      {discussion}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <hr className="my-6 md:my-10" />

      {/* main */}

      <section className="space-y-4">
        {filteredData?.map((data) => (
          <div
            key={data.id}
            className="border p-4 md:p-8 rounded-3xl border-[#DFE4EA] font-poppins hover:bg-[#3758F91A] transition-all duration-200 hover:border-[#3758F9]"
          >
            {/* user image/name and discussion action buttons */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between flex-wrap gap-y-2">
              {/* user */}
              <div className="flex items-center gap-3">
                <img
                  className="h-12 w-12 rounded-full cursor-pointer"
                  src={data?.user_image}
                  alt="user image"
                />
                <h3 className="text-[#3758F9]">{data?.user_name}</h3>
              </div>
              {/* actions for desktop */}
              <div className="md:flex gap-x-4 md:gap-x-6 gap-y-2 items-center flex-wrap hidden">
                {/* like */}
                <div className="flex gap-1 md:gap-2 items-center">
                  <img
                    className="cursor-pointer w-4 md:w-auto"
                    src={likeIcon}
                    alt="like"
                  />
                  <p className="text-sm md:text-base">{data?.likes}</p>
                </div>

                {/* replies */}
                <div className="flex gap-1 md:gap-2 items-center">
                  <img
                    className="cursor-pointer w-4 md:w-auto"
                    src={replyIcon}
                    alt="replies"
                  />
                  <p className="text-sm md:text-base">{data?.replies}</p>
                </div>

                {/* views */}
                <div className="flex gap-1 md:gap-2 items-center">
                  <img
                    className="cursor-pointer w-4 md:w-auto"
                    src={viewIcon}
                    alt="views"
                  />
                  <p className="text-sm md:text-base">{data?.views}</p>
                </div>

                {/* shareable */}
                <div>
                  {data?.shareable == true && (
                    <div className="flex gap-1 md:gap-2 items-center">
                      <img
                        className="cursor-pointer w-4 md:w-auto"
                        src={shareIcon}
                        alt="like"
                      />
                      <p className="text-sm md:text-base">Share</p>
                    </div>
                  )}
                </div>

                {/* archive */}
                <div className="md:ml-5">
                  <img
                    className="cursor-pointer w-4 md:w-auto"
                    src={archiveIcon}
                    alt="archive"
                  />
                </div>

                {/* options */}
                <div className="relative">
                  <img
                    className="cursor-pointer w-4 md:w-auto"
                    src={menuIcon}
                    alt="options"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowMenu(showMenu === data.id ? null : data.id);
                    }}
                  />
                  {showMenu === data.id && (
                    <div
                      ref={showMenuRef}
                      className="absolute z-10 w-[200px] p-4 mt-5 bg-[white] -left-[180px] rounded-2xl"
                    >
                      <ul>
                        {/* edit */}
                        <li
                          onClick={() => handleEdit(data.id)}
                          className="py-2.5 px-4 cursor-pointer rounded-xl text-sm hover:font-medium text-[#637381] hover:text-black hover:bg-[#F3F4F6] "
                        >
                          Edit
                        </li>
                        {/* delete */}
                        <li
                          onClick={() => handleDelete(data.id)}
                          className="py-2.5 px-4 cursor-pointer rounded-xl text-sm hover:font-medium text-[#637381] hover:text-black hover:bg-[#F3F4F6] "
                        >
                          Delete
                        </li>
                        {/* Report */}
                        <li
                          onClick={() => handleReport(data.id)}
                          className="py-2.5 px-4 cursor-pointer rounded-xl text-sm hover:font-medium text-[#637381] hover:text-black hover:bg-[#F3F4F6] "
                        >
                          Report
                        </li>
                        {/* Block */}
                        <li
                          onClick={() => handleBlock(data.id)}
                          className="py-2.5 px-4 cursor-pointer rounded-xl text-sm hover:font-medium text-[#637381] hover:text-black hover:bg-[#F3F4F6] "
                        >
                          Block
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* content and points */}
            <div className="flex gap-3 mt-3">
              {/* points */}
              <div className="">
                <div className="flex items-center bg-[#3758F91A] px-1.5 py-1 rounded-full">
                  <img className="w-4 h-4" src={points} alt="" />
                  <span className="text-xs">+15</span>
                </div>
              </div>
              {/* text content */}
              <div>
                {/* question/title */}
                <h3 className="font-medium">{data?.title}</h3>
                {/* description */}
                <p className="text-[#637381] mt-4">{data?.content}</p>
              </div>
            </div>

            {/* actions - for mobile*/}
            <div className="md:hidden gap-x-3 md:gap-x-6 gap-y-2 items-center justify-center flex-wrap flex mt-3">
              {/* like */}
              <div className="flex gap-1 md:gap-2 items-center">
                <img
                  className="cursor-pointer w-4 md:w-auto"
                  src={likeIcon}
                  alt="like"
                />
                <p className="text-sm md:text-base">{data?.likes}</p>
              </div>

              {/* replies */}
              <div className="flex gap-1 md:gap-2 items-center">
                <img
                  className="cursor-pointer w-4 md:w-auto"
                  src={replyIcon}
                  alt="replies"
                />
                <p className="text-sm md:text-base">{data?.replies}</p>
              </div>

              {/* views */}
              <div className="flex gap-1 md:gap-2 items-center">
                <img
                  className="cursor-pointer w-4 md:w-auto"
                  src={viewIcon}
                  alt="views"
                />
                <p className="text-sm md:text-base">{data?.views}</p>
              </div>

              {/* shareable */}
              <div>
                {data?.shareable == true && (
                  <div className="flex gap-1 md:gap-2 items-center">
                    <img
                      className="cursor-pointer w-4 md:w-auto"
                      src={shareIcon}
                      alt="like"
                    />
                    <p className="text-sm md:text-base">Share</p>
                  </div>
                )}
              </div>

              {/* archive */}
              <div className="md:ml-5">
                <img
                  className="cursor-pointer w-4 md:w-auto"
                  src={archiveIcon}
                  alt="archive"
                />
              </div>

              {/* options */}
              <div className="relative">
                <img
                  className="cursor-pointer w-4 md:w-auto"
                  src={menuIcon}
                  alt="options"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(showMenu === data.id ? null : data.id);
                  }}
                />
                {showMenu === data.id && (
                  <div
                    ref={showMenuRef}
                    className="absolute z-10 w-[200px] p-4 mt-5 bg-[white] -left-[180px] rounded-2xl bottom-0 md:bottom-auto"
                  >
                    <ul>
                      {/* edit */}
                      <li
                        onClick={() => handleEdit(data.id)}
                        className="py-2.5 px-4 cursor-pointer rounded-xl text-sm hover:font-medium text-[#637381] hover:text-black hover:bg-[#F3F4F6] "
                      >
                        Edit
                      </li>
                      {/* delete */}
                      <li
                        onClick={() => handleDelete(data.id)}
                        className="py-2.5 px-4 cursor-pointer rounded-xl text-sm hover:font-medium text-[#637381] hover:text-black hover:bg-[#F3F4F6] "
                      >
                        Delete
                      </li>
                      {/* Report */}
                      <li
                        onClick={() => handleReport(data.id)}
                        className="py-2.5 px-4 cursor-pointer rounded-xl text-sm hover:font-medium text-[#637381] hover:text-black hover:bg-[#F3F4F6] "
                      >
                        Report
                      </li>
                      {/* Block */}
                      <li
                        onClick={() => handleBlock(data.id)}
                        className="py-2.5 px-4 cursor-pointer rounded-xl text-sm hover:font-medium text-[#637381] hover:text-black hover:bg-[#F3F4F6] "
                      >
                        Block
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Discussions;
