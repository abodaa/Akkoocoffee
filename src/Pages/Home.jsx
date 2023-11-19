import React from "react";
import "../Styles/home.scss";
import uniqueSectionPic from "../images/UniqueSectionPic.jpg";

import menuItemImg from "../images/menuImg.png";
import communityPic from "../images/community.jpg";
import heroImage from "../images/aboutSectionPic.jpg";

import { CiCoffeeBean, CiLocationOn } from "react-icons/ci";
import { MdFastfood } from "react-icons/md";

import { PiBowlFoodThin } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";

import { BsArrowLeft } from "react-icons/bs";
import breakfastMenuData from "../Components/menuData.js";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

import AboutUsMore from "../Components/AboutUsMore";
import OurStory from "../Components/OurStory";

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
    slider.scrollLeft = slider.scrollLeft - sliderItem.offsetWidth - 15;
    console.log(slider.offsetWidth);
  };
  const menuSlideRight = () => {
    let slider = document.getElementById("menu-item-container");
    let sliderItem = document.getElementById("menu-item");
    slider.scrollLeft = slider.scrollLeft + sliderItem.offsetWidth + 15;
    console.log(sliderItem.offsetWidth);
  };

  return (
    <div class="home-main-container">
      {/* NAVIGATION */}
      <section className="fixed  top-0 right-0 left-0 flex items-center justify-between px-3 z-20  ">
        <h1 className="p-4 bg-lightGreen text-xl text-darkGreen font-extrabold">
          LOGO
        </h1>
        {/* Menu Items */}
        <CgMenuRight class="flex fixed text-4xl top-4 right-5 z-30 md:hidden" />
        <ul class="hidden md:flex space-x-6 items-center uppercase">
          {[
            { val: "home", link: "#home" },
            { val: "about", link: "#about" },
            { val: "services", link: "#services" },
            { val: "community", link: "#community" },
            { val: "gallery", link: "#gallery" },
          ].map((nav) => {
            return (
              <a href={nav.link} class="nav-item ">
                <li>{nav.val}</li>
              </a>
            );
          })}
          <div class="flex items-center justify-center gap-2">
            <a
              href="#menu"
              class="p-2 px-5 bg-darkGreen text-lightGreen rounded-md"
            >
              {" "}
              <button>Akkoo Menu</button>
            </a>
            <a
              href="#menu"
              class="p-2 px-5 bg-whiteText text-darkGreen rounded-md"
            >
              {" "}
              <button>Book</button>
            </a>
          </div>
        </ul>
      </section>
      {/* HERO Section */}
      <section
        id="home"
        class="h-screen grid grid-cols-1 md:grid-cols-3 blgxl:grid-cols-5 "
      >
        {/* Hero Image */}
        <img
          src={heroImage}
          class="h-screen w-full object-cover rounded-none hidden md:block md:col-span-1 blgxl:col-span-2"
        />
        {/* Hero Right Section */}
        <div class="bg-otherColor flex flex-col items-center justify-center h-screen p-5 relative col-span-1 md:col-span-2 blgxl:col-span-3">
          <div class="hidden md:flex absolute -left-10 bottom-6 bg-otherColor z-10 rounded-full ">
            <div class="w-28 h-28 relative">
              <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex w-20 h-20 bg-darkGreen text-lightGreen  p-5 font-bold items-center justify-center rounded-full">
                {/* Open 24 / 7 */}
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-end items-start -space-y-9 sm:-space-y-16 text-6xl sm:text-8xl blgxl:text-9xl blgxl:-space-y-24 text-darkGreen font-extrabold px-3">
            <p>Akkoo</p>
            <p class="text-4xl sm:text-6xl blgxl:text-7xl ">coffee</p>
          </div>
          {/* <div class="text-xl bg-darkGreen p-0.5 w-1/6 px-9 text-darkGreenTransparent rounded-full"></div> */}
          <div class="flex flex-col mt-9 items-center justify-center space-x-0 space-y-5 sm:flex-row sm:space-x-3 sm:space-y-0">
            <div class="flex w-full h-full items-start space-x-2 text-darkGreen p-3 bg-lightGreen shadow-lg rounded-lg ">
              <CiCoffeeBean class="text-3xl md:text-4xl" />
              <div>
                <p class="text-xl font-extrabold blgxl:text-2xl ">Coffee</p>
                <p class="text-sm blgxl:text-base ">Fine Ethiopian Coffee</p>
              </div>
            </div>
            <div class="flex w-full h-full items-start space-x-2 text-lightGreen p-3 bg-darkGreen shadow-lg rounded-lg ">
              <PiBowlFoodThin class="text-3xl md:text-4xl" />
              <div>
                <p class="text-xl font-extrabold blgxl:text-2xl">Food</p>
                <p class="text-sm blgxl:text-base ">
                  Traditional Ethiopian Cusine
                </p>
              </div>
            </div>
            <div class="flex w-full h-full items-start space-x-2 text-darkGreen  p-3 bg-whiteText shadow-lg rounded-lg">
              <MdFastfood class="text-3xl md:text-4xl" />
              <div>
                <p class="text-xl font-extrabold blgxl:text-2xl">Buna Kurs</p>
                <p class="text-sm blgxl:text-base ">
                  Snacks Served With Coffee
                </p>
              </div>
            </div>
          </div>
          <a
            class="absolute bottom-9 right-6 p-4 rounded-full bg-whiteText"
            href="#unique"
          >
            <BsArrowLeft class="-rotate-90 font-extrabold" />
          </a>
        </div>
      </section>

      {/* What makes Akkoo Unique section */}
      <section
        class="flex flex-col space-x-0 space-y-20   w-11/12 m-auto items-center justify-center pt-32 md:flex-row md:space-x-20 md:space-y-0"
        id="unique"
      >
        {/* Left */}
        <div class="unique-left-container w-5/6 md:w-1/2 ">
          <img
            class="w-full rounded-2xl shadow-xl border-4 border-solid border-whiteText md:w-full"
            src={uniqueSectionPic}
            alt=""
          />
        </div>

        {/* right */}
        <div class="w-full md:w-1/2 z-10">
          {/* Unique section Title */}
          <h2 class="unique-title text-3xl text-darkGreen font-bold blgxl:text-5xl">
            What makes us unique?
          </h2>
          {/* Unique section slider container */}
          <div class="flex overflow-scroll space-x-2.5" id="unique-container">
            {/* First Description */}
            <div class="min-w-full" id="unique">
              <h3 class="text-2xl text-darkGreen font-bold blgxl:text-3xl">
                We make you feel at home.
              </h3>
              <p class="text-sm text-darkGreenTransparent w-11/12 blgxl:text-base">
                After tasting our fine coffee and eating our selection of
                delicious traditional foods, we don’t doubt you’ll come again to
                become a loyal customer. Whether you order Coffee, Macchiato,
                the house Omelette, Chechebsa, Tibs, Tibs Firfer, or Shiro
                you'll be completely satisfied.
              </p>
            </div>
            {/* Second description */}
            <div class="min-w-full" id="unique">
              <h3 class="text-2xl text-darkGreen font-bold blgxl:text-3xl">
                Our space speaks volumes.
              </h3>
              <p class="text-sm text-darkGreenTransparent w-11/12 blgxl:text-base">
                After tasting our fine coffee and eating our selection of
                delicious traditional foods, we don’t doubt you’ll come again to
                become a loyal customer. Whether you order Coffee, Macchiato,
                the house Omelette, Chechebsa, Tibs, Tibs Firfer, or Shiro
                you'll be completely satisfied.
              </p>
            </div>
            {/* Third description */}
            <div class="min-w-full" id="unique">
              <h3 class="text-2xl text-darkGreen font-bold blgxl:text-3xl">
                We keep things interesting.
              </h3>
              <p class="text-sm text-darkGreenTransparent w-11/12 blgxl:text-base">
                After tasting our fine coffee and eating our selection of
                delicious traditional foods, we don’t doubt you’ll come again to
                become a loyal customer. Whether you order Coffee, Macchiato,
                the house Omelette, Chechebsa, Tibs, Tibs Firfer, or Shiro
                you'll be completely satisfied.
              </p>
            </div>
            {/* Fourth description */}
            <div class="min-w-full" id="unique">
              <h3 class="text-2xl text-darkGreen font-bold blgxl:text-3xl">
                Our Coffee.
              </h3>
              <p class="text-sm text-darkGreenTransparent w-11/12 blgxl:text-base">
                After tasting our fine coffee and eating our selection of
                delicious traditional foods, we don’t doubt you’ll come again to
                become a loyal customer. Whether you order Coffee, Macchiato,
                the house Omelette, Chechebsa, Tibs, Tibs Firfer, or Shiro
                you'll be completely satisfied.
              </p>
            </div>
          </div>
          {/* Unique section slider arrows container */}
          <div class="flex items-center mt-8 space-x-6">
            {/* Arrow left */}
            <BsArrowLeft
              class="p-3 text-4xl bg-otherColor rounded-full"
              onClick={uniqueSlideLeft}
            />
            {/* Arrow right */}
            <BsArrowLeft
              class="p-3 text-4xl bg-otherColor rounded-full -rotate-180"
              onClick={uniqueSlideRight}
            />
          </div>
        </div>
      </section>

      {/*About akkoo coffe section */}
      <section class="grid md:grid-cols-3 mt-28 blgxl:grid-cols-5 " id="about">
        {/*About Akkoo left */}
        <div class="py-10 px-6 flex flex-col items-start justify-center  bg-lightGreen md:p-20 md:col-span-2 blgxl:col-span-3">
          <h2 class="about-title text-4xl font-extrabold text-darkGreen md:text-6xl">
            About Akkoo
          </h2>
          <div>
            <h3 class="text-lg font-bold text-darkGreen blgxl:text-2xl ">
              ‘Akkoo’ is a word in the Afaan Oromoo language (one of the widely
              spoken languages in Ethiopia) meaning ‘Grandmother’
            </h3>
            <p class="text-sm text-darkGreenTransparent pt-6 blgxl:text-base">
              Our commitment is to bring you the ultimate coffee experience, one
              that is responsibly produced from seed to cup. This is not merely
              an ideology but our everyday practice. It was on May 2019 AKKOO
              coffee’s founders Dawit Hailu and his wife Wudassie Enquberhan
              opened their first coffee shop down the street from Churchill
              road. Upon its opening, Akkoo was welcomed with encouraging
              responses from the community. It quickly became the meeting place
              for coffee lovers ranging from university students to retirees.
            </p>
          </div>
          <div class="space-y-4 space-x-0 mt-20 flex flex-col sm:flex-row sm:space-x-6 sm:space-y-0">
            <AboutUsMore />
            <OurStory />
          </div>
        </div>

        {/* About Akkoo right */}
        <img
          src={heroImage}
          class="hidden h-screen w-full object-cover rounded-none md:block col-span-1 blgxl:col-span-2"
        />
      </section>

      {/* Services section */}
      <section
        class="flex flex-col items-start justify-center text-darkGreen w-11/12 m-auto py-32"
        id="services"
      >
        <div>
          <h2 class="services-title text-4xl font-extrabold md:text-6xl">
            Akkoo services
          </h2>
          <p class="text-darkGreenTransparent w-full sm:w-2/3">
            Akkoo has the best catering service should you choose to have
            delicious local cusine and Ethiopian coffee at your event.
          </p>
        </div>

        <div class="flex flex-col space-x-0 space-y-20 mt-14 md:flex-row md:space-x-6 md:space-y-0">
          <div class="relative bg-otherColor p-8 shadow-lg rounded-2xl blgxl:p-12 md:p-6 md:w-1/3">
            <div class="w-16 h-16 bg-otherColor rounded-full absolute -top-10 left-1/2 border-whiteText border-4 -translate-x-1/2"></div>
            <p class="text-2xl capitalize mb-2 lg:text-3xl ">
              Ethiopian Coffee
            </p>
            <p class="text-sm lg:text-base">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              enim facilis ullam praesentium voluptatibus. Id labore error aut
              corrupti repellat.{" "}
            </p>
          </div>
          <div class="relative bg-lightGreen shadow-lg rounded-2xl p-8 md:scale-105 blgxl:p-12 md:p-6 md:w-1/3">
            <div class="w-16 h-16 bg-lightGreen rounded-full absolute -top-10 left-1/2 border-whiteText border-4 -translate-x-1/2"></div>
            <p class="text-2xl capitalize mb-2 lg:text-3xl">
              traditional cuisine
            </p>
            <p class="text-sm lg:text-base">
              Our ‘Agelgil’ is the most famous order and customers have enjoyed
              both our fasting and non-fasting orders. Delivered to you in a
              beautiful Mesob, we have options suitable for your guest size
              starting from 10 people.
            </p>
          </div>{" "}
          <div class="relative bg-otherColor p-8 shadow-lg rounded-2xl blgxl:p-12 md:p-6 md:w-1/3">
            <div class="w-16 h-16 bg-otherColor rounded-full absolute -top-10 left-1/2 border-whiteText border-4 -translate-x-1/2"></div>
            <p class="text-2xl capitalize mb-2 lg:text-3xl">buna kurs</p>
            <p class="text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              enim facilis ullam praesentium voluptatibus. Id labore error aut
              corrupti repellat.
            </p>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section
        class=" bg-otherColor text-darkGreen rounded-tr-3xl rounded-bl-3xl"
        id="community"
      >
        <div class="flex flex-col-reverse items-center justify-center w-11/12 m-auto gap-20 py-12 md:py-32 md:flex-row">
          {/* Community Section Left */}
          <div class="w-full md:w-1/2">
            <h2 class="community-title text-4xl text-darkGreen font-bold blgxl:text-6xl">
              Our Community
            </h2>
            <h3 class="text-sm lg:text-base">
              Every purchase of coffee at AKKOO positively impacts social and
              environmental conditions at the source.AKKOO sources its coffee
              from west Ethiopia, specifically from Wellega zone Gedame wereda
              in Oromia region.
            </h3>
            <div
              class="flex flex-nowrap overflow-scroll space-x-2.5 max-w-full mt-3"
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
                  <div className="min-w-full" id="community">
                    <h3 class="font-bold mb-2">
                      {eachPerson.name} | <em>{eachPerson.title}</em>
                    </h3>
                    <p class="text-sm text-darkGreenTransparent blgxl:text-base">
                      {eachPerson.description}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* Community slider arrows container */}
            <div class="flex items-center mt-8 space-x-6">
              {/* Arrow left */}
              <BsArrowLeft
                class="p-3 text-4xl bg-whiteText rounded-full"
                onClick={communitySlideLeft}
              />
              {/* Arrow right */}
              <BsArrowLeft
                class="p-3 text-4xl bg-whiteText rounded-full -rotate-180"
                onClick={communitySlideRight}
              />
            </div>
          </div>
          {/* right */}
          <div class="community-right-container w-5/6 md:w-1/2 ">
            <img
              src={communityPic}
              alt=""
              class="w-full rounded-2xl shadow-xl border-4 border-solid border-whiteText md:w-full"
            />
          </div>
        </div>
      </section>

      {/* AKKOO MENU SECTION */}
      <section id="menu">
        {/* Title */}
        <div>
          <h2>Akkoo Menu</h2>
          <p>
            Most people visit us expecting only good coffee and are fairly
            impressed with our ‘Buna Kurs’ (barley flour with butter)
            accompanying it. We’re known for our excellent coffee in all its
            forms. Machiatto, Café-latte, Espresso… you name it me make it best!
          </p>
        </div>

        <div>
          {/* Menu selection items */}

          <ul>
            <li>Break Fast</li>
            <li>Lunch</li>
            <li>Cake</li>
            <li>Hot Drinks</li>
            <li>Soft Drinks</li>
            <li>Special Order</li>
          </ul>
          {/* Menu Items */}
          <div>
            <div>
              <BsArrowLeft onClick={menuSlideLeft} />
            </div>
            <div id="menu-item-container">
              {breakfastMenuData.map((item) => {
                return (
                  <div id="menu-item">
                    {/* <img src={menuItemImg} alt="" className="menu-item-img" /> */}
                    <div>
                      <p>{item.name}</p>
                      <p>{item.description}</p>
                      <p>
                        <b>120</b> ETB
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <BsArrowLeft onClick={menuSlideRight} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section-main-container">
        <div class="gallery">
          <div class="gallery__item">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/1" />
            </div>
          </div>
          <div class="gallery__item">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/2" />
            </div>
          </div>
          <div class="gallery__item">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/3" />
            </div>
          </div>
          <div class="gallery__item gallery__item--v-2">
            <div class="embed embed--1-2">
              <img src="https://source.unsplash.com/collection/582659/4" />
            </div>
          </div>
          <div class="gallery__item">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/5" />
            </div>
          </div>
          <div class="gallery__item gallery__item--h-2">
            <div class="embed embed--2-1">
              <img src="https://source.unsplash.com/collection/582659/6" />
            </div>
          </div>
          <div class="gallery__item gallery__item--v-2">
            <div class="embed embed--1-2">
              <img src="https://source.unsplash.com/collection/582659/7" />
            </div>
          </div>
          <div class="gallery__item gallery__item--h-2">
            <div class="embed embed--2-1">
              <img src="https://source.unsplash.com/collection/582659/8" />
            </div>
          </div>
          <div class="gallery__item gallery__item--v-2">
            <div class="embed embed--1-2">
              <img src="https://source.unsplash.com/collection/582659/9" />
            </div>
          </div>
          <div class="gallery__item gallery__item--h-2 gallery__item--v-2">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/10" />
            </div>
          </div>
          <div class="gallery__item">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/11" />
            </div>
          </div>
          <div class="gallery__item gallery__item--h-2 gallery__item--v-2">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/12" />
            </div>
          </div>
          <div class="gallery__item">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/13" />
            </div>
          </div>
          <div class="gallery__item gallery__item--h-2 gallery__item--v-3">
            <div class="embed embed--2-3">
              <img src="https://source.unsplash.com/collection/582659/14" />
            </div>
          </div>
          <div class="gallery__item gallery__item--h-2 gallery__item--v-2">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/15" />
            </div>
          </div>
          <div class="gallery__item gallery__item--v-2">
            <div class="embed embed--1-2">
              <img src="https://source.unsplash.com/collection/582659/16" />
            </div>
          </div>
          <div class="gallery__item">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/17" />
            </div>
          </div>
          <div class="gallery__item">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/18" />
            </div>
          </div>
          <div class="gallery__item">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/19" />
            </div>
          </div>
          <div class="gallery__item">
            <div class="embed">
              <img src="https://source.unsplash.com/collection/582659/20" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="footer-main-container">
        {/* TOP OF FOOTER */}
        <div className="footer-top-container">
          {/* LEFT */}
          <div className="footer-left-container">
            <h2 className="footer-section-title">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              corrupti, culpa aspernatur eos expedita omnis, saepe optio
              dignissimos harum facilis sequi ipsam! Dignissimos, in nesciunt?
            </p>
            <h3>We are open 24 hours a day 7 days a week.</h3>
          </div>
          {/* MIDDLE */}
          <div className="footer-middle-container">
            <h1 className="footer-section-title">Where we are</h1>
            <div className="footer-middle-item-container">
              {/* <CiLocationOn className="footer-middle-location-icon" /> */}
              <p className="footer-middle-item-description">
                Addis Ababa, Ethiopia Churchill Road, Pass Tedros Square, Hibret
                Insurance Building, Ground Floor, Addis Ababa.{" "}
              </p>
            </div>
            <div className="footer-middle-item-container">
              <CiLocationOn className="footer-middle-phone-icon" />
              <div>
                <p>+251 -905-828282</p>
                <p>+251 -905-828282</p>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="bottom-footer-middle-wrapper">
            <h1 className="footer-section-title">Quick Menu</h1>
            <ul className="bottom-footer-menu-wrapper">
              <a href="#hero" className="bottom-footer-menu-item">
                <li>home</li>
              </a>
              <a href="#about" className="bottom-footer-menu-item">
                <li>about akkoo</li>
              </a>
              <a href="#services" className="bottom-footer-menu-item">
                <li>services</li>
              </a>
              <a href="#community" className="bottom-footer-menu-item">
                <li>community</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="bottom-footer-container">
          {/* BOTTOM FOOTER LEFT */}
          <div className="bottom-footer-left-wrapper">
            <p>&#9426;</p>
            <p>Akkoo Coffee.</p>
            <p> All Rights Reserved</p> {" | "}
            <p>
              Created by
              <a
                href="https://abraham-b.netlify.app/"
                target="blank"
                className="creator"
              >
                {" "}
                Abraham
              </a>
            </p>
          </div>

          {/* BOTTOM FOOTER LEFT */}
          <div className="bottom-footer-right-wrapper">
            <img src={facebook} className="footer-social-icon" />
            <img src={instagram} className="footer-social-icon" />
            <img src={twitter} className="footer-social-icon" />
          </div>
        </div>
        {/* Back to top */}
        <a href="#home">
          <BsArrowLeft className="scroll-to-top" />
        </a>
      </section>
    </div>
  );
}
