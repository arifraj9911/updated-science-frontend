import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
// import Signup from "../Pages/TempSignup/Signup";
import VideoSolutions from "../Pages/VideoSolutions/VideoSolutions";
import Feedback from "../Pages/Feedback/Feedback";
import About from "../Pages/About/About";
import PracticeTest from "../Pages/PracticeTest/PracticeTest";
import SelectMaterial from "../Pages/PracticeTest/SelectMaterial/SelectMaterial";
import ContentSummery from "../Pages/PracticeTest/ContentSummery/ContentSummery";
import Home from "../Pages/Home";
import DetailsCourse from "../Pages/VideoSolutions/DetailsCourse/DetailsCourse";
import Signin from "../Pages/Signin/Signin";
import Membership from "../Pages/Membership and Pricing/Membership";
import PaymentForm from "../Pages/Membership and Pricing/PaymentForm/PaymentForm";
import ProfileHome from "../Pages/Profile Home/ProfileHome";
import ProfileBlogDetails from "../Pages/Profile Blog Details/ProfileBlogDetails";
import SignUpAlternative from "../Pages/SignUp Alternative/SignUpAlternative";
// import PrivateRoute from "./PrivateRoute";
import UserLanding from "../Pages/User Landing/UserLanding";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/FAQ/Faq";
import PracticeTestAdmin from "../Pages/Practice Test Admin/PracticeTest";
import StudyMaterial from "../Pages/Study Material/StudyMaterial";
import AdminPanel from "../Pages/Admin Panel/AdminPanel";
import VideoSolution from "../Pages/Video Solution/VideoSolution";
import Forum from "../Pages/Forum/Forum";
import ForumLevelTwo from "../Pages/Forum/Forum level 2/ForumLevelTwo";
import Discussions from "../Pages/Forum/Discussions/Discussions";
import ChangePassword from "../components/ChangePassword";
import PrivateRoute from "./PrivateRoute";
import Signup from "../Pages/TempSignup/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/home",
    element: (
      <PrivateRoute>
        <UserLanding></UserLanding>
      </PrivateRoute>
    ),
  },
  {
    path: "/change-password",
    element: <ChangePassword></ChangePassword>,
  },
  {
    path: "/profile",
    element: <Main />,
    children: [
      {
        path: "/profile",
        element: <ProfileHome></ProfileHome>,
      },
      {
        path: "/profile/blog-details/:id",
        element: <ProfileBlogDetails></ProfileBlogDetails>,
      },
      {
        path: "/profile/study-materials",
        element: <div>study</div>,
      },
      {
        path: "/profile/video-solutions",
        element: <VideoSolutions />,
      },
      {
        path: "/profile/video-solutions/:id",
        element: <DetailsCourse />,
      },
      {
        path: "/profile/practice-test",
        element: <PracticeTest />,
      },
      {
        path: "/profile/practice-test/:id",
        element: <SelectMaterial />,
      },
      {
        path: "/profile/practice-test/:id/summery",
        element: <ContentSummery />,
      },
      {
        path: "/profile/exam-centre",
        element: <div>Exam Centre</div>,
      },
      {
        path: "/profile/membership",
        element: <Membership></Membership>,
      },
      {
        path: "/profile/membership/payment",
        element: <PaymentForm></PaymentForm>,
      },
      {
        path: "/profile/about",
        element: <About />,
      },
      {
        path: "/profile/feedback",
        element: <Feedback />,
      },
      {
        path: "/profile/admin",
        element: <AdminPanel />,
      },
      {
        path: "/profile/admin/courses",
        element: <Courses />,
      },
      {
        path: "/profile/admin/practice-test",
        element: <PracticeTestAdmin />,
      },
      {
        path: "/profile/admin/study-material",
        element: <StudyMaterial />,
      },
      {
        path: "/profile/admin/video-solution",
        element: <VideoSolution />,
      },
      {
        path: "/profile/faq",
        element: <Faq />,
      },
      {
        path: "/profile/forum",
        element: <Forum></Forum>,
      },
      {
        path: "/profile/forum/level-2/:id",
        element: <ForumLevelTwo></ForumLevelTwo>,
      },
      {
        path: "/profile/forum/discussion/:topic_id",
        element: <Discussions></Discussions>,
      },
      {
        // 404 not found
        path: "*",
        element: <div>404 Not Found Route</div>,
      },
    ],
  },
  {
    // 404 not found
    path: "*",
    element: <div>404 Not Found</div>,
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/signup-alternative",
    element: <SignUpAlternative></SignUpAlternative>,
  },
]);
