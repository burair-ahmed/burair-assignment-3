import Image from "next/image";
export default function TryTaskey() {
  return (
    <div className="h-[570px] py-[140px] px-[220px] bg-[#043873] ">
      <div className="flex items-center flex-col justify-center h-[294px] gap-[60px]">
        <div className="w-[900px] text-center h-[161px] gap-[24px]">
          <h2 className="h-[87px] font-bold text-center text-[60px] leading-[87px] tracking-[-2%] text-white">
            Your work, everywhere you are
          </h2>
          <p className="h-[60px] text-center leading-[30px] tracking-[2%] text-white text-16px">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
        </div>
        <button className="bg-[#4F9CF9] mt-9 flex items-center justify-center text-white active:bg-[#3068ad] w-[190px] h-[63px] rounded-[6px] py-[20px] px-[40px] gap-[10px]">
          Try Taskey
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
    </div>
  );
}
