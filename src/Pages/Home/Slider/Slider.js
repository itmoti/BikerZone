import React from 'react';

const Slider = () => {
    return (
        <div className='mt-9'>
            <div className="carousel w-3/4 mx-auto h-[80vh]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/pulsar-150/Gallery/Images/POPUP-Images/3.ashx" className="w-full" alt='Loading' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://www.motorcyclebd.com/images/bikes/Yamaha-YZF-R15-V3-Dark-Knight.jpg" className="w-full" alt='Loading' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://static.autox.com/uploads/2016/12/m_honda-cb-hornet-160r_4.jpg" className="w-full" alt='Loading' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://static.autox.com/uploads/2016/12/m_honda-cb-hornet-160r_4.jpg" className="w-full" alt='Loading' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;