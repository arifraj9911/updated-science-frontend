import NavbarShared from "../../components/NavbarShared";
import facebook from "../../assets/images/_Facebook.svg";
import insta from "../../assets/images/insta.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedIn from "../../assets/images/_Linkedin.svg";

const About = () => {
  return (
    <div>
      {/* navbar start */}
      <NavbarShared about={true} />
      {/* navbar end */}

      {/* about section */}
      <div className="mt-3 mb-20 font-poppins w-4/5 mx-auto ">
        <p className="text-[#3758F9] font-semibold capitalize">about us</p>
        <h2 className="text-[40px] font-semibold text-[#111928]">
          About Ramy Kozman
        </h2>

        {/* about text */}
        <div className="text-secondary-text max-w-[1140px]   text-justify space-y-6 mt-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur. Mollis enim phasellus quam
            aliquam maecenas nunc vel. Fringilla scelerisque malesuada ipsum
            laoreet. Risus congue nullam vel facilisis gravida faucibus congue.
            Sed dignissim fermentum consequat nisi non euismod fringilla
            condimentum pellentesque. Accumsan senectus adipiscing fermentum
            porta consequat. In suscipit eros eu hac ornare. Nunc sapien sed
            feugiat elit aliquet. In egestas ut eleifend malesuada sed eros.
            Ornare vulputate habitant parturient dui eu.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem at est urna pulvinar
            sit viverra. Est quis nascetur mauris tempor platea. Euismod massa
            non ac tincidunt mauris imperdiet urna euismod dapibus. Amet a nunc
            mauris lectus maecenas id amet velit cursus. Amet lectus mi habitant
            elementum tempor ultricies enim eu pharetra. Ridiculus elit libero
            vel tincidunt vestibulum phasellus mattis cursus. Dolor orci nam
            sapien orci. Auctor ac iaculis amet sodales. Egestas lacus at
            malesuada egestas malesuada eu in ante viverra. Arcu aliquam quis
            velit sagittis dolor vestibulum. Cursus tellus lorem rhoncus duis id
            neque. Nisi lectus tellus eu placerat libero convallis. Quis mauris
            condimentum et nulla est posuere ultrices sed vel. Ut sodales
            potenti a faucibus. Posuere duis ullamcorper sagittis magna non
            amet.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Habitant eget vitae pulvinar
            et porttitor neque convallis blandit. Purus congue at massa purus.
            Feugiat nibh venenatis dui et adipiscing eu blandit faucibus morbi.
            Elit a urna montes tempor aliquam ipsum. Netus cras cursus mattis
            tincidunt varius magna et dictum. At aliquet consequat libero nisi
            facilisis maecenas faucibus. Viverra blandit sit commodo odio
            integer tempus id imperdiet tortor. Nunc mattis sodales sed nam.
            Nulla duis in malesuada vulputate ultrices posuere amet. Eu sem sem
            pretium suspendisse quisque morbi tempor. Quisque quam nisl viverra
            volutpat sollicitudin quis posuere montes vitae. Sem faucibus auctor
            diam semper lacus egestas amet arcu nibh. At amet condimentum at mi
            lacus sollicitudin pulvinar vulputate. Quisque bibendum ante enim
            sed blandit donec in mollis id. At hac faucibus quis id pellentesque
            nisi neque dictum egestas. Imperdiet nunc in nam orci dapibus elit.
            Enim sed fringilla bibendum nulla. Pretium ut laoreet lorem rhoncus
            etiam. Pretium imperdiet maecenas maecenas ut quam facilisis
            accumsan magna.
          </p>
        </div>

        {/* social */}
        <div className="flex gap-8 items-center mt-[90px]">
          <img src={facebook} alt="facebook" />
          <img src={insta} alt="insta " />
          <img src={twitter} alt="twitter" />
          <img src={linkedIn} alt="linkedIn" />
        </div>
      </div>
    </div>
  );
};

export default About;
