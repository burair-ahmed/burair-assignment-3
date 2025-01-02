import Image from "next/image";
export default function Customise() {
  return (
    <div className="h-[612px] flex justify-center items-center py-[140px] px-[220px] gap-[98px]">
      <div className="w-[750px] h-[450px] gap-[4px] bg-[#C4DEFD]"></div>
      <div className="w-[669px] h-[411px] gap-[30px]">
        <h2 className="h-[174px]  font-bold text-[60px] leading-[87.14px] tracking-[-2%] text-[#212529]">
          Customise it to your needs
        </h2>
        <p className="h-[90px] mt-6 text-[13px] leading[30px] tracking-[-2%] text-[#212529]">
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <button className="bg-[#4F9CF9] mt-9 flex items-center justify-center text-white active:bg-[#3068ad] w-[171px] h-[63px] rounded-[6px] py-[20px] px-[40px] gap-[10px]">
            Let's Go
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
