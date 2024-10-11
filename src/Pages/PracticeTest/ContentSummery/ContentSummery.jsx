import { useLocation } from "react-router-dom";
import NavbarShared from "../../../components/NavbarShared";
import arrowRight from "../../../assets/images/arrowR.svg";
import reading from "../../../assets/images/reading.svg";
import videos from "../../../assets/images/videos.svg";
import assignment from "../../../assets/images/assignment.svg";
import arrowBlue from "../../../assets/images/arrow_blue.svg";
import { useState } from "react";
import commentImg from "../../../assets/images/comment_user.svg";
import likeIcon from "../../../assets/images/like.svg";
import replyIcon from "../../../assets/images/reply.svg";

const ContentSummery = () => {
  const location = useLocation();
  const { content, module } = location.state || {};
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [activeReplyIndex, setActiveReplyIndex] = useState(null);
  const [replyInput, setReplyInput] = useState("");
  const [replies, setReplies] = useState([]);

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  const handleComments = (e) => {
    if (e.key === "Enter" && commentInput.trim() !== "") {
      setComments((prevComments) => [
        ...prevComments,
        { comment: commentInput },
      ]);
      setCommentInput("");
    }
  };

  const toggleReplyInput = (index) => {
    setActiveReplyIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleReplyInput = (e) => {
    setReplyInput(e.target.value);
  };

  const handleReplies = (e, index) => {
    if (e.key === "Enter" && replyInput.trim() !== "") {
      const updatedComments = [...comments];
      updatedComments[index].replies = [
        ...(updatedComments[index].replies || []),
        { reply: replyInput },
      ];
      setReplies(updatedComments);
      setReplyInput("");
    }
  };

  console.log(comments);
  console.log(replies);
  // console.log(content,module)
  return (
    <div>
      {/* navbar start */}
      <NavbarShared search={true} practice={true} />
      {/* navbar end */}

      {/* content area */}
      <div className="mt-[76px] flex gap-6 items-start">
        {/* left content */}
        <div className="w-[70%]">
          {/* module no and title */}
          <p className="flex gap-2 text-xs font-poppins mb-2 text-secondary-text">
            <span>{module?.module_no}</span>
            <img src={arrowRight} alt="arrow_right" />
            <span>{module?.module_title}</span>
          </p>

          {/* content */}
          <h3 className="text-3xl font-poppins font-semibold text-[#111928]">
            {content?.c_title}
          </h3>
          <p className="text-primary-text font-poppins mt-6 mb-11">
            {content?.c_subTitle}
          </p>

          {/* reading,videos,assignment icon title*/}
          <div className="flex items-center gap-4 text-secondary-text mt-1 text-sm font-poppins">
            {content?.c_readings && (
              <p className="flex items-center gap-2">
                <img src={reading} alt="reading" />
                Readings
              </p>
            )}
            {content?.c_videos && (
              <p className="flex items-center gap-2 dot-before">
                <img src={videos} alt="videos" />
                Videos
              </p>
            )}
            {content?.c_assignment && (
              <p className="flex items-center gap-2 dot-before">
                <img src={assignment} alt="assignment" />
                Assignments
              </p>
            )}
          </div>

          <hr className="mt-[36px] mb-8" />

          {/* reading and videos section */}
          <div className="font-poppins text-primary-text text-justify leading-[26px]">
            {/* reading */}
            <p>{content?.c_readings}</p>

            {/* videos */}
            <div className="mt-[58px]  grid grid-cols-1 lg:grid-cols-3 gap-7">
              <iframe
                className="rounded-lg w-full col-span-2 h-full "
                // width="354"
                //   height="360"
                src={content?.c_videos?.video_link}
                allowFullScreen
              ></iframe>
              <div className="flex flex-col gap-[26px] ">
                <img src={content?.c_videos?.images?.image} alt="video_image" />
                <img src={content?.c_videos?.images?.image} alt="video_image" />
              </div>
            </div>
          </div>

          {/* comment area */}
          <div className="mt-8">
            <span className="text-secondary-text font-inter">
              {comments.length} Comments
            </span>
            <hr className="mt-2 mb-6" />

            {/* comments */}
            <div className="mt-4 mb-6 space-y-8">
              {comments?.map((comment, index) => (
                <div className="flex items-start gap-3" key={index}>
                  <img src={commentImg} alt="comment_user" />
                  <div className="space-y-1">
                    <p className="font-bold text-sm font-inter flex gap-5 text-[#111928]">
                      <span>John Cena</span>
                      <span className="text-[#536471] text-[15px] space-x-1 font-light">
                        <span>johncena321</span>
                        <span className="dot-before"></span>
                        <span>5h</span>
                      </span>
                    </p>
                    <p className="text-primary-text font-poppins ml-2">
                      {comment?.comment}
                    </p>

                    {/* like/reply area */}
                    <div className="flex gap-6 items-center pt-12">
                      <span className="flex gap-3">
                        <img src={likeIcon} alt="like_icon" />
                        <span>42</span>
                      </span>
                      <span
                        onClick={() => toggleReplyInput(index)}
                        className="flex gap-3 cursor-pointer"
                      >
                        <img src={replyIcon} alt="reply_icon" />
                        <span>3</span>
                      </span>
                    </div>

                    {/* reply message */}
                    <div className="">
                      {comment?.replies?.map((reply, index) => (
                        <div
                          className="mt-12 flex items-start gap-3"
                          key={index}
                        >
                          <div className="relative">
                            <div className="border-s -top-12 left-2 border-[#DFE4EA] h-[40px] absolute"></div>
                            <img src={commentImg} alt="comment_user" />
                          </div>
                          <div>
                            <p className="font-bold text-sm font-inter flex gap-5 text-[#111928]">
                              <span>John Cena</span>
                              <span className="text-[#536471] text-[15px] space-x-1 font-light">
                                <span>johncena321</span>
                                <span className="dot-before"></span>
                                <span>5h</span>
                              </span>
                            </p>
                            <p className="text-primary-text font-poppins  mt-1">
                              {reply?.reply}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* reply input */}
                    {activeReplyIndex === index && (
                      <div className="pt-4 w-[500px]">
                        <input
                          type="text"
                          name=""
                          onKeyDown={(e) => handleReplies(e, index)}
                          value={replyInput}
                          onChange={handleReplyInput}
                          className="border w-full rounded-xl outline-none py-2 px-4"
                          id=""
                          placeholder="reply..."
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <input
              type="text"
              name=""
              onKeyDown={handleComments}
              value={commentInput}
              onChange={handleCommentInput}
              placeholder="Comments..."
              className="py-3 px-6 border border-[#DFE4EA] outline-none rounded-2xl w-full "
              id=""
            />
          </div>
        </div>

        {/* right content */}
        <div className="w-[30%] border bg-[#C2F3D6] border-[#DFE4EA] rounded-3xl p-6 font-poppins">
          <h4 className="text-xl font-semibold text-[#111928] capitalize">
            Want to test your Learning ?
          </h4>
          <p className="text-[#1F2A37]  mt-4 mb-10">
            Lorem ipsum dolor sit amet consectetur. Vel quam scelerisque nibh
            egestas at sollicitudin in turpis penatibus. Nunc aliquet sodales
            ultricies elit elit donec vulputate mauris aliquam. Turpis tortor
            faucibus massa tempor. Quis mauris dolor convallis lacus justo.
          </p>
          <button className="text-[#3758F9] flex items-center gap-2">
            Learn More
            <img src={arrowBlue} alt="arrow_blue" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentSummery;
