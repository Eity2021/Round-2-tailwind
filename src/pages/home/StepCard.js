import Mask1 from "../../image/works/Mask1.png";
import Mask2 from "../../image/works/Mask2.png";
import Mask3 from "../../image/works/Mask3.png";
export default function StepCard({ number, icon, text }) {
    return (
        <div>
            <div className="flex justify-center ">
                <p className="text-sm font-semibold text-heading dark:text-white bg-white dark:bg-slate-800  py-6 px-8 rounded-[14px] shadow-md font-sans">
                    {number}
                </p>
            </div>
            <div className="flex-1 text-center max-w-xs mx-auto mb-12 lg:mb-0 lg:z-10  p-4">
                <div className="flex justify-center">{icon}</div>
                <p className="text-[20px] font-medium text-paragraph dark:text-gray-300 leading-relaxed font-manrope">
                    {text}
                </p>
            </div>
        </div>
    );
}

export const ExtensionIcon = () => <img src={Mask1} alt="" />;

export const CompassIcon = () => <img src={Mask2} alt="" />;

export const EyeIcon = () => <img src={Mask3} alt="" />;
