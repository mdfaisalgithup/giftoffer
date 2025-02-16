"use client"

import Image from "next/image";
import Navbar from "../navbar/page";
import { usePathname } from 'next/navigation'
const Header = () => {


const bannerData = {

  title: "Iphone Gift Offer🎉"

}









  return (
    <div>
      
      <Navbar></Navbar>


{

  usePathname() == "/" ? <div className=" relative top-0 bg-slate-800 z-40 w-full h-full  ">

<Image className="w-full 
 h-[600px] object-cover opacity-50" alt="banner" src="https://i.ibb.co.com/hXJxVnk/photo-1697545806245-9795b6056141.jpg" width={800} height={300}></Image>

<div className="w-full h-full flex justify-center items-center absolute top-0 z-50 text-white">
<h2 className="text-[40px] font-light">{bannerData.title}</h2>
</div>

</div> : <div></div>

}








    </div>
  );
};

export default Header;