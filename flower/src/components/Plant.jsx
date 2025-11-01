
function Plant(){
    const PlantsArray =[
        {img : "/plant1 (2).jpg " ,name : "Ivy"},
        {img : "/plant1 (3).jpg" , name : "Jasmine"},
        {img : "/plant1 (4).jpg" , name : "Rosemary"},
        {img : "/plant1 (1).jpg" , name : "Gingko"}
    ]
    return(
        <>
        <div className=" pt-16">
            <div>
                <p className="font-[700] text-[36px] text-center">Upcoming Plants</p>
            </div>
            <div className=" flex pt-14 justify-between px-32">
                {PlantsArray.map((item , index)=>(
                    <>
                    <div key={index} className=" flex gap-4 flex-col items-center ">
                    <img src={item.img} alt={item.img} className=" w-[260px] h-[260px] rounded-xl" />
                    <p className=" text-[18px] font-[700]">{item.name}</p>
                    </div>
                    </>
                ))}
            </div>

        </div>
        
        </>
    )
}
export default Plant