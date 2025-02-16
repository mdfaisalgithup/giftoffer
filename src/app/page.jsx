'use client'

import GiftOffer from "./pages/giftoffer/page";



export default function Home() {

const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };


  return (
   <div>

<section>
<GiftOffer></GiftOffer>
</section>











   </div>
  );
}
