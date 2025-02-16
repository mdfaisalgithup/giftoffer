"use client"
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {

  const pathNames = [   { pathName: "Home", path: "/" },
    { pathName: "Gift Offer", path: "/pages/giftoffer" },

 
  ];


return (





  





<div className='w-full h-full bg-white border-b-[1px]'>
<div className='lg:mx-[300px] xl:mx-[300px] mx-[10px]'>

<div className='flex lg:flex-row flex-col justify-between items-center'>
  
<div className='w-[30%]'>
  <Link href="/"><Image alt="logo" src="https://i.ibb.co.com/9HSTVWfS/39219854-35e8-4bc4-a275-bef34da6ab88.jpg" width={100} height={200} />
</Link></div>


<div className=' w-full flex justify-center'>
<div className="flex items-center gap-x-7  text-black py-5 font-bold">

{pathNames?.map((d, index) => (
      <Link className="block hover:text-orange-600 py-2 pr-4 pl-3  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page" key={index} href={d.path}>
        {d.pathName}
      </Link>
    ))}


</div></div>
</div>

</div>


</div>
)




};

export default Navbar;