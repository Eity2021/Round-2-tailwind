import DynamicButton from "../../components/button/DynamicButton";

export default function Exploration() {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#5CD6BA]/20 to-[#DFD1BA4A]/20  dark:from-darkColorMode dark:to-darkColorMode  flex items-center justify-center p-4">
        <div className="container mx-auto">
          {/* Main Content Card */}
          <div className="p-8 md:p-12 text-center">
            {/* Decorative Pattern Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div
                className="w-full h-full bg-repeat opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-xl md:text-2xl  font-bold text-heading dark:text-white  mb-6 leading-tight font-manrope">
              Start Your SEO Exploration Now
            </h1>

            {/* Subtitle */}
            <p className="text-sm text-heading  dark:text-gray-300  mb-8  mx-auto leading-relaxed font-sans">
              Join 10,000 professionals who use SEO Insight daily. It's free to
              install.
            </p>

            <DynamicButton variant="primary" size="lg">
              Add to Chrome - It's Free
            </DynamicButton>
          </div>
        </div>
      </div>
    </div>
  );
}
