import React from 'react'

export default function Hardware() {
    return (
        <div className='bg-white dark:bg-slate-800 px-6 py-10 rounded-[10px] shadow-md'>
            <div className="text-center mb-4">
                <h3 className="font-bold text-heading dark:text-white text-sm">Hardware report</h3>
            </div>

            {/* Score Circle */}
            <div className="flex justify-center mb-1">
                <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="4"
                        />
                        <path
                            d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#5CD6BA"
                            strokeWidth="4"
                            strokeDasharray="67, 100"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-heading dark:text-white ">67%</span>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-[#242424] dark:text-gray-300  font-semibold mb-1">
                Your Score
            </div>
        </div>
    )
}
