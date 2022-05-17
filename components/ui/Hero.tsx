import styles from "../../styles/Home.module.css";
export const HeroSection = () => {
  return (
    <header className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute -z-10 h-screen w-full object-cover"
      >
        <source src="/img/Mt.FujiJapan-sunset.mp4" type="video/mp4" />
      </video>
      <div className="grid h-full w-full items-center justify-center bg-neutral-900 bg-opacity-60">
        <div className="container mx-auto grid max-w-7xl items-center gap-7 px-4 text-center sm:px-6 md:grid-cols-2 md:text-left lg:px-8">
          <div>
            <h1 className="mb-6 text-4xl font-semibold text-white md:text-6xl">
              Adventure & fantasy a new life on canvas
            </h1>
            <p className="text-xl text-white md:text-2xl">
              Enjoy works of the art institute of chicago through your screen,
              whenever and wherever you want.
            </p>
          </div>
          <video autoPlay muted loop className="rounded-2xl">
            <source
              src="/img/ItsukishimaGateJapan-night.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={`${styles.scrollDown} hidden md:block`} />
      </div>
    </header>
  );
};
