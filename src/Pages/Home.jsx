import React from "react";
import "../Styles/home.scss";
import uniqueSectionPic from "../images/UniqueSectionPic.jpg";

import menuItemImg from "../images/menuImg.png";
import communityPic from "../images/community.jpg";

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
    <div className="home-main-container">
      {/* NAVIGATION */}
      <section className="nav-main-container">
        {/* <div className="nav-logo-items-wrapper"> */}
        <h1 className="nav-logo">LOGO</h1>
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
        <div className="hero-cup-one"></div>
        {/* <div className="hero-cup-two"></div> */}
        {/* <img src={pattern} alt="" className="hero-pattern" /> */}

        <div className="hero-title-wrapper">
          <h1 className="hero-title">Akkoo.</h1>
          <h3 className="hero-title-two"> Coffee</h3>
        </div>
        <h3 className="hero-subtitle">
          Exotic premium Ethiopian coffee all the way from the bean to your cup
        </h3>
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
        <a href="#unique">
          <BsArrowLeft className="scroll-to-unique-section" />
        </a>
      </section>

      {/* What makes Akkoo Unique section */}
      <section className="section-two-main-container" id="unique">
        {/* Left */}

        <div className="unique-left-container">
          <img src={uniqueSectionPic} alt="" className="unique-img" />
          <div className="unique-cup-one"></div>
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
          <div className="unique-cup-two"></div>
        </div>
      </section>
      {/*About akkoo coffe section */}
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
              Our commitment is to bring you the ultimate coffee experience, one
              that is responsibly produced from seed to cup. This is not merely
              an ideology but our everyday practice. It was on May 2019 AKKOO
              coffee’s founders Dawit Hailu and his wife Wudassie Enquberhan
              opened their first coffee shop down the street from Churchill
              road. Upon its opening, Akkoo was welcomed with encouraging
              responses from the community. It quickly became the meeting place
              for coffee lovers ranging from university students to retirees.
              Besides our fine coffee, customers also enjoy our baked goods as
              well as our healthy and delicious meals. Many also admire the
              design and overall atmosphere of the place.
            </p>
          </div>
          <div className="about-btns-wrapper">
            <AboutUsMore />
            <button className="about-btn-two">Our story</button>
          </div>
        </div>

        {/* right */}
        <div className="about-right-container"></div>
      </section>

      {/* Services section */}

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
            <p className="service-item-title">Ethiopian Coffee</p>
            <p className="service-item-description">
              Our ‘Agelgil’ is the most famous order and customers have enjoyed
              both our fasting and non-fasting orders. Delivered to you in a
              beautiful Mesob, we have options suitable for your guest size
              starting from 10 people.
            </p>
          </div>
          <div className="service-item-wrapper-middle">
            <p className="service-item-title">traditional cuisine</p>
            <p className="service-item-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              enim facilis ullam praesentium voluptatibus. Id labore error aut
              corrupti repellat.
            </p>
          </div>{" "}
          <div className="service-item-wrapper">
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
        <div className="our-community-left-container">
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
          <div
            className="community-descriptions-container"
            id="community-container"
          >
            {/* First Description */}
            <div className="community-description-wrapper" id="community">
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
            <div className="community-description-wrapper" id="community">
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
            <div className="community-description-wrapper" id="community">
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
            <div className="community-description-wrapper" id="community">
              <h3>Dave</h3>
              <p>
                If you’re a coffee lover, I highly recommend you try our
                Espresso. It’s the best one in the city!
              </p>
            </div>
          </div>
          <div className="community-arrows-wrapper">
            <BsArrowLeft
              className="community-prev"
              onClick={communitySlideLeft}
            />
            <BsArrowLeft
              className="community-next"
              onClick={communitySlideRight}
            />
          </div>
        </div>
        {/* right */}
        <div className="our-community-right-container">
          <img src={communityPic} alt="" className="our-community-img" />
          <div className="our-community-cup-one"></div>
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

        <div className="akkoo-menu-the-main-menu-container">
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
          <div className="menu-items-main-container">
            <div className="akkoo-menu-arrows-wrapper">
              <BsArrowLeft
                className="akkoo-menu-prev"
                onClick={menuSlideLeft}
              />
            </div>
            <div
              className="menu-one-items-main-container"
              id="menu-item-container"
            >
              {breakfastMenuData.map((item) => {
                return (
                  <div className="menu-items-wrapper" id="menu-item">
                    {/* <img src={menuItemImg} alt="" className="menu-item-img" /> */}
                    <div className="menu-item-name-description">
                      <p className="menu-item-name">{item.name}</p>
                      <p className="menu-item-description">
                        {item.description}
                      </p>
                      <p className="menu-price-tag">
                        <b>120</b> ETB
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="akkoo-menu-arrows-wrapper">
              <BsArrowLeft
                className="akkoo-menu-next"
                onClick={menuSlideRight}
              />
            </div>
          </div>
        </div>
        <div className="akkoo-menu-cup-one"></div>
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
        <a href="#hero">
          <BsArrowLeft className="scroll-to-top" />
        </a>
      </section>
    </div>
  );
}
