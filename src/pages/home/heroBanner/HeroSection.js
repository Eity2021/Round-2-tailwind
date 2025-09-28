import Score from './Score';
import Network from './Network';
import Hardware from './Hardware';
import GreenScore from './GreenScore';
import pause from "../../../image/logo/pause.png"
import fireIcon from "../../../image/others/fire.png"
import bgImage from "../../../image/others/bgImage.png";
import heroIcon from "../../../image/others/heroIcon.png";
import DynamicButton from '../../../components/button/DynamicButton';
export default function HeroSection() {
    return (
        <div>
            <div className="relative bg-gradient-to-t from-white to-backgroundColorOne dark:from-darkColorMode dark:to-darkColorMode  overflow-hidden pb-[120px] pt-[80px]">
                <div className=" mx-auto lg:px-0 px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 w-full max-w-6xl  sm:pl-6 lg:pl-10 xl:pl-[20px] 2xl:pl-[80px] 3xl-[200px]">
                            <div className="space-y-6">
                                <div className="relative">
                                    <h3 className="xl:text-6xl lg:text-5xl md:text-6xl  sm:text-6xl text-[35px] sm:leading-0 leading-[40px] font-bold text-heading dark:text-white lg:w-[600px] w-100%  lg:text-left text-center ">
                                        Your SEO Swiss Army  Knife, Right In The  Browser.
                                    </h3>
                                    <img src={fireIcon} alt="fireIcon" className='absolute bottom-0 md:left-[240px] right-[102px] lg:block hidden' />
                                    <img src={heroIcon} alt="heroIcon" className='absolute xl:top-[50px] xl:left-[256px] lg:top-[50px] lg:left-[0px] sm:top-[50px] sm:left-[252px] top-[34px] left-[0px]  z-[-1]' />

                                </div>
                                <p className="text-paragraph dark:text-gray-300 text-sm leading-relaxed xl:w-[600px] w-100% lg:text-left text-center">
                                    One click reveals that SEO score, traffic, backlinks, and authority of
                                    any website you visit. Perfect for link building, content research,
                                    and competitive analysis.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex  gap-4 lg:justify-start justify-center">

                                <DynamicButton variant="primary" size="lg">
                                    Add to Chrome
                                </DynamicButton>
                                <div className="flex items-center gap-3">
                                    <img src={pause} alt="" className='md:w-100 w-[20%]' />
                                    <span className="font-semibold md:text-lg text-sm text-primary font-roboto"> Watch Video</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Dashboard Mockup */}

                        <div className="">
                            <div className="relative">
                                <img src={bgImage} alt="bgImage" />

                                <div className='absolute bottom-[188px] left-[100px] xl:block hidden '>
                                    <Score></Score>
                                </div>
                                <div className='absolute top-[-51px] right-[200px] lg:block hidden'>
                                    <GreenScore></GreenScore>
                                </div>
                                <div className='absolute bottom-[90px] left-[-112px] 2xl:block hidden'>
                                    <Hardware></Hardware>
                                </div>

                                <div className='absolute bottom-[-38px] left-[144px] lg:block hidden' >
                                    <Network></Network>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div></div>
    )
}
