/// <reference types="react" />
import { IGrouping } from "../../Interfaces/GridBody/IGrouping";
import { IHeader } from "../../Interfaces/GridBody/IHeader";
import { IRow } from "../../Interfaces/GridBody/IRow";
declare const CellGrouping: (props: {
    allData: IHeader[];
    grouping: IGrouping;
    row: IRow;
}) => JSX.Element;
export default CellGrouping;
