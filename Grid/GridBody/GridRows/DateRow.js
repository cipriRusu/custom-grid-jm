"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRow = void 0;
const react_1 = __importDefault(require("react"));
const StyledDateRow_1 = require("./StyledExtendedComponents/StyledDateRow");
const DateRow = (props) => {
    let currentDate = new Date(props.completeRow[props.name]).toLocaleDateString(undefined, {
        day: "2-digit",
        weekday: "long",
        month: "long",
        year: "numeric",
    });
    return (react_1.default.createElement(StyledDateRow_1.StyledDateRow, null,
        react_1.default.createElement("div", { className: "row-name" },
            props.name,
            ":"),
        react_1.default.createElement("div", { className: "row-content" }, currentDate)));
};
exports.DateRow = DateRow;
