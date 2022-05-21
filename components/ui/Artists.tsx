import Image from "next/image";
import PabloPicasso from "../../public/img/hBz1KIE.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {
  artist: any[];
}
export const ArtistsSection: React.FC<Props> = ({ artist }) => {
  return (
    <section className="container mx-auto my-20 max-w-7xl items-center gap-7 px-4 text-center sm:px-6   md:text-left lg:px-8">
      <Swiper slidesPerView={1} spaceBetween={50}>
        {artist.map(({ id, title, description }, index) => (
          <SwiperSlide key={id}>
            <figure className="place-self-center rounded-xl px-8 md:flex md:flex-row-reverse md:gap-10 md:p-0">
              <div className="mx-auto w-32 md:w-1/4">
                <Image
                  className="rounded-full md:rounded-xl"
                  src={PabloPicasso}
                  alt="Pablo Picasso"
                  width={600}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="space-y-4 place-self-center pt-6 text-center md:w-3/4 md:text-left">
                <h3 className="mb-4 text-3xl font-semibold text-[#C48F5A]">
                  {title}
                </h3>
                {description !== null ? (
                  <div
                    className="font-medium text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html:
                        description.length < 580
                          ? `${description}`
                          : `${description.substring(0, 581)}...`,
                    }}
                  />
                ) : (
                  <p className="font-medium text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                )}
              </div>
            </figure>{" "}
          </SwiperSlide>
        ))}{" "}
      </Swiper>
    </section>
  );
};
