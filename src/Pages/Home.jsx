import React from "react";
import "../Styles/home.scss";
import sectionTwoImg from "../images/sectionTwo.jpg";
import sectionThreeImg1 from "../images/jebena.jpg";
import sectionThreeImg2 from "../images/foods.jpg";
import sectionThreeImg3 from "../images/place.jpg";
import sectionThreeImg4 from "../images/MiddlePic.jpg";

import serviceImgOne from "../images/coffee-beans.png";
import serviceImgTwo from "../images/food.png";
import serviceImgThree from "../images/cookie.png";
import menuItemImg from "../images/menuImg.png";
import aboutVideo from "../images/about.mp4";


import kidi from "../images/Kidi.jpg";
import dave from "../images/Dave.jpg";
import fitsum from "../images/Fitsum.jpg";
import tigist from "../images/Tigest.jpg";

import { CiCoffeeBean, CiLocationOn } from "react-icons/ci";
import { MdFastfood } from "react-icons/md";

import cup from "../images/cup.png";

import { PiBowlFoodThin } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";

import { BsArrowLeft } from "react-icons/bs";
import breakfastMenuData from "../Components/menuData.js";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import tiktok from "../images/tiktok.png";
export default function Home() {
  // Slider functions
  // SLider Arrows Function
  const uniqueSlideLeft = () => {
    let slider = document.getElementById("unique-container");
    let sliderItem = document.getElementById("unique");
    slider.scrollLeft = slider.scrollLeft - slider.offsetWidth - 10;
    console.log(slider.offsetWidth);
  };
  const uniqueSlideRight = () => {
    let slider = document.getElementById("unique-container");
    let sliderItem = document.getElementById("unique");
    slider.scrollLeft = slider.scrollLeft + slider.offsetWidth + 10;
  };

  return (
    <div className="home-main-container">
      {/* NAVIGATION */}
      <section className="nav-main-container">
        {/* <div className="nav-logo-items-wrapper"> */}
        <h1 className="nav-logo">Akkoo Coffee</h1>
        <ul className="nav-contents-container">
          <a className="nav-item" href="#hero">
            <li>home</li>
          </a>
          <a className="nav-item" href="#about">
            <li>about us</li>
          </a>
          <a className="nav-item" href="#services">
            <li>services</li>
          </a>
          <a className="nav-item" href="#community">
            <li>community</li>
          </a>
        </ul>
        {/* </div> */}
        <div className="nav-right-container">
          <CgMenuRight className="mobile-menu-humbergur-icon" />
          <a href="#menu">
            {" "}
            <button className="akkoo-menu-btn">Akkoo Menu</button>
          </a>
          <a href="#menu">
            {" "}
            <button className="akkoo-book-table-btn">Book</button>
          </a>
        </div>
      </section>
      {/* Home HERO Section */}
      <section className="hero-main-container" id="hero">
        <img src={cup} alt="" className="hero-cup-one" />
        <img src={cup} alt="" className="hero-cup-two" />
        {/* <img src={pattern} alt="" className="hero-pattern" /> */}

        <div className="hero-title-wrapper">
          <h1 className="hero-title">Akkoo.</h1>
          <h3 className="hero-title-two"> Coffee</h3>
        </div>
        <h3 className="hero-subtitle">
          Exotic premium Ethiopian coffee all the way from the bean to your cup
        </h3>
        {/* <div className="hero-btns-wrapper">
          <button className="hero-btn-one">Learn More</button>
          <button className="hero-btn-two">Menu</button>
        </div> */}
        <div className="hero-service-items-wrapper">
          <div className="hero-service-one-item-wrapper">
            <CiCoffeeBean className="hero-service-one-item-icon" />
            <div className="hero-service-description">
              <p className="hero-service-title">Fine Ethiopian Coffee</p>
              <p className="hero-service-sub-text">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="hero-service-two-item-wrapper">
            <PiBowlFoodThin className="hero-service-two-item-icon" />
            <div className="hero-service-description">
              <p className="hero-service-title">Traditional Food</p>
              <p className="hero-service-sub-text">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="hero-service-three-item-wrapper">
            <MdFastfood className="hero-service-three-item-icon" />
            <div className="hero-service-description">
              <p className="hero-service-title">Buna Kurs</p>
              <p className="hero-service-sub-text">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home below home section */}
      <section className="section-two-main-container" id="unique">
        {/* Left */}

        <div className="unique-left-container">
          <img src={sectionThreeImg1} alt="" className="unique-img" />
          <img src={sectionThreeImg2} alt="" className="unique-img" />
          <img src={sectionThreeImg3} alt="" className="unique-img" />
          <img src={sectionThreeImg4} alt="" className="unique-img" />
          <img src={cup} alt="" className="unique-cup-one" />
        </div>

        {/* right */}
        <div className="section-two-right-container">
          <h2>What makes us unique?</h2>
          <div
            className="section-two-descriptions-container"
            id="unique-container"
          >
            {/* First Description */}
            <div className="section-two-description-wrapper" id="unique">
              <h3>We make you feel at home.</h3>
              <p>
                After tasting our fine coffee and eating our selection of
                delicious traditional foods, we don’t doubt you’ll come again to
                become a loyal customer. Whether you order Coffee, Macchiato,
                the house Omelette, Chechebsa, Tibs, Tibs Firfer, or Shiro
                you'll be completely satisfied. Not only will you enjoy our
                products, but our crew does a great job in giving an excellent
                service to those who walk through our door. We are also the
                first restaurant in the country to offer an elderly discount. In
                such ways and more, we are committed to honoring our culture and
                your appetite. By providing a warm and inviting atmosphere we
                live to serve you just as you’d be served at your grandmother’s
                (AKKOO) home.
              </p>
            </div>
            {/* Second description */}
            <div className="section-two-description-wrapper" id="unique">
              <h3>Our space speaks volumes.</h3>
              <p>
                Set up in an elegant fashion, our high-end coffee shop intends
                to tell the story of the birthplace and origins of the original
                AKKOO COFFEE’s culture. Our shops are intended for locations
                with a more conservative and low-average-higher-income customer
                base.
              </p>
            </div>
            {/* Third description */}
            <div className="section-two-description-wrapper" id="unique">
              <h3>We keep things interesting.</h3>
              <p>
                Our menu isn’t prepared to serve for months to come. Our
                roasters hand pick one single origin and one blend to bring you
                an exceptional coffee experience each month. We are committed to
                improving the quality of our drinks and food in alignment with
                our customer needs. We value feedback to stay attentive and
                in-tune.
              </p>
            </div>
            {/* Fourth description */}
            <div className="section-two-description-wrapper" id="unique">
              <h3>Our Coffee.</h3>
              <p>
                Exotic premium Ethiopian coffee all the way from the bean to
                your cup Whether you enjoy making your coffee by grinding coffee
                beans or you prefer having it brewed all the way, AKKOO is here
                to serve. Try our selection of roasted coffee; the fruity
                flavored Arabica and the AAA graded robust flavor from Oromia
                region Gedame wereda. We are a proud member of the Ethiopian
                Chamber of commerce.
              </p>
            </div>
          </div>
          <div className="hero-arrows-wrapper">
            <BsArrowLeft className="hero-prev" onClick={uniqueSlideLeft} />
            <BsArrowLeft className="hero-next" onClick={uniqueSlideRight} />
          </div>
          <img src={cup} alt="" className="unique-cup-two" />
          {/* <img src={cup} alt="" className="unique-cup-three" /> */}
        </div>
      </section>
      {/* Home below What makes akkoo coffe section */}
      <section className="section-three-main-container" id="about">
        {/* left */}
        <div className="section-three-left-container">
          <h2>About Akkoo</h2>
          <div className="section-three-descriptions-container">
            <h3>
              ‘Akkoo’ is a word in the Afaan Oromoo language (one of the widely
              spoken languages in Ethiopia) meaning ‘Grandmother’
            </h3>
            <p>
              The connotation of Akkoo goes beyond the mere word 'grandma'. It
              resonates with deep love, care, hospitality, and proficiency. I
              believe sharing the story of my mother, Elisabeth Kitessa Guma,
              who is lovingly called 'Akkoo' by her 23 grandchildren, would put
              flesh and bone to these attributes.
            </p>
          </div>
          <div className="about-btns-wrapper">
            <button className="about-btn-one">More about us</button>
            <button className="about-btn-two">Our story</button>
          </div>
        </div>

        {/* right */}
        <div className="about-right-container">
          <video
            className="about-us-video"
            src={aboutVideo}
            controls="controls"
            autoplay="false"
          />
        </div>
      </section>
      {/* Home below about akkoo coffe section */}

      <section className="our-services-main-container" id="services">
        <div className="our-services-title-subtitle-wrapper">
          <h2 className="our-services-title">Our Services</h2>
          <p className="our-services-subtitle">
            Akkoo has the best catering service should you choose to have
            delicious local cusine and Ethiopian coffee at your event.
          </p>
        </div>

        <div className="our-services-items-wrapper">
          <div className="service-item-wrapper">
            <img src={serviceImgOne} alt="" className="services-img" />
            <p className="service-item-title">Fine Ethiopian Coffee</p>
            <p className="service-item-description">
              Our ‘Agelgil’ is the most famous order and customers have enjoyed
              both our fasting and non-fasting orders. Delivered to you in a
              beautiful Mesob, we have options suitable for your guest size
              starting from 10 people.
            </p>
          </div>
          <div className="service-item-wrapper">
            <img src={serviceImgTwo} alt="" className="services-img" />
            <p className="service-item-title">traditional foods</p>
            <p className="service-item-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              enim facilis ullam praesentium voluptatibus. Id labore error aut
              corrupti repellat.
            </p>
          </div>{" "}
          <div className="service-item-wrapper">
            <img src={serviceImgThree} alt="" className="services-img" />
            <p className="service-item-title">buna kurs</p>
            <p className="service-item-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              enim facilis ullam praesentium voluptatibus. Id labore error aut
              corrupti repellat.
            </p>
          </div>
        </div>
      </section>
      {/* Communities Section */}
      <section className="our-community-main-container" id="community">
        {/* Left */}
        <div className="our-community-left-section-container">
          {/* <img src={abi} alt="" className="our-community-img" /> */}
          <div className="community-img-wrapper">
            <img src={kidi} alt="" className="our-community-img" />
            <p className="member-one-name">Kidi</p>
          </div>
          <div className="community-img-wrapper">
            <img src={fitsum} alt="" className="our-community-img" />
            <p className="member-two-name">fitsum</p>
          </div>
          <div className="community-img-wrapper">
            <img src={dave} alt="" className="our-community-img" />
            <p className="member-three-name">dave</p>
          </div>
          <div className="community-img-wrapper">
            <img src={tigist} alt="" className="our-community-img" />
            <p className="member-four-name">tigist</p>
          </div>
        </div>
        {/* right */}
        <div className="our-community-right-container">
          <h2>Our Community</h2>
          <h3>
            Every purchase of coffee at AKKOO positively impacts social and
            environmental conditions at the source.
          </h3>
          <p>
            AKKOO sources its coffee from west Ethiopia, specifically from
            Wellega zone Gedame wereda in Oromia region. It’s through the
            relationships we build with the local community that some of the
            finest coffee in the world has been brought to AKKOO. We are proud
            to say that we give back to the community that grows our coffee as
            part of our social entrepreneurship program via projects that range
            from education, training, financial support and community building.
          </p>
          <div className="section-two-descriptions-container">
            {/* First Description */}
            <div className="section-two-description-wrapper">
              <h3>
                Tigist | <em>Operations Manager</em>
              </h3>
              <p>
                ‘My relationship with Dawit and Wudassie dates back to 2004
                while I was working for Wudassie Souvenirs’ shop. I was the
                first employee at the shop. Since then, I have been working with
                them at their different companies in different departments and
                positions. Now, I am the Operation Manager for AKKOO. I have the
                wonderful opportunity of learning the details of the retail side
                of coffee while working at the busy coffee shop managing the
                café. Essentially my job is to keep AKKOO running like a
                well-oiled machine and I pour my heart and soul into doing just
                that. I have a shirt that says, “Keep calm and let TG handle
                it!” At AKKOO, those are words to live by!
              </p>
            </div>
            {/* Second description */}
            <div className="section-two-description-wrapper">
              <h3>
                Fitsum | <em>Administrative and Finance Head</em>{" "}
              </h3>
              <p>
                ‘Before AKKOO, the coffee that I used to drink in other shops
                was pre-ground, over-roasted coffee that has been sitting on the
                shelf for…well. Who knows how long?! I love black coffee, but I
                had to give it up since most coffee shops don’t brew it well.
                Ever since AKKOO Coffee opened, I went back to drinking coffee
                and occasionally Macchiato. I was taken aback, almost left
                speechless, by how wonderful the coffee is! I am happy to be
                enjoying black coffee again.
              </p>
            </div>
            {/* Third description */}
            <div className="section-two-description-wrapper">
              <h3>
                Kidi | <em>Purchasing</em>
              </h3>
              <p>
                I love tea – especially with cinnamon. Here at Akkoo we know how
                to make great tea, cinnamon spiced, lemon squeezed or a simple
                black tea, I have no doubt you’ll enjoy it.
              </p>
            </div>
            {/* Fourth description */}
            <div className="section-two-description-wrapper">
              <h3>Dave</h3>
              <p>
                If you’re a coffee lover, I highly recommend you try our
                Espresso. It’s the best one in the city!
              </p>
            </div>
          </div>
          <div className="hero-arrows-wrapper">
            <BsArrowLeft className="hero-prev" />
            <BsArrowLeft className="hero-next" />
          </div>
        </div>
      </section>
      {/* AKKOO MENU SECTION */}
      <section className="menu-main-container" id="menu">
        {/* Title */}
        <div className="akkoo-menu-title-subtitle-wrapper">
          <h2 className="akkoo-menu-title">Akkoo Menu</h2>
          <p className="akkoo-menu-subtitle">
            Most people visit us expecting only good coffee and are fairly
            impressed with our ‘Buna Kurs’ (barley flour with butter)
            accompanying it. We’re known for our excellent coffee in all its
            forms. Machiatto, Café-latte, Espresso… you name it me make it best!
          </p>
        </div>

        {/* Menu selection items */}

        <ul className="menu-selection-wrapper">
          <li>Break Fast</li>
          <li>Lunch</li>
          <li>Cake</li>
          <li>Hot Drinks</li>
          <li>Soft Drinks</li>
          <li>Special Order</li>
        </ul>

        {/* Menu Items */}
        <div className="menu-one-items-main-container">
          {breakfastMenuData.map((item) => {
            return (
              <div className="menu-items-wrapper">
                <img src={menuItemImg} alt="" className="menu-item-img" />
                <div className="menu-item-name-description">
                  <p className="menu-item-name">{item.name}</p>
                  <p className="menu-item-description">{item.description}</p>
                </div>
              </div>
            );
          })}
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
          <div className="footer-right-container">
            <h1 className="footer-section-title">Gallery</h1>
            <div>
              <div className="footer-right-items-container">
                <img src={sectionThreeImg1} alt="" className="footer-img" />
                <img src={sectionThreeImg2} alt="" className="footer-img" />
                <img src={sectionThreeImg3} alt="" className="footer-img" />
                <img src={sectionThreeImg4} alt="" className="footer-img" />
                <img src={kidi} alt="" className="footer-img" />
                <img src={fitsum} alt="" className="footer-img" />
              </div>
              <div className="footer-arrows-wrapper">
                <BsArrowLeft className="footer-prev" />
                <BsArrowLeft className="footer-next" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer-container">
          {/* BOTTOM FOOTER LEFT */}
          <div className="bottom-footer-left-wrapper">
            <span>Akkoo Coffee</span> {" | "}
            <span>&copy; All Rights Reserved</span>
            {/* <p>
              <a href="">Created by Abraham</a>
            </p> */}
          </div>
          {/* BOTTOM FOOTER LEFT */}
          <div className="bottom-footer-middle-wrapper">
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
          {/* BOTTOM FOOTER LEFT */}
          <div className="bottom-footer-right-wrapper">
            <img src={facebook} className="footer-social-icon" />
            <img src={instagram} className="footer-social-icon" />
            <img src={tiktok} className="footer-social-icon" />
          </div>
        </div>
      </section>
    </div>
  );
}
