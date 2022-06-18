import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { AgGridReact } from "ag-grid-react";
import styled from "styled-components";

const ContainerTable = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

const WrapperGridReact = styled.div`
  width: 100%;
  height: 100%;
`;

export default function ContryTable({
  columnDefs,
  rowData,
  defaultColDef,
  onGridReady,
}) {
  return (
    <ContainerTable>
      <WrapperGridReact className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}
          onGridReady={onGridReady}
          pagination={true}
          pivotPanelShow={"always"}
          paginationPageSize={1000}
        ></AgGridReact>
      </WrapperGridReact>
    </ContainerTable>
  );
}
