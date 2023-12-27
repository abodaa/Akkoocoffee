import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CgClose } from "react-icons/cg";
export default function MenuDetails(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <AnimatePresence initial={false}>
      {props.menuDetailOpen && (
        <div class="fixed inset-0 flex items-center justify-center z-30 bg-darkTransparent xxl:container">
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
              class="relative w-full bsmmdTwo:w-2/3  md:w-1/2 xxl:container"
            >
              <div class="relative text-center rounded-3xl shadow-2xl bg-whiteText w-full flex flex-col items-center justify-center p-6 aspect-square sm:w-96 ">
              
                  <LazyLoadImage
                    src={props.menuDetailData.img}
                    placeholderSrc=""
                    alt=""
                    class="w-full aspect-square object-cover bg-otherColor rounded-full "
                  />
                <p class="text-base font-bold sm:text-xl">
                  {props.menuDetailData.name}
                </p>
                <p class="text-xs py-1 px-2 rounded-full text-gray-700 mb-2 bg-otherColor sm:text-sm md:text-md">
                  {props.menuDetailData.price} Birr
                </p>
                <p class="text-xs text-gray-600 sm:text-sm md:text-md">
                  {props.menuDetailData.description}
                </p>
                <div
                  onClick={() => props.setMenuDetailOpen(false)}
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
