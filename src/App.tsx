import TableData from "./components/Table";
import {  Typography } from "@mui/material";

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
              تاریخچه رویداد ها
            </Typography>
          </div>
        </div>
          <TableData />
      </div>
    </div>
  );
}

export default App;
