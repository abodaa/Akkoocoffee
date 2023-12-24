
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";
export default function BookTableModal() {
  const [open, setOpen] = React.useState(false);

  // Framer Motion Varients
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
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
              class="absolute left-0 top-0 bottom-0 p-6 py-10 m-auto bg-whiteText md:w-1/2 overflow-scroll  lg:w-1/3 xxl:container"
            >
              <div
                onClick={() => setOpen(false)}
                class="absolute top-2 right-3 p-2 z-50 cursor-pointer rounded-full bg-otherColor"
              >
                <CgClose />
              </div>
              <p>
                <b class="text-3xl">O</b>ur commitment is to bring you the
                ultimate coffee experience, one that is responsibly produced
                from seed to cup. This is not merely an ideology but our
                everyday practice. It was on May 2019 AKKOO coffee’s founders
                Dawit Hailu and his wife Wudassie Enquberhan opened their first
                coffee shop down the street from Churchill road. Upon its
                opening, Akkoo was welcomed with encouraging responses from the
                community. It quickly became the meeting place for coffee lovers
                ranging from university students to retirees. Besides our fine
                coffee, customers also enjoy our baked goods as well as our
                healthy and delicious meals. Many also admire the design and
                overall atmosphere of the place.
              </p>
              <p class="pt-4 text-gray-700 text-sm md:text-md">
                <b class="text-3xl">T</b>he main approach of the AKKOO Coffee’s
                design is to communicate two concepts to the customer: ‘Home in
                Ethiopia’ and ‘straight from our farm to your cup.’ The first
                idea in our concept, ‘home in Ethiopia’, is represented by our
                elegant shop design: representing the birthplace and origins of
                original Ethiopian coffeehouse culture intended for areas with a
                more conservative and higher-income customer base. Our cooler
                and trendier design line ‘straight from our farm to your cup’,
                is intended for a younger, slightly more progressive crowd. This
                slogan also represents one of our core principles: to guarantee
                the highest quality at every step of our value chain through
                sustainable, trustworthy and respectful partnership with our
                farmers in the coffee-growing countries.
              </p>
              <p class="pt-4 text-gray-700 text-sm md:text-md">
                <b class="text-3xl">T</b>he main approach of the AKKOO Coffee’s
                design is to communicate two concepts to the customer: ‘Home in
                Ethiopia’ and ‘straight from our farm to your cup.’ The first
                idea in our concept, ‘home in Ethiopia’, is represented by our
                elegant shop design: representing the birthplace and origins of
                original Ethiopian coffeehouse culture intended for areas with a
                more conservative and higher-income customer base. Our cooler
                and trendier design line ‘straight from our farm to your cup’,
                is intended for a younger, slightly more progressive crowd. This
                slogan also represents one of our core principles: to guarantee
                the highest quality at every step of our value chain through
                sustainable, trustworthy and respectful partnership with our
                farmers in the coffee-growing countries.
              </p>
              <p class="pt-4 text-gray-700 text-sm md:text-md">
                <b class="text-3xl">T</b>he main approach of the AKKOO Coffee’s
                design is to communicate two concepts to the customer: ‘Home in
                Ethiopia’ and ‘straight from our farm to your cup.’ The first
                idea in our concept, ‘home in Ethiopia’, is represented by our
                elegant shop design: representing the birthplace and origins of
                original Ethiopian coffeehouse culture intended for areas with a
                more conservative and higher-income customer base. Our cooler
                and trendier design line ‘straight from our farm to your cup’,
                is intended for a younger, slightly more progressive crowd. This
                slogan also represents one of our core principles: to guarantee
                the highest quality at every step of our value chain through
                sustainable, trustworthy and respectful partnership with our
                farmers in the coffee-growing countries.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
