import React from "react";
import img from "../../assets/img/home.jpeg";
import { styles } from "../styles";
import InfiniteSlider from "./Slider";
import about from "../../assets/img/aboutpc.jpeg";
import bc from "../../assets/img/bc.jpeg";
import { data, file, holder, QA } from "./data.js";
import RevealOnScroll from "./Fade";

export default function Main() {
  return (
    <div className="bg-[#f7f7f7] min-w-screen">
      <div className="flex justify-center items-center w-100">
        <div className="w-3/12 gap-5 flex justify-start flex-col items-center">
          <div className="w-100">
            <RevealOnScroll>
              <h2 className={`${styles.sectionHeadText} p-2 `}>Title</h2>
              <p className={`${styles.sectionSubText} p-2`}>We Are The Best</p>
            </RevealOnScroll>
          </div>
        </div>
        <div className="w-9/12">
          <img
            src={img}
            className="w-[100%] h-[auto]"
            alt="background defining business logic"
          />
        </div>
      </div>
      <div className="flex relative w-100">
        <div className={`w-10/12 pt-[40px]`}>
          <RevealOnScroll>
            <div
              className={`${styles.paddingY} realtive group w-[310px] flex justify-end items-center gap-7`}
            >
              <hr className="w-[100px] absolute left-0 group-hover:w-[110px] transition-all  delay-0 border-black" />
              <h1
                className={`${styles.sectionSubText} xs:hidden hover:opacity-50 cursor-pointer`}
              >
                年中行事について.
              </h1>
              <h1
                className={`${styles.sectionSubText} pt-6 absolute bottom-[-40px] right-[15%] sm:hidden`}
              >
                年中行事について.
              </h1>
            </div>
          </RevealOnScroll>
          <div className={`pt-2`}>
            <InfiniteSlider />
          </div>
        </div>

        <div
          className="flex justify-center gap-2 flex-col items-center drop-shadow-lg 
          w-[270px] sm:min-w-[450px] absolute sm:top-[-230px] sm:h-[500px] h-[230px] top-[-20px] 
          sm:right-0 xs:left-0"
        >
          <RevealOnScroll>
            <div className="flex flex-col gap-3">
              <h2 className={`text-4xl my-3 px-3  animate`}>
                永遠は一刹那に宿り
              </h2>
              <p className={`text-base px-3 `}>
                時代は進み、現代はインターネットの普及により
              </p>
              <p className={`text-base px-3 `}>
                遠隔地に居ながら、住職と共にご法事や
              </p>
              <p className={`text-base px-3 `}>
                年中行事を勤めることが可能となりました。
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
      <div className={`${styles.padding} w-full my-4`}>
        <div className="flex mx-auto md:w-8/12 justify-center flex-col items-center">
          <div className={`${styles.paddingY}`}>
           <h1 className="text-2xl"> お知らせ </h1>
          </div>
          <div className="flex justify-start flex-col">
          {holder.map((hold, index) => {
            const { title, sub, desc } = hold;
            return (
              <>
                <RevealOnScroll>
                  <div
                    key={index}
                    className="grid grid-cols-12 my-3 transition-all"
                  >
                    <div className="col-span-6 sm:col-span-2 md:col-span-2 my-1 lg:col-span-2 xl:col-span-2">
                      <h1 className="inline">{title}</h1>
                    </div>
                    <div className="col-span-6 sm:col-span-4 md:col-span-4 my-1 lg:col-span-3 xl:col-span-3">
                      <p className="inline hover:opacity-50 cursor-pointer bg-black text-white">
                        {sub}{" "}
                      </p>
                    </div>
                    <div className="col-span-12 sm:col-span-8 md:col-span-6 my-1 lg:col-span-7 xl:col-span-7">
                      <p className=" inline hover:opacity-50 cursor-pointer">
                        {desc}
                      </p>
                    </div>
                  </div>
                  <hr className={`border my-5 rounded-full  w-full`} />
                </RevealOnScroll>
              </>
            );
          })}
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-end items-center w-[90vw] my-5">
          <RevealOnScroll>
            <div className="flex group realtive items-center gap-5">
              <hr className="w-[100px] transition-all delay-0 group-hover:w-[110px] border border-[#000]" />
              <h2 className="font-2xl">行覚寺について</h2>
            </div>
          </RevealOnScroll>
        </div>
        <div
          className="w-[90vw] h-[80vh] bg-no-repeat bg-center relative"
          style={{
            background: `url(${about}) no-repeat center`,
          }}
        >
          {" "}
          <RevealOnScroll>
            <div
              className={`absolute bottom-[10%] flex flex-col bg-transparent ${styles.padding}`}
            >
              <div
                className={`${styles.padding} flex items-center bg-transparent gap-5`}
              >
                <h1 className={`text-white bg-transparent`}>行覚寺について</h1>
                <hr className="w-[60px] border border-[#fff]" />
              </div>
              <p
                className={`${styles.paddingX} text-white bg-transparent leading-8`}
              >
                長屋の一角に小さな庵を結ぶお寺、それが妙照山 行覚寺です。
                <br />
                仏教によって、世の人々の苦悩の解決に役立つ人が、
                <br />
                一人、十人、百人と林のように生い立つことを祈り、
                <br />
                本堂を唱導林と命名しました。
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
      <div className={`${styles.paddingY}`}>
        <div className="grid w-[100vw] sm:w-[100vw] md:w-[90vw] mx-auto px-4 grid-cols-12 gap-5  my-3">
          {file.map((f, index) => {
            const { title, textOne, footer, icon } = f;
            return (
              <div
                key={index}
                className="relative transition-all delay-0 h-auto col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4"
              >
                <RevealOnScroll>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="my-3">{title}</h1>
                    <div className="rounded-full flex justify-center items-center  w-[200px] h-[200px] shadow-xl my-5">
                      {icon}
                    </div>
                    <div className={`${styles.paddingY} bg-transparent`}>
                      <p className=" p-3 sm:px-6 text-start leading-8">
                        {textOne}
                      </p>
                      <div className="flex absolute bg-transparent bottom-0 right-10  gap-5 items-center justify-end">
                        <hr className="w-[50px] border-black" />
                        <h2 className="text-end p-3">{footer}</h2>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.paddingY}`}
        style={{
          background: `url(${bc}) no-repeat center`,
        }}
      >
        <div
          className={`${styles.paddingY} grid w-[100vw] md:w-[80vw] lg:w-[70vw] bg-transparent mx-auto px-4 grid-cols-12 gap-8 my-3`}
        >
          {data.map((d, index) => {
            console.log(d);
            const { title, text, footer, image } = d;
            return (
              <div
                key={index}
                className="mx-auto rounded overflow-hidden shadow-lg cursor-pointer 
                transition-colors duration-1000 ease-in delay-0 hover:shadow-2xl
                col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6"
              >
                <img
                  className="w-full"
                  src={image}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p class="text-gray-700 text-base">{text}</p>
                </div>
                <div className="flex items-center justify-end gap-5 py-3">
                  <hr className="border-black w-[50px]" />
                  <span className="px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {footer}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.padding}`}>
        <div className="flex flex-col justify-center items-center">
          <hr className="border border-black" />
          {QA.map((qa, index) => {
            const { Q, A } = qa;
            return (
              <div
                className={`my-5 sm:w-[60vw] flex flex-col items-start gap-5`}
                key={index}
              >
                <RevealOnScroll>
                  <div className="flex items-center justify-start gap-5">
                    <span className="text-2xl">Q</span>{" "}
                    <h2 className="">{Q}</h2>
                  </div>
                  <div className="flex items-start gap-5">
                    <span className="text-2xl">A</span>{" "}
                    <p className="leading-8">{A}</p>
                  </div>

                  <hr className="border w-full my-3" />
                </RevealOnScroll>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
