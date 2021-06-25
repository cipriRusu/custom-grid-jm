"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const StyledTitle_1 = __importDefault(require("./StyledTitle"));
const Dropdown_1 = __importDefault(require("react-bootstrap/Dropdown"));
const Filters_1 = __importDefault(require("../../GridTools/Filters"));
const Grid_1 = require("../../Grid");
require("font-awesome/css/font-awesome.min.css");
function handleSortIcon(sort, columns) {
    let currentSort = null;
    columns.forEach((x) => {
        if (x.name === sort.field_id && sort.sort_type === "asc") {
            currentSort = (react_1.default.createElement("i", { className: "sort-icon-title fa fa-arrow-up", "aria-hidden": "true" }));
        }
        else if (x.name === sort.field_id && sort.sort_type === "desc") {
            currentSort = (react_1.default.createElement("i", { className: "sort-icon-title fa fa-arrow-down", "aria-hidden": "true" }));
        }
    });
    if (currentSort === null) {
        currentSort = (react_1.default.createElement("i", { className: "sort-icon-title fa fa-arrow-down hidden-icon" }));
    }
    return currentSort;
}
function handleFilterIcon(filter, columns) {
    let currentFilter = null;
    columns.forEach((column) => {
        filter.forEach((filter) => {
            if (filter !== undefined && column.name === filter.name) {
                currentFilter = (react_1.default.createElement("i", { tabIndex: 0, className: "fa fa-filter filter-icon", "aria-hidden": "true" }));
            }
        });
    });
    if (currentFilter === null) {
        currentFilter = (react_1.default.createElement("i", { tabIndex: 0, className: "fa fa-filter filter-icon-hoverable", "aria-hidden": "true" }));
    }
    return currentFilter;
}
function Title(props) {
    return (react_1.default.createElement(StyledTitle_1.default, null,
        react_1.default.createElement(Grid_1.GridContext.Consumer, null, (value) => (react_1.default.createElement(Dropdown_1.default, { className: "title-container" },
            react_1.default.createElement("div", { className: "title" },
                react_1.default.createElement("div", { className: "title-bar", onClick: () => {
                        if (props.columns === value.toggledHeader) {
                            value.setToggledHeader([]);
                        }
                        else {
                            value.setToggledHeader(props.columns);
                        }
                    }, onKeyPress: () => {
                        if (props.columns === value.toggledHeader) {
                            value.setToggledHeader([]);
                        }
                        else {
                            value.setToggledHeader(props.columns);
                        }
                    } },
                    handleSortIcon(value.sort, props.columns),
                    react_1.default.createElement("p", null, props.title),
                    handleFilterIcon(value.filters, props.columns))),
            react_1.default.createElement("div", { className: `title-dropdown ${props.columns === value.toggledHeader ? "show" : ""}` },
                react_1.default.createElement("div", { style: { backgroundColor: "white", borderRadius: 5 } }, props.columns.map((x, y) => {
                    return react_1.default.createElement(Filters_1.default, { key: y, columns: [x] });
                }))))))));
}
exports.default = Title;
