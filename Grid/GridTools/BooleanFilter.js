"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const Grid_1 = require("../Grid");
const BooleanFilter = (props) => {
    let optionsForBoolean = [true, false];
    let gridContext = react_2.useContext(Grid_1.GridContext);
    const addBooleanFilter = (header, checked, option) => {
        let filters = gridContext.filters;
        if (checked === true) {
            if (filters.some((x) => x.name === header.name)) {
                let defaultFilter = filters.filter((x) => x.name === header.name)[0];
                if (defaultFilter.values !== undefined) {
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
                let updatedFilters = [...gridContext.filters, newFilter];
                gridContext.setFilter(updatedFilters);
            }
        }
        if (checked === false) {
            if (filters.some((x) => x.name === header.name)) {
                let defaultFilter = filters.filter((x) => {
                    return x.name === header.name;
                })[0];
                if (defaultFilter.values !== undefined) {
                    defaultFilter.values = defaultFilter.values.filter((x) => {
                        return !option.includes(x);
                    });
                    if (defaultFilter.values.length === 0) {
                        filters = filters.filter((x) => {
                            return x.name !== header.name;
                        });
                    }
                    gridContext.setFilter(filters);
                }
            }
        }
    };
    const capitalizeWord = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    const DisplayCheck = (header, options) => {
        let appliedFilters = gridContext.filters.filter((x) => {
            return x.name === header.name;
        });
        return appliedFilters.some((x) => {
            return options.every((y) => {
                return x.values.includes(y);
            });
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_bootstrap_1.Form.Check, { className: "all-selector", type: "checkbox", label: "Select All", checked: DisplayCheck(props.header, [true, false]), onChange: (e) => {
                addBooleanFilter(props.header, e.target.checked, [true, false]);
            }, onKeyPress: (e) => {
                if (e.key === "Enter") {
                    let activeElement = document.activeElement;
                    if (activeElement !== null) {
                        activeElement.click();
                    }
                }
            } }),
        optionsForBoolean.map((option, key) => {
            return (react_1.default.createElement(react_bootstrap_1.Form.Check, { key: key, className: "form-check", checked: DisplayCheck(props.header, [option]), type: "checkbox", label: capitalizeWord(option.toString()), onChange: (e) => {
                    addBooleanFilter(props.header, e.target.checked, [option]);
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
exports.default = BooleanFilter;
