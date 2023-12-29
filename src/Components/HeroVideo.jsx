import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CgClose } from "react-icons/cg";
export default function MenuDetails(props) {
  const heroVideoModal = useRef(); // Ref and function for closing the opened Search results dropdown
  useEffect(() => {
    let closeHeroVideoModalHandler = (event) => {
      if (
        heroVideoModal.current &&
        !heroVideoModal.current.contains(event.target)
      ) {
        props.setHeroVideoOpen(false);
      }
    };
    document.addEventListener("mousedown", closeHeroVideoModalHandler);
    return () => {
      document.removeEventListener("mousedown", closeHeroVideoModalHandler);
    };
  }, []);
  return (
    <AnimatePresence initial={false}>
      {props.heroVideoOpen && (
        <div class="fixed inset-0 flex items-center justify-center z-30 bg-darkTransparent m-auto xxl:container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            class=" p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 500,
                duration: 0.5,
              }}
              class="relative w-full bsmmdTwo:w-2/3  md:w-1/2 "
            >
              <div
                class="relative rounded-3xl shadow-2xl bg-otherColor w-full sm:w-[29rem] md:w-[40rem] blgxl:w-[50rem] aspect-square sm:aspect-video "
                ref={heroVideoModal}
              >
                <iframe
                  title="Embedded YouTube Video"
                  src={`https://www.youtube.com/embed/vy06E0Y-YxA?autoplay=1`}
                  //   frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  class="rounded-3xl w-full min-h-full object-cover"
                />
                <div
                  onClick={() => props.setHeroVideoOpen(false)}
                  class="absolute -top-3 left-1/2 -translate-x-1/2 p-2 cursor-pointer rounded-full bg-otherColor"
                >
                  <CgClose />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
