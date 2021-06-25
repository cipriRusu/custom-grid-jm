"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DateCell = (props) => {
    let date = new Date(Date.parse(props.cell_content || ""));
    return (react_1.default.createElement("div", { className: "cell date-cell" },
        date.toLocaleString("default", { month: "long" }),
        " ",
        date.getDate(),
        " ",
        date.getFullYear()));
};
exports.default = DateCell;
