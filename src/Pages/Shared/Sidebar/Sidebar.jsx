// import logo from "../../../assets/images/logo.svg";
// import science from "../../../assets/images/Science.svg";
// import academy from "../../../assets/images/Academy.svg";
import logo from "./../../../assets/images/logo2.svg";
import NavLinkItem from "../../../components/NavLinkItem";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="py-6">
      {/* logo */}
      <div
        onClick={() => navigate("/user/home")}
        className="flex cursor-pointer items-center justify-center gap-2"
      >
        <img src={logo} alt="" />
        {/* <img src={logo} alt="logo" />
        <div className="space-y-1">
          <img src={science} alt="science" />
          <img src={academy} alt="academy" />
        </div> */}
      </div>

      {/* menu Link */}
      <NavLinkItem></NavLinkItem>
    </div>
  );
};

export default Sidebar;
