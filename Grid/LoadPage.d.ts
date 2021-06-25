import ScrollDirection from "./GridBody/GridRows/ScrollDirection";
import { IDataSource } from "./Interfaces/GridData/IDataSource";
import { IPageStats } from "./IPageStats";
export declare class LoadPage {
    dataSource: IDataSource;
    constructor(dataSource: IDataSource);
    getPage(direction: ScrollDirection, pageStats: IPageStats): import("./Interfaces/GridBody/IRow").IRow[];
}
