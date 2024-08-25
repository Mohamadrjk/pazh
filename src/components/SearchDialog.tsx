import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Search } from "@mui/icons-material";
import { DialogActions, Stack } from "@mui/material";

type props = {
  children?: React.JSX.Element;
  callback?: (value?: any) => void;
};
export default function SearchDialog(props: props) {
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
            handleClose();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const searchInput = formJson.search;
            props.callback && props.callback(searchInput);
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
              id="search"
              name="search"
              placeholder="What are you looking for?"
              className=" bg-transparent outline-none   px-6 placeholder:text-xs border focus-within:outline-none focus:outline-none   rounded-xl "
            />
          </div>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button type="submit">Search...</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
