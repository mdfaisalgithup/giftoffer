"use client"

import Link from "next/link";


const GiftOffer = () => {
  const ProductData = [
    {
      title: "TrendnDaily - Get iPhone 16 Pro Today",
      name: "",
      price: 1199.99,
      description: "Discover the power of the iPhone 16 Pro with a 6.3-inch OLED display, A18 Pro chip, and up to 1TB of storage.",
      rating: [1, 2, 3],
      image: "https://i.ibb.co.com/jTD56fQ/Realme-C63-Leather-Blue.webp",
      country: "USA",
      link: "https://smrturl.co/a/s5b7d260a67/1549?s1="
    },
    {
      title: "iPhone 14 Pro Available Now",
      name: "",
      price: 399.99,
      description: "he iPhone 14 Pro delivers stunning visuals and advanced tech for daily use.",
      rating: [1, 2, 3, 4, 5],
      image: "https://i.ibb.co.com/xtr4PkS0/refurb-iphone-14-pro-max-silver-202404.jpg",
      country: "USA",
      link: "https://smrturl.co/a/s5b7d260a67/364?s1="
    },
   
    {
      title: "Get Your $100 Shein Gift Card Now!",
      name: "MacBook Pro M3",
      price: 1999.99,
      description: "Shop Shein with a free $100 gift card. Grab yours now!",
      rating: [1, 2, 3, 4, 5],
      image: "https://i.ibb.co.com/5WdM2t4f/51ii-TWE-5-ZL-SS400.jpg",
      country: "USA",
      link: "https://singingfiles.com/show.php?l=0&u=2337057&id=61174"
    },
  ];



  // const ProductDataM = [
  //   {
  //     title: "TrendnDaily - Get iPhone 16 Pro Today",
  //     name: "",
  //     price: 1199.99,
  //     description: "Discover the power of the iPhone 16 Pro with a 6.3-inch OLED display, A18 Pro chip, and up to 1TB of storage.",
  //     rating: [1, 2, 3],
  //     image: "https://i.ibb.co.com/jTD56fQ/Realme-C63-Leather-Blue.webp",
  //     country: "USA",
  //     link: "https://smrturl.co/a/s5b7d260a67/1549?s1="
  //   },
  //   {
  //     title: "iPhone 14 Pro Available Now",
  //     name: "",
  //     price: 399.99,
  //     description: "he iPhone 14 Pro delivers stunning visuals and advanced tech for daily use.",
  //     rating: [1, 2, 3, 4, 5],
  //     image: "https://i.ibb.co.com/xtr4PkS0/refurb-iphone-14-pro-max-silver-202404.jpg",
  //     country: "USA",
  //     link: "https://smrturl.co/a/s5b7d260a67/364?s1="
  //   },
   
  //   {
  //     title: "Get Your $100 Shein Gift Card Now!",
  //     name: "MacBook Pro M3",
  //     price: 1999.99,
  //     description: "Apple's most powerful MacBook with the M3 Pro chip and a 120Hz Liquid Retina XDR display.",
  //     rating: [1, 2, 3, 4, 5],
  //     image: "https://i.ibb.co.com/5WdM2t4f/51ii-TWE-5-ZL-SS400.jpg",
  //     country: "USA",
  //     link: "http"
  //   },
  // ];
  



  return (


    <>

<div className="text-center font-light text-[30px] mt-10">
  <h2>Our Gift Service</h2>
</div>

    <div className="flex  flex-wrap justify-center gap-6 p-4 mb-8">
     
      {ProductData.map((product, index) => (
      
        <div key={index} className="w-full
        h-[505px]  max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">

          <div>
            
          <div className="flex justify-center items-center">
            <div className="m-8">
            <Link href={product.link} target="_self">
            <img className=" w-[200px] rounded-md object-fill h-[210px]" src={product.image} alt={product.name} />
            </Link>
            </div>
          </div>
          
          <div className="px-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title.slice(0, 50)}</h5>

            <p className="text-gray-700 dark:text-gray-300 mt-2">{product.description.slice(0, 72)}</p>

            <div className="flex items-center mt-2 mb-2 justify-center">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {product.rating.map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
            <div>
            <span className="bg-green-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                {product.rating.length}.0
              </span>
            </div>
            </div>   
            
         

         
         </div>

            
         
            
  
          <div className=" text-center text-[15px]">
        <h2>Applies to <span className="text-green-500">{product.country}</span> only</h2>
         </div> 

</div>


<div className="pb-2"> 
  



<div className="w-[60%] font-lato text-[17px] h-max  m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             <div>
              <Link href={product.link} target="_self">
              Grab the offer now
              </Link></div>
            </div>
</div>
       
        </div>

  




      ))}
    </div>


{/* More Gift Service........ */}

{/* <div>
    <div className="text-center font-light text-[30px] mt-10">
  <h2>More Gift Service</h2>
</div>
    
  <div className="flex  flex-wrap justify-center gap-6 p-4 mb-8">
     
      {ProductDataM.map((product, index) => (
      
        <div key={index} className="w-full
        h-[530px]  max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">

          <div>
            
          <div className="flex justify-center items-center">
            <div className="m-8">
            <Link href={product.link} target="_self">
            <img className=" w-[200px] rounded-md object-fill h-[210px]" src={product.image} alt={product.name} />
            </Link>
            </div>
          </div>
          
          <div className="px-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title.slice(0, 50)}</h5>

            <p className="text-gray-700 dark:text-gray-300 mt-2">{product.description.slice(0, 72)}</p>

            <div className="flex items-center mt-2.5 mb-5 justify-center">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {product.rating.map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
            <div>
            <span className="bg-green-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                {product.rating.length}.0
              </span>
            </div>
            </div>   
            
         

         
         </div>

            
         
            
  
          <div className=" text-center text-[15px]">
        <h2>Applies to <span className="text-green-500">{product.country}</span> only</h2>
         </div> 

</div>


<div className="pb-2"> 
  



<div className="w-[80%] font-lato text-[17px] h-max  m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             <div>
              <Link href={product.link} target="_self">
              Grab the offer now
              </Link></div>
            </div>
</div>
       
        </div>






      ))}
    </div>
    
  </div> */}


   </>
  );
};





export default GiftOffer;
