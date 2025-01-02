import Image from "next/image";
import Logo from "./images/logo";
export default function Navbar () {
    return(
        <div className=" h-[92px] items-center   flex justify-between py-[16px] px-[200px] bg-[#043873]">
        <div className="relative left-[-67px]">
        <Logo />
        </div>
        <div className="flex items-center relative left-[-78px] pl-72 gap-[60px] w-[737.5px] h-[60px]">
          <div className="w-[549px] h-[23px] mr-9 flex gap-[32px]">
            <li className="h-[23px] font-sans font-medium leading-[23px] text-lg text-white list-none">
              Products
            </li>
            <li className="h-[23px] font-sans font-medium leading-[23px] text-lg text-white list-none">
              {" "}
              Solutions
            </li>
            <li className="h-[23px] font-sans font-medium leading-[23px] text-lg text-white list-none">
              Resourcer
            </li>
            <li className="h-[23px] font-sans font-medium leading-[23px] text-lg text-white list-none">
              Pricing
            </li>
          </div>
          <button className="w-[126px] h-[60px] active:border-s-2 active:bg-[#dfc066] hover:bg-[#ffecb3] rounded-[8px] font-InterVariable font-lg bg-[#FFE492] text-[#043873] py-[16px] gap-[10px] px-[40px]">
            Login
          </button>
        </div>
      </div>
    )
}