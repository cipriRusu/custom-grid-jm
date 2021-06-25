"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridContext = void 0;
const react_1 = __importStar(require("react"));
const Column_1 = __importDefault(require("./GridBody/GridHeader/Column"));
const Title_1 = __importDefault(require("./GridBody/GridHeader/Title"));
const ScrollDirection_1 = __importDefault(require("./GridBody/GridRows/ScrollDirection"));
const MainGridStyled_1 = __importDefault(require("./StyledComponents/MainGridStyled"));
const GridColumnStyled_1 = __importDefault(require("./StyledComponents/GridColumnStyled"));
const GridTitleStyled_1 = __importDefault(require("./StyledComponents/GridTitleStyled"));
const GridRowStyled_1 = __importDefault(require("./StyledComponents/GridRowStyled"));
const LoadPage_1 = require("./LoadPage");
const ScrollPage_1 = require("./ScrollPage");
const ColumnSizes_1 = require("./CustomTypes/ColumnSizes");
const GridColumnsStyled_1 = require("./StyledComponents/GridColumnsStyled");
const ColumnCollapsable_1 = require("../Grid/CustomTypes/ColumnCollapsable");
const ColumnVisibility_1 = require("./CustomTypes/ColumnVisibility");
const ExtendedRow_1 = __importDefault(require("./GridBody/GridRows/ExtendedRow"));
const CellGrouping_1 = __importDefault(require("./GridBody/GridRows/CellGrouping"));
const VISIBLEHEADER = "firstHeader";
exports.GridContext = react_1.createContext({
    activeFilter: {
        name: "",
        type: "",
        values: [],
        operator: 0,
    },
    allHeaders: [],
    allColumns: [],
    bottom: 0,
    data: {
        get: (sort, filters) => [],
        getTotal: (sort, filters) => 0,
    },
    filters: [],
    headersContext: [],
    items: [],
    loadedPages: 0,
    setLoaded: (updatedPages) => { },
    setItems: (updatedItems) => { },
    setTop: (newPage) => { },
    setBottom: (newPage) => { },
    sort: {
        sort_type: "",
        field_id: "",
        field_type: "",
    },
    setSort: (selectedSort) => { },
    selectionOptions: [],
    setActiveFilter: (newFilter) => { },
    setFilter: (_values) => { },
    setToggledColumn: (value) => { },
    setToggledHeader: (value) => { },
    top: -1,
    toggledColumn: {
        name: "",
        size: ColumnSizes_1.ColumnSizes.StandardColumn,
        collapsable: ColumnCollapsable_1.ColumnCollapsable.collapsable,
        type: "",
        toggled: false,
        minVisibility: ColumnVisibility_1.MinimumVisibility.SmallVisible,
    },
    toggledHeader: [],
});
function Grid(props) {
    const [activeFilter, updateActiveFilter] = react_1.useState({
        name: "",
        type: "",
        values: [],
        operator: 0,
    });
    const [allPages, updateAllPages] = react_1.useState(0);
    const [sort, updateSelectedSort] = react_1.useState({
        sort_type: "",
        field_id: "",
        field_type: "",
    });
    const [filters, updateFilters] = react_1.useState([]);
    const [toggledColumn, updateToggledColumn] = react_1.useState({
        name: "",
        size: ColumnSizes_1.ColumnSizes.StandardColumn,
        collapsable: ColumnCollapsable_1.ColumnCollapsable.collapsable,
        type: "",
        toggled: false,
        minVisibility: ColumnVisibility_1.MinimumVisibility.SmallVisible,
    });
    const [toggledHeader, updateToggledHeader] = react_1.useState([]);
    const [bottom, updateBottom] = react_1.useState(0);
    const [top, updateTop] = react_1.useState(-1);
    const [items, updateItems] = react_1.useState([]);
    const [loadedPages, updateLoadedPages] = react_1.useState(0);
    const [offset, setOffset] = react_1.useState(0);
    const [filterUpdate, setFilterUpdate] = react_1.useState(0);
    const [isToggled, setIsToggled] = react_1.useState([]);
    const flatHeader = () => {
        let allColumns = props.headers
            .filter((x) => x.name === "firstHeader")
            .map((header) => {
            return header.headers.map((columns) => {
                return columns.columns.map((column) => {
                    return column;
                });
            });
        });
        return allColumns.flat().flat();
    };
    const setLoaded = (updatedPages) => {
        updateLoadedPages(updatedPages);
    };
    const setItems = (updatedItems) => {
        updateItems(updatedItems);
    };
    const setBottom = (newPage) => {
        updateBottom(newPage);
    };
    const setTop = (newPage) => {
        updateTop(newPage);
    };
    const setSort = (selectedSort) => {
        updateSelectedSort({
            sort_type: selectedSort.sort_type,
            field_id: selectedSort.field_id,
            field_type: selectedSort.field_type,
        });
    };
    const setActiveFilter = (newFilter) => {
        updateActiveFilter(newFilter);
    };
    const setFilter = (filters) => {
        setFilterUpdate(Math.random());
        updateFilters(filters);
    };
    const setToggledColumn = (toggled) => {
        updateToggledColumn(toggled);
    };
    const setToggledHeader = (toggled) => {
        updateToggledHeader(toggled);
    };
    const checkRowIsToggled = (row_key) => {
        return isToggled.includes(row_key) ? "display-extended-row" : "";
    };
    const setToggledRow = (row_key) => {
        return isToggled.includes(row_key)
            ? setIsToggled(isToggled.filter((x) => x !== row_key))
            : setIsToggled(isToggled.concat(row_key));
    };
    let loadPage = new LoadPage_1.LoadPage(props.data);
    let scroolPage = new ScrollPage_1.ScrollPage(props.data);
    const loadOnScroolUp = (event) => {
        scroolPage.scrollUp(event, items, loadedPages, top, bottom, props.cacheSize, props.pageSize, sort, filters, updateTop, updateBottom, updateItems, updateLoadedPages, setOffset);
    };
    const loadOnScroolDown = (event) => {
        scroolPage.scrollDown(event, items, loadedPages, top, bottom, props.cacheSize, props.pageSize, sort, filters, updateTop, updateBottom, updateItems, updateLoadedPages, setOffset, offset, allPages);
    };
    const UpdateContainer = (event) => {
        loadOnScroolUp(event);
        loadOnScroolDown(event);
    };
    react_1.useEffect(() => {
        const ReloadData = () => {
            const ResetAllData = () => {
                setBottom(1);
                setItems([]);
                setOffset(0);
                setTop(-1);
            };
            ResetAllData();
            let loadingElements = loadPage.getPage(ScrollDirection_1.default.Initial, {
                pageSize: props.pageSize,
                top: top,
                bottom: bottom,
                sort: sort,
                filters: filters,
            });
            updateAllPages(props.data.getTotal(sort, filters));
            updateItems(loadingElements);
            updateLoadedPages(loadingElements.length);
            if (bottom === 0) {
                updateBottom(1);
            }
        };
        ReloadData();
    }, [
        filters,
        filterUpdate,
        sort.field_id,
        sort.field_type,
        sort.sort_type,
        props.data,
        props.pageSize,
    ]);
    return (react_1.default.createElement(exports.GridContext.Provider, { value: {
            activeFilter: activeFilter,
            allColumns: flatHeader(),
            allHeaders: props.headers,
            bottom: bottom,
            data: props.data,
            filters: filters,
            headersContext: props.headers,
            items: items,
            loadedPages: loadedPages,
            setLoaded: setLoaded,
            setItems: setItems,
            setBottom: setBottom,
            setTop: setTop,
            sort: sort,
            setActiveFilter: setActiveFilter,
            setSort: setSort,
            selectionOptions: flatHeader().filter((column) => column.type === "select"),
            setFilter: setFilter,
            toggledColumn: toggledColumn,
            setToggledColumn: setToggledColumn,
            toggledHeader: toggledHeader,
            setToggledHeader: setToggledHeader,
            top: top,
        } },
        react_1.default.createElement(exports.GridContext.Consumer, null, (context) => {
            return (react_1.default.createElement(MainGridStyled_1.default, { className: "main-grid", inputColumns: context.allColumns, inputSizes: ColumnSizes_1.ColumnSizes, onScroll: (e) => UpdateContainer(e) },
                context.allHeaders[0].headers.map((value, key) => {
                    return (react_1.default.createElement(GridTitleStyled_1.default, { columns: value.columns, key: key },
                        react_1.default.createElement(Title_1.default, { key: key, title: value.name, columns: value.columns })));
                }),
                react_1.default.createElement(GridColumnsStyled_1.MainGridColumnsStyled, { columns: context.allColumns }, context.allColumns.map((value, key) => {
                    return (react_1.default.createElement(GridColumnStyled_1.default, { className: value.minVisibility, key: key },
                        react_1.default.createElement(Column_1.default, { key: key, name: value.name, size: value.size, type: value.type, minVisibility: value.minVisibility, collapsable: value.collapsable, toggled: false, side: "left-side" })));
                })),
                context.items.map((x, row_key) => (react_1.default.createElement(react_1.default.Fragment, { key: row_key.toString() + `-row-container` },
                    react_1.default.createElement(GridRowStyled_1.default, { id: row_key.toString(), key: row_key, inputColumns: context.allColumns, inputTitles: context.allHeaders, onClick: () => setToggledRow(row_key) }, context.allHeaders
                        .filter((header) => {
                        return header.name === VISIBLEHEADER;
                    })[0]
                        .headers.map((grouping, key) => {
                        return grouping.columns.length > 0 ? (react_1.default.createElement(CellGrouping_1.default, { key: key, allData: context.allHeaders, grouping: grouping, row: x })) : ("");
                    })),
                    react_1.default.createElement(ExtendedRow_1.default, { id: row_key.toString(), key: row_key.toString() + `-row-extension`, row_key: row_key, allColumns: context.allColumns, completeRow: x, checkToggle: checkRowIsToggled }))))));
        })));
}
exports.default = Grid;
