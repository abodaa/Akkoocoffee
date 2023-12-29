import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { useEffect } from "react";
import { useRef } from "react";
export default function BookTableModal(props) {
  const bookTableModal = useRef(); // Ref and function for closing the opened Search results dropdown
  useEffect(() => {
    let closeBookTableModalModalHandler = (event) => {
      if (
        bookTableModal.current &&
        !bookTableModal.current.contains(event.target)
      ) {
        props.setOpenBookTable(false);
      }
    };
    document.addEventListener("mousedown", closeBookTableModalModalHandler);
    return () => {
      document.removeEventListener(
        "mousedown",
        closeBookTableModalModalHandler
      );
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => props.setOpenBookTable(true)}
        class=" bg-lightGreen py-2 px-8 rounded-full md:rounded w-full text-base hover:text-whiteText hover:bg-darkGreen transition-all"
      >
        Book
      </button>
      <AnimatePresence initial={false}>
        {props.openBookTable && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            class="fixed inset-0 m-auto bg-darkTransparent p-6 xxl:container"
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
              class="absolute top-0 left-0 bottom-0 sm:rounded-3xl sm:left-4 sm:top-4 sm:bottom-4 p-6 m-auto bg-whiteText md:w-1/2  lg:w-1/3 xxl:container"
              ref={bookTableModal}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.3,
                }}
                onClick={() => props.setOpenBookTable(false)}
                class="absolute top-2 right-2 p-2 cursor-pointer rounded-full bg-otherColor"
              >
                <CgClose />
              </motion.div>
              <div class=" text-darkGreen pt-8">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  class="font-bold text-xs md:text-md text-lightGreen"
                >
                  Book
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  class="font-bold text-2xl md:text-3xl"
                >
                  Book a Table
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.4,
                  }}
                  cl
                  class=" text-gray-500 text-sm sm:text-md mt-2 md:text-base"
                >
                  Embark on a Culinary Adventure with Us!
                </motion.p>
                <form action="" class="mt-8">
                  {/* Name section */}
                  <div class="grid grid-cols-2 gap-2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "tween",
                        duration: 0.5,
                        delay: 0.1,
                      }}
                      class="w-full"
                    >
                      <label
                        class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500  border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none  bsmmd:text-md"
                        type="text"
                        placeholder="Enter first name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "tween",
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      class="w-full"
                    >
                      <label
                        class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Last Name
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500 border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none  bsmmd:text-md"
                        type="text"
                        placeholder="Enter last name"
                      />
                    </motion.div>
                  </div>
                  {/* Email and phone section */}
                  <div class="grid grid-cols-2 gap-2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "tween",
                        duration: 0.5,
                        delay: 0.3,
                      }}
                      class="w-full"
                    >
                      <label
                        class="block uppercase tracking-wide text-gray-500  text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Phone Number
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500 border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none  bsmmd:text-md"
                        type="text"
                        placeholder="Enter phone number"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "tween",
                        duration: 0.5,
                        delay: 0.4,
                      }}
                      class="w-full"
                    >
                      <label
                        class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Email
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500 border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none  bsmmd:text-md"
                        type="text"
                        placeholder="Enter email"
                      />
                    </motion.div>
                  </div>
                  {/* Date and time section */}
                  <div class="grid grid-cols-2 gap-2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "tween",
                        duration: 0.5,
                        delay: 0.5,
                      }}
                      class="w-full"
                    >
                      <label
                        class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Date
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500 border  rounded py-3 px-4 mb-3 text-sm leading-tight  bsmmd:text-md"
                        type="date"
                        placeholder="Choose date"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "tween",
                        duration: 0.5,
                        delay: 0.6,
                      }}
                      class="w-full"
                    >
                      <label
                        class="block uppercase tracking-wide text-gray-500  text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Time
                      </label>
                      <input
                        class="appearance-none  w-full bg-otherColor text-gray-500  border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none  bsmmd:text-md"
                        type="time"
                        placeholder="Enter email"
                      />
                    </motion.div>
                  </div>
                  {/* Number of guests section */}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.7,
                    }}
                    class="relative mb-6"
                  >
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
                  </motion.div>

                  {/* Additional request section */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.8,
                    }}
                    class="w-full"
                  >
                    <label
                      class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Additional request
                    </label>
                    <textarea
                      class="appearance-none  w-full bg-otherColor text-gray-500  border  rounded py-3 px-4 mb-3 text-sm leading-tight focus:outline-none bsmmd:text-md"
                      type="text"
                      placeholder="Any additional request you have"
                    />
                  </motion.div>
                  {/* Book button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.9,
                    }}
                    type="submit"
                    class="bg-lightGreen text-md rounded px-10 py-2"
                  >
                    Book
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
