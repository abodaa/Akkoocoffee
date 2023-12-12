import { React, useState } from "react";
import "../Styles/home.scss";
import uniqueSectionPic from "../images/UniqueSectionPic.jpg";
import communityPic from "../images/community.jpg";
import heroImage from "../images/aboutSectionPic.jpg";
import pOne from "../images/pOne.png";
import pTwo from "../images/pTwo.png";
import pThree from "../images/pThree.png";

// Gallery Images
import GL1 from "../images/gallery/GL1.jpg";
import GL2 from "../images/gallery/GL2.jpg";
import GL3 from "../images/gallery/GL3.jpg";
import GL4 from "../images/gallery/GL4.jpg";
import GL5 from "../images/gallery/GL5.jpg";
import GS1 from "../images/gallery/GS1.jpg";
import GS2 from "../images/gallery/GS2.jpg";
import GS3 from "../images/gallery/GS3.jpg";
import GS4 from "../images/gallery/GS4.jpg";
import GS5 from "../images/gallery/GS5.jpg";

import food from "../images/food.png";
import heroVideo from "../images/hero.mp4";
import { CiLocationOn } from "react-icons/ci";
import {
  BsArrowBarRight,
  BsArrowLeft,
  BsArrowRightShort,
} from "react-icons/bs";
import { CgArrowLongRight, CgMenuRight } from "react-icons/cg";
import breakfastMenuData from "../Components/menuData.js";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import tripadvisor from "../images/tripadvisor.png";
import AboutUsMore from "../Components/AboutUsMore";
import OurStory from "../Components/OurStory";
import BookTable from "../Components/BookTable";

// Framermotion
import { motion } from "framer-motion";

export default function Home() {
  // Slider functions
  // What make akkoo unique slider Function

  const uniqueSlideLeft = () => {
    let slider = document.getElementById("unique-container");
    let sliderItem = document.getElementById("unique");
    slider.scrollLeft = slider.scrollLeft - slider.offsetWidth - 10;
  };
  const uniqueSlideRight = () => {
    let slider = document.getElementById("unique-container");
    let sliderItem = document.getElementById("unique");
    slider.scrollLeft = slider.scrollLeft + slider.offsetWidth + 10;
  };

  // community slider Function
  const communitySlideLeft = () => {
    let slider = document.getElementById("community-container");
    let sliderItem = document.getElementById("community");
    slider.scrollLeft = slider.scrollLeft - slider.offsetWidth - 10;
  };
  const communitySlideRight = () => {
    let slider = document.getElementById("community-container");
    let sliderItem = document.getElementById("community");
    slider.scrollLeft = slider.scrollLeft + slider.offsetWidth + 10;
  };

  // Akkoo Menu slider Function
  const menuSlideLeft = () => {
    let slider = document.getElementById("menu-item-container");
    let sliderItem = document.getElementById("menu-item");
    slider.scrollLeft = slider.scrollLeft - sliderItem.offsetWidth - 16;
    console.log(slider.offsetWidth);
  };
  const menuSlideRight = () => {
    let slider = document.getElementById("menu-item-container");
    let sliderItem = document.getElementById("menu-item");
    slider.scrollLeft = slider.scrollLeft + sliderItem.offsetWidth + 16;
    console.log(sliderItem.offsetWidth);
  };

  // Akkoo Menu slider Function
  const gallerySlideLeft = () => {
    let slider = document.getElementById("gallery-container");
    let sliderItem = document.getElementById("gallery-item");
    slider.scrollLeft = slider.scrollLeft - sliderItem.offsetWidth - 10;
    console.log(slider.offsetWidth);
  };
  const gallerySlideRight = () => {
    let slider = document.getElementById("gallery-container");
    let sliderItem = document.getElementById("gallery-item");
    slider.scrollLeft = slider.scrollLeft + sliderItem.offsetWidth + 10;
    console.log(sliderItem.offsetWidth);
  };

  // Scroll nav background color change

  const [changeColor, setChangeColor] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 90) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  });

  return (
    <div class="home-main-container">
      {/* NAVIGATION */}
      <section
        class={`fixed top-0  right-0 left-0  flex items-center justify-between z-20 ${
          changeColor ? " bg-whiteText shadow-sm" : "transparent"
        } transition xxl:container m-auto`}
      >
        {/* Menu Items */}
        <div class="flex gap-2 items-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              // damping: 20,
              duration: 0.5,
              delay: 0.5,
            }}
            class="p-4 bg-darkGreen text-xl text-lightGreen font-extrabold"
          >
            Akkoo Coffee
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.6,
            }}
            class="flex flex-col gap-2 "
          >
            <div class="w-9 h-1 bg-darkGreen"></div>
            <div class="w-9 h-1 bg-darkGreen"></div>
            <div class="w-9 h-1 bg-darkGreen"></div>
          </motion.div>
        </div>
        {/* <div class="flex gap-6">
          <ul class="hidden md:flex space-x-6 items-center uppercase px-9">
            {[
              { val: "home", link: "#home" },
              { val: "about", link: "#about" },
              { val: "services", link: "#services" },
              { val: "community", link: "#community" },
              { val: "gallery", link: "#gallery" },
            ].map((nav) => {
              return (
                <a href={nav.link} class="nav-item font-bold">
                  <li>{nav.val}</li>
                </a>
              );
            })}
          </ul>
        </div> */}

        {/* Navbar Buttons */}
        <motion.div class="hidden items-center justify-center gap-2 pr-6 md:flex ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.8,
            }}
          >
            <BookTable />
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.8,
            }}
            href="#menu"
            class="p-2 px-5 bg-otherColor text-darkGreen font-bold  rounded-md hover:bg-darkGreen hover:text-whiteText"
          >
            Akkoo Menu
          </motion.a>
        </motion.div>
      </section>
      {/* HERO Section */}
      <section
        id="home"
        class=" relative grid grid-cols-1 md:grid-cols-3 blgxl:grid-cols-5 xxl:container m-auto"
      >
        {/* Hero Left Section */}
        <div class=" flex flex-col md:pl-12 items-start justify-center h-full p-5 relative col-span-1 md:col-span-2 blgxl:col-span-3">
          <div class="flex flex-col justify-start items-start  text-darkGreen font-extrabold pt-16 -space-y-2 ">
            <div class="-space-y-8 sm:-space-y-12 md:-space-y-16">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.1,
                }}
                class="hero-akkoo-txt font-AlfaSlabOne  text-6xl p-0 blgxl:text-9xl  sm:text-7xl md:text-8xl "
              >
                Akkoo
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.3,
                }}
                class="hero-akkoo-txt text-4xl sm:text-6xl  md:text-6xl font-extralight font-AlfaSlabOne "
              >
                coffee
              </motion.p>
            </div>
            <motion.div class="w-full flex flex-col items-start justify-start space-y-4 font-extrabold text-darkGreen pb-6 md:w-4/5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.4,
                }}
                class="text-xl bg-otherColor shadow-md p-2 px-4 sm:px-6 md:px-10 mb-4 rounded-full sm:text-3xl font-AlfaSlabOne"
              >
                We are open 24 / 7
              </motion.p>

              <motion.video
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 1,
                  delay: 0.6,
                }}
                class="w-full aspect-video object-cover rounded-3xl md:hidden"
                src={heroVideo}
                autoPlay
                controls
                scr
                loop
              ></motion.video>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.5,
                }}
                class="text-sm sm:text-base "
              >
                <b class="text-2xl">Y</b>our Oasis in the City.Step into our
                cozy and inviting space, where modern and cultural aesthetics
                blend seamlessly with warm, welcoming vibes. Whether you're
                catching up with friends, or simply want to enjoy a traditional
                Ethiopian food with fine Ethiopian coffee, Akkoo Coffee is your
                oasis in the city.
              </motion.p>
              {/* <p class="text-2xl">We are open 24 / 7</p> */}

              {/* <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", duration: 0.5 }}
                class="flex gap-3 items-end justify-center"
              >
                <a
                  href="#menu"
                  class="mt-10 p-2 px-5 bg-darkGreen text-whiteText font-bold rounded-md"
                >
                  {" "}
                  Akkoo Menu
                </a>
                <a href="#unique">
                  <BsArrowLeft class="block -rotate-90 bg-darkGreen text-whiteText  p-3 text-4xl rounded-full font-extrabold md:hidden" />
                </a>
              </motion.div> */}
            </motion.div>
          </div>
          {/* <div class="text-xl bg-darkGreen p-0.5 w-1/6 px-9 text-darkGreenTransparent rounded-full"></div> */}

          <motion.div class="gap-2 text-whiteText w-full flex flex-wrap font-bold sm:flex-nowrap items-start  justify-start  ">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.4,
              }}
              class="text-md bg-darkGreen shadow-md  p-2 px-6 rounded-full md:text-2xl "
            >
              Traditional Cusine
            </motion.h2>
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 500,
                delay: 0.2,
              }}
              class="w-1/2 my-1 h-1 bg-darkGreen sm:my-0 sm:w-2 sm:h-4"
            ></motion.div> */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.6,
              }}
              class="text-md  bg-darkGreen shadow-md  p-2 px-6 rounded-full md:text-2xl  "
            >
              Coffee
            </motion.h2>
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 500,
                delay: 0.4,
              }}
              class="w-1/2 my-1 h-1 bg-darkGreen sm:my-0 sm:w-2 sm:h-4"
            ></motion.div> */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.8,
              }}
              class="text-md  bg-darkGreen shadow-md  p-2 px-6 rounded-full md:text-2xl "
            >
              Buna Kurs
            </motion.h2>
          </motion.div>
          {/* Hero Pattern */}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.8,
            }}
            src={pOne}
            alt=""
            class="hidden md:block absolute w-72 -z-10 right-0 top-32"
          />
        </div>

        {/* Hero Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 1, delay: 0.1 }}
          class="h-screen w-full hidden md:block md:col-span-1 blgxl:col-span-2"
        >
          <video
            class="w-full h-full object-cover rounded-l-3xl"
            src={heroVideo}
            autoPlay
            controls
            scr
            loop
          ></video>
        </motion.div>
        {/* Scroll to Bottom */}
        <motion.div
          initial={{}}
          animate={{ y: [0, -5, 0] }}
          transition={{ type: "tweet", repeat: Infinity, duration: 1 }}
          class="hidden md:flex absolute right-4 bottom-6 bg-otherColor rounded-full "
        >
          <div class="w-20 h-20 relative">
            <a
              href="#unique"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex w-15 h-15 bg-darkGreen text-whiteText  p-5 font-bold items-center justify-center rounded-full"
            >
              <BsArrowLeft class="-rotate-90 font-extrabold" />
            </a>
          </div>
        </motion.div>
      </section>
      {/* What makes Akkoo Unique section */}
      <section
        class="flex flex-col gap-20 font-extrabold h-full  w-11/12 items-center justify-center pt-32 md:flex-row xxl:container m-auto"
        id="unique"
      >
        {/* Left */}
        <div class="unique-left-container w-5/6 md:w-1/2 ">
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.3,
            }}
            class="w-full rounded-2xl shadow-xl border-4 border-solid border-whiteText filter grayscale"
            src={uniqueSectionPic}
            alt=""
          />
        </div>

        {/* right */}
        <div class="w-full md:w-1/2">
          {/* Unique section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            class="unique-title text-3xl mb-4 text-darkGreen font-bold blgxl:text-5xl "
          >
            What makes us unique?
          </motion.h2>
          {/* Unique section slider container */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.5,
            }}
            class="scroll-container flex overflow-scroll space-x-2.5"
            id="unique-container"
          >
            {/* First Description */}
            <div
              class="bg-otherColor p-6 rounded-xl scrolling-items min-w-full"
              id="unique"
            >
              <h3 class="text-2xl text-darkGreen font-bold blgxl:text-3xl">
                We make you feel at home.
              </h3>
              <p class="text-sm text-darkGreen w-11/12 blgxl:text-base">
                Not only will you enjoy our products, but our crew does a great
                job in giving an excellent service to those who walk through our
                door. We are also the first restaurant in the country to offer
                an elderly discount. In such ways and more, we are committed to
                honoring our culture and your appetite.
              </p>
            </div>
            {/* Second description */}
            <div
              class="bg-otherColor p-6 rounded-xl scrolling-items min-w-full"
              id="unique"
            >
              <h3 class="text-2xl text-darkGreen font-bold blgxl:text-3xl">
                Our space speaks volumes.
              </h3>
              <p class="text-sm text-darkGreen w-11/12 blgxl:text-base">
                Set up in an elegant fashion, our high-end coffee shop intends
                to tell the story of the birthplace and origins of the original
                AKKOO COFFEE’s culture. Our shops are intended for locations
                with a more conservative and low-average-higher-income customer
                base.
              </p>
            </div>
            {/* Third description */}
            <div
              class="bg-otherColor p-6 rounded-xl scrolling-items min-w-full"
              id="unique"
            >
              <h3 class="text-2xl text-darkGreen font-bold blgxl:text-3xl">
                We keep things interesting.
              </h3>
              <p class="text-sm text-darkGreen w-11/12 blgxl:text-base">
                Our menu isn’t prepared to serve for months to come. Our
                roasters hand pick one single origin and one blend to bring you
                an exceptional coffee experience each month. We are committed to
                improving the quality of our drinks and food in alignment with
                our customer needs. We value feedback to stay attentive and
                in-tune.
              </p>
            </div>
            {/* Fourth description */}
            <div
              class="bg-otherColor p-6 rounded-xl scrolling-items min-w-full"
              id="unique"
            >
              <h3 class="text-2xl text-darkGreen font-bold blgxl:text-3xl">
                Our Coffee.
              </h3>
              <p class="text-sm text-darkGreen w-11/12 blgxl:text-base">
                Whether you enjoy making your coffee by grinding coffee beans or
                you prefer having it brewed all the way, AKKOO is here to serve.
                Try our selection of roasted coffee; the fruity flavored Arabica
                and the AAA graded robust flavor from Oromia region Gedame
                wereda.
              </p>
            </div>
          </motion.div>
          {/* Unique section slider arrows container */}
          <div class="flex items-center mt-8 space-x-6">
            {/* Arrow left */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.4,
              }}
              onClick={uniqueSlideLeft}
              class="p-3 text-xl bg-otherColor rounded-full cursor-pointer hover:text-whiteText hover:bg-darkGreen"
            >
              <BsArrowLeft />
            </motion.div>
            {/* Arrow right */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.5,
              }}
              onClick={uniqueSlideRight}
              class="p-3 text-xl bg-otherColor rounded-full cursor-pointer -rotate-180 hover:text-whiteText hover:bg-darkGreen"
            >
              <BsArrowLeft class=" -rotate-180" />
            </motion.div>
          </div>
        </div>
      </section>
      {/*About akkoo coffe section */}
      <section
        class="grid bg-darkGreen h-screen md:grid-cols-3 mt-28 blgxl:grid-cols-5 xxl:container m-auto"
        id="about"
      >
        {/*About Akkoo left */}
        <div class="py-10 px-6 flex flex-col items-start justify-center  bg-darkGreen md:p-20 md:col-span-2 blgxl:col-span-3">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            class="about-title text-4xl font-extrabold  mb-4 text-whiteText md:text-6xl"
          >
            About Akkoo
          </motion.h2>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2,
              }}
              class="text-lg font-bold text-lightGreen blgxl:text-2xl "
            >
              ‘Akkoo’ is a word in the Afaan Oromoo language (one of the widely
              spoken languages in Ethiopia) meaning ‘Grandmother’
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.3,
              }}
              class="text-sm text-whiteText pt-6 blgxl:text-base"
            >
              Our commitment is to bring you the ultimate coffee experience, one
              that is responsibly produced from seed to cup. This is not merely
              an ideology but our everyday practice. It was on May 2019 AKKOO
              coffee’s founders Dawit Hailu and his wife Wudassie Enquberhan
              opened their first coffee shop down the street from Churchill
              road. Upon its opening, Akkoo was welcomed with encouraging
              responses from the community. It quickly became the meeting place
              for coffee lovers ranging from university students to retirees.
            </motion.p>
          </div>
          <div class=" mt-20 gap-3 flex flex-wrap sm:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.4,
              }}
            >
              <AboutUsMore />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <OurStory />
            </motion.div>
          </div>
        </div>

        {/* About Akkoo right */}
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 1,
          }}
          src={heroImage}
          class="hidden   shadow-xl  h-screen w-full object-cover  md:block col-span-1 blgxl:col-span-2"
        />
      </section>
      {/* Services section */}
      <section
        class="relative flex flex-col items-start justify-center text-darkGreen font-extrabold w-11/12  py-32 xxl:container m-auto"
        id="services"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            class="services-title text-4xl font-extrabold md:text-6xl"
          >
            Akkoo services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            class="text-darkGreen text-sm w-full sm:text-base md:w-4/5"
          >
            Most people visit us expecting only good coffee and are fairly
            impressed with our ‘Buna Kurs’ (barley flour with butter)
            accompanying it. We’re known for our excellent coffee in all its
            forms. Machiatto, Café-latte, Espresso… you name it me make it best!
          </motion.p>
        </div>

        <div class="flex flex-col space-x-0 space-y-20 mt-14 md:flex-row md:space-x-6 md:space-y-0">
          {/* First Service */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            class="relative bg-otherColor p-8 shadow-lg rounded-2xl blgxl:p-12 md:p-6 md:w-1/3"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.5,
              }}
              class="w-16 h-16 bg-otherColor rounded-full absolute -top-10 left-1/2 border-whiteText border-4 transform -translate-x-1/2"
            ></motion.div>
            <p class="text-2xl capitalize mb-2 lg:text-3xl ">
              Ethiopian Coffee
            </p>
            <p class="text-sm lg:text-base">
              {" "}
              Our menu proudly features Ethiopian single-origin coffees, each
              carefully selected for its unique character. Whether you're a
              seasoned enthusiast or a curious newcomer, our Ethiopian offerings
              promise an authentic and memorable coffee experience.
            </p>
          </motion.div>
          {/* Second Service */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            class="relative bg-lightGreen shadow-lg rounded-2xl p-8 md:scale-105 blgxl:p-12 md:p-6 md:w-1/3"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.6,
              }}
              class="w-16 h-16 bg-lightGreen rounded-full absolute -top-10 left-1/2 border-whiteText border-4 -translate-x-1/2"
            ></motion.div>
            <p class="text-2xl capitalize mb-2 lg:text-3xl">
              traditional cuisine
            </p>
            <p class="text-sm lg:text-base">
              Our ‘Agelgil’ is the most famous order and customers have enjoyed
              both our fasting and non-fasting orders. Delivered to you in a
              beautiful Mesob, we have options suitable for your guest size
              starting from 10 people.
            </p>
          </motion.div>

          {/* Third Service */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.3,
            }}
            class="relative bg-otherColor p-8 shadow-lg rounded-2xl blgxl:p-12 md:p-6 md:w-1/3"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.7,
              }}
              class="w-16 h-16 bg-otherColor rounded-full absolute -top-10 left-1/2 border-whiteText border-4 -translate-x-1/2"
            ></motion.div>
            <p class="text-2xl capitalize mb-2 lg:text-3xl">buna kurs</p>
            <p class="text-sm lg:text-base">
              We believe that the perfect coffee experience extends beyond the
              cup. Elevate your coffee ritual with our exquisite selection of
              snacks, thoughtfully curated to complement the rich flavors of our
              brews.
            </p>
          </motion.div>
        </div>
        {/* Services Pattern */}
        <motion.img
          initial={{ y: [0, 5, 0] }}
          whileInView={{ y: [0, -5, 0] }}
          transition={{ type: "tweet", repeat: Infinity, duration: 1 }}
          src={pTwo}
          alt=""
          class="hidden md:block absolute w-72 -z-10 right-0 top-6"
        />
      </section>
      {/* Communities Section */}
      <section
        class=" bg-otherColor shadow-md text-darkGreen font-extrabold blgxl:container m-auto blgxl:rounded-3xl rounded-bl-3xl"
        id="community"
      >
        <div class="flex flex-col-reverse items-center justify-center w-11/12 m-auto gap-20 py-12 md:py-32 md:flex-row">
          {/* Community Section Left */}
          <div class="w-full md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.1,
              }}
              class="community-title text-4xl text-darkGreen font-bold blgxl:text-6xl"
            >
              Community
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2,
              }}
              class="text-sm sm:text-base"
            >
              Every purchase of coffee at AKKOO positively impacts social and
              environmental conditions at the source.AKKOO sources its coffee
              from west Ethiopia, specifically from Wellega zone Gedame wereda
              in Oromia region.
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2,
              }}
              class="scroll-container flex flex-nowrap overflow-scroll space-x-2.5 max-w-full mt-3"
              id="community-container"
            >
              {[
                {
                  name: "Tigist",
                  title: "Operations Manager",
                  description: `Essentially my job is to keep AKKOO running like a well-oiled
                machine and I pour my heart and soul into doing just that. I
                have a shirt that says, “Keep calm and let TG handle it!” At
                AKKOO, those are words to live by!`,
                },
                {
                  name: "Fitsum",
                  title: "Administrative and Finance Head",
                  description: `I was taken aback, almost left speechless, by how wonderful the
                coffee is! I am happy to be enjoying black coffee again.`,
                },
                {
                  name: "Kidi",
                  title: "Purchasing",
                  description: `I love tea – especially with cinnamon. Here at Akkoo we know how
                to make great tea, cinnamon spiced, lemon squeezed or a simple
                black tea, I have no doubt you’ll enjoy it.`,
                },
                {
                  name: "Dave",
                  title: "Customer",
                  description: `If you’re a coffee lover, I highly recommend you try our
                Espresso. It’s the best one in the city!`,
                },
              ].map((eachPerson) => {
                return (
                  <div
                    className="bg-whiteText p-6 rounded-xl scrolling-items min-w-full"
                    id="community"
                  >
                    <h3 class="font-bold mb-2">
                      {eachPerson.name} | <em>{eachPerson.title}</em>
                    </h3>
                    <p class="text-sm text-darkGreen blgxl:text-base">
                      {eachPerson.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
            {/* Community slider arrows container */}
            <div class="flex items-center mt-8 space-x-6">
              {/* Arrow left */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.1,
                }}
                onClick={communitySlideLeft}
                class="p-3 text-xl bg-whiteText rounded-full cursor-pointer hover:text-whiteText hover:bg-darkGreen"
              >
                <BsArrowLeft />
              </motion.div>
              {/* Arrow right */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.2,
                }}
                onClick={communitySlideRight}
                class="p-3 text-xl bg-whiteText rounded-full cursor-pointer -rotate-180 hover:text-whiteText hover:bg-darkGreen "
              >
                <BsArrowLeft class=" -rotate-180" />
              </motion.div>
            </div>
          </div>
          {/* right */}
          <div class="community-right-container w-5/6 md:w-1/2 ">
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 1,
                delay: 0.3,
              }}
              src={communityPic}
              alt=""
              class="w-full rounded-2xl shadow-xl border-4 border-solid border-whiteText md:w-full"
            />
          </div>
        </div>
      </section>
      {/* AKKOO MENU SECTION */}
      <section
        class="relative w-11/12 font-extrabold py-32 text-darkGreen xxl:container m-auto"
        id="menu"
      >
        {/* Title */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            class="menu-title text-4xl mb-4 font-extrabold md:text-6xl"
          >
            Akkoo Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            class="w-full text-sm md:w-2/5 sm:text-base "
          >
            Akkoo has the best catering service should you choose to have
            delicious local cusine and Ethiopian coffee at your event.
          </motion.p>
        </div>

        <div>
          {/* Menu selection container*/}
          <ul class="  flex items-center flex-wrap gap-2 justify-start m-auto my-5 w-full text-sm md:text-base sm:justify-start">
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.1,
              }}
              class="bg-darkGreen text-whiteText p-2 rounded-md md:p-4 cursor-pointer  hover:text-whiteText hover:bg-darkGreen"
            >
              Break Fast
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2,
              }}
              class="bg-otherColor p-2 rounded-md md:p-4 cursor-pointer  hover:text-whiteText hover:bg-darkGreen"
            >
              Lunch
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.3,
              }}
              class="bg-otherColor p-2 rounded-md md:p-4 cursor-pointer  hover:text-whiteText hover:bg-darkGreen"
            >
              Cake
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.4,
              }}
              class="bg-otherColor p-2 rounded-md md:p-4 cursor-pointer  hover:text-whiteText hover:bg-darkGreen"
            >
              {" "}
              Hot Drinks
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.5,
              }}
              class="bg-otherColor p-2 rounded-md md:p-4 cursor-pointer  hover:text-whiteText hover:bg-darkGreen"
            >
              Soft Drinks
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.6,
              }}
              class="bg-otherColor p-2 rounded-md md:p-4 cursor-pointer  hover:text-whiteText hover:bg-darkGreen"
            >
              Special Order
            </motion.li>
          </ul>

          {/* Menu Items */}
          <div class="flex items-center gap-4">
            <div
              class="grid grid-cols-1 md:grid-cols-2 blgxl:grid-cols-3 gap-4 w-full"
              id="menu-item-container"
            >
              {breakfastMenuData.map((item, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.5,
                    }}
                    key={item.name}
                    class="flex items-center gap-4 relative shadow-md min-w-full sm:min-w-fit p-2 bg-otherColor rounded-lg"
                    id="menu-item"
                  >
                    <img src={food} alt="" class="w-1/4" />
                    <div>
                      <p class="text-base pb-2 mb-2 sm:text-lg">{item.name}</p>
                      <p class="text-sm sm:text-base">{item.description}</p>
                    </div>
                    <p class="absolute top-0 text-sm  p-2 bg-whiteText right-2 sm:text-base">
                      <b>120</b> ETB
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Menu Pattern */}
        <motion.img
          initial={{ y: [0, 5, 0], x: [0, 5, 0, 5, 0] }}
          whileInView={{ y: [0, -5, 0], x: [0, -5, 0, -5, 0] }}
          transition={{ type: "tweet", repeat: Infinity, duration: 5 }}
          src={pThree}
          alt=""
          class="hidden md:block absolute w-72 -z-10 right-0 top-32"
        />
      </section>

      {/* Gallery Section Mobile */}
      <section
        // id="gallery"
        class="w-11/12  pb-10  text-darkGreen m-auto md:hidden"
      >
        <div class="flex items-center space-x-4">
          {/* <div class="hidden sm:flex">
            <BsArrowLeft
              class="p-3 text-4xl bg-otherColor rounded-full"
              onClick={gallerySlideLeft}
            />
          </div> */}
          <div
            class="scroll-container flex overflow-x-scroll items-start justify-start space-x-2.5 py-10 md:px-4"
            id="gallery-container"
          >
            {[
              {
                src: GL1,
              },
              {
                src: GS1,
              },
              {
                src: GL2,
              },
              {
                src: GS2,
              },
              {
                src: GL3,
              },
              {
                src: GS3,
              },
              {
                src: GL4,
              },
              {
                src: GS4,
              },
              {
                src: GL5,
              },
              {
                src: GS5,
              },
            ].map((img) => {
              return (
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  src={img.src}
                  class="scrolling-items w-full  aspect-video object-cover rounded-xl hover:scale-105 transition-all sm:w-1/2 md:w-1/3 lg:w-2/5"
                  id="gallery-item"
                />
              );
            })}
          </div>

          {/* <div class="hidden sm:flex">
            <BsArrowLeft
              class="p-3 text-4xl bg-otherColor rounded-full -rotate-180"
              onClick={gallerySlideRight}
            />
          </div> */}
        </div>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.8,
          }}
          class="flex gap-6 bg-darkGreen  py-2 px-4 mt-2 rounded-lg text-whiteText items-center justify-start"
        >
          <h2 class="text-sm sm:text-base">Find us on Instagram</h2>
          <img src={instagram} class="w-6 sm:w-8" />
        </motion.button>
      </section>

      {/* Gallery Section Large Screen */}
      <section
        id="gallery"
        class="hidden w-11/12 py-5  text-darkGreen md:py-20 md:block xxl:container m-auto"
      >
        <div class="grid gap-4 grid-cols-4 lg:grid-cols-4">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            src={GL1}
            class="w-full h-full object-cover rounded-xl row-start-1 row-end-3 "
          />{" "}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            src={GS1}
            class="w-full h-full  object-cover rounded-xl row-start-1 row-end-1"
          />{" "}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.3,
            }}
            src={GL2}
            class="w-full h-full object-cover rounded-xl row-start-1 row-end-3"
          />
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.4,
            }}
            src={GS2}
            class="w-full h-full  object-cover rounded-xl row-start-1 row-end-1"
          />{" "}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.5,
            }}
            src={GL3}
            class="w-full h-full  object-cover rounded-xl row-start-2 row-end-4"
          />{" "}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.6,
            }}
            src={GS3}
            class="w-full h-full  object-cover rounded-xl"
          />{" "}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.7,
            }}
            src={GL4}
            class="w-full h-full  object-cover rounded-xl row-start-2 row-end-4"
          />{" "}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.8,
            }}
            src={GS4}
            class="w-full h-full  object-cover rounded-xl  "
          />{" "}
          {/* <img
            src={GL5}
            class="w-full h-full  object-cover rounded-xl transition-all col-start-1 col-end-3 "
          />{" "}
          <img
            src={GS5}
            class="w-full h-full  object-cover rounded-xl transition-all col-start-3 col-end-5"
            id="gallery-item"
          /> */}
        </div>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.8,
          }}
          class="flex gap-6 bg-darkGreen  py-2 px-4 mt-6 rounded-lg text-whiteText items-center justify-start"
        >
          <h2>For more images find us on Instagram</h2>
          <img src={instagram} class="w-8" />
        </motion.button>
      </section>
      {/* FOOTER SECTION */}
      <section class="relative bg-darkGreen  text-whiteText pt-10 rounded-t-3xl xxl:container m-auto">
        {/* TOP OF FOOTER */}
        <div class="flex flex-col items-start justify-between w-11/12 gap-6 m-auto md:flex-row ">
          {/* LEFT */}
          <div class="p-0 w-full md:w-1/3 lg:p-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.1,
              }}
              class="footer-titles text-xl text-lightGreen mb-5 md:text-2xl"
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2,
              }}
              class="text-sm lg:text-base"
            >
              Our commitment is to bring you the ultimate coffee experience, one
              that is responsibly produced from seed to cup. This is not merely
              an ideology but our everyday practice. It was on May 2019 AKKOO
              coffee’s founders Dawit Hailu and his wife Wudassie Enquberhan
              opened their first coffee shop down the street from Churchill
              road.
            </motion.p>
          </div>
          {/* MIDDLE */}
          <div class="p-0 w-full md:w-1/3 lg:p-6 ">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.3,
              }}
              class="footer-titles text-xl text-lightGreen mb-5 md:text-2xl"
            >
              Where we are
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.4,
              }}
            >
              {/* <CiLocationOn className="footer-middle-location-icon" /> */}
              <p class="text-sm pl-4 border-l-4 border-lightGreen lg:text-base">
                Addis Ababa, Ethiopia Churchill Road, Pass Tedros Square, Hibret
                Insurance Building, Ground Floor, Addis Ababa.{" "}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.5,
              }}
              class="flex items-center gap-5 mt-5"
            >
              <CiLocationOn class="text-3xl lg:text-5xl" />
              <div class="text-sm lg:text-base">
                <p>+251 -905-828282</p>
                <p>+251 -905-828282</p>
              </div>
            </motion.div>
          </div>
          {/* RIGHT */}
          <div class="p-0 w-full md:w-1/3 lg:p-6">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.6,
              }}
              class="footer-titles text-xl text-lightGreen md:text-2xl mb-5"
            >
              Quick Menu
            </motion.h1>
            <ul class="uppercase flex flex-col space-y-4 text-sm lg:text-base">
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.7,
                }}
                href="#home"
                class="footer-nav-item flex justify-between"
              >
                <li>home</li>
                {/* <BsArrowRightShort /> */}
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.8,
                }}
                href="#about"
                class="footer-nav-item flex justify-between"
              >
                <li>about akkoo</li>
                {/* <BsArrowRightShort /> */}
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.9,
                }}
                href="#services"
                class="footer-nav-item flex justify-between"
              >
                <li>services</li>
                {/* <BsArrowRightShort /> */}
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 1,
                }}
                href="#community"
                class="footer-nav-item flex justify-between"
              >
                <li>community</li>
                {/* <BsArrowRightShort /> */}
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 1.1,
                }}
                href="#gallery"
                class="footer-nav-item flex justify-between"
              >
                <li>gallery</li>
                {/* <BsArrowRightShort /> */}
              </motion.a>
            </ul>
          </div>
        </div>
        <div class=" border-t-2  py-2  mt-5 ">
          <div class="flex flex-col gap-5 items-start justify-between md:items-center w-11/12 m-auto  md:flex-row">
            {/* BOTTOM FOOTER LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2,
              }}
              class=" text-sm md:text-base"
            >
              &#169; Akkoo Coffee. All Rights Reserved
            </motion.div>
            {/* BBOTTOM FOOTER MIDDLE */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.3,
              }}
              class="text-sm md:text-base"
            >
              We are open 24 hours a day 7 days a week.
            </motion.h3>
            {/* BOTTOM FOOTER LEFT */}
            <div class="flex items-center gap-3 justify-center">
              <motion.img
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 1.2,
                }}
                src={facebook}
                class="w-6 sm:w-6"
              />
              <motion.img
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 1.3,
                }}
                src={instagram}
                class="w-6 sm:w-6"
              />
              <motion.img
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 1.4,
                }}
                src={twitter}
                class="w-6 sm:w-6"
              />
              <motion.img
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 1.5,
                }}
                src={tripadvisor}
                class="w-6 sm:w-6"
              />
            </div>
          </div>
        </div>
        {/* Back to top */}
        <a href="#home">
          <BsArrowLeft class="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl rounded-full bg-darkGreen w-12 h-12 p-4 rotate-90" />
        </a>
      </section>
    </div>
  );
}



// AKKOO UNIQUE SECTION CONTSNT
     <div class="grid  gap-5 mt-5 m-auto w-10/12 xxl:container blgxl:grid-cols-2">
       {/* Unique left */}
       <div class="flex flex-col gap-5 w-full h-full md:flex-row blgxl:flex-col">
         <div class="flex flex-col items-center gap-5 h-full  rounded-3xl blgxl:flex-row">
           <img
             src={uniqueOne}
             alt=""
             class="aspect-video object-cover rounded-3xl  blgxl:w-1/2 "
           />
           <div>
             <h3 class="text-xl md:text-xl font-bold">
               We make you feel at home
             </h3>
             <p class=" text-sm text-gray-600 sm:text-md">
               Not only will you enjoy our products, but our crew does a great
               job in giving an excellent service to those who walk through our
               door.
             </p>
           </div>
         </div>
         <div class="flex flex-col items-center gap-5 h-full  p-5rounded-3xl  blgxl:flex-row">
           <img
             src={uniqueTwo}
             alt=""
             class="aspect-video object-cover rounded-2xl  blgxl:w-1/2"
           />
           <div>
             <h3 class="text-xl md:text-xl font-bold">
               We keep things interesting
             </h3>
             <p class="text-sm text-gray-600 sm:text-md">
               Our menu isn’t prepared to serve for months to come. Our roasters
               hand pick one single origin and one blend to bring you an
               exceptional coffee experience each month.
             </p>
             {/* <p>Come visit us</p> */}
           </div>
         </div>
       </div>
       {/* Unique right */}
       <div class="flex flex-col gap-6 h-full bg-otherColorTransparent p-5 blgxl:p-10 rounded-3xl ">
         <img
           src={uniqueThree}
           alt=""
           class="w-full aspect-video object-cover rounded-2xl shadow-2xl"
         />
         <div>
           <h3 class="text-xl md:text-2xl font-bold">
             Our space speaks volumes
           </h3>
           <p class="text-sm text-gray-600 sm:text-md">
             Set up in an elegant fashion, our high-end coffee shop intends to
             tell the story of the birthplace and origins of the original AKKOO
             COFFEE’s culture.
           </p>
           {/* <p>Come visit us</p> */}
         </div>
       </div>
     </div>;


// ABOUT US
  {
    /* Contents container */
  }
  <div class="w-11/12 m-auto  grid  items-center justify-center gap-12 blgxl:grid-cols-2 xxl:container ">
    {/* About us section left */}
    <div class="grid gap-3 sm:grid-cols-2 ">
      <div class="w-full h-full grid gap-3">
        <img
          src={GS2}
          alt=""
          class="w-full aspect-video object-cover rounded-3xl shadow-xl sm:h-full"
        />
        <img
          src={GS5}
          alt=""
          class="w-full aspect-video object-cover rounded-3xl shadow-xl sm:h-full "
        />
      </div>
      <img src={GL2} alt="" class="w-full h-full rounded-3xl shadow-xl" />
    </div>
    {/* About us section right */}
    <div>
      <button class="text-sm text-gray-600  sm:text-base">About</button>
      <h2 class="text-2xl md:text-3xl font-bold">About Akkoo Coffee</h2>
      <div>
        <p class="text-2xl">
          {" "}
          ‘Akkoo’ is a word in the Afaan Oromoo language (one of the widely
          spoken languages in Ethiopia) meaning ‘Grandmother’
        </p>
        <p class="text-gray-600">
          Our commitment is to bring you the ultimate coffee experience, one
          that is responsibly produced from seed to cup. This is not merely an
          ideology but our everyday practice. It was on May 2019 AKKOO coffee’s
          founders Dawit Hailu and his wife Wudassie Enquberhan opened their
          first coffee shop down the street from Churchill road. Upon its
          opening, Akkoo was welcomed with encouraging responses from the
          community. It quickly became the meeting place for coffee lovers
          ranging from university students to retirees.
        </p>
        <button class="p-2 px-6 mt-6 rounded-full bg-lightGreen">
          Find out more
        </button>
      </div>
    </div>
  </div>;