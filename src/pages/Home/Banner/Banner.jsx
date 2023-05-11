import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There Are Many Variations Of Passages Of available, But The
              Majority Have Suffered Alteration In Some Form{" "}
            </p>
            <div>
              <button className="btn btn-warning border-none hover:bg-yellow-500 mr-4 ">
                Discover More
              </button>
              <button
                className="btn btn-outline text-white border-white hover:bg-white hover:text-black hover:border-white 
              "
              >
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There Are Many Variations Of Passages Of available, But The
              Majority Have Suffered Alteration In Some Form{" "}
            </p>
            <div>
              <button className="btn btn-warning border-none hover:bg-yellow-500 mr-4 ">
                Discover More
              </button>
              <button
                className="btn btn-outline text-white border-white hover:bg-white hover:text-black hover:border-white 
              "
              >
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There Are Many Variations Of Passages Of available, But The
              Majority Have Suffered Alteration In Some Form{" "}
            </p>
            <div>
              <button className="btn btn-warning border-none hover:bg-yellow-500 mr-4 ">
                Discover More
              </button>
              <button
                className="btn btn-outline text-white border-white hover:bg-white hover:text-black hover:border-white 
              "
              >
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There Are Many Variations Of Passages Of available, But The
              Majority Have Suffered Alteration In Some Form{" "}
            </p>
            <div>
              <button className="btn btn-warning border-none hover:bg-yellow-500 mr-4 ">
                Discover More
              </button>
              <button
                className="btn btn-outline text-white border-white hover:bg-white hover:text-black hover:border-white 
              "
              >
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There Are Many Variations Of Passages Of available, But The
              Majority Have Suffered Alteration In Some Form{" "}
            </p>
            <div>
              <button className="btn btn-warning border-none hover:bg-yellow-500 mr-4 ">
                Discover More
              </button>
              <button
                className="btn btn-outline text-white border-white hover:bg-white hover:text-black hover:border-white 
              "
              >
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There Are Many Variations Of Passages Of available, But The
              Majority Have Suffered Alteration In Some Form{" "}
            </p>
            <div>
              <button className="btn btn-warning border-none hover:bg-yellow-500 mr-4 ">
                Discover More
              </button>
              <button
                className="btn btn-outline text-white border-white hover:bg-white hover:text-black hover:border-white 
              "
              >
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
