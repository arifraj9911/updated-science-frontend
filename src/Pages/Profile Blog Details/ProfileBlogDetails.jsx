import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import blogPostsData from "../../data/profileHomeBlogsData";

const ProfileBlogDetails = () => {
  const params = useParams();
  const { id } = params;

  const [allBlogData, setAllBlogData] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  //   fetch all data
  useEffect(() => {
    setAllBlogData(blogPostsData);
  }, []);
  console.log(allBlogData);

  const { pathname } = useLocation();

  console.log(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // get the current blog
  useEffect(() => {
    const matchedBlog = allBlogData.find((blogPost) => blogPost.id == id);

    // If a blog post is found
    if (matchedBlog) {
      setCurrentBlog(matchedBlog);
    }
    // Turn off loading state
    setLoading(false);

    // TODO : use fetch later
    /*
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`https://your-api-url/blog/${id}`);
        const data = await response.json();
        setCurrentBlog(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    
    fetchBlogDetails();
    */
  }, [allBlogData, id]);

  console.log(currentBlog);

  return (
    <div className="py-5 min-h-screen font-poppins">
      {/* top/header part */}
      <section>
        {/* date and subject */}
        <div className="text-[#7F879E] flex items-center gap-3 text-sm md:text-base">
          <p>{new Date(currentBlog?.uploaded_on).toLocaleDateString()}</p>{" "}
          {/* Formatted timestamp */}
          {/* dot icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="6"
            viewBox="0 0 5 6"
            fill="none"
          >
            <circle cx="2.5" cy="3" r="2.5" fill="#D4D7DF" />
          </svg>
          <p>{currentBlog?.subject}</p>
        </div>
        {/* heading / title */}
        <h1 className="mt-2 text-3xl md:text-[40px] font-semibold">
          {currentBlog?.title}
        </h1>

        {/* author */}
        <div className="flex items-center gap-2 mt-3 md:mt-2">
          <img
            className="w-8 rounded-full"
            src="https://randomimg.almahmud.top/public"
            alt="author image"
          />
          <p>Science Lover</p>
        </div>
      </section>

      {/* content section */}
      <section className="mt-6 md:mt-10 mb-8 md:mb-16">
        {/* short description */}
        <p className="text-[#637381]">{currentBlog?.short_description}</p>
        {/* image */}
        <img
          className="w-full lg:h-[650px] object-cover object-center mt-4 md:mt-6"
          src={currentBlog?.images[1]}
          alt=""
        />
        {/* content/long description/article */}
        <p className="text-[#637381] mt-4 md:mt-8 leading-6 md:leading-7">
          {currentBlog?.content}
        </p>
      </section>

      {/* recent articles */}
      <section>
        {/* header and btn */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl lg:text-[40px] font-semibold">
            Recent Articles
          </h1>
          <Link to={"/profile"}>
            <button className="text-[#3758F9] border border-[#3758F9] font-medium px-3 md:px-4  py-1.5 md:py-2.5 rounded-xl text-sm md:text-base">
              View All
            </button>
          </Link>
        </div>
        {/* short desc */}
        <p className="text-[#637381] text-sm md:text-base mt-3 md:mt-0">
          Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper vitae augue
          amet.
        </p>
        {/* blogs */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {allBlogData?.slice(0, 4)?.map((blogPost) => (
            <div key={blogPost?.id}>
              {/* image */}
              <Link to={`/profile/blog-details/${blogPost?.id}`}>
                <img
                  className="w-full h-[300px] rounded-2xl object-cover object-center"
                  src={blogPost?.images[0]}
                  alt=""
                />
              </Link>
              {/* date and subject */}
              <div className="text-[#7F879E] flex items-center gap-3 text-sm font-medium mt-5">
                <p>{new Date(blogPost?.uploaded_on).toLocaleDateString()}</p>{" "}
                {/* Formatted timestamp */}
                {/* dot icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="6"
                  viewBox="0 0 5 6"
                  fill="none"
                >
                  <circle cx="2.5" cy="3" r="2.5" fill="#D4D7DF" />
                </svg>
                <p>{blogPost?.subject}</p>{" "}
              </div>
              {/* title */}
              <Link to={`/profile/blog-details/${blogPost?.id}`}>
                <h1 className="text-2xl font-medium mt-1">{blogPost?.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfileBlogDetails;
