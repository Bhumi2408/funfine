"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    name: "CRUNCHY STICKS",
    image: "/products/product3.png",
    bg: "#FFBEB4",
    shadow: "#FFC7BE",
    hover: "#FF7E6A",
  },
  {
    name: "DESI THATH BHUNJA",
    image: "/products/product4.png",
    bg: "#FFF680",
    shadow: "#FFFBC4",
    hover: "#FFF245",
  },
  {
    name: "JHAL MIXTURE",
    image: "/products/product5.png",
    bg: "#FFA192",
    shadow: "#FFC7BE",
    hover: "#FF7E6A",
  },
  {
    name: "DIET CHIWDA",
    image: "/products/product6.png",
    bg: "#E8FF80",
    shadow: "#F3FFBD",
    hover: "#E0FF51",
  },
  {
    name: "POPCORN",
    image: "/products/product7.png",
    bg: "#8BD0FF",
    shadow: "#BEE5FF",
    hover: "#4F9FD5",
  },
  {
    name: "KHUSH MIJAZ MIXTURE",
    image: "/products/product8.png",
    bg: "#FF8282",
    shadow: "#FFB5B5",
    hover: "#FF6464",
  },
  {
    name: "SHAHI MASUR NAMKEEN",
    image: "/products/product9.png",
    bg: "#FFBE82",
    shadow: "#FFD3AB",
    hover: "#FFAC60",
  },
  {
    name: "JHAL MIXTURE",
    image: "/products/product10.png",
    bg: "#A7A7A7",
    shadow: "#E2E2E2",
    hover: "#696969",
  },
  {
    name: "KHASTA MIXTURE",
    image: "/products/product11.png",
    bg: "#D5746E",
    shadow: "#FFAFAA",
    hover: "#AD4D47",
  },
  {
    name: "LITE CHIWDA",
    image: "/products/product12.png",
    bg: "#81A7FF",
    shadow: "#BFD2FF",
    hover: "#436DCF",
  },
   {
    name: "DALMOTH",
    image: "/products/product13.png",
    bg: "#FF8282",
    shadow: "#FFB5B5",
    hover: "#FF6464",
  },
  {
    name: "CHATPATI DAL",
    image: "/products/product14.png",
    bg: "#D2D2D2",
    shadow: "#EDEDED",
    hover: "#949494",
  },
  {
    name: "CORN FLAKES MIXTURE",
    image: "/products/product15.png",
    bg: "#D2D2D2",
    shadow: "#EDEDED",
    hover: "#949494",
  },
  {
    name: "KHASTA MIXTURE",
    image: "/products/product16.png",
    bg: "#D5746E",
    shadow: "#FFAFAA",
    hover: "#AD4D47",
  },
];

export default function ProductsSection() {
  const [hovered, setHovered] = useState(null);
  return (
    <section className="bg-[#FBF3E6] py-10" id="products">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[#C95D05] text-4xl font-bold uppercase">
            OUR PRODUCTS
          </h2>

          <h3 className="font-heading text-[#2E3440] text-3xl font-bold mt-3">
            Delicious Snacks from the Best Chips & Namkeen Brand in India
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-10">
          {products.map((item, index) => {
            const isHovered = hovered === index;
            return (
              <div
                key={index}
                className="group text-center cursor-pointer"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative h-[300px] flex items-center justify-center">
                  {/* Background */}

                  <div
                    className="absolute bottom-16 w-full h-[160px] rounded-xl transition-all duration-300"
                    style={{
                      background: item.bg,
                      boxShadow: `6px 6px 0 ${
                        isHovered ? item.hover : item.shadow
                      }`,
                    }}
                  />

                  {/* Product */}

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={240}
                    className="relative z-10 object-contain"
                  />
                </div>

                <h4 className=" text-lg font-semibold uppercase text-[#222]">
                  {item.name}
                </h4>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex items-center justify-center">
          <Link href="/#products" className="border-[3px] text-[17px] font-semibold uppercase px-5 py-3 text-[#F74D67] border-[#F74D67]">50+ Products</Link>
        </div>
      </div>
    </section>
  );
}
