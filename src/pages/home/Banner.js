import banner from "../../image/others/image.png";
import pause from "../../image/others/pause.png";
export default function Banner() {
  return (
    <div className="bg-gradient-to-b from-white to-white dark:from-darkColorMode dark:to-darkColorMode pt-80 ">
      <div className="container mx-auto relative">
        <img src={banner} alt="banner" className="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={pause} alt="pause" className="xl:w-[100%] xl:h-[100%]   w-[80%] h-[80%]   " />
        </div>
      </div>
    </div>
  );
}
