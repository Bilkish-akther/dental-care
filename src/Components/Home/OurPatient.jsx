import awlad from '../../assets/Awlad.png'
import Farhana from '../../assets/Farhana.png'
import Qute from '../../assets/Quote_1_.png'

const OurPatient = () => {
    return (
        <div className="mt-10 ">
            <div className="text-center">
                <h2 className="text-center text-4xl font-semibold">What Our Patients Says</h2>
                <p className="mt-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 text-center  mt-10">
                <div className="card w-auto bg-base-100 shadow-xl border-spacing-1 border border-[#F7A582]">
                    <div className="card-body">
                        <div className='flex gap-40'>
                            <div className='flex gap-3'>
                                <img src={awlad} alt="" />
                                <div className=''>
                                    <h2 className='text-lg font-bold'>Awlad Hossain</h2>
                                    <p>Product Designer</p>
                                </div>
                            </div>
                            <div>
                                <img src={Qute} alt="" />
                            </div>
                        </div>
                        <p>Lorem Ipsum has been the industry’s standard dummy text  <br /> ever since the 1500s, when an unknow printer tool a galley of <br /> type and scrambled it to make type specimen book has <br /> survived not only five centurines.</p>

                    </div>

                </div>
                <div className="card w-auto bg-base-100 shadow-xl border-spacing-1 border border-[#F7A582]">
                    <div className="card-body">
                        <div className='flex gap-40'>
                            <div className='flex gap-3'>
                                <img src={Farhana} alt="" />
                                <div className='gap-3'>
                                    <h2 className='text-lg font-bold'>Farhana Hossain</h2>
                                    <p>Brand Designer</p>
                                </div>
                            </div>
                            <div>
                                <img src={Qute} alt="" />
                            </div>
                        </div>
                        <p>Lorem Ipsum has been the industrys standard dummy text <br /> ever since the 1500s, when an unknow printer tool a galley of <br /> type and scrambled it to make type specimen book has <br /> survived not only five centurines.</p>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default OurPatient;