import Banner from "./Banner";
import Exploration from "./Exploration";
import Faq from "./Faq";
import Glance from "./Glance";
import Partners from "./Partners";

export default function Home() {
  return (
    <div className="">
      <Partners></Partners>
      <Glance></Glance>
      <Banner></Banner>
      <Exploration></Exploration>
      <Faq></Faq>
    </div>
  );
}
