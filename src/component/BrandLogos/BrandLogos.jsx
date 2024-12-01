import React from "react";
import { Link } from "react-router-dom";
import Image from "../../layer/Image";

const BrandLogos = () => {
  const logos = [
    { src: "/assets/BrandLogos/rl.svg", alt: "Roccat", link: "https://www.roccat.com/" },
    { src: "/assets/BrandLogos/msi.svg", alt: "MSI", link: "https://www.msi.com/" },
    { src: "/assets/BrandLogos/ra.svg", alt: "Razer", link: "https://www.razer.com/" },
    { src: "/assets/BrandLogos/th.svg", alt: "Thermal-take", link: "https://www.thermaltake.com/" },
    { src: "/assets/BrandLogos/ad.svg", alt: "A-data", link: "https://www.adata.com/" },
    { src: "/assets/BrandLogos/hp.svg", alt: "HP", link: "https://www.hp.com/" },
    { src: "/assets/BrandLogos/gi.svg", alt: "Gigabyte", link: "https://www.gigabyte.com/" },
  ];

  return (
    <div className="py-9 overflow-hidden whitespace-nowrap">
      <div className="flex animate-scroll gap-4 md:gap-8">
        {logos.map((logo, index) => (
          <Link
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              href={logo.link}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-12 object-contain"
            />
          </Link>
        ))}

        {logos.map((logo, index) => (
          <Link
            key={`duplicate-${index}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              href={logo.link}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-12 object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
