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
        class="py-2 border-solid border-2 px-6 rounded-full border-whiteText text-whiteText"
      >
        Our Story
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
            p: 6,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <div class="h-96 w-full text-darkGreen overflow-y-scroll">
            <h2 class="more-about-us-title text-3xl font-extrabold md:text-5xl">
              Akkoo Story
            </h2>
            <p class=" font-bold text-lg">
              ‘Akkoo’ is a word in the Afaan Oromoo language (one of the widely
              spoken languages in Ethiopia) meaning ‘Grandmother’.
            </p>
            <p class=" font-bold pt-4">
              {/* <img src={AboutUsImg} alt="" className="more-about-us-img" /> */}
              <b class="text-3xl">T</b>he connotation of Akkoo goes beyond the
              mere word 'grandma'. It resonates with deep love, care,
              hospitality, and proficiency. I believe sharing the story of my
              mother, Elisabeth Kitessa Guma, who is lovingly called 'Akkoo' by
              her 23 grandchildren, would put flesh and bone to these
              attributes.
            </p>
            <p class=" font-bold">
              <b class="text-3xl">E</b>lisabeth was born on October 8, 1940, in
              the then province of Wollega, Kelem District, Gidame Woreda, in a
              specific village called Buri. She lost her parents at an early age
              and was brought to Addis Ababa by her aunt, who is also a
              respected mother of multitudes, Yeshemebet Guma. She got her
              education at the then American Mission School. After completing
              her education Elisabeth married Hailu Diglu in May 1964 and lived
              happily married to him for 38 years. They raised eight children:
              five daughters and three sons. After losing her husband, she
              persisted resiliently and lived another 17 years. Hers was a
              fruitful and exemplary life!
            </p>
            <p class=" font-bold">
              <b class="text-3xl">A</b>kkoo’s life is characterized by love. Her
              home is wide open to receive people. It is a place where many come
              to eat, fellowship, receive counsel, get encouragement, and
              experience her graceful generosity. Visitors are graced not only
              with the words of her blessings and prayer but also with sprays of
              fragrance from her perfumes. Her presence had an undeniable
              soothing and comforting strength. People may come to her burdened,
              saddened, and confused. She would listen with a caring heart and
              ease their burden. Her special touch would bring encouragement.
              Her words built up and strengthened the feeble. Her humble
              approach had healing power to penetrate a broken heart.{" "}
            </p>

            <p class=" font-bold">
              <b class="text-3xl">W</b>herever she went, her eyes would always
              keep a lookout for the needy in all aspects: physically,
              emotionally, and spiritually. Her hands were ready to stretch to
              bring solutions. She was ever willing and ready to stand between
              the gaps in people’s lives. She had a way to conceal her good
              deeds and would never show it off. Whenever people tried to take
              advantage of her, she consciously allowed it — for the time being.
              She had quiet wisdom to put things back in order.
            </p>
            <p class=" font-bold">
              <b class="text-3xl">A</b>kkoo Coffee not only wants to take the
              name with which her grandchildren called Elisabeth, but also
              aspires to adopt many of her life principles into our mission,
              culture, and operation. We want Akkoo Coffee to be a place where
              people connect, communicate, discuss, fellowship, and have fun!
              With the proficiency of Akkoo’s culinary experience, we want
              people to enjoy the best of coffee and our selection of delicious
              national dishes. We want the warmth and hospitality to be enjoyed
              by our customers. We are also dedicated to our corporate social
              responsibility to play a role in addressing holistic human needs.
              In such ways and more, Akkoo lives to honor Elisabeth Kitessa
              Guma’s legacy.
            </p>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
