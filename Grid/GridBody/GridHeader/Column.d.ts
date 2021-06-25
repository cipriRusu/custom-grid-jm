import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { IColumn } from "../../Interfaces/GridBody/IColumn";
declare class Column extends React.Component<IColumn, IColumn> {
    constructor(props: IColumn);
    getSide(): string;
    handleColumnSorting(value: any): void;
    handleFilterIcon(value: any): JSX.Element;
    handleSortIcon(value: any): JSX.Element;
    render(): JSX.Element;
}
export default Column;
