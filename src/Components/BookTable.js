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
      <button
        onClick={() => setOpen(true)}
        class=" bg-lightGreen py-2 px-5 text-sm rounded sm:text-md hover:text-whiteText hover:bg-darkGreen transition-all"
      >
        Book
      </button>
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
            class="fixed left-0 bottom-0 top-0 right-0 m-auto bg-darkTransparent p-6 xxl:container"
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
              class="absolute left-0 top-0 bottom-0 p-6 m-auto bg-whiteText md:w-1/2  lg:w-1/3 xxl:container"
            >
              <div
                onClick={() => setOpen(false)}
                class="absolute top-2 right-2 p-2 cursor-pointer rounded-full bg-otherColor"
              >
                <CgClose />
              </div>
              <div class=" text-darkGreen pt-8">
                <h2 class="more-about-us-title  font-bold text-xl sm:text-2xl md:text-3xl">
                  Book a Table
                </h2>
                <p class=" text-gray-500 text-sm sm:text-md mt-2 md:text-base">
                  Embark on a Culinary Adventure with Us!
                </p>
                <form action="" class="mt-8">
                  {/* Name section */}
                  <div class="grid grid-cols-2 gap-2">
                    <div class="w-full">
                      <label
                        class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500  border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none focus:bg-white bsmmd:text-md"
                        type="text"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div class="w-full">
                      <label
                        class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Last Name
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500 border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none focus:bg-white bsmmd:text-md"
                        type="text"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  {/* Email and phone section */}
                  <div class="grid grid-cols-2 gap-2">
                    <div class="w-full">
                      <label
                        class="block uppercase tracking-wide text-gray-500  text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Phone Number
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500 border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none focus:bg-white bsmmd:text-md"
                        type="text"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div class="w-full">
                      <label
                        class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Email
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500 border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none focus:bg-white bsmmd:text-md"
                        type="text"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  {/* Date and time section */}
                  <div class="grid grid-cols-2 gap-2">
                    <div class="w-full">
                      <label
                        class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Date
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500 border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none focus:bg-white bsmmd:text-md"
                        type="date"
                        placeholder="Choose date"
                      />
                    </div>
                    <div class="w-full">
                      <label
                        class="block uppercase tracking-wide text-gray-500  text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Time
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500  border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none focus:bg-white bsmmd:text-md"
                        type="time"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  {/* Number of guests section */}

                  <div class="relative mb-6">
                    <label
                      for="labels-range-input"
                      class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                    >
                      Number of Guests
                    </label>
                    <input
                      id="labels-range-input"
                      type="range"
                      // defaultValue="1"
                      min="1"
                      max=""
                      class="w-full h-2 bg-otherColor rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Additional request section */}
                  <div class="w-full">
                    <label
                      class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Additional request
                    </label>
                    <textarea
                      class="appearance-none  w-full bg-otherColor text-gray-500  border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none focus:bg-white bsmmd:text-md"
                      type="text"
                      placeholder="Any additional request you have"
                    />
                  </div>
                  {/* Book button */}
                  <button
                    type="submit"
                    class="bg-lightGreen text-md rounded px-10 py-2"
                  >
                    Book
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
