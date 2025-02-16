"use client"

import Link from "next/link";


const GiftOffer = () => {
  const ProductData = [
    {
      title: "Premium Android Phone",
      name: "Samsung Galaxy S24 Ultra",
      price: 1199.99,
      description: "A premium Android smartphone with a 200MP camera and Snapdragon 8 Gen 3.",
      rating: [1, 2, 3],
      image: "https://i.ibb.co.com/jTD56fQ/Realme-C63-Leather-Blue.webp",
      country: "USA",
      link: "https://motion.dev/docs/react-quick-start"
    },
    {
      title: "Noise-Canceling Headphones",
      name: "Sony WH-1000XM5",
      price: 399.99,
      description: "Industry-leading noise-canceling headphones with up to 30 hours of battery life.",
      rating: [1, 2, 3, 4, 5],
      image: "https://i.ibb.co.com/jTD56fQ/Realme-C63-Leather-Blue.webp",
      country: "USA",
      link: "/google.com"
    },
    {
      title: "High-Performance Laptop",
      name: "MacBook Pro M3",
      price: 1999.99,
      description: "Apple's most powerful MacBook with the M3 Pro chip and a 120Hz Liquid Retina XDR display.",
      rating: [1, 2, 3, 4, 5],
      image: "https://i.ibb.co.com/F92gbx4/Apple-i-Phone-16-Pro-hero-240909-inline-jpg-large.jpg",
      country: "USA",
      link: "http"
    },
  ];



  return (


    <>

<div className="text-center p-4 font-light text-[30px] mt-10">
  <h2>Our Service</h2>
</div>

    <div className="flex  flex-wrap justify-center gap-6 p-4">
     
      {ProductData.map((product, index) => (
      
        <div key={index} className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            
          <div className="flex justify-center items-center">
            <img className="p-8 rounded-t-lg bg-cover h-[300px]" src={product.image} alt={product.name} />
          </div>
          
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
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

            <div className=" w-[50%] font-lato text-[17px]  m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             <div>
              <Link href={product.link} target="_self">
                Claim Now
              </Link></div>
            </div>




          </div>
        </div>
      ))}
    </div>



    

   </>
  );
};

export default GiftOffer;
