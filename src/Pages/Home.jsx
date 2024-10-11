import Footer from "../components/Footer";
import Courses from "../components/home/Courses";
import Header from "../components/home/Header";
import Pricing from "../components/home/Pricing";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <WhyChooseUs />
      <div className="w-full bg-zircon">
        <div className="md:mt-[9.38rem] max-w-screen-desktop mx-auto">
          <Courses />
          <div>
            <Pricing />
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
