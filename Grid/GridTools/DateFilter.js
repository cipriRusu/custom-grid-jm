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
const react_bootstrap_1 = require("react-bootstrap");
const Grid_1 = require("../Grid");
const DatePicker_1 = __importDefault(require("./DatePicker"));
const StyledDateFilter_1 = __importDefault(require("./StyledDateFilter"));
var DateOptions;
(function (DateOptions) {
    DateOptions[DateOptions["Equals"] = 0] = "Equals";
    DateOptions[DateOptions["After"] = 1] = "After";
    DateOptions[DateOptions["Before"] = 2] = "Before";
    DateOptions[DateOptions["Not Equals"] = 3] = "Not Equals";
    DateOptions[DateOptions["Between"] = 4] = "Between";
})(DateOptions || (DateOptions = {}));
const DateFilter = (props) => {
    const gridContext = react_1.useContext(Grid_1.GridContext);
    const getCurrentFilter = () => {
        return gridContext.filters.filter((x) => {
            return props.header.name === x.name;
        })[0];
    };
    const [option, setOption] = react_1.useState(getCurrentFilter() !== undefined ? getCurrentFilter().operator : 0);
    let optionsForDate = ["Equals", "After", "Before", "Not Equals", "Between"];
    const addNewFilter = (newDate) => {
        let updatedFilters = getAllFiltersExceptCurrent(gridContext.filters);
        updatedFilters = updatedFilters.concat(createNewFilter(newDate));
        gridContext.setFilter(updatedFilters);
    };
    const updateExistingFilter = (newDate, id) => {
        let currentFilter = getCurrentFilter();
        let updatedFilters = getAllFiltersExceptCurrent(gridContext.filters);
        if (newDate === null) {
            currentFilter.values.pop();
            updatedFilters = updatedFilters.concat(currentFilter);
            gridContext.setFilter(updatedFilters);
        }
        else {
            if (currentFilter.operator !== DateOptions.Between) {
                let allFilters = getAllFiltersExceptCurrent(gridContext.filters);
                allFilters.push(createNewFilter(newDate));
                gridContext.setFilter(allFilters);
            }
            if (currentFilter.operator === DateOptions.Between) {
                if (currentFilter.values.length > 1) {
                    if (id === "first-date") {
                        currentFilter.values.shift();
                        currentFilter.values.unshift(newDate);
                    }
                    if (id === "second-date") {
                        currentFilter.values.pop();
                        currentFilter.values.push(newDate);
                    }
                }
                else {
                    if (id === "first-date") {
                        currentFilter.values.pop();
                        currentFilter.values.push(newDate);
                    }
                    if (id === "second-date") {
                        currentFilter.values.push(newDate);
                    }
                }
                updatedFilters = updatedFilters.concat(currentFilter);
                gridContext.setFilter(updatedFilters);
            }
        }
    };
    const convertOption = (option) => {
        return DateOptions[option];
    };
    const createNewFilter = (newDate) => {
        return {
            name: props.header.name,
            type: "date",
            values: [newDate],
            operator: option,
        };
    };
    const displayOptions = (options) => options.map((option, index) => react_1.default.createElement("option", { key: index }, option));
    const getAllFiltersExceptCurrent = (allFilters) => {
        return allFilters.filter((x) => {
            return x.name !== props.header.name;
        });
    };
    const getDateValue = (id) => {
        let currentFilter = getCurrentFilter();
        if (id === "first-date") {
            return currentFilter !== undefined && currentFilter !== undefined
                ? currentFilter.values[0]
                : undefined;
        }
        if (id === "second-date") {
            return currentFilter !== undefined && currentFilter !== undefined
                ? currentFilter.values[1]
                : undefined;
        }
    };
    const getOption = () => {
        let currentFilter = getCurrentFilter();
        return currentFilter !== undefined && currentFilter !== undefined
            ? currentFilter.operator
            : option;
    };
    const isDateInterval = () => {
        let currentFilter = getCurrentFilter();
        return currentFilter !== undefined &&
            currentFilter.operator === DateOptions.Between
            ? true
            : false;
    };
    const removeCurrentFilter = () => {
        gridContext.setFilter(getAllFiltersExceptCurrent(gridContext.filters));
    };
    const handleDateChange = (newDate, id) => {
        let currentFilter = getCurrentFilter();
        if (newDate !== null) {
            if (option !== DateOptions.Between && currentFilter === undefined) {
                addNewFilter(newDate);
            }
            if (option !== DateOptions.Between && currentFilter !== undefined) {
                updateExistingFilter(newDate, id);
            }
            if (option === DateOptions.Between && currentFilter === undefined) {
                addNewFilter(newDate);
            }
            if (option === DateOptions.Between && currentFilter !== undefined) {
                updateExistingFilter(newDate, id);
            }
        }
        if (newDate === null) {
            switch (id) {
                case "first-date":
                    setOption(0);
                    removeCurrentFilter();
                    break;
                case "second-date":
                    updateExistingFilter(null, id);
                    break;
            }
        }
    };
    return (react_1.default.createElement(StyledDateFilter_1.default, null,
        react_1.default.createElement("div", { className: "date-filter" },
            react_1.default.createElement(react_bootstrap_1.Form.Control, { as: "select", value: convertOption(getOption()), onChange: (e) => {
                    setOption(e.target.selectedIndex);
                    removeCurrentFilter();
                } }, displayOptions(optionsForDate)),
            react_1.default.createElement("div", { className: "date-filter-display" },
                react_1.default.createElement(DatePicker_1.default, { id: "first-date", date: getDateValue("first-date"), handleUserInputDate: handleDateChange })),
            react_1.default.createElement("div", { className: isDateInterval() ? "date-filter-display" : "date-filter-hide" },
                react_1.default.createElement(DatePicker_1.default, { id: "second-date", date: getDateValue("second-date"), handleUserInputDate: handleDateChange })))));
};
exports.default = DateFilter;
