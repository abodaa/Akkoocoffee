import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import AboutUsImg from '../images/moreAboutAkkoo.jpg'

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      {/* <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button> */}
      <button
        onClick={() => setOpen(true)}
        class="py-2 border-solid font-extrabold border-2 px-6 rounded-full bg-lightGreen text-darkGreen border-darkGreen hover:text-darkGreen hover:bg-whiteText hover:font-bold transition-all"
      >
        More about us
      </button>
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
            p: 4,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <div class="h-96 w-full text-darkGreen overflow-y-scroll">
            <h2 class="more-about-us-title text-3xl font-extrabold md:text-5xl">
              About Akkoo Coffee
            </h2>
            <p class=" font-bold">
              {/* <img src={AboutUsImg} alt="" className="more-about-us-img" /> */}
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
            <p class=" font-bold pt-4">
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
