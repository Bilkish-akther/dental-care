import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Home/Banner.css';





const Banner = () => {
    return (
        <Carousel>

            <div>
                <img className='imageGra w-full h-full' src="https://i.ibb.co/bjh9ypT/img1.jpg" />
            </div>
            <div>
                <img className=' imageGra  w-full h-full' src="https://i.ibb.co/7yGFS6r/img2.jpg" />
            </div>
            <div>
                <img className='imageGra w-full h-full' src="https://i.ibb.co/pRPHhJ6/img3.jpg" />
            </div>
            <div>
                <img className='imageGra w-full h-full' src="https://i.ibb.co/vXHK8yB/img4.jpg" />
            </div>
            <div>
                <img className='imageGra w-full h-full' src="https://i.ibb.co/KNLmJGK/img5.jpg" />
            </div>
            <div>
                <img className='imageGra w-full h-full' src="https://i.ibb.co/kgWy2VZ/img6.jpg" />
            </div>
            <div>
                <img className='w-full h-full' src="https://i.ibb.co/2yKpZ7Z/img7.jpg" />
            </div>
            <div>
                <img className='w-full h-full' src="https://i.ibb.co/fYwPtDc/img8.jpg" />
            </div>



        </Carousel>
    );
};

export default Banner;