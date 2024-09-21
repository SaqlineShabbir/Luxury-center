import MaxWidthWrapper from "@/app/lib/MaxWidthWrapper";
import Image from "next/image";
import Pinkbtn from "../shared/Pinkbtn";
import beautyQueen from "/public/assets/images/banner-queen.png";

const Banner = () => {
  return (
    <main className="w-full  lg:h-[75vh]">
      <MaxWidthWrapper>
        <div className="md:flex px-2 justify-around my-4 md:my-32 items-center bg-slate-100 space-y-2">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold md:leading-tight">
              We Build <br />
              Your <span className="text-green-300">DREAM</span>
            </h1>

            <p className="text-medium text-slate-500">
              Transform your space with our interior services. <br /> Custom
              designs, professional touch—because every home deserves to shine.{" "}
              <br /> Enhance your comfort and embrace the elegance. <br />{" "}
              Interiors reimagined, just for you.
            </p>
            <br />

            <Pinkbtn href="/service" label="Explore Services" />
          </div>

          <div className="md:w-[400px]">
            <Image src={beautyQueen} alt="Banner image" className="rounded" />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Banner;
