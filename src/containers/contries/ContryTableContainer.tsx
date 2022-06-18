import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { useCallback, useMemo, useState } from "react";

import ContryTable from "components/tables /ContryTable";
import styled from "styled-components";

const Heading = styled.h1`
  font-weight: 600;
  font-size: 60px;
  line-height: 120%;
  text-align: center;
  background: linear-gradient(98.21deg, #0c5ed8 0%, #13cdf5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -text-fill-color: transparent;
  margin: 20px;
`;

/*
    Using ReactJS, how would you implement the grid / which component would you choose to
  handle a large amount of data? Why?
*/

// This is component i will handle data cause i can contol and handle logic before UI display in screen and can control performance

export const ContryTableContainer = () => {
  const [rowData, setRowData] = useState();

  const [columnDefs] = useState([
    { field: "athlete", minWidth: 200 },
    { field: "age" },
    { field: "country", minWidth: 150 },
    { field: "year" },
    { field: "date", minWidth: 150 },
    { field: "sport", minWidth: 150 },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback(params => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then(resp => resp.json())
      .then(data => setRowData(data));
  }, []);

  return (
    <>
      <Heading>
        Technical question of{" "}
        <a href="https://www.localizedirect.com/">Localize Direct</a>
      </Heading>
      <ContryTable
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
      />
    </>
  );
};
