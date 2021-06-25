"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("font-awesome/css/font-awesome.min.css");
const Dropdown_1 = __importDefault(require("react-bootstrap/Dropdown"));
const Grid_1 = require("../../Grid");
const Filters_1 = __importDefault(require("../../GridTools/Filters"));
const ColumnSizes_1 = require("../../CustomTypes/ColumnSizes");
const ColumnCollapsable_1 = require("../../CustomTypes/ColumnCollapsable");
const ColumnVisibility_1 = require("../../CustomTypes/ColumnVisibility");
const StyledColumn_1 = __importDefault(require("./StyledColumn"));
class Column extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            size: this.props.size,
            type: this.props.type,
            toggled: this.props.toggled,
            minVisibility: this.props.minVisibility,
            collapsable: this.props.collapsable,
            side: this.props.side,
        };
    }
    getSide() {
        window.addEventListener("click", (e) => {
            if (e.target !== null) {
                let targetClickElement = e.target;
                if (targetClickElement.classList.contains("fa-filter")) {
                    if (e.pageX < 200) {
                        let element = document.getElementsByClassName("show")[0];
                        if (element !== undefined) {
                            element.classList.add("right-side");
                        }
                    }
                    else {
                        let element = document.getElementsByClassName("show")[0];
                        if (element !== undefined) {
                            element.classList.add("left-side");
                        }
                    }
                }
            }
        });
        return "";
    }
    handleColumnSorting(value) {
        if (value.sort.sort_type === "") {
            value.sort.sort_type = "asc";
            value.sort.field_id = this.props.name;
            value.sort.field_type = this.props.type;
        }
        else if (value.sort.field_id === this.props.name) {
            value.sort.sort_type = value.sort.sort_type === "asc" ? "desc" : "";
        }
        else {
            value.sort.field_id = this.props.name;
            value.sort.sort_type = "asc";
        }
        if (value.sort.sort_type === "") {
            value.sort.field_id = "";
            value.sort.field_type = this.props.type;
        }
        value.setSort(value.sort);
    }
    handleFilterIcon(value) {
        switch (this.state.type) {
            case undefined:
            case "number":
            case "boolean":
            case "date":
                if (value.filters.some((x) => {
                    return x.name === this.state.name;
                })) {
                    return (react_1.default.createElement("i", { className: "filter-icon-column-visible fa fa-filter", "aria-hidden": "true" }));
                }
                else {
                    return (react_1.default.createElement("i", { className: "filter-icon-column fa fa-filter", "aria-hidden": "true" }));
                }
            case "select":
                if (value.filters.some((x) => {
                    return x.name === this.state.name;
                })) {
                    return (react_1.default.createElement("i", { className: "filter-icon-column-visible fa fa-filter", "aria-hidden": "true" }));
                }
                else {
                    return (react_1.default.createElement("i", { className: "filter-icon-column fa fa-filter", "aria-hidden": "true" }));
                }
            default:
                return (react_1.default.createElement("i", { className: "filter-icon-column fa fa-filter", "aria-hidden": "true" }));
        }
    }
    handleSortIcon(value) {
        return value.sort.field_id === this.props.name &&
            value.sort.sort_type === "asc" ? (react_1.default.createElement("i", { className: "fa fa-arrow-up", "aria-hidden": "true" })) : value.sort.field_id === this.props.name &&
            value.sort.sort_type === "desc" ? (react_1.default.createElement("i", { className: "fa fa-arrow-down", "aria-hidden": "true" })) : (react_1.default.createElement("i", { className: "fa fa-arrow-down hidden-icon", "aria-hidden": "true" }));
    }
    render() {
        return (react_1.default.createElement(StyledColumn_1.default, null,
            react_1.default.createElement("div", { className: `column-container ${this.props.size}` },
                react_1.default.createElement(Grid_1.GridContext.Consumer, null, (value) => (react_1.default.createElement(Dropdown_1.default, null,
                    react_1.default.createElement("div", { className: "column" },
                        react_1.default.createElement("div", { style: { maxWidth: "11rem", overflow: "hidden" }, className: "sort", tabIndex: 0, onKeyPress: () => this.handleColumnSorting(value), onClick: () => this.handleColumnSorting(value) },
                            this.handleSortIcon(value),
                            this.props.name),
                        react_1.default.createElement("div", { tabIndex: 0, className: "filter", onClick: () => {
                                if (value.toggledColumn === this.state) {
                                    value.setToggledColumn({
                                        name: "",
                                        size: ColumnSizes_1.ColumnSizes.StandardColumn,
                                        toggled: false,
                                        minVisibility: ColumnVisibility_1.MinimumVisibility.SmallVisible,
                                        collapsable: ColumnCollapsable_1.ColumnCollapsable.collapsable,
                                    });
                                }
                                else {
                                    value.setToggledColumn(this.state);
                                }
                            }, onKeyPress: () => {
                                if (value.toggledColumn === this.state) {
                                    value.setToggledColumn({
                                        name: "",
                                        size: ColumnSizes_1.ColumnSizes.StandardColumn,
                                        toggled: false,
                                        minVisibility: ColumnVisibility_1.MinimumVisibility.SmallVisible,
                                        collapsable: ColumnCollapsable_1.ColumnCollapsable.collapsable,
                                    });
                                }
                                else {
                                    value.setToggledColumn(this.state);
                                }
                            } }, this.handleFilterIcon(value))),
                    react_1.default.createElement("div", { className: "filter-dropdown" +
                            `${this.state === value.toggledColumn
                                ? `${this.getSide()} show`
                                : ""}` },
                        react_1.default.createElement(Filters_1.default, { columns: [this.props] }))))))));
    }
}
exports.default = Column;
