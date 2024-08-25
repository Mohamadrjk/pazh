import { faIR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";

// type DataTableProps = {
//   cols: Array<GridColDef>;
//   rows: Array<object>;
// };

const columns: GridColDef[] = [
  { field: "number", headerName: "ردیف", minWidth: 170, align: "center" },
  { field: "date", headerName: "تاریخ", minWidth: 170, align: "center" },
  { field: "time", headerName: "ساعت", minWidth: 130, align: "center" },
  {
    field: "branch_name",
    headerName: "نام شعبه",
    minWidth: 130,
    align: "center",
  },
  {
    field: "branch_code",
    headerName: "کد شعبه",
    minWidth: 130,
    align: "center",
  },
  { field: "event", headerName: "رویداد", minWidth: 130, align: "center" },
  {
    field: "input-number",
    headerName: "شماره ورودی",
    minWidth: 130,
    align: "left",
  },
  {
    field: "user_number",
    headerName: "شماره کاربر",
    minWidth: 130,
    align: "left",
  },
  {
    field: "input_name",
    headerName: "نام ورودی",
    minWidth: 130,
    align: "left",
  },
  {
    field: "user_name",
    headerName: "نام کاربری",
    minWidth: 130,
    align: "left",
  },
  //   {
  //     field: "branch_name",
  //     headerName: "Age",
  //     type: "number",
  //     minWidth: 90,
  //   },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     minWidth: 160,
  //     valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  //   },
];

const rows = [
  {
    id: 1,
    number: 1,
    date: "Snow",
    time: "Jon",
    branch_code: 25,
    user_name: "ali",
    event: "event",
    input_number: "event",
    input_name: "event",
    branch_name: 35,
  },
  {
    id: 5,

    number: 5,
    date: "Targaryen",
    time: "Daenerys",
    branch_code: 25,
    user_name: "ali",
    event: "event",
    input_number: "event",
    input_name: "event",
    branch_name: null,
  },
  {
    id: 3,
    number: 6,
    date: "Melisandre",
    time: null,
    branch_code: 25,
    user_name: "ali",
    event: "event",
    input_number: "event",
    input_name: "event",
    branch_name: 150,
  },
  {
    id: 7,
    number: 6,
    date: "Melisandre",
    time: null,
    branch_code: 25,
    user_name: "ali",
    event: "event",
    input_number: "event",
    input_name: "event",
    branch_name: 150,
  },
  // {
  //   id: 4,
  //   number: 6,
  //   date: "Melisandre",
  //   time: null,
  //   branch_code: 25,
  //   user_name: "ali",
  //   event: "event",
  //   input_number: "event",
  //   input_name: "event",
  //   branch_name: 150,
  // },
  // {
  //   id: 3,
  //   number: 6,
  //   date: "Melisandre",
  //   time: null,
  //   branch_code: 25,
  //   user_name: "ali",
  //   event: "event",
  //   input_number: "event",
  //   input_name: "event",
  //   branch_name: 150,
  // },
  // {
  //   id: 6,
  //   number: 6,
  //   date: "Melisandre",
  //   time: null,
  //   branch_code: 25,
  //   user_name: "ali",
  //   event: "event",
  //   input_number: "event",
  //   input_name: "event",
  //   branch_name: 150,
  // },
];

export default function DataTable() {
  const apiRef = useGridApiRef();
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        showColumnVerticalBorder={false}
        sx={{
          borderInline: "none",
          ".MuiDataGrid-columnHeaderTitleContainer": {
            justifyContent: "center",
          },
        }}
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        disableColumnSelector={true}
        disableMultipleRowSelection={true}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        localeText={faIR.components["MuiDataGrid"].defaultProps.localeText}
        showCellVerticalBorder={false}
      />
    </div>
  );
}
