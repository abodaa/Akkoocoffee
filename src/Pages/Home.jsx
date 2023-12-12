import {React, useState} from "react";
import "../Styles/home.scss";
import uniqueSectionPic from "../images/UniqueSectionPic.jpg";
import uniqueHome from "../images/uniqueHome.png";
import uniqueOurSpace from "../images/uniqueOurSpace.png";
import uniqueKeepThingsInteresting from "../images/uniqueKeepThingsInteresting.png";
import uniqueCoffee from "../images/uniqueCoffee.png";

import uniqueOne from "../images/uniqueOne.jpg";
import uniqueTwo from "../images/uniqueTwo.jpg";
import uniqueThree from "../images/uniqueThree.jpg";
import heroImage from "../images/aboutSectionPic.jpg";
import unique from "../images/unique.jpg";
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
  BsPlay,
  BsPlayBtn,
  BsPlayFill,
} from "react-icons/bs";
import { CgArrowLongRight, CgArrowRight, CgMenuRight } from "react-icons/cg";
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
        class={`fixed top-0  right-0 left-0  z-20 ${
          changeColor ? " bg-whiteText shadow-sm" : "transparent"
        } transition  m-auto xxl:container `}
      >
        <div class="w-11/12 m-auto  flex items-center justify-between xxl:container">
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
              class="p-3 text-3xl  text-lightGreen "
            >
              Logo
            </motion.h1>
          </div>
          <div class="flex gap-6">
            <ul class="hidden md:flex space-x-6 items-center capitalize px-9">
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
          </div>

          {/* Navbar Buttons */}
          <div class="hidden items-center justify-center gap-2 pr-6 md:flex ">
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
          </div>
        </div>
      </section>
      {/* HERO Section */}
      <section
        class="m-auto h-full flex flex-col gap-5 pt-28 w-11/12 xxl:container"
        id="home"
      >
        {/* Hero Above */}
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Hero above left */}
          <div class="col-span-2 flex flex-col justify-between">
            <div class="">
              <div class="text-3xl sm:text-4xl -space-y-3 lg:text-5xl blgxl:text-6xl sm:-space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.1,
                  }}
                >
                  Indulge in our
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.2,
                  }}
                >
                  irresistable cusine
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.3,
                  }}
                >
                  available just for you
                </motion.p>
              </div>
              <p class="text-sm text-gray-500 sm:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis consequuntur facilis repellat ullam magni reiciendis
                blanditiis aspernatur sapiente.
              </p>
            </div>
            {/* <div class="flex  items-center justify-between "> */}
            <div class="mt-6 flex flex-wrap gap-2 text-sm sm:text-base sm:flex-nowrap md:mt-4">
              <button class="px-5 py-3 bg-darkGreen text-whiteText rounded-xl  sm:px-10">
                Menu
              </button>
              <button class="flex items-center gap-2 px-5 py-3 rounded-xl bg-otherColorTransparent  sm:px-10">
                <div class="text-darkGreen ">
                  <BsPlayFill />
                </div>
                Book a seat
              </button>
              {/* </div> */}
            </div>
          </div>
          {/* Hero above right */}
          <div class="relative col-span-2">
            <motion.video
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
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
            {/* <div class="absolute top-4 -left-32 w-60 h-20 bg-otherColor  font-extrabold text-2xl rounded-3xl">
              <p class="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                Open 24 / 7
              </p>
            </div> */}
          </div>
          {/* <div class="col-span-1">
            <img
              src={GL4}
              alt=""
              class="aspect-square object-cover w-full h-96  rounded-3xl"
            />
          </div> */}
        </div>
        {/* Hero Below */}
        <div class="grid  gap-3 items-center md:grid-cols-5">
          {/* Hero below left */}
          <div class="col-span-2">
            <p class=" text-gray-600 text-sm blgxl:w-2/3 sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ipsam dolores dolore fuga.
            </p>
            <div class="flex gap-3 mt-9">
              <div class="w-20 h-10 bg-otherColor rounded-full sm:w-40 sm:h-16"></div>
              <div class="w-10 h-10 bg-otherColor rounded-full sm:w-16 sm:h-16"></div>
              <div class="w-10 h-10 bg-lightGreen rounded-full sm:w-16 sm:h-16"></div>
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.7,
            }}
            src={GL3}
            alt=""
            class="grid aspect-video h-60 w-full object-cover shadow-xl  rounded-3xl  md:col-span-1"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.8,
            }}
            src={GS1}
            alt=""
            class="grid aspect-video h-60 w-full object-cover shadow-xl  rounded-3xl  md:col-span-2"
          />
        </div>
      </section>
      {/* What makes us Unique section */}
      <section class="unique-container mt-20  ">
        {/* Unique Left section */}
        {/* <div class="absolute -top-20 -skew-y-6 py-10 h-44 bg-otherColor m-auto w-full rounded-t-3xl"></div> */}
        <div class=" m-auto w-11/12 text-center  xxl:container">
          <button class="text-sm text-gray-600 sm:text-base py-1 px-6 bg-otherColorTransparent  rounded-lg">
            Unique
          </button>
          <p class=" font-bold text-2xl sm:text-3xl">What makes AKKOO Unique</p>
          <p class="text-gray-600 text-sm mt-1 sm:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
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
            {/* First Description */}
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
            ].map((unique) => {
              return (
                <div
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
                </div>
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
      <section class="py-32 mt-32 bg-otherColor" id="about">
        {/* Contents container */}
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
                ‘Akkoo’ is a word in the Afaan Oromoo language (one of the
                widely spoken languages in Ethiopia) meaning ‘Grandmother’
              </p>
              <p class="text-gray-600">
                Our commitment is to bring you the ultimate coffee experience,
                one that is responsibly produced from seed to cup. This is not
                merely an ideology but our everyday practice. It was on May 2019
                AKKOO coffee’s founders Dawit Hailu and his wife Wudassie
                Enquberhan opened their first coffee shop down the street from
                Churchill road. Upon its opening, Akkoo was welcomed with
                encouraging responses from the community. It quickly became the
                meeting place for coffee lovers ranging from university students
                to retirees.
              </p>
              <button class="p-2 px-6 mt-6 rounded-full bg-lightGreen">
                Find out more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
