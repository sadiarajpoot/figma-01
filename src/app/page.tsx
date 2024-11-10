import Image from "next/image"; 
import Link from "next/link";
import sidePicture from "../../public/images/sidePic.jpg"; 

export default function Home() {
  return (
    <div>
      <nav className="w-full h-[88px] bg-[#D9D9D9] flex justify-between items-center">
      <h1 className=" text-base font-bold ml-9 ">Sadia Khan</h1>
        <ul className="flex space-x-4 text-base font-bold gap-8 mr-8">
          <li><Link href="/" className="hover:text-white transition duration-200">Home</Link></li>
          <li><Link href="/" className="hover:text-white transition duration-200">About</Link></li>
          <li><Link href="/" className="hover:text-white transition duration-200">Contact Us</Link></li>
          <li><Link href="/" className="hover:text-white transition duration-200">Careers</Link></li>
        </ul>
      </nav>
      <div className="h-screen flex items-center"> 
        <div className="flex flex-col gap-4 justify-center px-7 w-1/2 h-[548px]">
          <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
          <p className="font-normal text-[32px] text-[#4C4C4C] leading-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.
          </p>
          <button className="text-white w-[237px] h-[66px] p-4 bg-black mt-7 hover:bg-gray-800 transition duration-200">
            Contact Us
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image 
            src={sidePicture} 
            alt="Image"
            width={502}
            height={456}
          />
        </div>
      </div>
  
    </div>
  );
}






