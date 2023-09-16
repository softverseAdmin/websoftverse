
import home from "../../assets/img/home.jpeg";

const LOGOS = [
    <img src={home} alt="content-description" width={"450px"} height={"450px"} className="text-slate-800" />,
    <img src={home} alt="content-description" width={"450px"} height={"450px"} className="text-slate-800" />,
    <img src={home} alt="content-description" width={"450px"} height={"450px"} className="text-slate-800" />,
    <img src={home} alt="content-description" width={"450px"} height={"450px"} className="text-slate-800" />,
    <img src={home} alt="content-description" width={"450px"} height={"450px"} className="text-slate-800" />,
    <img src={home} alt="content-description" width={"450px"} height={"450px"} className="text-slate-800" />,
    <img src={home} alt="content-description" width={"450px"} height={"450px"} className="text-slate-800" />,
    <img src={home} alt="content-description" width={"450px"} height={"450px"} className="text-slate-800" />,
];

export default function InfiniteSlider(){
  return (
    <div className="relative m-auto w-[100%] overflow-hidden bg-white">
      <div className="animate-infinite-slider flex w-[calc(450px*8)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[450px] p-2 items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
