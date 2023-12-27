import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function ImageGalleryModal(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <AnimatePresence initial={false}>
      {props.galleryOpen && (
        <div class="fixed inset-0 flex items-center justify-center z-30 bg-darkTransparent  m-auto xxl:container">
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
              class="relative w-full m-auto  bsmmdTwo:w-2/3  md:w-1/2 md:left-[25%] bsmmdTwo:left-[20%] xxl:container"
            >
              <LazyLoadImage
                src={props.imageData}
                placeholderSrc=""
                alt=""
                class="rounded-2xl object-cover "
              />

              <div
                onClick={() => props.setGalleryOpen(false)}
                class="absolute -top-3 -right-3 p-2 cursor-pointer rounded-full bg-otherColor"
              >
                <CgClose />
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
