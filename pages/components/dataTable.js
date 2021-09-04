import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MDBDataTable } from "mdbreact";

const useStyles = makeStyles({
  mdbDataTable: {
    "& table": {
      fontFamily: "Kanit",
      fontWeight: 400,
    },
    "& th": {
      textTransform: "capitalize",
    },
    "& .row:first-child": {
      marginTop: (props) => (props.searching ? "30px" : "0px"),
    },
    "& .row:nth-child(1)": {
      '& div[data-test="datatable-entries"]': {
        display: "none !important",
      },
      '& div[data-test="datatable-search"]': {
        display: "block !important",
      },
    },
    "& .row:nth-child(2)": {
      margin: "0.8rem 0rem",
      "& table": {
        borderCollapse: "collapse",
        borderRadius: "0.50rem",
        borderStyle: "hidden" /* hide standard table (collapsed) border */,
        boxShadow: "0 0 0 1px #dee2e6" /* this draws the table border  */,
      },
      "& td": {
        border: (props) => props.bordered && "1px solid #dee2e6!important",
      },
      "& div": {
        padding: "0px !important",
      },
    },
    "& .row:nth-child(3)": {
      "& div": {
        "& .dataTables_paginate": {
          cursor: "pointer",
        },
      },
    },
  },
});

// const NotFound = (props) => {
//   return (
//     <div className="d-flex flex-column align-items-center">
//       <EmptyListModel style={{ width: "193px", height: "168px" }} />
//     </div>
//   );
// };

export const DataTable = (props) => {
  const classes = useStyles(props);
  return (
    <MDBDataTable
      striped
      noBottomColumns
      className={`${classes.mdbDataTable} table table-hover js-basic-example dataTable table-striped no-footer mb-0 tabel-searchdata`}
      displayEntries={false}
      entriesOptions={[20, 20, 15, 15]}
      entries={10}
      pagesAmount={15}
      data={props.body}
      sortRows={["title"]}
      onPageChange={{ activePage: 2, pagesAmount: 5 }}
      paging={props.paging ?? true}
    //   noRecordsFoundLabel={<NotFound />}
    />
  );
};