/// <reference types="react" />
import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { IRow } from "../../Interfaces/GridBody/IRow";
declare const ExtendedRow: (props: {
    id: string;
    completeRow: IRow;
    allColumns: IColumn[];
    checkToggle: (row_key: number) => string;
    row_key: number;
}) => JSX.Element;
export default ExtendedRow;
