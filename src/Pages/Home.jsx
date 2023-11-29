import {React, useState} from "react";
import "../Styles/home.scss";
import uniqueSectionPic from "../images/UniqueSectionPic.jpg";
import communityPic from "../images/community.jpg";
import heroImage from "../images/aboutSectionPic.jpg";
import food from "../images/food.png";
import heroVideo from "../images/hero.mp4";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowLeft } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
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
        class={`fixed  top-0  right-0 left-0 rounded-b-full px-6 blgxl:px-12 flex items-center justify-between z-20 ${
          changeColor ? " bg-whiteText shadow-sm" : "transparent"
        } transition`}
      >
        {/* Menu Items */}
        <div class="flex gap-2 items-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 500,
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
              type: "spring",
              damping: 20,
              stiffness: 500,
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 500,
              delay: 0.7,
            }}
          >
            <BookTable />
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 500,
              delay: 0.8,
            }}
            href="#menu"
            class="p-2 px-5 bg-otherColor text-darkGreen font-bold  rounded-md"
          >
            <button>Akkoo Menu</button>
          </motion.a>
        </motion.div>
      </section>
      {/* HERO Section */}
      <section
        id="home"
        class="hero-main h-screen relative grid grid-cols-1 md:grid-cols-3 blgxl:grid-cols-5 "
      >
        {/* Hero Left Section */}
        <div class=" flex flex-col md:pl-12 items-start justify-center h-screen p-5 relative col-span-1 md:col-span-2 blgxl:col-span-3">
          <div class="flex flex-col justify-start items-start  text-darkGreen font-extrabold pt-16 -space-y-2 ">
            <div class="-space-y-6 sm:-space-y-10 md:-space-y-16">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 500,
                  delay: 0.1,
                }}
                class=" font-AlfaSlabOne  tracking-widest text-5xl p-0 blgxl:text-9xl  sm:text-7xl md:text-8xl "
              >
                Akkoo
              </motion.p>
              <motion.p
                // drag
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 500,
                  delay: 0.3,
                }}
                // whileDrag={{scale: 2}}
                class="text-4xl sm:text-6xl  md:text-7xl font-extralight font-AlfaSlabOne "
              >
                coffee
              </motion.p>
            </div>
            <motion.div class="w-full flex flex-col items-start justify-start space-y-0 font-extrabold text-darkGreen pb-6 sm:w-4/5">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 500,
                  delay: 0.5,
                }}
                class="text-xl sm:text-3xl font-AlfaSlabOne"
              >
                We are open 24 / 7
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 500,
                  delay: 0.8,
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

          <motion.div class="relative border-l-4 border-l-lightGreen text-darkGreen w-full flex flex-col font-bold sm:flex-row items-center p-4  sm:px-12  sm:rounded-r-full justify-between  bottom-0 left-0 right-0 h-40 bg-otherColor">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 500,
                delay: 0.1,
              }}
              class="text-2xl md:text-2xl blgxl:text-3xl"
            >
              Traditional Cusine
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 500,
                delay: 0.2,
              }}
              class="w-1/2 my-1 h-1 bg-darkGreen sm:my-0 sm:w-2 sm:h-4"
            ></motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 500,
                delay: 0.3,
              }}
              class="text-2xl md:text-4xl blgxl:text-5xl "
            >
              Coffee
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 500,
                delay: 0.4,
              }}
              class="w-1/2 my-1 h-1 bg-darkGreen sm:my-0 sm:w-2 sm:h-4"
            ></motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 500,
                delay: 0.5,
              }}
              class="text-2xl md:text-2xl blgxl:text-3xl "
            >
              Buna Kurs
            </motion.h2>
          </motion.div>
        </div>

        {/* Hero Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 1 }}
          class="h-screen w-full hidden md:block md:col-span-1 blgxl:col-span-2"
        >
          <video
            class="w-full h-full object-cover rounded-l-full border-l-4 border-lightGreen"
            src={heroVideo}
            autoPlay
            // controls
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
        class="flex flex-col space-x-0 space-y-20 font-extrabold h-screen  w-11/12 m-auto items-center justify-center pt-32 md:flex-row md:space-x-20 md:space-y-0"
        id="unique"
      >
        {/* Left */}
        <div class="unique-left-container w-5/6 md:w-1/2 ">
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 500,
            }}
            class="w-full rounded-2xl shadow-xl border-4 border-solid border-whiteText md:w-full"
            src={uniqueSectionPic}
            alt=""
          />
        </div>

        {/* right */}
        <div class="w-full md:w-1/2 z-10">
          {/* Unique section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 500,
            }}
            class="unique-title text-3xl text-darkGreen font-bold blgxl:text-5xl "
          >
            What makes us unique?
          </motion.h2>
          {/* Unique section slider container */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 500,
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
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 500,
                delay: 0.1,
              }}
              class="p-3 text-xl bg-otherColor rounded-full"
            >
              <BsArrowLeft onClick={uniqueSlideLeft} />
            </motion.div>
            {/* Arrow right */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 500,
                delay: 0.3,
              }}
              class="p-3 text-xl bg-otherColor rounded-full -rotate-180"
            >
              <BsArrowLeft onClick={uniqueSlideRight} class=" -rotate-180" />
            </motion.div>
          </div>
        </div>
      </section>
      {/*About akkoo coffe section */}
      <section
        class="grid bg-darkGreen h-screen md:grid-cols-3 mt-28 blgxl:grid-cols-5 "
        id="about"
      >
        {/*About Akkoo left */}
        <div class="py-10 px-6 flex flex-col items-start justify-center  bg-darkGreen md:p-20 md:col-span-2 blgxl:col-span-3">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 500,
              duration: 20,
            }}
            class="about-title text-4xl font-extrabold text-whiteText md:text-6xl"
          >
            About Akkoo
          </motion.h2>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 500,
                duration: 20,
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
                type: "spring",
                damping: 15,
                stiffness: 500,
                duration: 0,
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
          <div class="space-y-4 space-x-0 mt-20 flex flex-col sm:flex-row sm:space-x-6 sm:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
                duration: 20,
              }}
            >
              <AboutUsMore />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
                duration: 20,
              }}
            >
              <OurStory />
            </motion.div>
          </div>
        </div>

        {/* About Akkoo right */}
        <motion.img
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 1,
          }}
          src={heroImage}
          class="hidden border-l-2 border-whiteText rounded-l-full h-screen w-full object-cover  md:block col-span-1 blgxl:col-span-2"
        />
      </section>
      {/* Services section */}
      <section
        class="flex flex-col items-start justify-center text-darkGreen font-extrabold w-11/12 m-auto py-32"
        id="services"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 500,
              duration: 0,
            }}
            class="services-title text-4xl font-extrabold md:text-6xl"
          >
            Akkoo services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 500,
              duration: 0,
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
              type: "spring",
              damping: 20,
              stiffness: 500,
              delay: 0.1,
            }}
            class="relative bg-otherColor p-8 shadow-lg rounded-2xl blgxl:p-12 md:p-6 md:w-1/3"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
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
              type: "spring",
              damping: 20,
              stiffness: 500,
              delay: 0.3,
            }}
            class="relative bg-lightGreen shadow-lg rounded-2xl p-8 md:scale-105 blgxl:p-12 md:p-6 md:w-1/3"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
                delay: 0.5,
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
              type: "spring",
              damping: 20,
              stiffness: 500,
              delay: 0.6,
            }}
            class="relative bg-otherColor p-8 shadow-lg rounded-2xl blgxl:p-12 md:p-6 md:w-1/3"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
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
      </section>
      {/* Communities Section */}
      <section
        class=" bg-otherColor shadow-md text-darkGreen font-extrabold blgxl:container m-auto rounded-3xl rounded-bl-3xl"
        id="community"
      >
        <div class="flex flex-col-reverse items-center justify-center w-11/12 m-auto gap-20 py-12 md:py-32 md:flex-row">
          {/* Community Section Left */}
          <div class="w-full md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 500,
              }}
              class="community-title text-4xl text-darkGreen font-bold blgxl:text-6xl"
            >
              Community
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 500,
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
                type: "spring",
                damping: 15,
                stiffness: 500,
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
                  type: "spring",
                  damping: 10,
                  stiffness: 500,
                }}
                class="p-3 text-xl bg-whiteText rounded-full"
              >
                <BsArrowLeft onClick={communitySlideLeft} />
              </motion.div>
              {/* Arrow right */}
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 500,
                }}
                class="p-3 text-xl bg-whiteText rounded-full -rotate-180"
              >
                <BsArrowLeft
                  onClick={communitySlideRight}
                  class=" -rotate-180"
                />
              </motion.div>
            </div>
          </div>
          {/* right */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 500,
            }}
            class="community-right-container w-5/6 md:w-1/2 "
          >
            <img
              src={communityPic}
              alt=""
              class="w-full rounded-2xl shadow-xl border-4 border-solid border-whiteText md:w-full"
            />
          </motion.div>
        </div>
      </section>
      {/* AKKOO MENU SECTION */}
      <section
        class="w-11/12 font-extrabold m-auto py-32 text-darkGreen"
        id="menu"
      >
        {/* Title */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 500,
            }}
            class="menu-title text-4xl font-extrabold md:text-6xl"
          >
            Akkoo Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 500,
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
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
                delay: 0.1,
              }}
              class="bg-darkGreen text-whiteText p-2 rounded-md md:p-4"
            >
              Break Fast
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
                delay: 0.2,
              }}
              class="bg-otherColor p-2 rounded-md md:p-4"
            >
              Lunch
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
                delay: 0.3,
              }}
              class="bg-otherColor p-2 rounded-md md:p-4"
            >
              Cake
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
                delay: 0.4,
              }}
              class="bg-otherColor p-2 rounded-md md:p-4"
            >
              {" "}
              Hot Drinks
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
                delay: 0.5,
              }}
              class="bg-otherColor p-2 rounded-md md:p-4"
            >
              Soft Drinks
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 500,
                delay: 0.6,
              }}
              class="bg-otherColor p-2 rounded-md md:p-4"
            >
              Special Order
            </motion.li>
          </ul>

          {/* Menu Items */}
          <div class="flex items-center gap-4">
            {/* <div>
              <BsArrowLeft
                class="p-3 text-4xl bg-otherColor rounded-full"
                onClick={menuSlideLeft}
              />
            </div> */}
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
                      type: "spring",
                      damping: 20,
                      stiffness: 500,
                      delay: 0.3,
                    }}
                    key={item.name}
                    class="flex items-center gap-4 relative shadow-md min-w-full sm:min-w-fit p-2 bg-otherColor rounded-lg"
                    id="menu-item"
                  >
                    <img src={food} alt="" class="w-1/4" />
                    {/* <div> */}
                    <div>
                      <p class="text-base pb-2 mb-2 sm:text-lg">{item.name}</p>
                      <p class="text-sm sm:text-base">{item.description}</p>
                    </div>
                    <p class="absolute top-0 text-sm  p-2 bg-whiteText right-2 sm:text-base">
                      <b>120</b> ETB
                    </p>
                    {/* </div> */}
                  </motion.div>
                );
              })}
            </div>
            {/* <div>
              <BsArrowLeft
                class="p-3 text-4xl bg-otherColor rounded-full -rotate-180"
                onClick={menuSlideRight}
              />
            </div> */}
          </div>
        </div>
      </section>
      ;{/* Gallery Section */}
      <section
        id="gallery"
        class="w-11/12 m-auto  py-10  border-t-4 border-otherColor text-darkGreen md:py-24"
      >
        <div>
          <h2 class="gallery-title text-5xl font-extrabold md:text-8xl">
            Gallery
          </h2>
          <p class="w-full text-sm font-bold md:w-3/5 sm:text-base ">
            Join the Visual Story.Experience the spirit of Akkoo coffee through
            our gallery. Each image tells a story, and we invite you to be a
            part of it. Whether you're a regular visitor or a first-time guest,
            our gallery is a window into the soul of our coffee culture.
          </p>
        </div>

        <div class="flex items-center space-x-4">
          <div class="hidden sm:flex">
            <BsArrowLeft
              class="p-3 text-4xl bg-otherColor rounded-full"
              onClick={gallerySlideLeft}
            />
          </div>
          <div
            class="scroll-container flex overflow-x-scroll items-start justify-start space-x-2.5 py-10 md:px-4"
            id="gallery-container"
          >
            {[
              {
                src: "https://source.unsplash.com/collection/582659/5",
              },
              {
                src: "https://source.unsplash.com/collection/582659/5",
              },
              {
                src: "https://source.unsplash.com/collection/582659/8",
              },
              {
                src: "https://source.unsplash.com/collection/582659/20",
              },
              {
                src: "https://source.unsplash.com/collection/582659/5",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
              {
                src: "https://source.unsplash.com/collection/582659/1",
              },
            ].map((img) => {
              return (
                <img
                  src={img.src}
                  class="scrolling-items w-11/12  aspect-video object-cover rounded-xl hover:scale-105 transition-all sm:w-1/2 md:w-1/3 lg:w-2/5"
                  id="gallery-item"
                />
              );
            })}
          </div>
          <div class="hidden sm:flex">
            <BsArrowLeft
              class="p-3 text-4xl bg-otherColor rounded-full -rotate-180"
              onClick={gallerySlideRight}
            />
          </div>
        </div>
      </section>
      {/* FOOTER SECTION */}
      <section class="relative bg-darkGreen  text-whiteText pt-10 rounded-t-3xl">
        {/* TOP OF FOOTER */}
        <div class="flex flex-col items-start justify-between w-11/12 gap-6 m-auto md:flex-row ">
          {/* LEFT */}
          <div class="p-0 w-full md:w-1/3 lg:p-6">
            <h2 class="footer-titles text-xl text-lightGreen mb-5 md:text-2xl">
              About Us
            </h2>
            <p class="text-sm lg:text-base">
              Our commitment is to bring you the ultimate coffee experience, one
              that is responsibly produced from seed to cup. This is not merely
              an ideology but our everyday practice. It was on May 2019 AKKOO
              coffee’s founders Dawit Hailu and his wife Wudassie Enquberhan
              opened their first coffee shop down the street from Churchill
              road.
            </p>
          </div>
          {/* MIDDLE */}
          <div class="p-0 w-full md:w-1/3 lg:p-6 ">
            <h1 class="footer-titles text-xl text-lightGreen mb-5 md:text-2xl">
              Where we are
            </h1>
            <div>
              {/* <CiLocationOn className="footer-middle-location-icon" /> */}
              <p class="text-sm pl-4 border-l-4 border-lightGreen lg:text-base">
                Addis Ababa, Ethiopia Churchill Road, Pass Tedros Square, Hibret
                Insurance Building, Ground Floor, Addis Ababa.{" "}
              </p>
            </div>
            <div class="flex items-center gap-5 mt-5">
              <CiLocationOn class="text-3xl lg:text-5xl" />
              <div class="text-sm lg:text-base">
                <p>+251 -905-828282</p>
                <p>+251 -905-828282</p>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div class="p-0 w-full md:w-1/3 lg:p-6">
            <h1 class="footer-titles text-xl text-lightGreen md:text-2xl mb-5">
              Quick Menu
            </h1>
            <ul class="uppercase flex flex-col space-y-4 text-sm lg:text-base">
              <a href="#home" class="footer-nav-item">
                <li>home</li>
              </a>
              <a href="#about" class="footer-nav-item">
                <li>about akkoo</li>
              </a>
              <a href="#services" class="footer-nav-item">
                <li>services</li>
              </a>
              <a href="#community" class="footer-nav-item">
                <li>community</li>
              </a>
              <a href="#gallery" class="footer-nav-item">
                <li>gallery</li>
              </a>
            </ul>
          </div>
        </div>
        <div class=" border-t-2  py-2  mt-5 ">
          <div class="flex flex-col gap-5 items-start justify-between md:items-center w-11/12 m-auto  md:flex-row">
            {/* BOTTOM FOOTER LEFT */}
            <div class=" text-sm md:text-base">
              &#169; Akkoo Coffee. All Rights Reserved
            </div>
            {/* BBOTTOM FOOTER MIDDLE */}
            <h3 class="text-sm md:text-base">
              We are open 24 hours a day 7 days a week.
            </h3>
            {/* BOTTOM FOOTER LEFT */}
            <div class="flex items-center gap-3 justify-center">
              <img src={facebook} class="w-6 sm:w-6" />
              <img src={instagram} class="w-6 sm:w-6" />
              <img src={twitter} class="w-6 sm:w-6" />
              <img src={tripadvisor} class="w-6 sm:w-6" />
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
