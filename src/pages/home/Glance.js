import glance1 from "../../image/works/glance1.png";
import glance2 from "../../image/works/glance2.png";
import glance3 from "../../image/works/glance3.png";
import glance4 from "../../image/works/glance4.png";
import glance5 from "../../image/works/glance5.png";

const features = [
  {
    title: "Overall SEO Health Score",
    desc: "A quick, visual grade (0–100) of the page’s overall SEO effectiveness. Green is good, red is bad.",
    icon: glance1,
  },
  {
    title: "Authority Metrics",
    desc: "See both Domain Authority and Page Authority scores to gauge the site’s and page’s link power and ranking potential.",
    icon: glance2,
  },
  {
    title: "Traffic Insights",
    desc: "Get estimated monthly visit numbers and traffic sources to understand their audience size and acquisition strategy.",
    icon: glance3,
  },
  {
    title: "Backlink Profile",
    desc: "See the total number of referring domains and backlinks to assess their link-building success.",
    icon: glance4,
  },
  {
    title: "Performance Grades",
    desc: "Critical Web Vitals and page speed scores for both desktop and mobile. Essential for user experience and rankings.",
    icon: glance5,
  },
];

export default function Glance() {
  return (
    <div>
      <section className="bg-gradient-to-b from-backgroundColorOne to-backgroundColorTwo dark:from-darkColorMode dark:to-darkColorMode py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-manrope leading-[40px] md:leading-[56px]  font-bold text-center text-heading dark:text-white mb-12">
            Everything You Need To <br /> Know, At A Glance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  max-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div
                  className="w-[60px] h-[60px] bg-white dark:bg-gray-900  rounded-[50%] flex items-center justify-center my-2"
                  style={{ boxShadow: "0 0 40px 0px rgba(0, 0, 0, 0.1)" }}
                >
                  <img src={feature.icon} alt="" />
                </div>
                <h3 className="text-base font-semibold text-heading dark:text-white mb-2 font-sans">
                  {feature.title}
                </h3>
                <p className="text-sm text-paragraph dark:text-gray-300 font-sans">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
