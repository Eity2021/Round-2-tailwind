import Score from './Score';
import Network from './Network';
import Hardware from './Hardware';
import GreenScore from './GreenScore';
import pause from "../../image/logo/pause.png"
import fireIcon from "../../image/others/fire.png"
import bgImage from "../../image/others/bgImage.png";
import DynamicButton from '../../components/button/DynamicButton';
export default function HeroSection() {
    return (
        <div>
            <div className="min-h-screen  relative bg-gradient-to-b from-backgroundColorOne to-backgroundColorTwo dark:from-darkColorMode dark:to-darkColorMode  overflow-hidden py-80 ">
                <div className=" mx-auto lg:px-0 px-4">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 w-full max-w-6xl pl-5 sm:pl-10 lg:pl-20 xl:pl-[20px] 2xl:pl-[80px] 3xl-[200px]">
                            <div className="space-y-6">
                                <div className="relative">
                                    <h3 className="md:text-6xl  text-[34px] font-bold text-heading dark:text-white md:leading-[60px] leading-[40px]  lg:max-w-2xl w-100% " >Your SEO Swiss Army  Knife, Right In The  Browser.  </h3>
                                    <img src={fireIcon} alt="fireIcon" className='absolute bottom-0 md:left-[240px] right-[102px] sm:block hidden' />
                                </div>
                                <p className="text-paragraph dark:text-gray-300 text-sm leading-relaxed max-w-lg">
                                    One click reveals that SEO score, traffic, backlinks, and authority of
                                    any website you visit. Perfect for link building, content research,
                                    and competitive analysis.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="sm:flex block  gap-4">
                                <DynamicButton variant="primary" size="lg">
                                    Add to Chrome
                                </DynamicButton>
                                <div className="flex items-center gap-3 sm:pt-0 pt-3">
                                    <img src={pause} alt="" />
                                    <span className="font-semibold text-lg text-primary font-roboto">   Watch Video</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Dashboard Mockup */}
                        <div className="">
                            <div className="">
                                <div className="relative">
                                    <img src={bgImage} alt="bgImage" />

                                    <div className='absolute bottom-[188px] left-[100px] xl:block hidden '>
                                        <Score></Score>
                                    </div>
                                    <div className='absolute top-[-51px] right-[200px] xl:block hidden'>
                                        <GreenScore></GreenScore>
                                    </div>

                                    <div className='absolute bottom-[90px] left-[-112px] xl:block hidden'>
                                        <Hardware></Hardware>
                                    </div>


                                    <div className='absolute bottom-[-38px] left-[144px] xl:block hidden' >
                                        <Network></Network>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}
