export default function Network() {
    return (
        <div>
            <div className="space-y-3 bg-white dark:bg-slate-800 px-6 py-2 rounded-[10px] shadow-md xl:w-[380px] lg:w-[300px] w-[260px]">
                <div>
                    <div className="mb-1">
                        <span className="text-bold text-lg text-[#242424]  dark:text-white ">
                            Network & server
                        </span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-start gap-12 text-xs text-gray-600 mb-1">
                        <span className="text-sx text-heading dark:text-white">
                            Bandwidth
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-2 ">
                            <div
                                className="bg-[#5CD6BA] h-2 rounded-full"
                                style={{ width: "78%" }}
                            ></div>
                        </div>
                        <span className="text-sx text-paragraph dark:text-white">85%</span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-start  gap-12 text-xs text-gray-600 mb-1">
                        <span className="text-sx text-heading dark:text-white">
                            Traffic
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-2 ">
                            <div className=" h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                        <span className="text-sx text-heading font-bold dark:text-white">
                            15%
                        </span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-start  gap-12 text-xs text-gray-600 mb-1">
                        <span className="text-sx text-heading dark:text-white">
                            Response
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-2 ">
                            <div
                                className=" bg-[#5CD6BA] h-2 rounded-full"
                                style={{ width: "78%" }}
                            ></div>
                        </div>
                        <span className="text-sx text-paragraph  dark:text-white">85%</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-start  gap-12 text-xs text-gray-600 mb-1">
                        <span className="text-sx text-heading dark:text-white">Type</span>
                        <div className="w-full bg-gray-200 rounded-full h-2 ">
                            <div
                                className="bg-[#5CD6BA]  h-2 rounded-full"
                                style={{ width: "78%" }}
                            ></div>
                        </div>
                        <span className="text-sx text-heading text-bold  dark:text-white">
                            40%
                        </span>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs text-heading mb-1">
                        <span className="text-sx text-heading dark:text-white">
                            Via CDN
                        </span>
                        <span className="text-sx text-bold text-heading dark:text-white">
                            Yes
                        </span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
