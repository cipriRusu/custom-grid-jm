"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const Grid_1 = require("../Grid");
const SelectionFilter = (props) => {
    var _a;
    let gridContext = react_2.useContext(Grid_1.GridContext);
    let filter = gridContext.selectionOptions.filter((filters) => filters.name === props.header.name)[0];
    const addSelectionFilter = (header, option, checked) => {
        if (checked === true) {
            let filters = gridContext.filters;
            if (filters.some((x) => x.name === header.name)) {
                let defaultFilter = filters.filter((x) => x.name === header.name)[0];
                if (defaultFilter.values !== undefined &&
                    !defaultFilter.values.includes(option)) {
                    defaultFilter.values = defaultFilter.values.concat(option);
                    gridContext.setFilter(filters);
                }
            }
            else {
                let newFilter = {
                    name: header.name,
                    type: header.type,
                    values: option,
                    operator: 0,
                };
                let current = [...gridContext.filters, newFilter];
                gridContext.setFilter(current);
            }
        }
        if (checked === false) {
            let filters = gridContext.filters;
            let defaultFilter = filters.filter((x) => {
                return x.name === header.name;
            })[0];
            if (defaultFilter !== undefined) {
                defaultFilter.values = defaultFilter.values.filter((x) => {
                    return !option.includes(x);
                });
            }
            if (defaultFilter !== undefined && defaultFilter.values.length === 0) {
                filters = filters.filter((x) => {
                    return x.name !== header.name;
                });
            }
            gridContext.setFilter(filters);
        }
    };
    const displayCheck = (header, currentValue, allValues) => {
        let filter = gridContext.filters.filter((filter) => {
            return filter.name === header.name;
        })[0];
        if (filter !== undefined &&
            filter.values !== undefined &&
            allValues.every((x) => filter.values !== undefined && filter.values.includes(x))) {
            return true;
        }
        if (filter !== undefined && filter.values !== undefined) {
            return filter.values.includes(currentValue) ? true : false;
        }
        return false;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_bootstrap_1.Form.Check, { className: "form-check all-selector", type: "checkbox", label: "Select All", checked: displayCheck(props.header, "Select All", filter.options || new Array()), onChange: (e) => {
                addSelectionFilter(props.header, filter.options || new Array(), e.target.checked);
            }, onKeyPress: (e) => {
                if (e.key === "Enter") {
                    let activeElement = document.activeElement;
                    if (activeElement !== null) {
                        activeElement.click();
                    }
                }
            } }), (_a = filter.options) === null || _a === void 0 ? void 0 :
        _a.map((value, key) => {
            return (react_1.default.createElement(react_bootstrap_1.Form.Check, { key: key, className: "form-check", type: "checkbox", label: value.name, checked: displayCheck(props.header, value, filter.options || new Array()), onChange: (e) => {
                    addSelectionFilter(props.header, [value], e.target.checked);
                }, onKeyPress: (e) => {
                    if (e.key === "Enter") {
                        let activeElement = document.activeElement;
                        if (activeElement !== null) {
                            activeElement.click();
                        }
                    }
                } }));
        }),
        " "));
};
exports.default = SelectionFilter;
