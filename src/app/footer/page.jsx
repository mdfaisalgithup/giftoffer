"use client"

import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {



  return (
    <div className='mt-[00px]'>
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
   

  <Link href="/"><Image className='rounded-full w-[50px] h-[50px] hover:border-2 border-green-400' alt="logo" src="https://i.ibb.co.com/9HSTVWfS/39219854-35e8-4bc4-a275-bef34da6ab88.jpg" width={80} height={90} />
  </Link>


    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>

</footer>
    </div>
  );
};

export default Footer;