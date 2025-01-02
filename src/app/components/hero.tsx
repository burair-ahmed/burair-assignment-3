import Image from "next/image";
export default function Hero () {
    return (
        <div className="h-[700px] py-[140px] px-[20px] bg-[#043873] flex justify-center items-center">
        <div className="w-[650px] h-[361px] ">
          <h2 className="h-[154px] font-bold  text-[60px] text-white leading-[77.45px] tracking-[-2%]">
            Get more done by white pace
          </h2>
          <p className="h-[60px] font-normal text-[18px] leading-[30px] tracking-[-2%] text-white">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <button className="w-[210px] h-[63px] flex items-center rounded-[8px] p-[20px] gap-[5px] mt-14 active:bg-[#3068ad] text-white tracking-[-2%] leading-[23px] text-[16px]   bg-[#4F9CF9]">
            Try Whitepace free
            <Image
              className="relative right-[-0.5rem]"
              src="/hero-btn-v2.png"
              alt="part one of arrow image on button"
              width={8}
              height={5}
            />
            <Image
              className=""
              src="/hero-btn-v1.png"
              alt="part two of arrow image on button"
              width={5}
              height={5}
            />
          </button>
        </div>
        <div className="w-[600px] h-[500px] bg-[#C4DEFD]"></div>
      </div>
    )
}