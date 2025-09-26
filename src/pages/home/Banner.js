import banner from "../../image/others/image.png";
import pause from "../../image/others/pause.png";
export default function Banner() {
  return (
    <div className="bg-gradient-to-b from-white to-white dark:from-darkColorMode dark:to-darkColorMode ">
      <div className="container mx-auto pt-80 relative">
        <img src={banner} alt={banner} />
        <div className="absolute top-[50%] left-[40%]  md:left-[45%] z-10">
          <img src={pause} alt="" />
        </div>
      </div>
    </div>
  );
}
