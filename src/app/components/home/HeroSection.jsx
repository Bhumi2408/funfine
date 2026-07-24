"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#D31119] pt-[120px] md:pt-[140px] lg:pt-[100px] pb-12 min-h-screen">
      <motion.div
        animate={{ x: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-32 left-[30%] lg:left-[28%] z-10"
      >
        <Image
          src="/home/cloud.png"
          alt="cloud"
          width={120}
          height={70}
          priority
        />
      </motion.div>

      <motion.div
        animate={{ x: [3, -3, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute bottom-24 left-[45%] lg:left-[42%] z-10"
      >
        <Image src="/home/cloud.png" alt="cloud" width={120} height={70} />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative z-20 text-center lg:text-left">
            <span className="uppercase tracking-wide text-[#FFD088] text-lg lg:text-[25px] font-medium">
              Welcome To Fun Fine
            </span>

            <h1 className="mt-5 text-white font-accent font-medium leading-tight text-[30px] sm:text-[36px] md:text-[48px] lg:text-[54px]">
              Fun in Every Bite
              <br />
              Flavor in Every Crunch.
            </h1>

            <p className="mt-6 text-white/90 text-base md:text-lg leading-8 max-w-[650px] mx-auto lg:mx-0">
              From crispy chips to spicy bhujia and tangy pasta snacks, Fun Fine
              makes every bite a blast of flavor! Deliciously crunchy, always
              fun, and made to munch anytime, anywhere.
            </p>
          </div>

          <div className="relative h-[340px] sm:h-[450px] md:h-[520px] lg:h-[600px] flex items-center justify-center">
            <Image
              src="/home/blob.png"
              alt=""
              width={520}
              height={520}
              className="absolute w-[240px] sm:w-[320px] md:w-[420px] lg:w-[500px] xl:w-[520px] h-auto right-1/2 lg:right-8 translate-x-1/2 lg:translate-x-0 top-10 lg:top-20 z-0"
            />

            <motion.div
              style={{ transformOrigin: "85% 90%" }}
              animate={{
                rotate: [-8, 0, -8],
                x: [-6, 0, -6],
                y: [2, 0, 2],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatType: "loop",
                ease: [0.42, 0, 0.58, 1],
              }}
              className="absolute left-[12%] sm:left-[18%] md:left-[20%] lg:left-14 top-20 md:top-24 lg:top-28 z-20"
            >
              <Image
                src="/home/product1.png"
                alt=""
                width={250}
                height={320}
                className="w-[170px] sm:w-[220px] md:w-[250px] lg:w-[290px] h-auto"
              />
            </motion.div>

            <motion.div
              style={{ transformOrigin: "15% 90%" }}
              animate={{
                rotate: [8, 0, 8],
                x: [6, 0, 6],
                y: [2, 0, 2],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatType: "loop",
                ease: [0.42, 0, 0.58, 1],
              }}
              className="absolute right-[12%] sm:right-[18%] md:right-[20%] lg:right-14 top-14 md:top-16 lg:top-20 z-30"
            >
              <Image
                src="/home/product2.png"
                alt=""
                width={250}
                height={320}
                className="w-[170px] sm:w-[220px] md:w-[250px] lg:w-[290px] h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="lg:hidden mt-12 relative flex justify-center">
        <div className="absolute top-8 w-[280px] h-[280px] bg-[#FFD59A] rounded-[45%] rotate-[-18deg]" />

        <motion.div
          animate={{ x: [0, -18, 0], y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20"
        >
          <Image
            src="/home/product1.png"
            alt="Yellow Pack"
            width={210}
            height={260}
            priority
          />
        </motion.div>

        <motion.div
          animate={{ x: [0, 18, 0], y: [0, 12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 right-5 z-30"
        >
          <Image
            src="/home/product2.png"
            alt="Green Pack"
            width={185}
            height={235}
            priority
          />
        </motion.div>
      </div> */}
    </section>
  );
}
