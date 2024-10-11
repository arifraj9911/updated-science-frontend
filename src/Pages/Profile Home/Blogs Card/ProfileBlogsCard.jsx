import { Link } from "react-router-dom";
import arrowUpRight from "./../../../assets/Arrow/Arrow_Up_Right_MD.svg";

const ProfileBlogsCard = ({ blogPost }) => {
  return (
    <div
      key={blogPost.id}
      className="border border-[#DFE4EA] rounded-3xl shadow-sm p-4 flex flex-col md:flex-row items-center gap-6 w-full"
    >
      {/* img */}
      <img
        src={blogPost?.images[0]} 
        alt={blogPost.title}
        className="w-[268px] h-[268px] object-cover rounded-lg"
      />
      {/* details */}
      <div className="flex flex-col h-full py-2 justify-around">
        {/* id */}
        <p>#{blogPost.id}</p>
        {/* date and category */}
        <div className="text-sm text-[#7F879E] font-medium mt-3 flex items-center gap-3">
          <p>{new Date(blogPost.uploaded_on).toLocaleDateString()}</p> {/* Formatted timestamp */}
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
          <p>{blogPost.subject}</p> 
        </div>
        {/* title */}
        <h2 className="text-2xl font-medium mt-3">{blogPost.title}</h2>
        {/* description */}
        <p className="mt-4 text-[#637381]">
          {blogPost.short_description.split(" ").slice(0, 40).join(" ") + " ..."}
        </p>
        {/* read more button */}
        <Link to={`/profile/blog-details/${blogPost?.id}`} className="text-[#3758F9] font-semibold mt-6 flex items-center gap-1">
          Read more <img src={arrowUpRight} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default ProfileBlogsCard;
