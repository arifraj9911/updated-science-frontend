import { useEffect, useRef, useState } from "react";
import blogPostsData from "../../data/profileHomeBlogsData";
import ProfileBlogsCard from "./Blogs Card/ProfileBlogsCard";

const ProfileHome = () => {
  const [allBlogsData, setAllBlogsData] = useState([]);
  const [filteredBlogsData, setFilteredBlogsData] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("ALL");
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Fetch all blogs when component mounts
  useEffect(() => {
    setAllBlogsData(blogPostsData);
    setFilteredBlogsData(blogPostsData);
  }, []);

  // Ref for search input
  const inputRef = useRef(null);

  // Set up subjects for filtering
  const subjects = [
    "ALL",
    ...Array.from(new Set(allBlogsData?.map((blogPost) => blogPost?.subject))),
  ];

  // Filter blogs when search or subject changes
  const filterBlogs = (subject, searchValue) => {
    const searchValueLower = searchValue.toLowerCase();

    const filteredData = allBlogsData.filter((blogPost) => {
      const matchesTitle = blogPost?.title
        ?.toLowerCase()
        .includes(searchValueLower);
      const matchesSubject = subject === "ALL" || blogPost?.subject === subject;

      return matchesTitle && matchesSubject;
    });

    setFilteredBlogsData(filteredData);
  };

  // Handle subject change (category change)
  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    filterBlogs(subject, searchInput); // Trigger filtering with the new subject
  };

  // Handle search button click
  const handleSearch = () => {
    filterBlogs(selectedSubject, searchInput);
    setShowSuggestions(false);
  };

  // Show suggestions when typing
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchInput(searchValue);

    if (searchValue.length > 0) {
      const filteredSuggestions = allBlogsData
        ?.filter((blogPost) =>
          blogPost?.title?.toLowerCase()?.includes(searchValue.toLowerCase())
        )
        ?.map((blogPost) => blogPost?.title);

      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion.toLowerCase());
    filterBlogs(selectedSubject, suggestion.toLowerCase());
    setShowSuggestions(false);
  };

  // Handle key press for Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Detect click outside search input to hide suggestions
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="pt-5 font-poppins">
      {/* heading */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-[40px] font-semibold">
        Explore our latest blogs
      </h1>

      {/* search bar */}
      <section className="mt-3 md:mt-5 lg:mt-8 flex items-center justify-center relative">
        <div ref={inputRef} className="relative w-full md:w-[671px]">
          {/* search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className="absolute left-3 lg:left-5 top-1/2 transform -translate-y-1/2 w-5 lg:w-auto"
          >
            <path
              d="M12 21.75C6.35 21.75 1.75 17.15 1.75 11.5C1.75 5.85 6.35 1.25 12 1.25C17.65 1.25 22.25 5.85 22.25 11.5C22.25 17.15 17.65 21.75 12 21.75ZM12 2.75C7.17 2.75 3.25 6.68 3.25 11.5C3.25 16.32 7.17 20.25 12 20.25C16.83 20.25 20.75 16.32 20.75 11.5C20.75 6.68 16.83 2.75 12 2.75Z"
              fill="#9CA3AF"
            />
            <path
              d="M22.5004 22.7499C22.3104 22.7499 22.1204 22.6799 21.9704 22.5299L19.9704 20.5299C19.6804 20.2399 19.6804 19.7599 19.9704 19.4699C20.2604 19.1799 20.7404 19.1799 21.0304 19.4699L23.0304 21.4699C23.3204 21.7599 23.3204 22.2399 23.0304 22.5299C22.8804 22.6799 22.6904 22.7499 22.5004 22.7499Z"
              fill="#9CA3AF"
            />
          </svg>
          {/* input */}
          <input
            type="text"
            className="w-full h-[44px] lg:h-[56px] border border-[#DFE4EA] rounded-[30px] outline-none pl-9 lg:pl-14 pr-4 text-sm md:text-base"
            placeholder="Search article here..."
            value={searchInput}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          {/* button */}
          <button
            className="absolute bg-[#1A416A] text-white px-[18px] lg:px-10 py-1.5 lg:py-2.5 rounded-full right-1.5 md:right-1 lg:right-1.5 top-1/2 transform -translate-y-1/2 text-sm md:text-base"
            onClick={handleSearch}
          >
            Search
          </button>
          {/* Suggestions dropdown */}
          {showSuggestions && (
            <div className="absolute w-full bg-white shadow-lg rounded-md max-h-60 overflow-y-auto mt-2">
              {suggestions.length > 0 ? (
                suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(suggestion)} // Handle suggestion click
                  >
                    {suggestion}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No suggestions</div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* categories / subjects */}
      <section className="flex items-center justify-center gap-2 flex-wrap mt-4 text-xs">
        {subjects?.map((subject, index) => (
          <button
            key={index}
            className={`px-3.5 md:px-[18px] py-1.5 md:py-2  border border-gray-100 rounded-full ${
              selectedSubject === subject ? "bg-[#3758F91A]" : "bg-[#F7F8FA]"
            }`}
            onClick={() => handleSubjectChange(subject)}
          >
            {subject}
          </button>
        ))}
      </section>

      {/* blogs */}
      <section className="mt-8 md:px-10 pb-10">
        {filteredBlogsData.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredBlogsData.map((blogPost) => (
              <ProfileBlogsCard
                key={blogPost?.id}
                blogPost={blogPost}
              ></ProfileBlogsCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No blog posts found.</p>
        )}
      </section>
    </div>
  );
};

export default ProfileHome;
