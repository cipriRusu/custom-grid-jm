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
const react_1 = __importStar(require("react"));
const Grid_1 = require("../Grid");
const SelectionFilter_1 = __importDefault(require("./SelectionFilter"));
const StandardFilter_1 = __importDefault(require("./StandardFilter"));
const BooleanFilter_1 = __importDefault(require("./BooleanFilter"));
const DateFilter_1 = __importDefault(require("./DateFilter"));
const ColumnSizes_1 = require("../CustomTypes/ColumnSizes");
const ColumnCollapsable_1 = require("../CustomTypes/ColumnCollapsable");
const ColumnVisibility_1 = require("../CustomTypes/ColumnVisibility");
const StyledFilters_1 = __importDefault(require("./StyledFilters"));
const Filters = (props) => {
    const gridContext = react_1.useContext(Grid_1.GridContext);
    const [showArrow, setShowArrow] = react_1.useState(true);
    const handleColumnSorting = (column_name) => {
        setShowArrow(false);
        if (gridContext.sort.sort_type === "") {
            gridContext.sort.sort_type = "asc";
            gridContext.sort.field_id = column_name;
        }
        else if (gridContext.sort.field_id === column_name) {
            gridContext.sort.sort_type =
                gridContext.sort.sort_type === "asc" ? "desc" : "";
        }
        else {
            gridContext.sort.field_id = column_name;
            gridContext.sort.sort_type = "asc";
        }
        gridContext.setSort(gridContext.sort);
        setShowArrow(true);
    };
    const displayArrows = (name) => (react_1.default.createElement("span", { className: "sort-icon-container" }, gridContext.sort.field_id === name &&
        gridContext.sort.sort_type === "asc" ? (react_1.default.createElement("i", { className: "fa fa-arrow-up", "aria-hidden": "true" })) : gridContext.sort.field_id === name &&
        gridContext.sort.sort_type === "desc" ? (react_1.default.createElement("i", { className: "fa fa-arrow-down", "aria-hidden": "true" })) : (react_1.default.createElement("i", { className: "fa fa-arrow-up", hidden: showArrow }))));
    const handleFilterIcon = (header) => {
        switch (header.type) {
            case undefined:
            case "boolean":
            case "number":
            case "date":
                return gridContext.filters.map((x, index) => {
                    return header.name === x.name ? (react_1.default.createElement("i", { key: index, className: "icon-column fa fa-filter" })) : null;
                });
            case "select":
                return gridContext.filters.map((x, index) => {
                    return header.name === x.name &&
                        x.values !== undefined &&
                        x.values.length > 0 ? (react_1.default.createElement("i", { key: index, className: "icon-column fa fa-filter" })) : null;
                });
        }
    };
    react_1.useEffect(() => {
        document.addEventListener("click", (e) => {
            let visibleDropdowns = document.getElementsByClassName("show");
            Array.from(visibleDropdowns).forEach((dropdown) => {
                if (!dropdown.contains(e.target) &&
                    !e.target.classList.contains("fa") &&
                    !e.target.classList.contains("form-control") &&
                    !e.target.classList.contains("icon-trash")) {
                    gridContext.setToggledColumn({
                        name: "",
                        size: ColumnSizes_1.ColumnSizes.StandardColumn,
                        type: "",
                        minVisibility: ColumnVisibility_1.MinimumVisibility.SmallVisible,
                        collapsable: ColumnCollapsable_1.ColumnCollapsable.collapsable,
                    });
                    gridContext.setToggledHeader([]);
                }
            });
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                let visibleDropdowns = document.getElementsByClassName("show");
                Array.from(visibleDropdowns).forEach((dropdown) => {
                    gridContext.setToggledColumn({
                        name: "",
                        size: ColumnSizes_1.ColumnSizes.StandardColumn,
                        type: "",
                        minVisibility: ColumnVisibility_1.MinimumVisibility.SmallVisible,
                        collapsable: ColumnCollapsable_1.ColumnCollapsable.collapsable,
                    });
                    gridContext.setToggledHeader([]);
                });
            }
        });
        document.addEventListener("keyup", (e) => {
            if (e.key === "Tab") {
                let ddown = document.querySelector(".show");
                if (!(ddown === null || ddown === void 0 ? void 0 : ddown.contains(e.target))) {
                    let visibleDropdowns = document.getElementsByClassName("show");
                    Array.from(visibleDropdowns).forEach((dropdown) => {
                        gridContext.setToggledColumn({
                            name: "",
                            size: ColumnSizes_1.ColumnSizes.StandardColumn,
                            type: "",
                            minVisibility: ColumnVisibility_1.MinimumVisibility.SmallVisible,
                            collapsable: ColumnCollapsable_1.ColumnCollapsable.collapsable,
                        });
                        gridContext.setToggledHeader([]);
                    });
                }
            }
        });
    }, [props, gridContext]);
    return (react_1.default.createElement(StyledFilters_1.default, null,
        react_1.default.createElement("div", { className: "filter-container" }, props.columns.map((header, index) => (react_1.default.createElement("div", { className: "single-filter-wrapper", key: index },
            react_1.default.createElement("div", { className: "filter" },
                react_1.default.createElement("div", { id: "header" },
                    react_1.default.createElement("div", { className: "column-name", tabIndex: 0, onKeyPress: () => handleColumnSorting(header.name), onClick: () => {
                            handleColumnSorting(header.name);
                        } },
                        displayArrows(header.name),
                        react_1.default.createElement("p", { style: { margin: "0px" } }, header.name),
                        react_1.default.createElement("span", null, handleFilterIcon(header)))),
                header.type === "select" ? (react_1.default.createElement(SelectionFilter_1.default, { header: header })) : (""),
                header.type === undefined ||
                    header.type === "number" ||
                    header.type === "text" ? (react_1.default.createElement(StandardFilter_1.default, { header: header })) : (""),
                header.type === "boolean" ? (react_1.default.createElement(BooleanFilter_1.default, { header: header })) : (""),
                header.type === "date" ? react_1.default.createElement(DateFilter_1.default, { header: header }) : "")))))));
};
exports.default = Filters;
