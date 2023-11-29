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
        class="p-2 px-5 bg-lightGreen text-darkGreen font-bold rounded-md"
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
            class="fixed left-0 bottom-0 top-0 right-0 bg-overlayTransparent p-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "tween",
                // damping: 25,
                // stiffness: 500,
                duration: 0.5,
              }}
              class="fixed left-0 top-0 bottom-0 w-1/4 p-6  bg-whiteText"
            >
              <div
                onClick={() => setOpen(false)}
                class="absolute top-2 right-2 p-2 cursor-pointer rounded-full bg-otherColor"
              >
                <CgClose />
              </div>
              <div class=" text-darkGreen pt-8">
                <h2 class="more-about-us-title text-3xl font-extrabold md:text-5xl">
                  Book A Table
                </h2>
                <p class=" font-bold">
                  Book a table implementation coming soon
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
