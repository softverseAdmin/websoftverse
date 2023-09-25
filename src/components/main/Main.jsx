import React from 'react';
import video from "../../assets/images/web-head.mp4";
import { styles } from "../styles";
import InfiniteSlider from "./Slider";
import about from "../../assets/images/aboutpc.jpeg";
import bc from "../../assets/images/bc.jpeg";
import logo from "../../assets/images/logo.png";
import { data, file, holder, QA } from "./data.js";
import RevealOnScroll from "./Fade";

export default function Main() {
  return (
    <div className="bg-[#f7f7f7] min-w-screen">
      <div className="flex justify-center items-center w-100">
        <div className=" gap-5 flex justify-start flex-col items-center">
          <div className="w-100">
            <RevealOnScroll>
            </RevealOnScroll>
          </div>
        </div>
        <div className={`relative w-full h-screen bg-center bg-no-repeat bg-fixed bg-cover `} style={{ backgroundImage: `url(${video})` }}>
          <div className='object-fill h-full w-full bg-black opacity-50 text-white z-10 text-9xl text-center'>
            {/* <svg className='transition delay-150 duration-300 ease-in-out absolute top-0 p-0 text-center opacity-9' width="500.25" height="121.384" xmlns="http://www.w3.org/2000/svg" viewBox="-0.125 14.308 500.25 121.384" style={{background:'#444'}} preserveAspectRatio="xMidYMid"><defs><filter id="a" x="-100%" y="-100%" width="300%" height="300%"><feMorphology operator="dilate" radius="2" in="SourceGraphic" result="border"/><feFlood flood-color="#fff" result="black"/><feMorphology operator="dilate" radius="2" in="SourceGraphic" result="erode"/><feGaussianBlur in="erode" stdDeviation="4" result="blur"/><feOffset in="blur" dx="2" dy="2" result="offset"/><feComposite operator="atop" in="offset" in2="black" result="merge"/><feComposite operator="in" in="merge" in2="SourceGraphic" result="inner-shadow"/><feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="shadow1"/><feOffset in="shadow1" dy="5" result="shadow"/><feSpecularLighting in="SourceGraphic" result="specular" surfaceScale="1.5" specularConstant="100" specularExponent="10" lighting-color="#fff"><fePointLight x="250" y="-300" z="-400"/></feSpecularLighting><feGaussianBlur in="specular" stdDeviation="1" result="specular2"/><feComposite operator="in" in="specular2" in2="SourceAlpha" result="specular3"/><feMerge result="merge"><feMergeNode in="border"/><feMergeNode in="inner-shadow"/><feMergeNode in="specular3"/></feMerge><feComponentTransfer in="merge" result="final"><feFuncA type="linear" slope=".9"/></feComponentTransfer><feMerge><feMergeNode in="shadow"/><feMergeNode in="final"/></feMerge></filter></defs><g filter="url(#a)"><path d="M98.575 67.903q.96-1.92.96-3.71t-.19-2.78q-.2-1-.64-1.76-.96-1.67-2.88-1.67-2.37 0-4.29 1.73-2.05 1.79-2.05 4.61 0 1.79 1.25 3.17 1.25 1.37 3.17 2.65 1.92 1.28 4.09 2.56 2.18 1.28 4.1 2.82 4.41 3.52 4.41 8.25 0 3.2-1.69 5.92-1.7 2.72-4.51 4.71-6.15 4.35-14.28 4.35-6.59 0-9.98-2.14-3.39-2.15-3.39-5.41 0-5.83 4.54-7.3 1.28-.45 3.23-.45 1.96 0 4.2.84-1.03 2.62-1.03 4.99 0 5.12 3.65 5.12 2.37 0 4.32-1.73 1.95-1.73 1.95-3.68 0-1.95-1.25-3.36-1.24-1.41-3.1-2.53-1.86-1.12-4-2.21-2.14-1.08-4-2.62-4.35-3.52-4.35-9.15 0-3.65 1.79-6.5t4.67-4.77q5.76-3.9 12.83-3.9 7.08 0 10.5 2.11t3.42 5.7q0 3.13-2.43 5.12-2.11 1.66-4.67 1.66t-4.35-.64Zm13.76 13.95q0-12.09 6.27-19.71 6.66-8.25 18.24-8.25 8.38 0 12.61 4.06 4.22 4.06 4.22 12.64 0 13.06-6.65 20.67-6.6 7.49-17.67 7.49-8.64 0-12.83-4.32-4.19-4.32-4.19-12.58Zm16.83-13.24q-2.88 11.52-2.88 20.6 0 2.18.74 3.59.73 1.41 2.68 1.41 1.96 0 3.17-.93 1.22-.93 2.18-3.04 1.53-3.46 2.97-10.79 1.44-7.32 1.57-10.36.13-3.04.13-5.35 0-2.3-.7-3.77-.71-1.48-2.6-1.48-1.88 0-3.16 1.16-2.37 2.17-4.1 8.96Zm56.77-5.06q-5.19 0-8.96-1.73l-2.05 10.37h12.35q0 3.39-1.69 5.54-1.7 2.14-4.77 2.14-3.33 0-6.4-1.22-.64-.25-.71-.32l-3.64 19.14h-13.96l8.13-42.24h28.55q0 3.9-1.83 6.11-1.82 2.21-5.02 2.21Zm10.37 2.75q-2.18-1.66-2.18-5.21 0-3.56 2.34-5.41 2.33-1.86 6.36-1.86 2.56 0 8.64.9l4.36.64q2.17.25 4.44.25 2.28 0 3.81-.96 2.31 2.05 2.31 5 0 2.94-2.63 5.05-2.69 2.24-6.14 2.24-1.67 0-4.35-.45-3.14 9.86-3.14 16.71 0 6.85 3.46 10.43-1.6 2.88-3.97 4t-5.92 1.12q-3.55 0-5.76-1.95t-2.21-5.99q0-4.67 2.56-12.35 2.56-7.61 6.4-13.44-1.86-.19-3.78-.19-3.96 0-4.6 1.47Zm42.81-8.51q1.86-3.84 7.01-3.84 5.15 0 7.55 2.98 2.4 2.97 2.4 9.82v22.85l15.55-34.31h7.62l-19.9 42.18h-14.98l-1.92-30.72q-.19-3.39-1.12-5.7-.93-2.3-2.21-3.26Zm64.9 29.82q1.21 1.54 1.21 4.04 0 3.45-2.56 5.28-2.56 1.82-6.59 1.82-2.3 0-5.82-.51-6.91-1.09-9.03-1.09-2.11 0-2.94.1-.83.09-2.18.22l7.88-42.24h27.58q0 3.9-1.89 5.95-1.89 2.05-5.6 2.05t-7.49-1.73l-1.98 11.2h11.39q0 3.39-1.66 5.28-1.67 1.89-4.45 1.89-2.78 0-4.51-.64t-1.92-.83l-2.31 12.09q1.54.2 4.42.2 4.93 0 8.45-3.08Zm20.22 9.86h-13.69l7.8-42.05q6.34-.7 15.59-.7t13.53 2.69q4.29 2.68 4.29 8.09t-2.78 8.8q-2.79 3.39-7.59 4.48 1.09 5.31 3.59 9.6 2.3 4.03 4.99 5.31-.96 2.69-2.91 3.88-1.95 1.18-4.74 1.18-2.78 0-4.96-1.63-2.17-1.63-3.9-4.64-3.65-6.53-4.03-16.83h.44q4.74-.13 7.11-2.6 2.37-2.46 2.37-7.64 0-6.47-5.44-6.72h-1.41q-.58 0-.9.06l-7.36 38.72Zm55.43-29.57q.96-1.92.96-3.71t-.2-2.78q-.19-1-.64-1.76-.96-1.67-2.88-1.67-2.36 0-4.28 1.73-2.05 1.79-2.05 4.61 0 1.79 1.25 3.17 1.24 1.37 3.16 2.65 1.92 1.28 4.1 2.56 2.18 1.28 4.1 2.82 4.41 3.52 4.41 8.25 0 3.2-1.69 5.92-1.7 2.72-4.52 4.71-6.14 4.35-14.27 4.35-6.59 0-9.98-2.14-3.39-2.15-3.39-5.41 0-5.83 4.54-7.3 1.28-.45 3.23-.45t4.19.84q-1.02 2.62-1.02 4.99 0 5.12 3.65 5.12 2.37 0 4.32-1.73 1.95-1.73 1.95-3.68 0-1.95-1.25-3.36t-3.1-2.53q-1.86-1.12-4-2.21-2.15-1.08-4-2.62-4.35-3.52-4.35-9.15 0-3.65 1.79-6.5t4.67-4.77q5.76-3.9 12.83-3.9t10.5 2.11q3.42 2.11 3.42 5.7 0 3.13-2.43 5.12-2.11 1.66-4.67 1.66t-4.35-.64Zm40.12 19.71q1.22 1.54 1.22 4.04 0 3.45-2.56 5.28-2.56 1.82-6.59 1.82-2.31 0-5.83-.51-6.91-1.09-9.02-1.09-2.11 0-2.94.1-.84.09-2.18.22l7.87-42.24h27.59q0 3.9-1.89 5.95-1.89 2.05-5.6 2.05t-7.49-1.73l-1.98 11.2h11.39q0 3.39-1.67 5.28-1.66 1.89-4.44 1.89-2.79 0-4.52-.64-1.72-.64-1.92-.83l-2.3 12.09q1.54.2 4.42.2 4.92 0 8.44-3.08Z" stroke="#88e0eb" stroke-width="1.5"/></g></svg> */}
            <img src={logo} className='absolute top-0 w-1/4' alt="" srcset="" />

          </div>
          <div class="scroll">
          </div>
        </div>
      </div>
      <div className="flex absolute w-100 p-2">
        hello
      </div>
      <div className="flex relative w-100">
        <div className={`w-10/12 pt-[40px]`}>
          <RevealOnScroll>
            <div className={`${styles.paddingY} realtive group w-[310px] flex justify-end items-center gap-7`}>
              <hr className="w-[100px] absolute left-0 group-hover:w-[110px] transition-all  delay-0 border-black" />
              <h1 className={`${styles.sectionSubText} xs:hidden hover:opacity-50 cursor-pointer`}>
                年中行事について.
              </h1>
              <h1 className={`${styles.sectionSubText} pt-6 absolute bottom-[-40px] right-[15%] sm:hidden`}>
                年中行事について.
              </h1>
            </div>
          </RevealOnScroll>
          <div className={`pt-2`}>
            <InfiniteSlider />
          </div>
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
                          {sub}
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
              className={`absolute bottom-[10%] flex flex-col  ${styles.padding}`}
            >
              <div className={`${styles.padding} flex items-center gap-5`}>
                <h1 className={`text-white `}>行覚寺について</h1>
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
      <div className="flex justify-center items-center w-[100vw] my-5">
          <RevealOnScroll>
            <div className="flex group realtive items-center gap-5">
              <hr className="w-[100px] transition-all delay-0 group-hover:w-[110px] border border-[#000]" />
              <h2 className="font-2xl">行覚寺について</h2>
              <hr className="w-[100px] transition-all delay-0 group-hover:w-[110px] border border-[#000]" />
            </div>
          </RevealOnScroll>
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
                className="
                mx-auto rounded overflow-hidden shadow-lg cursor-pointer 
                transition-colors duration-1000 ease-in delay-0 hover:shadow-2xl
                col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6"
              >
                <img
                  className="w-full"
                  src={image}
                  alt="Sunset in the mountains"
                />
                <div className={`${styles.padding}`}>
                  <div className="font-bold text-3xl mb-4">{title}</div>
                  <p className="text-gray-700 my-4 text-2xl leading-10">{text}</p>
                </div>
                <div
                  className={`flex items-center justify-end gap-5 py-3 my-3`}
                >
                  <hr className="border-black w-[50px]" />
                  <span className="px-3 py-1 text-xl font-semibold text-gray-700 mr-2">
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
          <h1 className="my-5">よくあるご質問</h1>
          <hr className="border my-5 sm:w-[60vw]" />
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

                  <hr className="border sm:w-[60vw] my-3" />
                </RevealOnScroll>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
