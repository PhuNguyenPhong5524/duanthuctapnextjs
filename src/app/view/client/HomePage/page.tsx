import Banner from "./banner/page";
import ProductPage from "./productPage/page";
import { Slider } from "./slider/slider";




export default function HomePage() {
    return (
        <div>
   
            <Banner />
            <Slider/>
            <ProductPage />
     
        </div>
    );
}