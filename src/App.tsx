import { GridColDef } from "@mui/x-data-grid";
import TableData from "./components/Table";
import { Button, Stack, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";


function App() {
  return (
    <div className=" w-full" dir="rtl">
      <div className=" flex flex-col gap-5">
        <div className=" px-5 items-start sm:items-center justify-between flex flex-col sm:flex-row">
          <div className=" w-full py-5">
            <Typography
              variant="h6"
              className="font-extrabold"
              noWrap
              component="div"
            >
              تاریخچه رویداد ها :
            </Typography>
          </div>
          <Stack>
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
                textWrap: "nowrap",
                width: {
                  sm: "200px",
                },
              }}
              color="inherit"
              disableElevation
              startIcon={<Search />}
            >
              <span>جستجو در جدول...</span>
            </Button>
          </Stack>
        </div>
        <TableData  />
      </div>
    </div>
  );
}

export default App;
