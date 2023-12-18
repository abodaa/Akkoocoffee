import {React, useState} from "react";
import "../Styles/home.scss";
import MobileMenu from '../Components/MobileMenu.jsx'
import uniqueSectionPic from "../images/UniqueSectionPic.jpg";
import uniqueHome from "../images/uniqueHome.png";
import uniqueOurSpace from "../images/uniqueOurSpace.png";
import uniqueKeepThingsInteresting from "../images/uniqueKeepThingsInteresting.png";
import uniqueCoffee from "../images/uniqueCoffee.png";

import breakFast from "../images/breakFast.png";
import lunch from "../images/lunch.png";
import drinks from "../images/drinkMenu.png";
import cake from "../images/cake.png";
import specialOrder from "../images/special.png";
import promotionPic from "../images/propmotion.png";

import food from "../images/food.png";
import drink from "../images/drink.png";
import bunaKurs from "../images/bunaKurs.png";
import coffee from "../images/coffee.png";
import uniqueOne from "../images/uniqueOne.jpg";
import uniqueTwo from "../images/uniqueTwo.jpg";
import uniqueThree from "../images/uniqueThree.jpg";

import pOne from "../images/pOne.jpg";
import pTwo from "../images/pTwo.jpg";
import pThree from "../images/pThree.jpg";
import pFour from "../images/pFour.jpg";
import quote from "../images/quote.png";

import arrowDoodle from "../images/arrow.png";
import unique from "../images/unique.jpg";
// import pTwo from "../images/pTwo.png";
// import pThree from "../images/pThree.png";

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
// import GS5 from "../images/gallery/GS5.jpg";

// import food from "../images/food.png";
import heroVideo from "../images/hero.mp4";
import {
  CiLocationOn,
  CiMobile1,
  CiMobile2,
  CiMobile3,
  CiMobile4,
  CiPhone,
} from "react-icons/ci";
import {
  BsArrowBarRight,
  BsArrowDown,
  BsArrowLeft,
  BsArrowRightShort,
  BsBook,
  BsBookmarkStar,
  BsCheck,
  BsCheckAll,
  BsDot,
  BsMarkdownFill,
  BsPhone,
  BsPlay,
  BsPlayBtn,
  BsPlayFill,
} from "react-icons/bs";
import {
  CgArrowLongRight,
  CgArrowRight,
  CgCheckO,
  CgMenuRight,
  CgPhone,
} from "react-icons/cg";
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
        class={`fixed top-0  right-0 left-0  z-30 ${
          changeColor ? " bg-otherColor shadow-md" : "transparent"
        } transition  m-auto xxl:container `}
      >
        <div class="w-11/12 m-auto items-center justify-between md:flex xxl:container">
          {/* Menu Items */}
          <div class="flex gap-2 items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0,
              }}
              class="p-3 text-3xl font-bold "
            >
              Logo
            </motion.h1>
            {/* Mobile navigation */}
            <MobileMenu />
          </div>
          <div class="flex gap-6">
            <ul class="hidden md:flex space-x-6 items-center capitalize px-9">
              <motion.a
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.1,
                }}
                href="#home"
                class="nav-item"
              >
                <li>home</li>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.2,
                }}
                href="#about"
                class="nav-item"
              >
                <li>about</li>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.3,
                }}
                href="#services"
                class="nav-item"
              >
                <li>services</li>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.4,
                }}
                href="#community"
                class="nav-item"
              >
                <li>community</li>
              </motion.a>{" "}
              <motion.a
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.5,
                }}
                href="#gallery"
                class="nav-item"
              >
                <li>gallery</li>
              </motion.a>
            </ul>
          </div>

          {/* Navbar Buttons */}
          <div class="hidden items-center justify-center gap-2 pr-6 md:flex ">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.6,
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
                delay: 0.7,
              }}
              href="#menu"
              class="p-2 px-5 bg-whiteText rounded-md transition-colors hover:text-whiteText hover:bg-darkGreen"
            >
              Akkoo Menu
            </motion.a>
          </div>
        </div>
      </section>
      {/* HERO Section */}
      <section
        class="relative m-auto h-full flex flex-col gap-5 z-20 pt-28 w-11/12 xxl:container"
        id="home"
      >
        {/* Hero Above */}
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Hero above left */}
          <div class="col-span-2 flex flex-col justify-between">
            {/* <img src={arrowDoodle} alt="" class="absolute left-32 bottom-5 -z-10 opacity-10"/> */}
            <div class="">
              <div class="text-3xl sm:text-4xl -space-y-3 lg:text-5xl font-bold blgxl:text-6xl sm:-space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.1,
                  }}
                >
                  Indulge in our
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.2,
                  }}
                >
                  irresistable cusine
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.3,
                  }}
                >
                  available just for you
                </motion.p>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.4,
                }}
                class="text-sm text-gray-500 sm:text-base"
              >
                Immerse yourself in the rich tapestry of flavors, where each
                dish tells a story of tradition and authenticity. Welcome to our
                vibrant haven, where the warmth of Ethiopian hospitality meets
                the boldness of our spices
              </motion.p>
            </div>
            {/* <div class="flex  items-center justify-between "> */}
            <div class="mt-6 flex flex-wrap gap-2 text-sm sm:text-base sm:flex-nowrap md:mt-4">
              <motion.a
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.5,
                }}
                href="#menu"
                class="px-5 py-3 bg-darkGreen text-whiteText rounded-xl hover:bg-lightGreen hover:text-black transition-colors sm:px-10"
              >
                Menu
              </motion.a>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.6,
                }}
                class="flex items-center gap-2 px-5 py-3 rounded-xl bg-otherColor transition-colors hover:bg-lightGreen sm:px-10"
              >
                <div class=" ">
                  <CgCheckO />
                </div>
                Book a seat
              </motion.button>
              {/* </div> */}
            </div>
          </div>
          {/* Hero above right */}
          <div class="relative col-span-2">
            <motion.video
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.7,
                delay: 0.6,
              }}
              src={heroVideo}
              autoPlay
              controls
              scr
              loop
              alt=""
              class="aspect-square object-cover w-full h-44 rounded-3xl shadow-xl sm:h-64 md:h-72 blgxl:h-96"
            />
          </div>
        </div>
        {/* Hero Below */}
        <div class="grid  gap-3 items-start md:grid-cols-5">
          {/* Hero below left */}
          <div class="col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.7,
              }}
              class=" text-gray-600 text-sm blgxl:w-2/3 sm:text-base"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ipsam dolores dolore fuga.
            </motion.p>
            <div class="flex gap-3 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.8,
                }}
                class="relative w-36 h-10 bg-otherColor rounded-full sm:w-48 sm:h-16"
              >
                <p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.7,
                  }}
                  class="absolute font-bold text-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-lg"
                >
                  Open 24 | 7
                </p>
              </motion.div>
              {/* <div class="w-10 h-10 bg-otherColor rounded-full sm:w-16 sm:h-16"></div> */}
              <motion.a
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.7,
                }}
                href="#unique"
                class="relative w-10 h-10 bg-lightGreen rounded-full sm:w-16 sm:h-16"
              >
                <BsArrowDown class="absolute text-2xl d top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </motion.a>
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.8,
            }}
            src={GL3}
            alt=""
            class="grid aspect-video h-60 w-full object-cover shadow-xl  rounded-3xl  md:col-span-1"
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.9,
            }}
            src={GS1}
            alt=""
            class="grid aspect-video h-60 w-full object-cover shadow-xl  rounded-3xl  md:col-span-2"
          />
        </div>
      </section>
      {/* What makes us Unique section */}
      {/* HERO BG */}
      <div class="absolute -top-20 right-0 left-0 -skew-y-6 py-10 h-72  bg-otherColorTransparent w-full m-auto xxl:container"></div>
      <section
        class="unique-container m-auto py-32 mt-10 xxl:container "
        id="unique"
      >
        {/* Unique Left section */}
        <div class=" m-auto w-11/12 text-center  xxl:container">
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0,
            }}
            class="text-sm text-lightGreen sm:text-base"
          >
            Unique
          </motion.button>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            class=" font-bold text-2xl sm:text-3xl"
          >
            What makes AKKOO Unique
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            class="text-gray-600 text-sm mt-1 sm:text-lg"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </motion.p>
        </div>
        {/* Unique section slider container */}

        <div class="flex items-center justify-center gap-4 w-11/12 m-auto md:w-4/5 blgxl:w-3/5">
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
            class="hidden p-3 text-xl bg-otherColor rounded-full cursor-pointer hover:text-whiteText hover:bg-lightGreen md:block"
          >
            <BsArrowLeft />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.5,
            }}
            class="scroll-container  text-center py-10 flex overflow-scroll space-x-2.5"
            id="unique-container"
          >
            {[
              {
                title: "We make you feel at home",
                content: `Not only will you enjoy our products, but our crew does a great
                job in giving an excellent service to those who walk through our
                door. We are also the first restaurant in the country to offer
                an elderly discount. In such ways and more, we are committed to
                honoring our culture and your appetite`,
                icon: uniqueHome,
              },
              {
                title: " Our space speaks volumes",
                content: `Set up in an elegant fashion, our high-end coffee shop intends
                to tell the story of the birthplace and origins of the original
                AKKOO COFFEE’s culture. Our shops are intended for locations
                with a more conservative and low-average-higher-income customer
                base`,
                icon: uniqueOurSpace,
              },
              {
                title: "We keep things interesting",
                content: `Our menu isn’t prepared to serve for months to come. Our
                roasters hand pick one single origin and one blend to bring you
                an exceptional coffee experience each month. We are committed to
                improving the quality of our drinks and food in alignment with
                our customer needs. We value feedback to stay attentive and
                in-tune`,
                icon: uniqueKeepThingsInteresting,
              },
              {
                title: "Our Coffee",
                content: `Whether you enjoy making your coffee by grinding coffee beans or
                you prefer having it brewed all the way, AKKOO is here to serve.
                Try our selection of roasted coffee; the fruity flavored Arabica
                and the AAA graded robust flavor from Oromia region Gedame
                wereda`,
                icon: uniqueCoffee,
              },
            ].map((unique, index) => {
              return (
                <motion.div
                  // initial={{ opacity: 0, y: 100 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // transition={{
                  //   type: "tween",
                  //   duration: 0.5,
                  //   delay: 0,
                  // }}
                  class="relative  bg-otherColorTransparent p-5 py-10 rounded-xl scrolling-items min-w-full md:p-10"
                  id="unique"
                >
                  <div>
                    <h3 class="text-xl  font-bold blgxl:text-2xl">
                      {unique.title}
                    </h3>
                    <p class="text-sm  text-gray-600 blgxl:text-md">
                      {unique.content}
                    </p>
                    <div class="absolute w-16 h-16 -top-10 right-6  bg-otherColor rounded-full border-2 border-whiteText md:w-20 md:h-20">
                      <div class="relative">
                        <img
                          src={unique.icon}
                          alt=""
                          class="w-1/2 absolute left-1/2 -translate-x-1/2 top-4  md:top-5"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Arrow right - Large screens */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.5,
            }}
            onClick={uniqueSlideRight}
            class="hidden p-3 text-xl bg-otherColor rounded-full cursor-pointer -rotate-180 hover:text-whiteText hover:bg-lightGreen md:block"
          >
            <BsArrowLeft class=" -rotate-180" />
          </motion.div>
        </div>
        {/* Unique section slider arrows container */}
        <div class="flex items-center justify-center space-x-6 md:hidden">
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
            class="p-3 text-xl bg-otherColor rounded-full cursor-pointer hover:text-whiteText hover:bg-lightGreen"
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
            class="p-3 text-xl bg-otherColor rounded-full cursor-pointer -rotate-180 hover:text-whiteText hover:bg-lightGreen"
          >
            <BsArrowLeft class=" -rotate-180" />
          </motion.div>
        </div>
      </section>

      {/* About us Section */}
      <section
        class="py-20 mt-10 bg-otherColorTransparent m-auto rounded-tr-full xxl:container xxl:px-10"
        id="about"
      >
        <div class=" m-auto w-10/12  xxl:container">
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0,
            }}
            class="text-sm text-lightGreen sm:text-base"
          >
            About
          </motion.button>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            class=" font-bold text-2xl sm:text-3xl"
          >
            About AKKOO Coffee
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            class="text-gray-600 text-sm mt-1 md:w-1/2 sm:text-base"
          >
            ‘Akkoo’ is a word in the Afaan Oromoo language (one of the widely
            spoken languages in Ethiopia) meaning ‘Grandmother’
          </motion.p>
        </div>
        <div class="grid  gap-5 mt-5 m-auto w-10/12 xxl:container blgxl:grid-cols-2">
          {/* About left */}
          <div class="flex flex-col gap-5 w-full h-full  md:flex-row blgxl:flex-col">
            <div class="flex flex-col items-center gap-5 h-full blgxl:flex-row">
              <motion.img
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.5,
                }}
                src={uniqueOne}
                alt=""
                class="aspect-video object-cover rounded-3xl  blgxl:w-1/2 "
              />
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.6,
                }}
              >
                <h3 class="text-xl md:text-xl font-bold">Who we are</h3>
                <p class=" text-sm text-gray-600 sm:text-md">
                  Our commitment is to bring you the ultimate coffee experience,
                  one that is responsibly produced from seed to cup
                </p>
                <div class="flex items-center gap-2 mt-2">
                  <button class="about-button">Learn more</button>
                </div>
              </motion.div>
            </div>
            <div class="flex flex-col items-center t gap-5 h-full   rounded-3xl  blgxl:flex-row">
              <motion.img
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.6,
                }}
                src={uniqueTwo}
                alt=""
                class="aspect-video object-cover rounded-2xl  blgxl:w-1/2"
              />
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.7,
                }}
                class=""
              >
                <h3 class="text-xl md:text-xl font-bold">How we started</h3>
                <p class="text-sm text-gray-600 sm:text-md">
                  It was on May 2019 AKKOO coffee’s founders Dawit Hailu and his
                  wife Wudassie Enquberhan opened their first coffee shop
                </p>
                <div class="flex items-center gap-2 mt-2">
                  <button class="about-button">Learn more</button>
                </div>
              </motion.div>
            </div>
          </div>
          {/* About right */}
          <div class="flex flex-col gap-6 h-full bg-otherColor rounded-3xl p-5 md:p-10  ">
            <motion.img
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.7,
              }}
              src={uniqueThree}
              alt=""
              class="w-full aspect-video object-cover rounded-2xl "
            />
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.6,
              }}
            >
              <h3 class="text-xl md:text-2xl font-bold">Our Story</h3>
              <p class="text-sm text-gray-600 sm:text-md">
                Upon its opening, Akkoo was welcomed with encouraging responses
                from the community. It quickly became the meeting place for
                coffee lovers ranging from university students to retirees
              </p>
              <div class="flex items-center gap-2 mt-2">
                <button class="about-button">Learn more</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section
        class="service-container mt-10 py-20 xxl:container"
        id="services"
      >
        {/* Services section title */}
        <div class=" w-10/12 m-auto mb-12  xxl:container">
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0,
            }}
            class="text-sm text-lightGreen sm:text-base"
          >
            Services
          </motion.button>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            class=" font-bold text-2xl sm:text-3xl"
          >
            AKKOO services
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            class="text-gray-600 text-sm mt-1 blgxl:w-1/2 sm:text-base"
          >
            Most people visit us expecting only good coffee and are fairly
            impressed with our ‘Buna Kurs’ (barley flour with butter)
            accompanying it. We’re known for our excellent coffee in all its
            forms. Machiatto, Café-latte, Espresso… you name it me make it best!
          </motion.p>
        </div>

        {/* Services section contents */}
        <div class=" w-10/12 m-auto grid grid-cols-1 gap-3 sm:grid-cols-2 blgxl:grid-cols-4 blgxl:gap-5">
          {[
            {
              icon: food,
              title: "Food",
              content: `Agelgil, our renowned order, offers fasting and non-fasting options, delivered in a Mesob for groups of 10+ people`,
            },
            {
              icon: drink,
              title: "Drinks",
              content: `Enhance your refreshing moment with our premium selection of soft drinks and juices, perfectly curated to amplify vibrant flavors`,
            },
            {
              icon: coffee,
              title: "Coffee",
              content: `Explore our Ethiopian single-origin coffees carefully selected for a unique and memorable experience, perfect for enthusiasts`,
            },
            {
              icon: bunaKurs,
              title: "Buna Kurs",
              content: `Elevate your coffee ritual with our exquisite snacks, thoughtfully curated to complement the rich flavors of our brews`,
            },
          ].map((service) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.2,
                }}
                class="flex flex-col items-center  px-6 py-10 bg-otherColor rounded-3xl"
              >
                <motion.img
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.7,
                    delay: 0.3,
                  }}
                  src={service.icon}
                  alt=""
                  class="w-1/3"
                />
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.7,
                    delay: 0.4,
                  }}
                  class="text-center mt-3"
                >
                  <p class="text-2xl font-bold md:text-3xl">{service.title}</p>
                  <p class="text-sm text-gray-600 md:text-md">
                    {service.content}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Akkoo menu section */}
      <section class=" m-auto mt-10 py-20 xxl:container" id="menu">
        {/* Menu section title */}
        <div class=" m-auto  text-center w-3/4 sm:w-11/12 xxl:container">
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0,
            }}
            class="text-sm text-lightGreen sm:text-base "
          >
            Menu
          </motion.button>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            class=" font-bold text-2xl sm:text-3xl"
          >
            Akkoo Menu
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            class="text-gray-600 text-sm mt-1 sm:text-base"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </motion.p>
        </div>
        <div class="bg-otherColorTransparent px-2 py-10 mt-6 m-auto sm:rounded-3xl md:w-11/12  sm:w-11/12 sm:py-12 sm:px-10 ">
          {/* Menu selection container*/}
          <ul class="flex items-center flex-wrap gap-1 justify-center m-auto my-5 w-full text-sm md:text-base sm:gap-2">
            {[
              { title: "Break Fast", icon: breakFast },
              { title: "Lunch", icon: lunch },
              { title: "Cake", icon: cake },
              { title: "Drinks", icon: drinks },
              { title: "Special", icon: specialOrder },
            ].map((menu) => {
              return (
                <motion.button
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.7,
                    delay: 0.1,
                  }}
                  class="flex flex-col items-center justify-center py-2 px-2 text-sm rounded-md bg-otherColor cursor-pointer hover:bg-lightGreen md:text-md  sm:px-4"
                >
                  <img src={menu.icon} alt="" class="w-6 " />
                  <p>{menu.title}</p>
                </motion.button>
              );
            })}
          </ul>
          {/* Menu Items */}
          <div class="flex items-center gap-4 ">
            <div
              class="grid grid-cols-1 gap-8 bsmmd:grid-cols-2 w-11/12 m-auto sm:w-full lg:grid-cols-3 blgxl:grid-cols-4"
              id="menu-item-container"
            >
              {breakfastMenuData.map((item, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.7,
                      delay: 0.4,
                    }}
                    key={item.name}
                    class={`relative flex flex-col justify-start items-center text-center gap-1 p-8 shadow-sm bg-otherColor rounded-2xl`}
                  >
                    {/* <img src={food} alt="" class="w-1/5" /> */}
                    <p class="text-base  font-bold">{item.name} </p>
                    <p class="text-sm text-gray-600">{item.description}</p>
                    <p class="absolute -bottom-6 rounded-lg bg-otherColor p-2 text-lg font-bold ">
                      {item.price} <b class="text-sm">Birr</b>
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Promotion section */}
      <section class="bg-darkGreen mt-10  m-auto sm:rounded-3xl sm:w-11/12 md:mt-20  xxl:container">
        <div class=" flex flex-col items-center justify-center gap-11 w-5/6  m-auto md:w-2/3 md:flex-row">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.6,
            }}
            src={promotionPic}
            alt=""
            class="hidden w-36 -mt-24  md:block"
          />
          <div class="flex flex-col text-lightGreen py-6  md:py-10">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.7,
                delay: 0.2,
              }}
            >
              Hungry?
            </motion.p>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.7,
                  delay: 0.3,
                }}
                class="text-xl text-whiteText items-start lg:text-3xl blgxl:text-5xl"
              >
                We will home deliver !
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.7,
                  delay: 0.4,
                }}
                class="w-full text-sm text-gray-400 blgxl:w-11/12 lg:text-md"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, quia libero mollitia.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.7,
                  delay: 0.5,
                }}
                class="py-2 px-4 rounded-full bg-lightGreen text-darkGreen mt-4"
              >
                Order Now
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Community section */}
      <section class="w-11/12  m-auto py-20 mt-10 xxl:container" id="community">
        {/* Community section title */}
        <div class="mb-12">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0,
            }}
            class="text-sm text-lightGreen sm:text-base"
          >
            Community
          </motion.button>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            class=" font-bold text-2xl sm:text-3xl"
          >
            Our Community
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            class="text-gray-600 text-sm mt-1 blgxl:w-1/2 sm:text-base"
          >
            Every purchase of coffee at AKKOO positively impacts social and
            environmental conditions at the source.AKKOO sources its coffee from
            west Ethiopia, specifically from Wellega zone Gedame wereda in
            Oromia region.
          </motion.p>
        </div>
        {/* Community section contents */}
        <div class="grid grid-cols-1 gap-2 place-items-center bsmmd:grid-cols-2 lg:grid-col-2 blgxl:grid-cols-4">
          {/* Second Community */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.3,
            }}
            class="relative p-10 bg-lightGreen flex flex-col justify-center aspect-square rounded-3xl"
          >
            {/* Quote Img */}
            <img
              src={quote}
              alt=""
              class="absolute w-20 opacity-20 bottom-4 right-6"
            />
            {/* Person Img */}
            <img
              src={pTwo}
              alt=""
              class="absolute -top-10 right-1/2 translate-x-1/2 w-1/4 border-4 border-whiteText aspect-square object-cover rounded-full"
            />

            <p class="text-sm text-gray-800 mt-2 md:text-md">
              Joined Dawit and Wudassie in 2004 at Wudassie Souvenirs, took on
              various roles. Now AKKOO's Operations Manager, I handle café
              management with a 'Keep calm and let TG handle it!' mindset.
            </p>
            <p class="text-xl font-bold md:text-2xl lg:text-2xl">Tigist</p>
            <p class="text-sm text-gray-800 md:text-xl lg:text-sm">
              Operations Manager
            </p>
          </motion.div>
          {/* first community */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.4,
            }}
            class="relative p-10 bg-otherColorTransparent flex flex-col justify-center aspect-square rounded-3xl"
          >
            {/* Quote Img */}
            <img
              src={quote}
              alt=""
              class="absolute w-20 opacity-20 bottom-4 right-6"
            />
            {/* Person Img */}
            <img
              src={pThree}
              alt=""
              class="absolute -top-10 right-1/2 translate-x-1/2 w-1/4 border-4 border-whiteText aspect-square object-cover rounded-full"
            />
            <p class="text-sm text-gray-600 mt-2 md:text-md">
              I savor coffee for its diverse aromas and flavors, influenced by
              my choice of beans and brewing method. Beyond personal enjoyment,
              I appreciate its power to unite people and impact lives.
            </p>
            <p class="text-xl font-bold md:text-2xl lg:text-2xl">Abi</p>
            <p class="text-sm text-gray-600 md:text-xl lg:text-sm">Baresta</p>
          </motion.div>

          {/* Third Community */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.5,
            }}
            class="relative p-10 bg-darkGreen flex flex-col justify-center aspect-square rounded-3xl"
          >
            {/* Quote Img */}
            <img
              src={quote}
              alt=""
              class="absolute w-20 opacity-20 bottom-4 right-6"
            />
            {/* Person Img */}
            <img
              src={pOne}
              alt=""
              class="absolute -top-10 right-1/2 translate-x-1/2 w-1/4 border-4 border-whiteText aspect-square object-cover rounded-full"
            />
            <p class="text-sm text-gray-300 mt-2 md:text-md">
              Before AKKOO, I settled for subpar coffee in other shops. Now,
              thanks to AKKOO Coffee, I'm back to enjoying excellent black
              coffee and occasional macchiatos. The quality is truly remarkable!
            </p>
            <p class="text-xl font-bold text-whiteText md:text-2xl lg:text-2xl">
              Fitsum
            </p>
            <p class="text-sm text-gray-300 md:text-xl lg:text-sm">
              Administrative & Finance Head
            </p>
          </motion.div>

          {/* Fourth community */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.6,
            }}
            class="relative p-10 bg-otherColorTransparent flex flex-col justify-center aspect-square rounded-3xl"
          >
            {/* Quote Img */}
            <img
              src={quote}
              alt=""
              class="absolute w-20 opacity-20 bottom-4 right-6"
            />
            {/* Person Img */}
            <img
              src={pFour}
              alt=""
              class="absolute -top-10 right-1/2 translate-x-1/2 w-1/4 border-4 border-whiteText aspect-square object-cover rounded-full"
            />
            <p class="text-sm text-gray-600 mt-2 md:text-md">
              I love tea – especially with cinnamon. Here at Akkoo we know how
              to make great tea, cinnamon spiced, lemon squeezed or a simple
              black tea, I have no doubt you’ll enjoy it.
            </p>
            <p class="text-xl font-bold md:text-2xl lg:text-2xl">Kidi</p>
            <p class="text-sm text-gray-600 md:text-xl lg:text-sm">
              Purchasing{" "}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}

      <section
        id="gallery"
        class="w-11/12 py-20 mt-10 text-darkGreen  m-auto  xxl:container"
      >
        {/* Gallery section title */}
        <div class="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0,
            }}
            class="text-sm text-lightGreen sm:text-base"
          >
            Gallery
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.1,
            }}
            class=" font-bold text-2xl sm:text-3xl"
          >
            Explore Our Gallery
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.2,
            }}
            class="text-gray-600 text-sm mt-1 blgxl:w-1/2 sm:text-base"
          >
            Visual Feast, dive into our Culinary Gallery for a taste of flavor,
            passion, and culinary excellence. Let each image tell you the
            delicious story behind our dishes.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.3,
            }}
            class="flex gap-3 bg-otherColor text-sm py-2 px-4 mt-6 rounded-full items-center justify-start sm:text-md"
          >
            <h2>Find us on Instagram</h2>
            <img src={instagram} class="w-6" />
          </motion.button>
        </div>

        {/* Gallery Section Mobile */}
        <section
          id="gallery-mobile"
          class="  pb-10  text-darkGreen m-auto md:hidden"
        >
          {/* Gallery buttons */}
          <div class="flex gap-5 items-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0,
              }}
              class=""
            >
              <BsArrowLeft
                class="p-3 text-4xl bg-otherColor rounded-full"
                onClick={gallerySlideLeft}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.1,
              }}
              class=""
            >
              <BsArrowLeft
                class="p-3 text-4xl bg-otherColor rounded-full -rotate-180"
                onClick={gallerySlideRight}
              />
            </motion.div>
          </div>
          <div class="">
            <div
              class="scroll-container flex overflow-x-scroll items-start justify-start space-x-2.5"
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
              ].map((img) => {
                return (
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0,
                    }}
                    src={img.src}
                    class="scrolling-items w-full aspect-video  object-cover rounded-xl bsmmd:w-1/3 sm:w-1/2  sm:aspect-square"
                    id="gallery-item"
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Section Large Screen */}
        <div class="hidden gap-4 grid-cols-4 lg:grid-cols-4 md:grid">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
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
            initial={{ opacity: 0, y: 50 }}
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
            initial={{ opacity: 0, y: 50 }}
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
            initial={{ opacity: 0, y: 50 }}
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
            initial={{ opacity: 0, y: 50 }}
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
            initial={{ opacity: 0, y: 50 }}
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
            initial={{ opacity: 0, y: 50 }}
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.8,
            }}
            src={GS4}
            class="w-full h-full  object-cover rounded-xl  "
          />
        </div>
      </section>
      {/* FOOTER SECTION */}
      <section class="relative bg-otherColorTransparent pt-10 rounded-t-3xl xxl:container m-auto">
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
              class="text-xl  mb-5 md:text-2xl"
            >
              Logo
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2,
              }}
              class="text-sm text-gray-600 lg:text-md"
            >
              Committed to an exceptional, responsibly sourced coffee
              experience. Founded by Dawit Hailu and Wudassie Enquberhan in May
              2019 near Churchill Road.
            </motion.p>
            <div class="flex items-center gap-3 mt-6 ">
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0,
                }}
                src={facebook}
                class="cursor-pointer opacity-80  w-8 hover:scale-105 hover:opacity-100"
              />
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.1,
                }}
                src={instagram}
                class="cursor-pointer opacity-80  w-8 hover:scale-105 hover:opacity-100"
              />
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.2,
                }}
                src={tripadvisor}
                class="cursor-pointer opacity-80  w-8 hover:scale-105 hover:opacity-100"
              />
            </div>
          </div>
          {/* MIDDLE */}
          <div class="p-0 w-full md:w-1/3 lg:p-6 ">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.3,
              }}
              class="footer-titles text-xl mb-5 md:text-2xl"
            >
              Where we are
            </motion.button>
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
              <p class="text-sm pl-4 border-l-4 border-gray-600 text-gray-600 lg:text-md">
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
              <CiMobile2 class="text-3xl text-gray-600 lg:text-5xl" />
              <div class="text-sm text-gray-600 lg:text-base">
                <p>+251 -905-828282</p>
                <p>+251 -905-828282</p>
              </div>
            </motion.div>
          </div>
          {/* RIGHT */}
          <div class="p-0 w-full md:w-1/3 lg:p-6">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.6,
              }}
              class="footer-titles text-xl mb-5 md:text-2xl "
            >
              Quick Menu
            </motion.button>
            <ul class="capitalize text-gray-600 flex flex-col space-y-4 text-sm lg:text-md">
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.7,
                }}
                href="#home"
                class="footer-nav-item hover:text-black"
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
                class="footer-nav-item hover:text-black"
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
                class="footer-nav-item hover:text-black"
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
                class="footer-nav-item hover:text-black"
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
                class="footer-nav-item hover:text-black"
              >
                <li>gallery</li>
                {/* <BsArrowRightShort /> */}
              </motion.a>
            </ul>
          </div>
        </div>
        <div class="border-t-2 border-gray-300  py-6  mt-5 ">
          <div class="flex flex-col gap-5 items-center  justify-between md:items-center w-11/12 m-auto sm:text-center  sm:flex-row sm:items-start">
            {/* BOTTOM FOOTER LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2,
              }}
              class=" text-sm text-gray-600 md:text-md"
            >
              Akkoo Coffee. All Rights Reserved
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
              class="text-sm text-gray-600 md:text-md"
            >
              We are open 24 hrs a week.
            </motion.h3>
            {/* BOTTOM FOOTER LEFT */}
          </div>
        </div>
        {/* Back to top */}
        <a href="#home">
          <BsArrowLeft class="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl rounded-full bg-whiteText w-12 h-12 p-4 rotate-90 transition-all hover:scale-110" />
        </a>
      </section>
    </div>
  );
}
