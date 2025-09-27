export default function Score() {
    return (
        <div>
            <div className="flex justify-center mb-4">
                <div className="relative w-28 h-28">
                    <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 36 36">
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
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <div>
                            <p className="text-base font-bold text-white">76ms</p>
                            <p className="text-[12px] font-normal text-white">Ping Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


//  <p className="text-xl font-bold text-white">67%</p>