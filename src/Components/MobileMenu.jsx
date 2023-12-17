import * as React from "react";
import BookTable from "../Components/BookTable";

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            class="fixed left-0 bottom-0 top-0 right-0 bg-darkTransparent p-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "tween",
                duration: 0.5,
              }}
              class="fixed left-0 top-0 bottom-0 w-3/4 p-6  bg-whiteText"
            >
              <div
                onClick={() => setOpen(() => false)}
                class="absolute top-2 right-2 p-2 cursor-pointer rounded-full bg-otherColor"
              >
                <CgClose />
              </div>
              <div class="pt-8">
                <h2 class="text-3xl font-extrabold  md:text-5xl border-b-2 ">
                  Menu
                </h2>
                <div class="flex flex-col gap-4 py-12 text-md border-b-2  sm:text-xl">
                  <a
                    href="#home"
                    class="mobile-nav-item"
                    onClick={() => setOpen(() => false)}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    class="mobile-nav-item"
                    onClick={() => setOpen(() => false)}
                  >
                    About
                  </a>
                  <a
                    href="#services"
                    class="mobile-nav-item"
                    onClick={() => setOpen(() => false)}
                  >
                    Services
                  </a>
                  <a
                    href="#community"
                    class="mobile-nav-item"
                    onClick={() => setOpen(() => false)}
                  >
                    Community
                  </a>
                  <a
                    href="#gallery"
                    class="mobile-nav-item"
                    onClick={() => setOpen(() => false)}
                  >
                    Gallery
                  </a>
                </div>
                <div class="mt-12 text-md flex flex-col gap-5 sm:text-lg">
                  <button class=" bg-otherColor p-2 rounded-full">
                    Book a Table
                  </button>
                  <button href="#menu" class=" bg-otherColor p-2 rounded-full">
                    Akkoo Menu
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
