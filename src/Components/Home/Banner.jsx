import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";





const Banner = () => {
    return (
        <Carousel>
            <div>
                <img className='w-full h-full' src="https://i.ibb.co/t4qZ7C0/images-5.jpg" />
            </div>
            <div>
                <img className='w-full h-full' src="https://i.ibb.co/VSKrkSg/images-4.jpg" />
            </div>
            <div>
                <img className='w-full h-full' src="https://i.ibb.co/y45HK3m/images-3.jpg" />
            </div>
            <div>
                <img className='w-full h-full' src="https://i.ibb.co/c6rzH6s/images-1.jpg" />
            </div>
           
           
        </Carousel>
    );
};

export default Banner;