
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";

import aboutOne from "../images/about-us-pics/About1.jpg";
import aboutTwo from "../images/about-us-pics/About2.jpg";
import aboutThree from "../images/about-us-pics/About3.jpg";
import aboutFour from "../images/about-us-pics/About6.jpg";

export default function BookTableModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div class="flex items-center gap-2 mt-2" onClick={() => setOpen(true)}>
        <button class="about-button">Learn more</button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "tween",
              // damping: 25,
              // stiffness: 500,
              duration: 0.5,
            }}
            class="fixed inset-0 m-auto z-30 bg-darkTransparent p-6 xxl:container"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 500,
                duration: 0.5,
              }}
              class="absolute left-0 top-0 bottom-0 p-6 py-10 m-auto bg-whiteText md:w-1/2 shadow-2xl overflow-scroll  lg:w-1/3 xxl:container"
            >
              <div
                onClick={() => setOpen(false)}
                class="absolute top-2 right-3 p-2 z-50 cursor-pointer rounded-full bg-otherColor"
              >
                <CgClose />
              </div>
              {/* Who we are */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0,
                }}
                class="more-about-us-title mt-3 border-t-2 font-bold text-2xl"
              >
                Who we are
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.1,
                }}
                class="p-4 mt-3 text-gray-200 bg-gray-700 rounded-xl text-xs sm:text-sm md:text-md"
              >
                The connotation of Akkoo goes beyond the mere word 'grandma'. It
                resonates with deep love, care, hospitality, and proficiency. I
                believe sharing the story of my mother, Elisabeth Kitessa Guma,
                who is lovingly called 'Akkoo' by her 23 grandchildren, would
                put flesh and bone to these attributes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.2,
                }}
                class="grid grid-cols-2 mt-4 gap-1 sm:gap-2"
              >
                <motion.img
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  src={aboutThree}
                  alt=""
                  class="rounded-lg"
                />
                <motion.img
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.4,
                  }}
                  src={aboutFour}
                  alt=""
                  class="rounded-lg"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.5,
                }}
                class="pt-4  mt-3 text-gray-700 text-xs rounded-2xl sm:text-sm md:text-md"
              >
                Akkoo’s life is characterized by love. Her home is wide open to
                receive people. It is a place where many come to eat,
                fellowship, receive counsel, get encouragement, and experience
                her graceful generosity. Visitors are graced not only with the
                words of her blessings and prayer but also with sprays of
                fragrance from her perfumes. Her presence had an undeniable
                soothing and comforting strength. People may come to her
                burdened, saddened, and confused. She would listen with a caring
                heart and ease their burden. Her special touch would bring
                encouragement. Her words built up and strengthened the feeble.
                Her humble approach had healing power to penetrate a broken
                heart.
              </motion.p>
              {/* How we started */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.6,
                }}
                class="more-about-us-title mt-3 border-t-2 font-bold text-2xl"
              >
                How we started
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.7,
                }}
                class="p-4 mt-3 text-gray-700 bg-otherColor rounded-xl text-xs sm:text-sm md:text-md"
              >
                Elisabeth was born on October 8, 1940, in the then province of
                Wollega, Kelem District, Gidame Woreda, in a specific village
                called Buri. She lost her parents at an early age and was
                brought to Addis Ababa by her aunt, who is also a respected
                mother of multitudes, Yeshemebet Guma. She got her education at
                the then American Mission School. After completing her education
                Elisabeth married Hailu Diglu in May 1964 and lived happily
                married to him for 38 years. They raised eight children: five
                daughters and three sons. After losing her husband, she
                persisted resiliently and lived another 17 years. Hers was a
                fruitful and exemplary life!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0,
                }}
                class="grid grid-cols-2 mt-4 gap-1 sm:gap-2"
              >
                <motion.img
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  src={aboutOne}
                  alt=""
                  class="rounded-lg"
                />
                <motion.img
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  src={aboutTwo}
                  alt=""
                  class="rounded-lg"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.3,
                }}
                class="pt-4 mt-3 text-gray-700 text-xs rounded-2xl sm:text-sm md:text-md"
              >
                Wherever she went, her eyes would always keep a lookout for the
                needy in all aspects: physically, emotionally, and spiritually.
                Her hands were ready to stretch to bring solutions. She was ever
                willing and ready to stand between the gaps in people’s lives.
                She had a way to conceal her good deeds and would never show it
                off. Whenever people tried to take advantage of her, she
                consciously allowed it — for the time being. She had quiet
                wisdom to put things back in order.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.4,
                }}
                class="pt-4 mt-3 text-gray-700 text-xs rounded-2xl sm:text-sm md:text-md"
              >
                Akkoo Coffee not only wants to take the name with which her
                grandchildren called Elisabeth, but also aspires to adopt many
                of her life principles into our mission, culture, and operation.
                We want Akkoo Coffee to be a place where people connect,
                communicate, discuss, fellowship, and have fun! With the
                proficiency of Akkoo’s culinary experience, we want people to
                enjoy the best of coffee and our selection of delicious national
                dishes. We want the warmth and hospitality to be enjoyed by our
                customers. We are also dedicated to our corporate social
                responsibility to play a role in addressing holistic human
                needs. In such ways and more, Akkoo lives to honor Elisabeth
                Kitessa Guma’s legacy.
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
