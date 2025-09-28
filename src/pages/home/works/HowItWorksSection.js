import line from "../../../image/others/Line.png";

import StepCard, { ExtensionIcon, CompassIcon, EyeIcon } from "./StepCard";
export default function HowItWorksSection() {
    return (
        <div>
            <section className=" bg-gradient-to-r from-backgroundColorOne to-white  dark:from-darkColorMode dark:to-darkColorMode py-80 lg:px-4 px-0">
                <div className="container mx-auto">
                    {/* --- 2. Title Section --- */}
                    <h2 className="text-xl md:text-2xl font-bold text-center  text-heading dark:text-white font-manrope">
                        How It Works
                    </h2>
                    <div className="relative pt-10 pb-16 hidden lg:block">
                        <div className="flex justify-center">
                            <img src={line} alt="" />
                        </div>

                        {/* --- Step 1 --- */}
                        <div className="absolute 2xl:top-[100px] 2xl:left-[128px]  xl:top-[100px] xl:left-[0px]  lg:top-[60px] lg:left-[-30px]   ">
                            <StepCard
                                number="Step 1"
                                icon={<ExtensionIcon />}
                                text="Add The Extension From The Chrome Web Store."
                            />
                        </div>

                        {/* --- Step 2 --- */}
                        <div className="absolute 2xl:top-[101px] 2xl:left-[40%]  xl:top-[101px] xl:left-[38%]  lg:top-[60px] lg:left-[33%]    ">
                            <StepCard
                                number="Step 2"
                                icon={<CompassIcon />}
                                text="Navigate To Any Website You Want To Analyze."
                            />
                        </div>

                        {/* --- Step 3 --- */}
                        <div className="absolute 2xl:top-[101px] 2xl:right-[8%]  xl:top-[101px] xl:right-[0%]  lg:top-[60px] lg:right-[-0px]  ">
                            <StepCard
                                number="Step 3"
                                icon={<EyeIcon />}
                                text="Click The Extension Icon To See All SEO Data Magically Overlay The Page."
                            />
                        </div>
                    </div>

                    {/* --- Medium & smaller screens: grid layout, no line --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 lg:hidden">
                        <StepCard
                            number="Step 1"
                            icon={<ExtensionIcon />}
                            text="Add The Extension From The Chrome Web Store."
                        />
                        <StepCard
                            number="Step 2"
                            icon={<CompassIcon />}
                            text="Navigate To Any Website You Want To Analyze."
                        />
                        <StepCard
                            number="Step 3"
                            icon={<EyeIcon />}
                            text="Click The Extension Icon To See All SEO Data Magically Overlay The Page."
                        />
                    </div>
                </div>
            </section >
        </div >
    );
}
