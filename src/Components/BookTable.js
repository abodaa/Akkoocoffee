import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <button
        onClick={() => setOpen(true)}
        class="p-2 px-5 bg-lightGreen text-darkGreen font-bold rounded-md"
      >
        Book
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
              Book A Table
            </h2>
            <p class=" font-bold">Book a table implementation coming soon</p>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
