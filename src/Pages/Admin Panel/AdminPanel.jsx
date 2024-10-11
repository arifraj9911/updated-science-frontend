import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowUp from "../../assets/adminPanel/Arrow_Up_Right_MD.svg";
import communication from "../../assets/adminPanel/communication 1.svg";
import directions from "../../assets/adminPanel/directions 1.svg";
import eye from "../../assets/adminPanel/eye.svg";
import interactivity from "../../assets/adminPanel/interactivity 1.svg";
import logout from "../../assets/adminPanel/logout 1.svg";
import monitor from "../../assets/adminPanel/monitor-mobbile.svg";
import More_Horizontal from "../../assets/adminPanel/More_Horizontal.svg";
import people from "../../assets/adminPanel/people.svg";
import security from "../../assets/adminPanel/security-time.svg";
import timer from "../../assets/adminPanel/timer.svg";
import trend from "../../assets/adminPanel/trend-up.svg";
import Pagination from "../../components/Pagination";

const usersData = [
  {
    id: 1,
    name: "Benjamin Anderson",
    timeSpentWebsite: "5 min 35 sec",
    timeSpentPage: "1 min 18 sec",
    attemptsAtQuiz: 4,
    timeSpentQues: "1 min 18 sec",
  },
  {
    id: 2,
    name: "Christopher Mitchell",
    timeSpentWebsite: "5 min 35 sec",
    timeSpentPage: "1 min 18 sec",
    attemptsAtQuiz: 5,
    timeSpentQues: "1 min 18 sec",
  },
  {
    id: 3,
    name: "Alexander Rodriguez",
    timeSpentWebsite: "5 min 35 sec",
    timeSpentPage: "1 min 18 sec",
    attemptsAtQuiz: 4,
    timeSpentQues: "1 min 18 sec",
  },
  {
    id: 4,
    name: "Daniel Sullivan",
    timeSpentWebsite: "5 min 35 sec",
    timeSpentPage: "1 min 18 sec",
    attemptsAtQuiz: 4,
    timeSpentQues: "1 min 18 sec",
  },
  {
    id: 5,
    name: "James Thompson",
    timeSpentWebsite: "5 min 35 sec",
    timeSpentPage: "1 min 18 sec",
    attemptsAtQuiz: 1,
    timeSpentQues: "1 min 18 sec",
  },
  {
    id: 6,
    name: "William Foster",
    timeSpentWebsite: "5 min 35 sec",
    timeSpentPage: "1 min 18 sec",
    attemptsAtQuiz: 3,
    timeSpentQues: "1 min 18 sec",
  },
  {
    id: 7,
    name: "Nathan Reynolds",
    timeSpentWebsite: "5 min 35 sec",
    timeSpentPage: "1 min 18 sec",
    attemptsAtQuiz: 2,
    timeSpentQues: "1 min 18 sec",
  },
  {
    id: 8,
    name: "Michael Carter",
    timeSpentWebsite: "5 min 35 sec",
    timeSpentPage: "1 min 18 sec",
    attemptsAtQuiz: 1,
    timeSpentQues: "1 min 18 sec",
  },
  {
    id: 9,
    name: "Matthew Ramirez",
    timeSpentWebsite: "5 min 35 sec",
    timeSpentPage: "1 min 18 sec",
    attemptsAtQuiz: 3,
    timeSpentQues: "1 min 18 sec",
  },
  {
    id: 10,
    name: "Brandon Parker",
    timeSpentWebsite: "5 min 35 sec",
    timeSpentPage: "1 min 18 sec",
    attemptsAtQuiz: 5,
    timeSpentQues: "1 min 18 sec",
  },
  // Add more data for more pages
];
const AdminPanel = () => {
  const buttons = [
    { label: "All Courses", link: "/profile/admin/courses" },
    { label: "Study Material", link: "/profile/admin/study-material" },
    { label: "Video Solution", link: "/profile/admin/video-solution" },
    { label: "Exam Center", link: "#" },
    { label: "Practice Test", link: "/profile/admin/practice-test" },
    { label: "Membership", link: "#" },
    { label: "About", link: "#" },
    { label: "FAQ", link: "#" },
  ];
  const stats = [
    { label: "Number Of Visitors", value: "12,135", icon: people },
    { label: "Bounce Rate", value: "6.9%", icon: trend },
    { label: "Avg. Pageviews Per Session", value: "3,200", icon: eye },
    {
      label: "Average Session Duration",
      value: "48 Min",
      icon: timer,
    },
    { label: "Average Time On Page", value: "2.36 Min", icon: security },
    {
      label: "Top Traffic Sources",
      value: "Facebook",
      icon: directions,
    },
    { label: "Device Source", value: "Mobile", icon: monitor },
    { label: "Interactions Per Visit", value: "18", icon: interactivity },
    {
      label: "Exit Pages & Top Exit Pages",
      value: "Study M.",
      icon: logout,
    },
    { label: "Conversion Rate", value: "9.6%", icon: communication },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(usersData.length / rowsPerPage);

  // Get the current rows to display based on the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = usersData.slice(indexOfFirstRow, indexOfLastRow);

  const [expandedRows, setExpandedRows] = useState({});
  const toggleRow = (id) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="sm:pl-[2.25rem] sm:pr-20 pt-20 px-4">
      <h1 className=" text-biscay font-poppins text-[1.5rem] sm:text-[2rem] font-semibold mb-2">
        Edit panel
      </h1>
      <p className=" text-primary-text font-inter sm:text-base text-sm mb-8">
        Lorem ipsum dolor sit amet consectetur. Urna magna magna convallis
        tincidunt
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mt-6 sm:mt-8 mb-10 sm:mb-20">
        {buttons.map((button, index) => (
          <Link
            key={index}
            to={button.link}
            className="flex justify-center sm:justify-between items-center py-2 px-1 sm:p-1 sm:pl-6 bg-white border border-alto rounded-full"
          >
            <span className=" text-biscay font-poppins text-sm text-center">
              {button.label}
            </span>
            <div className="bg-biscay p-2 rounded-full text-white w-[2.8rem] h-[2.8rem] hidden sm:flex justify-center items-center">
              <img src={ArrowUp} alt="" className="w-6 h-6 " />
            </div>
          </Link>
        ))}
      </div>

      {/* visitors activity  */}
      <h2 className=" text-biscay font-poppins text-[1.5rem] sm:text-[2rem] font-semibold mb-2 capitalize">
        visitors activity
      </h2>
      <p className=" text-primary-text font-inter sm:text-base text-sm mb-8">
        Lorem ipsum dolor sit amet consectetur. Urna magna magna convallis
        tincidunt
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mt-6 sm:mt-8 mb-10 sm:mb-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-4 sm:p-6 bg-white border border-alto rounded-[1rem]"
          >
            <img src={stat.icon} alt="" className="hidden sm:visible" />
            <p className="mt-4 sm:mt-10 mb-1 font-poppins text-sm">
              {stat.label}
            </p>
            <span className=" text-biscay font-poppins text-[1.25rem] sm:text-[1.75rem] font-bold">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
      {/* members activity  */}

      <h2 className=" text-biscay font-poppins text-[1.5rem] sm:text-[2rem] font-semibold mb-2 capitalize">
        members activity
      </h2>
      <p className=" text-primary-text font-inter sm:text-base text-sm mb-8">
        Lorem ipsum dolor sit amet consectetur. Urna magna magna convallis
        tincidunt
      </p>

      <div className="overflow-x-auto w-full rounded-[1rem] border border-mystic hidden sm:block">
        <table className="table w-full ">
          {/* Head */}
          <thead>
            <tr className=" text-biscay font-poppins text-sm font-semibold">
              <th>No</th>
              <th>Name</th>
              <th>Time spent (Website)</th>
              <th>Time spent (Page)</th>
              <th>Attempts at quiz</th>
              <th>Time spent (Ques)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {currentRows.map((user, index) => (
              <tr key={user.id}>
                <th className=" text-biscay font-poppins text-base font-semibold">
                  {(currentPage - 1) * rowsPerPage + index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-4 ">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10 rounded-full">
                        <img
                          src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" text-biscay font-poppins text-base">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className=" text-biscay font-poppins text-base">
                  {user.timeSpentWebsite}
                </td>
                <td className=" text-biscay font-poppins text-base">
                  {user.timeSpentPage}
                </td>
                <td className=" text-biscay font-poppins text-base">
                  {user.attemptsAtQuiz}
                </td>
                <td className=" text-biscay font-poppins text-base">
                  {user.timeSpentQues}
                </td>
                <td>
                  <button className=" ">
                    <img src={More_Horizontal} alt="" className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto sm:hidden w-full rounded-[1rem] sm:border sm:border-mystic">
        {currentRows.map((user) => (
          <div
            key={user.id}
            className="my-4 border border-gray-300 rounded-md p-4 bg-white"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="avatar">
                  <div className="mask mask-squircle w-10 h-10 rounded-full">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
                      alt="Avatar"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-biscay font-poppins text-base">
                    {user.name}
                  </div>
                </div>
              </div>

              {/* Three dots button */}
              <button
                onClick={() => toggleRow(user.id)}
                className="focus:outline-none"
              >
                <img src={More_Horizontal} alt="More" className="w-6 h-6" />
              </button>
            </div>

            {/* Expanded user details */}
            {expandedRows[user.id] && (
              <div className="mt-4 p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-biscay font-poppins text-sm mb-2">
                  <strong>Time spent (Website):</strong> {user.timeSpentWebsite}
                </p>
                <p className="text-biscay font-poppins text-sm mb-2">
                  <strong>Time spent (Page):</strong> {user.timeSpentPage}
                </p>
                <p className="text-biscay font-poppins text-sm mb-2">
                  <strong>Time spent (Ques):</strong> {user.timeSpentQues}
                </p>
                <p className="text-biscay font-poppins text-sm">
                  <strong>Attempts at quiz:</strong> {user.attemptsAtQuiz}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AdminPanel;
