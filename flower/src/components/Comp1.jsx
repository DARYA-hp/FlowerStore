function Component1() {
  return (
    <>
      <div className="relative flex flex-row justify-between px-48 bg-[url('/0f4dc2f74cd8f9f10549ecf5bd3c190241e16d93.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative pt-20">
          <p className="text-[40px] w-[315px] font-[700] text-white">
            Garden Pokhara welcomes you!!
          </p>
          <p className="py-10 text-white w-[315px] text-[20px]">
            Receive 10% off on your purchase. Redeem now!
          </p>
        </div>

        <div className="relative pr-10  pt-32 flex flex-col items-start space-y-4">
          <input
            type="text"
            placeholder="Enter email..."
            className="w-[340px] h-[50px] text-[18px] placeholder-[#b2b4b488] px-4 focus:outline-none focus:ring-2 focus:ring-[#8BB178]"
          />
          <button className="bg-[#8BB178] text-[20px] text-white px-6 py-[8px] hover:bg-[#7ca068]">
            Claim now
          </button>
        </div>
      </div>
    </>
  );
}

export default Component1;
