import { ISortStats } from "../Grid/Interfaces/ISortStats";
import { IRow } from "./Interfaces/GridBody/IRow";
import { IDataSource } from "./Interfaces/GridData/IDataSource";
import { IFilter } from "./Interfaces/GridTools/IFilter";
import { LoadPage } from "./LoadPage";
export declare class ScrollPage {
    dataSource: IDataSource;
    loadPage: LoadPage;
    constructor(dataSource: IDataSource);
    isBottomReached: (event: any) => boolean;
    scrollUp(event: any, items: any, loadedPages: number, top: number, bottom: number, cacheSize: number, pageSize: number, sort: ISortStats, filters: IFilter[], updateTop: (page: number) => void, updateBottom: (page: number) => void, updateItems: (items: IRow[]) => void, updateLoadedPages: (pages: number) => void, setOffset: (offset: number) => void): void;
    scrollDown(event: any, items: any, loadedPages: number, top: number, bottom: number, cacheSize: number, pageSize: number, sort: ISortStats, filters: IFilter[], updateTop: (page: number) => void, updateBottom: (page: number) => void, updateItems: (items: IRow[]) => void, updateLoadedPages: (pages: number) => void, setOffset: (offset: number) => void, offset: number, allPages: number): void;
}
