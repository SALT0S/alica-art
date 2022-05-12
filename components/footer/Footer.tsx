import Link from "next/link";
import Navigation from "./Navigation";

export const Footer = () => {
  return (
    <footer className="bg-[#C48F5A]">
      <div className="container mx-auto grid gap-10 px-4 py-9 text-center md:grid-cols-1 lg:grid-cols-2 lg:text-left">
        <div className="place-self-center lg:place-self-start">
          <div className=" mb-5 mt-3 flex  text-white">
            <span className="bg-white py-1 px-2 text-xl font-bold text-black">
              A
            </span>
            <p className="border-2 border-solid border-white bg-[#C48F5A] py-1 px-2 text-lg font-bold hover:bg-[#B27D48]">
              Alica Art
            </p>
          </div>
          <h4>Newsletter</h4>
          <h4>input</h4>
        </div>

        <div className="grid gap-4 text-gray-200 sm:grid-cols-2 md:grid-cols-4">
          {Navigation.map((link, index) => (
            <ul key={index}>
              <li>
                <div className="my-3 font-bold text-gray-900">{link.title}</div>
              </li>
              {link.Links.map((links, index) => (
                <li key={index} className="my-3">
                  <Link href={links.href}>
                    <a className="hover:text-white hover:underline">
                      {links.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};
