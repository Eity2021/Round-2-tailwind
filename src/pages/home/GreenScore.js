import React from 'react'
import green from "../../image/others/green.png"
export default function GreenScore() {
    return (
        <div>
            <div className=" bg-white dark:bg-slate-800 rounded-lg shadow-lg px-14 pt-10 pb-4 z-20 border border-[#5CD6BA] relative" >
                <div className="absolute bottom-[80px] left-[37%]">
                    <img src={green} alt="" />
                </div>
                <div className='text-center'>
                    <div className="text-sm font-semibold text-heading dark:text-white">Green Score</div>
                    <div className="text-xs text-paragraph dark:text-gray-300">Analyse how ethical website</div>
                    <div className="text-xs text-paragraph dark:text-gray-300">and advertising are</div>
                </div>

            </div>
        </div>
    )
}
