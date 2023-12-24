import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import AboutUsImgOne from "../images/gallery/GL1.jpg";
import AboutUsImgTwo from "../images/gallery/GS1.jpg";
import AboutUsImgThree from "../images/gallery/GL2.jpg";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      {/* <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button> */}
      <div class="flex items-center gap-2 mt-2" onClick={() => setOpen(true)}>
        <button class="about-button">Learn more</button>
      </div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 700,
            borderRadius: "lg",
            p: 0,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <div class="h-screen w-full overflow-y-scroll p-6 sm:p-8 md:p-12">
            <h2 class="more-about-us-title text-black font-bold text-2xl md:text-3xl">
              About Akkoo Coffee
            </h2>
            <p class="text-gray-700 text-sm md:text-md">
              {/* <div class="grid grid-cols-2 gap-3  mt-8 h-full">
                <div>
                  <img
                    src={AboutUsImgTwo}
                    alt=""
                    className="w-full object-cover rounded-3xl"
                  />
                  <img
                    src={AboutUsImgOne}
                    alt=""
                    className="w-full aspect-video object-cover rounded-3xl"
                  />
                </div>
                <img
                  src={AboutUsImgThree}
                  alt=""
                  className="w-full row-span-2 object-cover rounded-3xl"
                />
              </div> */}
              <b class="text-3xl">O</b>ur commitment is to bring you the
              ultimate coffee experience, one that is responsibly produced from
              seed to cup. This is not merely an ideology but our everyday
              practice. It was on May 2019 AKKOO coffee’s founders Dawit Hailu
              and his wife Wudassie Enquberhan opened their first coffee shop
              down the street from Churchill road. Upon its opening, Akkoo was
              welcomed with encouraging responses from the community. It quickly
              became the meeting place for coffee lovers ranging from university
              students to retirees. Besides our fine coffee, customers also
              enjoy our baked goods as well as our healthy and delicious meals.
              Many also admire the design and overall atmosphere of the place.
            </p>
            <p class="pt-4 text-gray-700 text-sm md:text-md">
              <b class="text-3xl">T</b>he main approach of the AKKOO Coffee’s
              design is to communicate two concepts to the customer: ‘Home in
              Ethiopia’ and ‘straight from our farm to your cup.’ The first idea
              in our concept, ‘home in Ethiopia’, is represented by our elegant
              shop design: representing the birthplace and origins of original
              Ethiopian coffeehouse culture intended for areas with a more
              conservative and higher-income customer base. Our cooler and
              trendier design line ‘straight from our farm to your cup’, is
              intended for a younger, slightly more progressive crowd. This
              slogan also represents one of our core principles: to guarantee
              the highest quality at every step of our value chain through
              sustainable, trustworthy and respectful partnership with our
              farmers in the coffee-growing countries.
            </p>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
