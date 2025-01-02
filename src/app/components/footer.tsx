import Logo from "./images/logo";

export default function Footer() {
  return (
    <div className="h-[461px] px-[220px] pt-[100px] pb-[32px] bg-[#043873] gap-[200px]">
      <div className="w-[1000px] flex flex-col ml-9 h-[289px] gap-[100px]">
        <div className="h-[169px] gap-[100px] flex items-center justify-between">
            <div className="w-[295px] h-[100px] gap-[16px]">
                <Logo/>
                <p className="text-[16px] leading-[30px] text-[#F7F7EE] tracking-[-2%]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <div className="w-[295px] h-[110px] flex flex-col justify-between gap-[20px]">
                <p className="text-[16px] tracking-[-2%] font-bold leading-[21.78px] h-[20px] text-white">Product</p>
                <p className="text-[16px] tracking-[-2%] leading-[20px] h-[20px] text-[#FFE492]">Overview</p>
                <p className="text-[16px] tracking-[-2%] leading-[20px] h-[20px] text-white">Pricing</p>
                <p className="text-[16px] tracking-[-2%] leading-[20px] h-[20px] text-white">Customer Stories</p>
            </div>
            <div className="w-[295px] h-[110px] flex flex-col justify-between gap-[20px]">
                <p className="text-[16px] tracking-[-2%] font-bold leading-[21.78px] h-[20px] text-white">Resources</p>
                <p className="text-[16px] tracking-[-2%] leading-[20px] h-[20px] text-white">Blogs</p>
                <p className="text-[16px] tracking-[-2%] leading-[20px] h-[20px] text-white">Guides & tutorials</p>
                <p className="text-[16px] tracking-[-2%] leading-[20px] h-[20px] text-white">Help enter</p>
            </div>
            <div className="w-[295px] h-[110px] flex flex-col justify-between gap-[20px]">
                <p className="text-[16px] tracking-[-2%] font-bold leading-[21.78px] h-[20px] text-white">Company</p>
                <p className="text-[16px] tracking-[-2%] leading-[20px] h-[20px] text-white">About us</p>
                <p className="text-[16px] tracking-[-2%] leading-[20px] h-[20px] text-white">Careers</p>
                <p className="text-[16px] tracking-[-2%] leading-[20px] h-[20px] text-white">Media kit</p>
            </div>
        </div>
        <div className="h-[20px] font-[14px] text-center w-[1000px] leading-[20px]  tracking-[-2%] text-white  ">
        ©2021 Whitepace LLC.
        </div>
      </div>
    </div>
  );
}
