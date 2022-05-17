import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Genadi from "../../public/img/genadi 1.png";

export const CategorySection = () => {
  return (
    <section className="container mx-auto my-20 max-w-7xl items-center gap-10 px-4 text-center sm:px-6 md:text-left lg:grid lg:grid-cols-2 lg:px-8">
      <div className="place-self-end">
        <h2 className="text-5xl text-[#C48F5A] md:text-6xl">
          Find your category
        </h2>
        <p className="my-7 text-xl text-gray-500 md:text-2xl">
          Browse interesting categories in our gallery and find your style.
        </p>
        <p className="font-bold text-gray-900 hover:underline">see more</p>
      </div>

      <div>
        <Swiper
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            "@0.75": {
              slidesPerView: 1,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.25": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.50": {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="relative">
              <div className="h-auto w-auto">
                <Image src={Genadi} alt="Galery" layout="responsive" />
              </div>
              <div className="absolute bottom-3 px-4 text-white">
                <p className="text-lg">2018</p>
                <h3 className="my-3 text-4xl font-medium">
                  Architecture and Design
                </h3>
                <p className="text-lg">
                  <span className="font-bold">
                    Luiza Prado de Oliveira Martins:
                  </span>{" "}
                  Brazilian, born 1985
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <div className="h-auto w-auto">
                <Image src={Genadi} alt="Galery" layout="responsive" />
              </div>
              <div className="absolute bottom-3 px-4 text-white">
                <p className="text-lg">2018</p>
                <h3 className="my-3 text-4xl font-medium">
                  Architecture and Design
                </h3>
                <p className="text-lg">
                  <span className="font-bold">
                    Luiza Prado de Oliveira Martins:
                  </span>{" "}
                  Brazilian, born 1985
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <div className="h-auto w-auto">
                <Image src={Genadi} alt="Galery" layout="responsive" />
              </div>
              <div className="absolute bottom-3 px-4 text-white">
                <p className="text-lg">2018</p>
                <h3 className="my-3 text-4xl font-medium">
                  Architecture and Design
                </h3>
                <p className="text-lg">
                  <span className="font-bold">
                    Luiza Prado de Oliveira Martins:
                  </span>{" "}
                  Brazilian, born 1985
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
