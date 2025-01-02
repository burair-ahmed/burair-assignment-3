import Image from "next/image";
export default function WorkManage () {
    return (
            //    Work management 
    //   Project managment 
      <div className="h-[1488px]   py-[140px] px-[120px] gap-[100px]">
      <div className="flex items-center justify-center h-[547px] gap-[60px]">
        <div className="w-[700px] h-[411px] gap-[60px]">
          <h2 className=" h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">
            Project Management
          </h2>
          <p className=" h-[90px] text-[18px] text-[#212529] leading-[30px] tracking-[-2%]">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with
            the mobile app and save them to a note.
          </p>
          <button  className="bg-[#4F9CF9] mt-14 flex items-center text-white active:bg-[#3068ad] w-[201px] h-[63px] rounded-[6px] py-[20px] px-[40px] gap-[10px]">
            Get Started
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
        <div className="w-[748px] h-[500px] bg-[#C4DEFD]"></div>
      </div>
      {/* Work together  */}
      <div className="flex  items-center h-[547px] mt-44 gap-[100px]">
        <div className="w-[710px] flex items-center h-[661px] gap-[100px]">
          <Image
            className=""
            src="/Work Together Image.png"
            alt="Work together image"
            width={550}
            height={500}
          />
        </div>
        <div className="w-[670px] pl-10 items-center h-[294px] gap-[60px]">
          <h2 className="w-[670px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%]">
            Work together
          </h2>
          <p className="w-[670px] h-[60px] font-normal text-[18px]  leading-[30px] tracking-[-2%] text-[#212529]">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet
            and share the URL with others.
          </p>
          <button className="w-[186px] mt-14 flex justify-center items-center text-white active:bg-[#3068ad] bg-[#4F9CF9] h-[63px] rounded-[6px] py-[20px] px-[40px] gap-[10px]"> 
            Try it now
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
    </div>
    )
}