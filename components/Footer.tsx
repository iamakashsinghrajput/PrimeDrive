import Image from "next/image";
import Link from "next/link";
import logo from "/public/mycompanylogo.png";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start">
          <div className="absolute">
            <Image
              src={logo}
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </div>
          <div className="pt-3 pl-14">
            <h1 className='text-xl font-bold text-blue-900'>PrimeDrive</h1>
          </div>
          <p className="text-base text-gray-700 pl-6">
            PrimeDrive 2024 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
            {footerLinks.map((link) =>(
                <div key={link.title}
                className="footer__link scroll-smooth"
                >
                    <h3 className="font-bold">{link.title}</h3>
                    {link.links.map((item)=>(
                        <Link key={item.title} href={item.url} className="text-gray-500"> {item.title}</Link>
                    ))}

                </div>
            ))}

        </div>
      </div>
      
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2024 PrimeDrive. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500 scroll-smooth">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
