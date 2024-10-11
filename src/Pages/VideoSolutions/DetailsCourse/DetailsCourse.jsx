import { useParams } from "react-router-dom";
import videosData from "../../../data/videosData";
import NavbarShared from "../../../components/NavbarShared";
import arrowRight from "../../../assets/images/arrowR.svg";
import arrowR from "../../../assets/images/arrow_right.svg";
import { useState } from "react";
import commentImg from "../../../assets/images/comment_user.svg";
import likeIcon from "../../../assets/images/like.svg";
import replyIcon from "../../../assets/images/reply.svg";

const DetailsCourse = () => {
  const { id } = useParams();
  const details = videosData.find((data) => parseInt(data.id) === parseInt(id));

  const relatedSubject = videosData.filter(
    (video) => video.subject_name === details.subject_name
  );

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

  //   console.log(relatedSubject);
  console.log(replies);

  return (
    <div>
      {/* navbar start */}
      <NavbarShared search={true} />
      {/* navbar end */}

      <div className="mt-[72px]">
        {/* heading sub */}
        <div className="text-primary-text font-poppins flex items-center gap-2">
          <span>Videos</span>
          <img src={arrowRight} alt="arrowRight" className="w-3" />
          <span>{details?.subject_name}</span>
        </div>

        {/* heading and sub-heading */}
        <div className="mt-4">
          <h3 className="text-[32px] mb-2 font-poppins font-semibold text-primary-heading ">
            {details?.subject_title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-primary-text font-inter">
              {details?.short_description}
            </p>
            <button className="py-3 px-6 text-white font-medium font-poppins bg-[#3758F9] rounded-2xl">
              Start/Resume
            </button>
          </div>
        </div>

        {/* main content */}
        <div className="flex gap-6 items-start mt-10">
          {/* left side content */}
          <div className=" w-full">
            <hr className="mb-10" />

            {/* details */}
            <p className="text-secondary-text font-poppins mb-8 text-justify">
              {details?.description}
            </p>

            {/* video */}
            <div>
              <iframe
                className="rounded-lg w-full "
                // width="354"
                height="570"
                src={details?.youtube_link}
                allowFullScreen
              ></iframe>
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
                      <p className="text-primary-text font-poppins ">
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

          {/* right side content */}
          <div className="w-1/3 border p-6 rounded-3xl text-[#111928]">
            <h4 className="text-xl font-poppins font-semibold mb-4">
              Need help covering other topics taught in this video?
            </h4>

            <div className="space-y-2">
              {relatedSubject.slice(0, 3)?.map((video) => (
                <div className=" w-full" key={video.id}>
                  <iframe
                    className="rounded-t-lg w-full "
                    // width="354"
                    //   height="246"
                    src={video.youtube_link}
                    allowFullScreen
                  ></iframe>
                  <button className="bg-[#111928CC] -mt-[1px] flex items-center font-poppins font-semibold text-left rounded-b-lg py-2 gap-2 w-full   px-6 text-white">
                    Watch Video
                    <img src={arrowR} alt="arrow_right" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
