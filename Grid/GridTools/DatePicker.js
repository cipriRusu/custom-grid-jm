"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const StyledDatePicker_1 = __importDefault(require("./StyledDatePicker"));
const DatePicker = (props) => {
    const RemoveIcon = (date) => {
        return date !== undefined ? (react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true", onClick: () => {
                props.handleUserInputDate(null, props.id);
            }, tabIndex: 0 })) : ("");
    };
    const UserInput = (date) => {
        return (react_1.default.createElement("input", { className: "user-input", type: "date", value: (date !== undefined ? date.toISOString().split("T")[0] : undefined) ||
                "", onChange: (e) => {
                props.handleUserInputDate(new Date(e.target.value), props.id);
            }, tabIndex: 0 }));
    };
    return (react_1.default.createElement(StyledDatePicker_1.default, null,
        react_1.default.createElement("div", { className: "date-picker" },
            RemoveIcon(props.date),
            UserInput(props.date))));
};
exports.default = DatePicker;
