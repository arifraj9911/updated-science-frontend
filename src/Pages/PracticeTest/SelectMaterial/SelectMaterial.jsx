import { useParams } from "react-router-dom";
import studyMaterial from "../../../data/studyMaterialData";
import NavbarShared from "../../../components/NavbarShared";
import img1 from "../../../assets/images/img_1.svg";
import img2 from "../../../assets/images/img_2.svg";
import img3 from "../../../assets/images/img_3.svg";
import reading from "../../../assets/images/reading.svg";
import videos from "../../../assets/images/videos.svg";
import assignment from "../../../assets/images/assignment.svg";
import arrowBlue from "../../../assets/images/arrow_blue.svg";
import ModuleAccordion from "../ModuleAccordion/ModuleAccordion";

const SelectMaterial = () => {
  const { id } = useParams();

  const selectedMaterial = studyMaterial.find(
    (study) => parseInt(study?.id) === parseInt(id)
  );

    // console.log(selectedMaterial);

  return (
    <div>
      {/* navbar start */}
      <NavbarShared search={true} practice={true} />
      {/* navbar end */}

      {/* material content */}
      <div className="mt-[76px] flex gap-6 items-start">
        {/* left content */}
        <div className="w-[70%]">
          <div className="flex items-center justify-between font-poppins">
            {/* course heading */}
            <div>
              <p className="text-xs text-primary-text uppercase">
                {selectedMaterial?.subject}
              </p>
              <h3 className="text-[32px] font-semibold text-[#111928]">
                {selectedMaterial?.course_title}
              </h3>
              <p className="text-primary-text mt-6 mb-4">
                {selectedMaterial?.description}
              </p>

              {/* student,reading,video,assignment row */}
              <div className="text-sm text-primary-text flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {/* avatar */}
                  <div className="avatar-group -space-x-2 rtl:space-x-reverse">
                    <div className="avatar">
                      <div className="w-5 h-5">
                        <img src={img1} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-5 h-5">
                        <img src={img2} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-5 h-5">
                        <img src={img3} />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content w-5 h-5">
                        <span className="text-[10px]">+99</span>
                      </div>
                    </div>
                  </div>
                  +{selectedMaterial?.enrolled} Students
                </div>
                <span className="dot-before flex items-center gap-2">
                  <img src={reading} alt="reading" />
                  {selectedMaterial?.readings} Readings
                </span>
                <span className="dot-before flex items-center gap-2">
                  <img src={videos} alt="videos" />
                  {selectedMaterial?.videos} Videos
                </span>
                <span className="dot-before flex items-center gap-2">
                  <img src={assignment} alt="assignment" />
                  {selectedMaterial?.assignments} Assignment
                </span>
              </div>
            </div>

            {/* icon */}
            <div>
              <img className="w-28" src={selectedMaterial?.icon} alt="icon" />
            </div>
          </div>

          <hr className="my-8" />

          {/* module accordion */}
            <ModuleAccordion modules={selectedMaterial?.module} id={selectedMaterial?.id}/>
        </div>

        {/* right content */}
        <div className="w-[30%] border border-[#DFE4EA] rounded-3xl p-6 font-poppins">
          <h4 className="text-xl font-semibold text-[#111928] capitalize">
            how to do better in tests?
          </h4>
          <p className="text-primary-text  mt-4 mb-10">
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

export default SelectMaterial;
