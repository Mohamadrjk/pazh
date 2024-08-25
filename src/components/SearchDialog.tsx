import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Search } from "@mui/icons-material";
import { Divider, Stack } from "@mui/material";

export default function SearchDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Stack
        sx={{
          display: {
            sm: "flex",
            xs: "none",
          },
        }}
      >
        <Button
          component="label"
          variant="text"
          sx={{
            color: "black",
            border: "1px solid #00000015",
            borderRadius: 25,
            paddingBlock: "1.5px",
            justifyContent: "start",
            paddingInline: "20px",
            backgroundColor: "#fff",
            width: "200px",
          }}
          color="inherit"
          disableElevation
          onClick={handleClickOpen}
          startIcon={<Search />}
        >
          <span>جستجو</span>
        </Button>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          sx: {
            borderRadius: "10px",

          },
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            handleClose();
          },
        }}
      >
        <DialogContent>
          <div className=" relative mb-2">
            <span className=" absolute left-1">
              <Search fontSize="small" />
            </span>
            <input
              type="text"
              placeholder="What are you looking for?"
              className=" bg-transparent outline-none   px-6 placeholder:text-xs border focus-within:outline-none focus:outline-none   rounded-xl "
            />
          </div>
          <Divider />
          <div className=" h-56 mt-2  ">
            <div className=" grid grid-cols-2 gap-2">
              {["رویداد", "خانه", "تاریخچه"].map((i) => (
                <Button
                  className="grid-cols-1  !text-inherit !rounded-lg text-xs  w-full  "
                  sx={{
                    border: "1px solid #00000015",
                  }}
                  onClick={() => handleClose()}
                >
                  {i}
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
