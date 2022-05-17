import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

interface Props {
  arts: any[];
}

export const ArtSection: React.FC<Props> = ({ arts }) => {
  return (
    <section className="container mx-auto my-20 max-w-7xl items-center px-4 text-center sm:px-6 md:text-left lg:px-8">
      <h2 className="text-4xl font-bold">Little pieces of art</h2>

      <ul className="mx-auto w-auto columns-1 gap-3 space-y-3 py-10 sm:columns-2 md:columns-3 lg:columns-3">
        {arts.map(({ id, title, img, thumbnail }) => (
          <li key={id} className="break-inside-avoid rounded-l p-4">
            <Image
              src={img}
              alt={title}
              layout="responsive"
              width={thumbnail.width}
              height={thumbnail.height}
              objectFit="cover"
              blurDataURL={img}
              placeholder="blur"
              className="rounded-lg"
            />
          </li>
        ))}
      </ul>

      <p className="flex cursor-pointer gap-1 text-center font-bold hover:gap-2 hover:underline">
        Check all the galery
        <span>
          <ArrowNarrowRightIcon className="h-7 w-7" aria-hidden="true" />
        </span>
      </p>
    </section>
  );
};
