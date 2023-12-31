import {React, useEffect, useRef, useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AnimatePresence, motion } from "framer-motion"; // Framermotion
import "react-lazy-load-image-component/src/effects/blur.css";
import "../Styles/home.scss";
import MobileMenu from "../Components/MobileMenu";
import ImageGallery from "../Components/Gallery";
import MenuDetails from "../Components/MenuDetails";
import AboutUsMore from "../Components/AboutUsMore";
import BookTable from "../Components/BookTable";
import HeroVideo from "../Components/HeroVideo";
import {
  breakfastMenuData,
  lunchtMenuData,
  cakeMenuData,
  drinksMenuData,
  specialMenuData,
} from "../Components/menuData.js";
// Unique Icon Imgs
import uniqueHome from "../images/unique-pics/uniqueHome.png";
import uniqueOurSpace from "../images/unique-pics/uniqueOurSpace.png";
import uniqueKeepThingsInteresting from "../images/unique-pics/uniqueKeepThingsInteresting.png";
import uniqueCoffee from "../images/unique-pics/uniqueCoffee.png";
// About us Imgs
import aboutUsFour from "../images/about-us-pics/About4.jpg";
import aboutUsFive from "../images/about-us-pics/About5.jpg";
import aboutUsSeven from "../images/about-us-pics/About7.jpg";
// Menu imgs
import drink from "../images/menu-pics/drink.png";
import bunaKurs from "../images/menu-pics/bunaKurs.png";
import coffee from "../images/menu-pics/coffee.png";
import breakFast from "../images/menu-pics/breakFast.png";
import lunch from "../images/menu-pics/lunch.png";
import cake from "../images/menu-pics/cake.png";
import specialOrder from "../images/menu-pics/special.png";
import promotionPic from "../images/other-icon-pics/promotion.png";
import logo from '../images/logo.png'
// Community imgs
import pOne from "../images/community-pics/pOne.jpg";
import pTwo from "../images/community-pics/pTwo.jpg";
import pThree from "../images/community-pics/pThree.jpg";
import pFour from "../images/community-pics/pFour.jpg";
import quote from "../images/community-pics/quote.png";
// Gallery Images
import GL1 from "../images/gallery-pics/GL1.jpg";
import GL2 from "../images/gallery-pics/GL2.jpg";
import GL3 from "../images/gallery-pics/GL3.jpg";
import GL4 from "../images/gallery-pics/GL4.jpg";
import GL5 from "../images/gallery-pics/GL5.jpg";
import GS1 from "../images/gallery-pics/GS1.jpg";
import GS2 from "../images/gallery-pics/GS2.jpg";
import GS3 from "../images/gallery-pics/GS3.jpg";
import GS4 from "../images/gallery-pics/GS4.jpg";
import GS5 from "../images/gallery-pics/GS5.jpg";
import GS6 from "../images/gallery-pics/GS6.jpg";
// Footer Social Icons
import facebook from "../images/other-icon-pics/facebook.png";
import instagram from "../images/other-icon-pics/instagram.png";
import tripadvisor from "../images/other-icon-pics/tripadvisor.png";
// Thumbnails
import GL1Thumb from "../images/tumbnails/GL1-tumb.jpg";
import GL2Thumb from "../images/tumbnails/GL2-tumb.jpg";
import GL3Thumb from "../images/tumbnails/GL3-tumb.jpg";
import GL4Thumb from "../images/tumbnails/GL4-tumb.jpg";
import GL5Thumb from "../images/tumbnails/GL5-tumb.jpg";
import GS1Thumb from "../images/tumbnails/GS1-tumb.jpg";
import GS2Thumb from "../images/tumbnails/GS2-tumb.jpg";
import GS3Thumb from "../images/tumbnails/GS3-tumb.jpg";
import GS4Thumb from "../images/tumbnails/GS4-tumb.jpg";
import GS5Thumb from "../images/tumbnails/GS5-tumb.jpg";
import GS6Thumb from "../images/tumbnails/GS6-tumb.jpg";
import aboutUsOneThumb from "../images/tumbnails/About1-tumb.jpg";
import aboutUsTwoThumb from "../images/tumbnails/About2-tumb.jpg";
import aboutUsThreeThumb from "../images/tumbnails/About3-tumb.jpg";
import aboutUsFourThumb from "../images/tumbnails/About4-tumb.jpg";
import aboutUsFiveThumb from "../images/tumbnails/About5-tumb.jpg";
import aboutUsSixThumb from "../images/tumbnails/About6-tumb.jpg";
import aboutUsSevenThumb from "../images/tumbnails/About7-tumb.jpg";

// Icons
import { CiMobile2 } from "react-icons/ci";
import {
  BsArrowDown,
  BsArrowDownShort,
  BsArrowLeft,
  BsGlobe,
  BsPlayBtnFill,
  BsPlayCircleFill,
} from "react-icons/bs";
import { CgCheckO } from "react-icons/cg";

export default function Home() {
  const [menuData, setMenuData] = useState(breakfastMenuData);
  const [activeMenu, setActiveMenu] = useState("1");
  const [activeNav, setActiveNav] = useState("1");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [imageData, setImageData] = useState();
  const [menuDetailOpen, setMenuDetailOpen] = useState(false);
  const [menuDetailData, setMenuDetailData] = useState();
  const [heroVideoOpen, setHeroVideoOpen] = useState(false);
  const [openBookTable, setOpenBookTable] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // Hero section images loading states
  const [imageOneLoaded, setImageOneLoaded] = useState(false);
  const [imageTwoLoaded, setImageTwoLoaded] = useState(false);
  const [imageThreeLoaded, setImageThreeLoaded] = useState(false);
  // About us images loading states
  const [aboutUsImageOneLoaded, setAboutUsImageOneLoaded] = useState(false);
  const [aboutUsImageTwoLoaded, setAboutUsImageTwoLoaded] = useState(false);
  const [aboutUsImageThreeLoaded, setAboutUsImageThreeLoaded] = useState(false);

  const [galleryImageLoaded, setGalleryImageLoaded] = useState(false);
  const handleImageLoad = (itemId) => {
    // Set the loading state for the specific item
    setGalleryImageLoaded((prevStates) => ({
      ...prevStates,
      [itemId]: true,
    }));
  };
  // const [loadingImageIndex, setLoadingImageIndex] = useState();

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

  // Close the language modal when clicking outside the container
    const languageOpen = useRef(); // Ref and function for closing the opened Search results dropdown
    useEffect(() => {
      let closeLanguageSelectionlModalHandler = (event) => {
        if (
          languageOpen.current &&
          !languageOpen.current.contains(event.target)
        ) {
          setIsLanguageOpen(false);
        }
      };
      document.addEventListener(
        "mousedown",
        closeLanguageSelectionlModalHandler
      );
      return () => {
        document.removeEventListener(
          "mousedown",
          closeLanguageSelectionlModalHandler
        );
      };
    }, []);


  return (
    <div class="">
      {/* NAVIGATION */}
      <section
        class={`fixed top-0  right-0 left-0  z-30 ${
          changeColor ? " bg-otherColor shadow-md" : "transparent"
        } transition  m-auto xxl:container `}
      >
        <div class="w-11/12 m-auto items-center justify-between md:flex xxl:px-6 xxl:container">
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
              class="flex items-center gap-3 p-1 text-2xl font-bold "
            >
              <a href="#home" class="-space-y-3">
                <p>Akkoo</p>
                <p class="text-gray-600 text-base">Coffee</p>
              </a>
              <a href="#home">
                <img src={logo} alt="" class="w-10 sm:w-16" />
              </a>
              <div class="relative flex items-center gap-2 text-md">
                <div
                  onClick={() => {
                    setIsLanguageOpen((prevState) => !prevState);
                  }}
                  class="flex items-center gap-2 p-1 rounded hover:bg-whiteText cursor-pointer transition-colors"
                >
                  <BsGlobe />
                  <p>En</p>
                  <BsArrowDownShort />
                </div>
                <AnimatePresence initial={false}>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 500,
                        duration: 0.5,
                      }}
                      class="absolute w-36 top-8 left-0 right-0 bg-whiteText shadow-2xl py-4 px-2 rounded-lg"
                      ref={languageOpen}
                    >
                      <motion.p class="p-2 hover:bg-otherColor cursor-pointer transition-colors rounded">
                        English(En)
                      </motion.p>
                      <p class="p-2 hover:bg-otherColor cursor-pointer transition-colors rounded">
                        Amharic(Am)
                      </p>
                      <p class="p-2 hover:bg-otherColor cursor-pointer transition-colors rounded">
                        Afaan Oromo(Or)
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.h1>
            {/* Mobile navigation */}
            <MobileMenu />
          </div>
          <div class="flex gap-6">
            <ul class="hidden md:flex space-x-6 items-center capitalize px-9">
              {[
                { id: "1", title: "home", value: "#home" },
                { id: "2", title: "about", value: "#about" },
                { id: "3", title: "services", value: "#services" },
                { id: "4", title: "community", value: "#community" },
                { id: "5", title: "gallery", value: "#gallery" },
              ].map((nav) => {
                return (
                  <motion.a
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    href={nav.value}
                    onClick={() => {
                      setActiveNav(() => nav.id);
                    }}
                    class={
                      activeNav === nav.id ? `nav-item-active` : `nav-item`
                    }
                  >
                    <li>{nav.title}</li>
                  </motion.a>
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
                delay: 0.6,
              }}
            >
              <BookTable
                openBookTable={openBookTable}
                setOpenBookTable={setOpenBookTable}
              />
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
              Menu
            </motion.a>
          </div>
        </div>
      </section>
      {/* HERO Section */}
      <section
        class="relative m-auto h-full flex flex-col gap-5 z-20 pt-28 w-11/12  xxl:px-6 xxl:container"
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
              <motion.a
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.6,
                }}
                href="#about"
                class="flex items-center gap-2 px-5 py-3 rounded-xl bg-otherColor transition-colors hover:bg-lightGreen sm:px-10"
              >
                <div class=" ">
                  <CgCheckO />
                </div>
                Learn More
              </motion.a>
            </div>
          </div>
          {/* Hero above right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.6,
            }}
            onLoad={() => setImageThreeLoaded(true)}
            style={{
              background: `${!imageThreeLoaded ? `url(${GS6Thumb})` : ""}`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: `${!imageThreeLoaded ? "blur(5px)" : ""}`,
              overflow: "hidden",
            }}
            class={` relative ${
              !imageThreeLoaded ? "reveal-loaded" : "reveal-before-loaded"
            } overflow-hidden  w-full aspect-video h-full shadow-xl rounded-3xl col-span-4  sm:col-span-2`}
          >
            <LazyLoadImage
              src={GS6}
              alt=""
              class="h-full w-full object-cover "
            />
            <p
              onClick={() => setHeroVideoOpen(true)}
              class="absolute text-4xl text-otherColor top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-whiteText transition-colors sm:text-6xl"
            >
              <BsPlayCircleFill />
            </p>
          </motion.div>
        </div>
        {/* Hero Video Modal */}
        <HeroVideo
          heroVideoOpen={heroVideoOpen}
          setHeroVideoOpen={setHeroVideoOpen}
        />
        {/* Hero Below */}
        <div class="grid  gap-3 grid-cols-4 md:grid-cols-6">
          {/* Hero below left */}
          <div class="col-span-4 md:col-span-2 w-full h-full">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.7,
              }}
              class=" text-gray-600 text-sm  blgxl:text-md"
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
                class="relative w-36 h-10 bg-otherColor rounded-full sm:w-42 sm:h-16"
              >
                <p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.7,
                  }}
                  class="absolute font-bold text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-md"
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
                class="relative w-10 h-10 bg-lightGreen rounded-full hover:bg-darkGreen transition-colors hover:text-whiteText sm:w-16 sm:h-16"
              >
                <BsArrowDown class="absolute text-2xl d top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </motion.a>
            </div>
          </div>
          {/* IMAGE ONE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.6,
            }}
            onLoad={() => setImageOneLoaded(true)}
            style={{
              background: `${!imageOneLoaded ? `url(${GS2Thumb})` : ""}`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: `${!imageOneLoaded ? "blur(5px)" : ""}`,
              overflow: "hidden",
            }}
            class={`${
              !imageOneLoaded ? "reveal-loaded" : "reveal-before-loaded"
            } overflow-hidden aspect-video h-full shadow-xl rounded-3xl col-span-4  sm:col-span-2`}
          >
            <LazyLoadImage
              src={GS2}
              alt=""
              class="h-full w-full object-cover "
            />
          </motion.div>
          {/* IMAGE TWO */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.6,
            }}
            onLoad={() => setImageTwoLoaded(true)}
            style={{
              background: `${!imageTwoLoaded ? `url(${GS1Thumb})` : ""}`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: `${!imageTwoLoaded ? "blur(5px)" : ""}`,
              overflow: "hidden",
            }}
            class={`${
              !imageTwoLoaded ? "reveal-loaded" : "reveal-before-loaded"
            } overflow-hidden aspect-video h-full shadow-xl rounded-3xl col-span-4  sm:col-span-2`}
          >
            <LazyLoadImage
              src={GS1}
              alt=""
              class="h-full w-full object-cover "
            />
          </motion.div>
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
            class="hidden p-3 text-xl bg-otherColor rounded-full cursor-pointer hover:text-whiteText hover:bg-darkGreen transition-colors md:block"
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
                    <div class="absolute w-16 h-16 -top-10 left-1/2 -translate-x-1/2  bg-otherColor rounded-full border-2 border-whiteText md:w-20 md:h-20">
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
            class="hidden p-3 text-xl bg-otherColor rounded-full cursor-pointer -rotate-180 hover:text-whiteText hover:bg-darkGreen transition-colors md:block"
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
            class="p-3 text-xl bg-otherColor rounded-full cursor-pointer hover:text-whiteText hover:bg-darkGreen transition-colors"
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
            class="p-3 text-xl bg-otherColor rounded-full cursor-pointer -rotate-180 hover:text-whiteText hover:bg-darkGreen transition-colors"
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
          <div class="grid  gap-5 w-full h-full  md:grid-cols-2 blgxl:grid-cols-1">
            <div class="grid items-center gap-5 h-full blgxl:grid-cols-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.5,
                }}
                onLoad={() => setAboutUsImageOneLoaded(true)}
                style={{
                  background: `${
                    !aboutUsImageOneLoaded ? `url(${aboutUsFourThumb})` : ""
                  }`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: `${!aboutUsImageOneLoaded ? "blur(10px)" : ""}`,
                  overflow: "hidden",
                }}
                class={`${
                  !aboutUsImageOneLoaded
                    ? "reveal-loaded"
                    : "reveal-before-loaded"
                } aspect-video object-cover rounded-2xl  blgxl:w-full`}
              >
                <LazyLoadImage
                  src={aboutUsFour}
                  alt=""
                  class="w-full object-cover h-full"
                />
              </motion.div>
              <div>
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
                    Our commitment is to bring you the ultimate coffee
                    experience, one that is responsibly produced from seed to
                    cup
                  </p>
                </motion.div>
                <AboutUsMore />
              </div>
            </div>
            <div class="grid items-center gap-5 h-full blgxl:grid-cols-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.6,
                }}
                onLoad={() => setAboutUsImageTwoLoaded(true)}
                style={{
                  background: `${
                    !aboutUsImageTwoLoaded ? `url(${aboutUsSevenThumb})` : ""
                  }`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: `${!aboutUsImageTwoLoaded ? "blur(10px)" : ""}`,
                  overflow: "hidden",
                }}
                class={`${
                  !aboutUsImageTwoLoaded
                    ? "reveal-loaded"
                    : "reveal-before-loaded"
                } aspect-video object-cover rounded-2xl  blgxl:w-full`}
              >
                <LazyLoadImage
                  src={aboutUsSeven}
                  alt=""
                  class="w-full h-full object-cover "
                />
              </motion.div>
              <div>
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
                    It was on May 2019 AKKOO coffee’s founders Dawit Hailu and
                    his wife Wudassie Enquberhan opened their first coffee shop
                  </p>
                </motion.div>
                <AboutUsMore />
              </div>
            </div>
          </div>
          {/* About right */}
          <div class="flex flex-col gap-6 h-full bg-otherColor rounded-3xl p-5 md:p-10  ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.6,
              }}
              onLoad={() => setAboutUsImageThreeLoaded(true)}
              style={{
                background: `${
                  !aboutUsImageThreeLoaded ? `url(${aboutUsFiveThumb})` : ""
                }`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: `${!aboutUsImageThreeLoaded ? "blur(10px)" : ""}`,
                overflow: "hidden",
              }}
              class={`${
                !aboutUsImageThreeLoaded
                  ? "reveal-loaded"
                  : "reveal-before-loaded"
              } w-full aspect-video object-cover rounded-2xl`}
            >
              <LazyLoadImage
                src={aboutUsFive}
                alt=""
                class="w-full h-full object-cover "
              />
            </motion.div>

            <div>
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
                  Upon its opening, Akkoo was welcomed with encouraging
                  responses from the community. It quickly became the meeting
                  place for coffee lovers ranging from university students to
                  retirees
                </p>
              </motion.div>
              <AboutUsMore />
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section
        class="service-container mt-10 py-20 m-auto xxl:container"
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
              icon: specialOrder,
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
                class="flex flex-col items-center  px-6 py-10 bg-otherColor rounded-3xl  transition-shadow hover:bg-whiteText hover:shadow-2xl hover:cursor-default"
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
              {
                id: "1",
                title: "Break Fast",
                icon: breakFast,
                data: breakfastMenuData,
              },
              { id: "2", title: "Lunch", icon: lunch, data: lunchtMenuData },
              { id: "3", title: "Cake", icon: cake, data: cakeMenuData },
              { id: "4", title: "Drinks", icon: drink, data: drinksMenuData },
              {
                id: "5",
                title: "Special",
                icon: specialOrder,
                data: specialMenuData,
              },
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
                  class={`flex flex-col items-center justify-center py-2 px-2 text-sm rounded-md ${
                    activeMenu === menu.id ? "bg-lightGreen" : "bg-whiteText"
                  } cursor-pointer hover:bg-lightGreen transition-colors md:text-md  sm:px-4`}
                  onClick={() => {
                    setMenuData(() => menu.data);
                    setActiveMenu(() => menu.id);
                  }}
                >
                  <img src={menu.icon} alt="" class="w-6 " />
                  <p>{menu.title}</p>
                </motion.button>
              );
            })}
          </ul>
          {/* Menu Items */}
          <div
            class="grid grid-cols-1 gap-4 bsmmd:grid-cols-2 w-11/12 m-auto sm:w-full lg:grid-cols-3 blgxl:grid-cols-4"
            id="menu-item-container"
          >
            {menuData.map((item, index) => {
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
                  class={`p-2 shadow-sm bg-whiteText rounded-2xl`}
                >
                  <div class="flex items-center  gap-4">
                    <LazyLoadImage
                      src={item.img}
                      placeholderSrc=""
                      alt=""
                      class="w-20 aspect-square object-cover bg-otherColor rounded-full "
                    />
                    <div class="w-full">
                      <p class="text-base  font-bold pb-1 border-b-[1px] border-otherColor">
                        {item.name}{" "}
                      </p>
                      <p class="text-sm pt-1 text-gray-600">
                        {item.price}{" "}
                        {activeMenu !== "5" ? (
                          <span class="text-sm">Birr</span>
                        ) : null}
                      </p>
                      {/* <p class="text-sm text-gray-600">{item.description}</p> */}
                      <button
                        class="menu-detail-button text-xs mt-1"
                        onClick={() => {
                          setMenuDetailData(item);
                          setMenuDetailOpen(true);
                        }}
                      >
                        <p class="text-xs text-gray-600 hover:text-lightGreen">
                          Detail
                        </p>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <MenuDetails
          menuDetailData={menuDetailData}
          menuDetailOpen={menuDetailOpen}
          setMenuDetailOpen={setMenuDetailOpen}
        />
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
                class="py-2 px-4 rounded-full bg-lightGreen text-darkGreen mt-4 transition-colors hover:bg-otherColor "
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
            class="relative p-10 bg-lightGreen flex flex-col justify-center aspect-square rounded-3xl transition-colors  cursor-default hover:bg-whiteText hover:shadow-2xl"
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
            class="relative p-10 bg-otherColorTransparent flex flex-col justify-center aspect-square rounded-3xl transition-colors  cursor-default hover:bg-whiteText hover:shadow-2xl"
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
            class="relative p-10 bg-darkGreen flex flex-col justify-center aspect-square rounded-3xl text-gray-300 transition-colors  cursor-default hover:bg-whiteText hover:shadow-2xl hover:text-gray-700"
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
            <p class="text-sm  mt-2 md:text-md">
              Before AKKOO, I settled for subpar coffee in other shops. Now,
              thanks to AKKOO Coffee, I'm back to enjoying excellent black
              coffee and occasional macchiatos. The quality is truly remarkable!
            </p>
            <p class="text-xl font-bold md:text-2xl lg:text-2xl">Fitsum</p>
            <p class="text-sm md:text-xl lg:text-sm">
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
            class="relative p-10 bg-otherColorTransparent flex flex-col justify-center aspect-square rounded-3xl  cursor-default hover:bg-whiteText hover:shadow-2xl"
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
            class="flex gap-3 bg-otherColor text-sm py-2 px-4 mt-6 rounded-full items-center justify-start transition-colors hover:bg-lightGreen hover:shadow-2xl sm:text-md"
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
                  id: 1,
                  src: GS1,
                  thumb: GS1Thumb,
                },
                {
                  id: 2,
                  src: GS2,
                  thumb: GS2Thumb,
                },
                {
                  id: 3,
                  src: GS3,
                  thumb: GS3Thumb,
                },
                {
                  id: 4,
                  src: GS4,
                  thumb: GS4Thumb,
                },
                {
                  id: 5,
                  src: GS5,
                  thumb: GS5Thumb,
                },
                {
                  id: 6,
                  src: GL1,
                  thumb: GL1Thumb,
                },
                {
                  id: 7,
                  src: GL2,
                  thumb: GL2Thumb,
                },
                {
                  id: 8,
                  src: GL3,
                  thumb: GL3Thumb,
                },

                {
                  id: 9,
                  src: GL4,
                  thumb: GL4Thumb,
                },
                {
                  id: 10,
                  src: GL5,
                  thumb: GL5Thumb,
                },
              ].map((item) => {
                return (
                  <div
                    id="gallery-item"
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.7,
                      delay: 0,
                    }}
                    onLoad={() => {
                      handleImageLoad(item.id);
                    }}
                    onClick={() => {
                      setImageData(item.src);
                      setGalleryOpen(true);
                    }}
                    style={{
                      background: `${
                        !galleryImageLoaded[item.id] ? `url(${item.thumb})` : ""
                      }`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: `${
                        !galleryImageLoaded[item.id] ? "blur(5px)" : ""
                      }`,
                      overflow: "hidden",
                    }}
                    class={`${
                      !galleryImageLoaded[item.id]
                        ? "reveal-loaded"
                        : "reveal-before-loaded"
                    } scrolling-items overflow-hidden w-full aspect-video object-cover rounded-3xl cursor-pointer min-w-full  bsmmd:min-w-[32%] sm:min-w-[49%] sm:aspect-square`}
                  >
                    <LazyLoadImage
                      src={item.src}
                      alt=""
                      class="h-full w-full object-cover overflow-hidden"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Section Large Screen */}
        <div class="hidden gap-4 grid-cols-4 lg:grid-cols-4 md:grid ">
          {[
            {
              id: 1,
              src: GL3,
              thumb: GL3Thumb,
            },
            {
              id: 2,
              src: GS1,
              thumb: GS1Thumb,
            },
            {
              id: 3,
              src: GS3,
              thumb: GS3Thumb,
            },
            {
              id: 4,
              src: GS4,
              thumb: GS4Thumb,
            },
            {
              id: 5,
              src: GS5,
              thumb: GS5Thumb,
            },
            {
              id: 6,
              src: GL1,
              thumb: GL1Thumb,
            },
            {
              id: 7,
              src: GL2,
              thumb: GL2Thumb,
            },
            {
              id: 8,
              src: GS2,
              thumb: GS2Thumb,
            },

            {
              id: 9,
              src: GL4,
              thumb: GL4Thumb,
            },
          ].map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.7,
                  delay: 0,
                }}
                onLoad={() => {
                  handleImageLoad(item.id);
                }}
                onClick={() => {
                  setImageData(item.src);
                  setGalleryOpen(true);
                }}
                style={{
                  background: `${
                    !galleryImageLoaded[item.id] ? `url(${item.thumb})` : ""
                  }`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: `${!galleryImageLoaded[item.id] ? "blur(5px)" : ""}`,
                  overflow: "hidden",
                }}
                class={`${
                  !galleryImageLoaded[item.id]
                    ? "reveal-loaded"
                    : "reveal-before-loaded"
                } overflow-scroll w-full aspect-square h-full shadow-xl object-cover rounded-xl cursor-pointer ${
                  item.id === 1
                    ? "row-start-1 row-end-3"
                    : item.id === 2
                    ? "row-start-1 row-end-1"
                    : item.id === 3
                    ? "row-start-2 row-end-3"
                    : item.id === 6
                    ? "row-start-2 row-end-4"
                    : item.id === 8
                    ? "row-start-3 row-end-4 column-start-3 column-end-5"
                    : item.id === 7
                    ? "row-start-1 row-end-3"
                    : ""
                }`}
              >
                <LazyLoadImage
                  src={item.src}
                  alt=""
                  class="h-full w-full object-cover "
                />
              </motion.div>
            );
          })}
        </div>
        {/* Image Gallery Modal */}
        <ImageGallery
          imageData={imageData}
          galleryOpen={galleryOpen}
          setGalleryOpen={setGalleryOpen}
        />
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
              class="text-xl font-bold mb-5 md:text-2xl"
            >
              Akkoo Coffee
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
                class="cursor-pointer w-8"
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
                class="cursor-pointer w-8"
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
                class="cursor-pointer w-8"
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
              class="footer-titles text-xl cursor-default mb-5 md:text-2xl"
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
              class="footer-titles text-xl cursor-default mb-5 md:text-2xl "
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
              class="flex items-center gap-1 text-sm text-gray-600 md:text-md"
            >
              <button class="relative text-sm w-4 h-4 rounded-full border-2 border-gray-600 p-1">
                <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  C
                </p>
              </button>
              <p>Akkoo Coffee. All Rights Reserved</p>
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
              class="text-sm bg-whiteText shadow-sm py-1 px-4 text-gray-700 rounded-full md:text-md"
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
