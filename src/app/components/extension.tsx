import Image from "next/image";
export default function UseExtension() {
  return (
    <div className="h-[600px] flex items-center py-[140px] px-[220px] gap-[98px] bg-[#043873]">
      <div className="w-[697px] h-[294px] gap-[60px]">
        <h2 className="h-[87px] font-bold text-[50px] leading-[87.14px] tracking-[-2%] text-white">
          Use as Extension
        </h2>
        <p className=" h-[60px] text-white font-normal text-[18px] leading-[30px] tracking-[-2%] ">
          Use the web clipper extension, available on Chrome and Firefox, to
          save web pages or take screenshots as notes.
        </p>
        <button className="bg-[#4F9CF9] mt-10 flex items-center justify-center text-white active:bg-[#3068ad] w-[171px] h-[63px] rounded-[6px] py-[20px] px-[40px] gap-[10px]">
            Login
            <Image
              className="relative right-[-0.75rem]"
              src="/hero-btn-v2.png"
              alt="part one of arrow image on button"
              width={8}
              height={5}
            />
            <Image
              src="/hero-btn-v1.png"
              alt="part two of arrow image on button"
              width={5}
              height={5}
            />
            </button>
      </div>
      <div className="w-[686px]  h-[375px] bg-[#C4DEFD]"></div>
    </div>
  );
}
