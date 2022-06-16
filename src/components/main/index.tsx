import React, { useCallback, useMemo, useRef, useState } from "react";

export const Main: React.FC = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "93%", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
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
      <div style={containerStyle}>ádsadas</div>
    </>
  );
};
