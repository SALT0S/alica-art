import Image from "next/image";
import Polonia from "../../public/img/polonia.png";

export const AboutSection = () => {
  return (
    <section className="container mx-auto grid max-w-7xl items-center gap-10 px-4 text-center md:grid-cols-2 md:text-left">
      <div className="">
        <Image src={Polonia} alt="Pablo Picasso" layout="responsive" />
      </div>
      <div className="items-center text-center md:px-20">
        <h2 className="mb-10 text-5xl font-semibold text-[#C48F5A]">
          About us
        </h2>
        <p className="text-xl text-gray-500">
          Subscribe to our newsletter to receive news about upcoming tours Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </section>
  );
};
