"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const ColumnCollapsable_1 = require("../CustomTypes/ColumnCollapsable");
const ColumnSizes_1 = require("../CustomTypes/ColumnSizes");
const ColumnVisibility_1 = require("../CustomTypes/ColumnVisibility");
const Grid_1 = require("../Grid");
const StandardFilter = (props) => {
    let optionsForStrings = [
        "Contains",
        "Not contains",
        "Starts with",
        "Ends with",
        "Equals",
        "Not equals",
    ];
    let optionsForNumbers = ["Equals", "Not equals", "Less than", "Greater than"];
    const gridContext = react_2.useContext(Grid_1.GridContext);
    const [option, setOption] = react_2.useState(0);
    const [remove, setRemove] = react_2.useState(false);
    const convertOption = (column) => {
        var filter = gridContext.filters.find((x) => x.name === column.name);
        if (filter === undefined) {
            switch (column.type) {
                case "number":
                    return optionsForNumbers[option];
                default:
                    return optionsForStrings[option];
            }
        }
        else {
            switch (column.type) {
                case "number":
                    return optionsForNumbers[filter.operator === undefined ? 0 : filter.operator];
                default:
                    return optionsForStrings[filter.operator === undefined ? 0 : filter.operator];
            }
        }
    };
    const displayDeleteIcon = (column) => {
        const findFilter = gridContext.filters.findIndex((filter) => filter.name === column.name);
        if (findFilter !== -1) {
            if (remove === false) {
                setRemove(true);
            }
            return react_1.default.createElement("i", { className: "icon-trash icon" });
        }
    };
    const displayOptions = (options) => options.map((option, index) => react_1.default.createElement("option", { key: index }, option));
    const handleOnOptionChange = (e, column) => {
        gridContext.setActiveFilter({
            name: column.name,
            values: getFieldValue(column),
            type: column.type,
            operator: e.target.selectedIndex,
        });
        setOption(e.target.selectedIndex);
    };
    const getFieldValue = (header) => {
        if (header.name === gridContext.activeFilter.name) {
            return gridContext.activeFilter.values;
        }
        var filter = gridContext.filters.find((x) => x.name === header.name);
        return filter !== undefined ? filter.values : "";
    };
    const selectionOptions = (header) => {
        switch (header.type) {
            case "number":
                return displayOptions(optionsForNumbers);
            case "date":
                return displayOptions(optionsForNumbers);
            case undefined:
            case "text":
                return displayOptions(optionsForStrings);
        }
    };
    const deleteFilter = (e, column) => {
        const newList = gridContext.filters.filter((item) => item.name !== column.name);
        gridContext.setFilter(newList);
        gridContext.setActiveFilter({
            name: "",
            values: [],
            type: "",
            operator: 0,
        });
        setRemove(false);
    };
    const closeFilterOnEnter = (event) => {
        if (event.key === "Enter") {
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
    };
    const handleUserInput = (e, column) => {
        gridContext.setActiveFilter({
            name: column.name,
            values: e.target.value,
            type: column.type,
            operator: option,
        });
        if (e.target.value === "") {
            deleteFilter(e, column);
            gridContext.setActiveFilter({
                name: "",
                values: [],
                type: "",
                operator: 0,
            });
        }
    };
    react_2.useEffect(() => {
        const timeout = setTimeout(() => {
            const checkCurrentFilters = () => {
                return !gridContext.filters.some((x) => x.name === gridContext.activeFilter.name &&
                    x.type === gridContext.activeFilter.type &&
                    x.values === gridContext.activeFilter.values &&
                    x.operator === gridContext.activeFilter.operator);
            };
            if (gridContext.activeFilter.values[0] !== undefined &&
                gridContext.activeFilter.values[0] !== [] &&
                checkCurrentFilters()) {
                const handleAddFilter = () => {
                    let all_filters = new Array();
                    let res = gridContext.filters.filter((x) => x.name !== gridContext.activeFilter.name);
                    if (res.length > 0) {
                        all_filters = all_filters.concat(res);
                    }
                    all_filters = all_filters.concat({
                        name: gridContext.activeFilter.name,
                        type: gridContext.activeFilter.type,
                        values: gridContext.activeFilter.values,
                        operator: gridContext.activeFilter.operator,
                    });
                    gridContext.setFilter(all_filters);
                };
                handleAddFilter();
            }
        }, 1000);
        return () => clearTimeout(timeout);
    }, [gridContext]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_bootstrap_1.Form.Control, { as: "select", value: convertOption(props.header), onChange: (e) => {
                handleOnOptionChange(e, props.header);
            } }, selectionOptions(props.header)),
        react_1.default.createElement(react_bootstrap_1.Form.Control, { type: props.header.type, placeholder: "Filter...", onKeyPress: (e) => closeFilterOnEnter(e), onChange: (e) => handleUserInput(e, props.header), name: props.header.name, value: getFieldValue(props.header) }),
        react_1.default.createElement("div", { className: "input-icons" },
            react_1.default.createElement("div", { className: "delete-icon", tabIndex: remove === true ? 0 : -1, onKeyPress: (e) => {
                    deleteFilter(e, props.header);
                    setOption(0);
                }, onClick: (e) => {
                    deleteFilter(e, props.header);
                    setOption(0);
                } }, displayDeleteIcon(props.header)))));
};
exports.default = StandardFilter;
