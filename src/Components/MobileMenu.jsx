import * as React from "react";
import BookTable from "../Components/BookTable";

import { motion, AnimatePresence } from "framer-motion";
import { CgClose, CgFormatBold } from "react-icons/cg";
import { GrCafeteria } from "react-icons/gr";
export default function BookTableModal() {
  const [open, setOpen] = React.useState(false);

  // Framer Motion Varients
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
  return (
    <div class="md:hidden">
      <nav
        class="flex flex-col items-end gap-1 top-2 right-2 md:hidden"
        onClick={() => setOpen(true)}
      >
        <div class="h-1 w-8 bg-black"></div>
        <div class="h-1 w-6 bg-black"></div>
        <div class="h-0.5 w-8 bg-black"></div>
      </nav>
      <AnimatePresence initial={false}>
        {open && (
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
            class="fixed left-0 bottom-0 top-0 right-0 bg-darkTransparent p-6"
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
              class="absolute p-6 z-30 bg-otherColor shadow-2xl m-auto flex flex-col items-start justify-between left-4 top-4 bottom-4 rounded-3xl w-11/12 sm:w-3/5 bsmmd:w-2/5  "
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.3,
                }}
                onClick={() => setOpen(() => false)}
                class="absolute -top-2 -right-2 p-2 cursor-pointer rounded-full bg-lightGreen"
              >
                <CgClose />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.3,
                }}
                class="text-2xl text-darkGreen font-bold"
              >
                LOGO
              </motion.h1>
              <div class="pt-8">
                <div class="flex flex-col gap-3 py-5 text-xl uppercase text-darkGreen ">
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    href="#home"
                    class="mobile-nav-item"
                    onClick={() => setOpen(() => false)}
                  >
                    Home
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.2,
                    }}
                    href="#about"
                    class="mobile-nav-item"
                    onClick={() => setOpen(() => false)}
                  >
                    About
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.3,
                    }}
                    href="#services"
                    class="mobile-nav-item"
                    onClick={() => setOpen(() => false)}
                  >
                    Services
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.4,
                    }}
                    href="#community"
                    class="mobile-nav-item"
                    onClick={() => setOpen(() => false)}
                  >
                    Community
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.5,
                    }}
                    href="#gallery"
                    class="mobile-nav-item"
                    onClick={() => setOpen(() => false)}
                  >
                    Gallery
                  </motion.a>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.6,
                }}
                class="mt-12 flex gap-2 "
              >
                <BookTable onClick={() => setOpen(() => false)} />
                <a
                  href="#menu"
                  class="w-full flex items-center gap-2 py-2 px-5 bg-whiteText rounded-full text-base"
                  onClick={() => setOpen(() => false)}
                >
                  <GrCafeteria />
                  Menu
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
