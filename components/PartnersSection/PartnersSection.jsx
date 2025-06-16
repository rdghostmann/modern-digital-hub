"use client";

import Image from "next/image";

const partners = [
  {
    id: 1,
    name: "Cellway",
    logo: "/partners/cellway.jpg",
    alt: "Cellway logo"
  },
  {
    id: 2,
    name: "Deloitte",
    logo: "/partners/Deloitte.png",
    alt: "Deloitte logo"
  },
  {
    id: 3,
    name: "Grocerapp",
    logo: "/partners/Grocerapp.jpg",
    alt: "Grocerapp logo"
  },
  {
    id: 4,
    name: "Heathrow",
    logo: "/partners/Heathrow.jpg",
    alt: "Heathrow logo"
  },
  {
    id: 5,
    name: "Lifestyle",
    logo: "/partners/Lifestyle.jpg",
    alt: "Lifestyle logo"
  },
  {
    id: 6,
    name: "Malt",
    logo: "/partners/Malt.png",
    alt: "Malt logo"
  },
  {
    id: 7,
    name: "Mondelez",
    logo: "/partners/Mondelez.png",
    alt: "Mondelez logo"
  },
  {
    id: 8,
    name: "Sunovion",
    logo: "/partners/Sunovion.jpg",
    alt: "Sunovion logo"
  }
];

export default function PartnersSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white">
          Our Trusted Partners
        </h2> */}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6 md:gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="flex items-center justify-center p-4 bg-white dark:bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100px, 150px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}