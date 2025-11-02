import { CiSearch } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

function Slide() {
    const slider = [
        { id: 1, title: 'Aloe Vera', subtitle: 'Aloe Vera', img: 'public/image3.png', description: "Aloe produces two substances, gel and latex, which are used for medicines. Aloe gel is the clear, jelly-like substance found in the inner part of the aloe plant leaf. Aloe latex comes from just under the plant's skin and is yellow in color. Some aloe products are made from the whole crushed leaf, so they contain both gel and latex." },
        { id: 2, title: 'Snake Plant', subtitle: 'Sansevieria', img: 'public/image11.png', description: "Easy to grow and highly tolerant ,perfect for low-light rooms." },
        { id: 3, title: 'Calathea', subtitle: 'Prayer Plant', img: 'public/image13.png', description: 'known for its patterned leaves and gentle movement with daylight.' },
    ]

    const [current, setCurrent] = useState(0)

    const { title, subtitle, img, description } = slider[current]

    useEffect(()=>{
        const interval=setInterval(()=>{
            nextSlide();
        },3000);
        return ()=>clearInterval(interval);
    },[])

    const prevSlide = () => {
        setCurrent(prev => (prev - 1 + slider.length) % slider.length)
    }

    const nextSlide = () => {
        setCurrent(prev => (prev + 1) % slider.length)
    }
    return (
        <div className=" flex flex-row justify-between px-36 overflow-hidden">
            <div>
                <div>
                    <img src="public/image1.png" alt="" className=" absolute left-24 top-9 w-8 h-8" />
                    <p className=" text-[12px] absolute left-[120px] top-11 pl-2 font-Montserrat"><b>Garden</b>Pokhara</p>
                </div>

                <div className=" w-[560px] h-[840px] object-contain object-left">
                    <img src={img} alt={title} className="w-[900px] h-[800px] rounded-b-3xl" />
                </div>

                <div className=" flex absolute pl-[160px] ">
                    <button onClick={prevSlide} className=""><IoIosArrowRoundBack className=" w-20 h-8 pr-12" /></button>
                    <p className=" font-medium font-Poppins">{title}</p>
                    <button onClick={nextSlide} className=""><IoIosArrowRoundForward className=" w-20 h-8 pl-12" /></button>
                </div>
            </div>



            <div className="flex flex-col  ">
                <div className=" flex absolute right-28 top-10 text-3xl gap-6">
                    <CiSearch />
                    <RiMenu3Fill />
                </div>

                <div className=" pt-56 pl-24 ">
                    <h3 className=" text-[46px] text-[#9DB97F] font-bold  font-Poppins">{subtitle}</h3>
                    <p className=" text-[#68737F] w-[443px] pt-6 text-left text-[18px] font-Poppins leading-[1.8]">{description}</p>
                    <div className=" flex pt-8 gap-5">
                        <button className=" bg-[#8BB178] text-white px-7 py-3 font-Montserrat">Buy Now</button>
                        <button className=" border border-gray-500 px-8 py-3 font-medium">Explore Plants</button>
                    </div>
                </div>

                <div className=" flex gap-4 text-[17px] absolute right-28 top-[780px]">
                    <FaFacebookF />
                    <FaYoutube />
                    <FaInstagram />
                </div>

            </div>

        </div>
    )
}
export default Slide