import Footer from "../../components/footer/Footer";
import Banner from "./Banner";
import Exploration from "./Exploration";
import Faq from "./Faq";
import Glance from "./Glance";
import HowItWorksSection from "./HowItWorksSection";
import Partners from "./Partners";

export default function Home() {
  return (
    <div className="">
      <Partners></Partners>
      <HowItWorksSection></HowItWorksSection>
      <Glance></Glance>
      <Banner></Banner>
      <Exploration></Exploration>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}
