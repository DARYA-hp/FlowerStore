function Slide2() {
    return (
        <div className=" flex overflow-hidden">
            <div className=" pl-28">
                <div>
                    <h2 className=" text-[36px] font-[700] pt-28 w-[60%] pb-8">Explore from Categories</h2>
                </div>
                <div>
                    <p className=" text-[#68737F] w-[69%] text-lg leading-relaxed font-Poppins">There are different types of plants all around us, and most of us recognize many kinds of plants that flower, grow in our gardens, or that we can eat. There is a vast range in the types of plants that grow in the world.</p>
                </div>
                <button className=" bg-[#8BB178] text-white95 px-7 py-3 mt-5 text-xl text-white">See All</button>

            </div>

            <div className="pt-40 w-[700px] h-[700px] pr-40 scale-125 gap-8">
                <div className="w-[470px] h-[420px] grid grid-cols-2 gap-4">
                    <div className="relative w-[215px] h-[185px] bg-[url('/image7.png')] bg-cover bg-center">
                        <div className="absolute flex justify-center text-center items-center inset-0 bg-black/40 rounded-[10px]">
                            <p className=" text-white font-[700] text-[18px]">Hanging</p>
                        </div>
                    </div>
                    <div className="relative w-[215px] h-[185px] bg-[url('/image8.png')] bg-cover bg-center">
                        <div className="absolute flex justify-center text-center items-center inset-0 bg-black/40 rounded-[10px]">
                            <p className=" text-white font-[700] text-[18px]">Cactus</p>
                        </div>
                    </div>
                    <div className="relative w-[215px] h-[185px] bg-[url('/image9.png')] bg-cover bg-center">
                        <div className="absolute flex justify-center text-center items-center inset-0 bg-black/40 rounded-[10px]">
                            <p className=" text-white font-[700] text-[18px]">Indoor Plant</p>
                        </div>
                    </div>
                    <div className="relative w-[215px] h-[185px] bg-[url('/image10.png')] bg-cover bg-center">
                        <div className="absolute flex justify-center text-center items-center inset-0 bg-black/40 rounded-[10px]">
                            <p className=" text-white font-[700] text-[18px]">Outdoor Plant</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Slide2