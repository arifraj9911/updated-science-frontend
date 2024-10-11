import blogPicture from "./../assets/images/blogPicture.png";
import blogPicture2 from "./../assets/images/blogPicture2.png";

const blogPostsData = [
  {
    id: 1, // Unique ID for each blog post
    subject: "Career Tips",
    author_id: "student", // Placeholder, replace with actual user ID
    title: "How To Explain Why You're Right For The Job",
    short_description:
      "Lorem ipsum dolor sit amet consectetur. Velit et eget nam lorem. Imperdiet in adipiscing venenatis purus vitae.",
    content:
      "Detailed content about explaining why you're the right fit for the job goes here.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque veniam, quos architecto iusto reiciendis sunt repellendus perspiciatis iste nisi modi beatae porro repudiandae tenetur corrupti iure cum vitae, esse ex! Delectus hic cum voluptas animi rem magnam reiciendis quae magni. Aut mollitia distinctio hic blanditiis magni, necessitatibus ipsam saepe, quisquam illo, deleniti pariatur laudantium ipsa ad inventore totam eaque! Veritatis iste id exercitationem in neque! Ad nemo saepe rem. Reprehenderit incidunt illo natus a ipsa qui! Recusandae possimus nostrum, quisquam ipsa minima cupiditate tempore perferendis debitis reprehenderit corporis totam sint, delectus inventore fugit alias optio quibusdam eaque officiis. Molestias, asperiores.",
    uploaded_on: new Date("2022-08-15").getTime(), // Convert date to timestamp
    videos: [], // No videos for now
    images: [blogPicture, blogPicture2], // Use placeholder image
    likes: 1,
  },
  {
    id: 2,
    subject: "Career Tips",
    author_id: "student",
    title: "How To Highlight Your Skills in a Resume",
    short_description:
      "Learn the best ways to highlight your skills in your resume for maximum impact.",
    content: "Full content about highlighting skills in a resume goes here.",
    uploaded_on: new Date("2022-08-15").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
  {
    id: 3,
    subject: "Interview",
    author_id: "student",
    title: "Mastering Behavioral Interview Questions",
    short_description:
      "Velit et eget nam lorem. Imperdiet in adipiscing venenatis purus vitae.",
    content: "Content about mastering behavioral interview questions.",
    uploaded_on: new Date("2022-09-18").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
  {
    id: 4,
    subject: "Interview",
    author_id: "student",
    title: "Top Questions to Ask at the End of an Interview",
    short_description: "Imperdiet in adipiscing venenatis purus vitae.",
    content: "Content about top questions to ask during an interview.",
    uploaded_on: new Date("2022-09-20").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
  {
    id: 5,
    subject: "Work From Home",
    author_id: "student",
    title: "Effective Tips for Working from Home",
    short_description: "Tips on working effectively from home.",
    content: "Detailed content about effective work-from-home tips.",
    uploaded_on: new Date("2022-10-25").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
  {
    id: 6,
    subject: "Work From Home",
    author_id: "student",
    title: "Setting Up a Productive Home Office",
    short_description:
      "Velit et eget nam lorem. Imperdiet in adipiscing venenatis purus vitae.",
    content: "Content about setting up a productive home office space.",
    uploaded_on: new Date("2022-10-30").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
  {
    id: 7,
    subject: "Success Story",
    author_id: "student",
    title: "How I Landed My Dream Job in Tech",
    short_description:
      "Velit et eget nam lorem. Imperdiet in adipiscing venenatis purus vitae.",
    content: "Content on landing a dream job in tech.",
    uploaded_on: new Date("2022-11-10").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
  {
    id: 8,
    subject: "Success Story",
    author_id: "student",
    title: "From Freelancer to Full-Time: My Journey",
    short_description:
      "Velit et eget nam lorem. Imperdiet in adipiscing venenatis purus vitae.",
    content:
      "A success story about transitioning from freelancing to full-time employment.",
    uploaded_on: new Date("2022-11-20").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
  {
    id: 9,
    subject: "Courses",
    author_id: "student",
    title: "Top Online Courses to Upskill in 2023",
    short_description:
      "Velit et eget nam lorem. Imperdiet in adipiscing venenatis purus vitae.",
    content: "Content on top online courses to upskill in 2023.",
    uploaded_on: new Date("2022-12-01").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
  {
    id: 10,
    subject: "Courses",
    author_id: "student",
    title: "Best Certifications to Boost Your Career",
    short_description:
      "Velit et eget nam lorem. Imperdiet in adipiscing venenatis purus vitae.",
    content: "Content about the best certifications to boost your career.",
    uploaded_on: new Date("2022-12-10").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
  {
    id: 11,
    subject: "Exam Tips",
    author_id: "student",
    title: "How to Prepare for Online Exams",
    short_description:
      "Velit et eget nam lorem. Imperdiet in adipiscing venenatis purus vitae.",
    content: "Content about preparing for online exams.",
    uploaded_on: new Date("2022-12-15").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
  {
    id: 12,
    subject: "Exam Tips",
    author_id: "student",
    title: "Time Management Tips for Exam Day",
    short_description:
      "Velit et eget nam lorem. Imperdiet in adipiscing venenatis purus vitae.",
    content: "Content on time management for exams.",
    uploaded_on: new Date("2022-12-20").getTime(),
    videos: [],
    images: [blogPicture, blogPicture2],
    likes: 1,
  },
];

export default blogPostsData;
