import { Image } from "@chakra-ui/react";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>

                <Image
                  src="/images/about/2150688433.png"
                  width={'90%'}
                />

              </div>

            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="w-full green-pink-gradient p-px rounded-[20px] shadow-card mb-5">
                <div className="bg-tertiary rounded-[20px] py-5 px-12  flex justify-evenly items-center flex-col" style={{ backgroundColor: 'black' }}>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Pioneering Innovation
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    At AiiQ, innovation drives us. We explore new AI frontiers, delivering forward-thinking solutions to keep our clients ahead in technology.
                  </p>
                </div>
              </div>
              <div className="w-full green-pink-gradient p-px rounded-[20px] shadow-card mb-5">
                <div className="bg-tertiary rounded-[20px] py-5 px-12  flex justify-evenly items-center flex-col" style={{ backgroundColor: 'black' }}>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Built on Trust
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Trust is paramount at AiiQ. We build lasting client relationships through mutual respect, reliability, and transparency.
                  </p>
                </div></div>
              <div className="w-full green-pink-gradient p-px rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] py-5 px-12  flex justify-evenly items-center flex-col" style={{ backgroundColor: 'black' }}>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Commitment to Excellence
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Excellence at AiiQ is a standard. Our expert team and superior AI solutions ensure our clients receive unparalleled service.
                  </p>
                </div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
