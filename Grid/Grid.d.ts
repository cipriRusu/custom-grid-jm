import React from "react";
import { IGridProps } from "./Interfaces/GridBody/IGridProps";
import { IGridContext } from "./Interfaces/GridTools/IGridContext";
import { ISortable } from "./Interfaces/GridBody/ISortable";
export declare const GridContext: React.Context<IGridContext & ISortable>;
export default function Grid(props: IGridProps): JSX.Element;
