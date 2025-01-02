import Image from "next/image";
export default function Sponsers() {
  return (
    <div className="h-[415px] flex items-center justify-center flex-col   py-[140px] px-[220px] gap-[100px]">
      <div className=" h-[80px] font-bold text-[60px] leading-[87px] tracking-[-2%] text-center">
        Our sponsors
      </div>

      <div className=" h-[71px] w-[900px] flex  justify-between">
        <Image src="/Apple.png" alt="Apple logo" width={50} height={50} />
        <Image src="/Microsoft.png" alt="Microsoft logo" width={200} height={50} />
        <Image src="/Slack.png" alt="Slack logo" width={200} height={50} />
        <Image src="/Google.png" alt="Google logo" width={200} height={50} />
      </div>
    </div>
  );
}
