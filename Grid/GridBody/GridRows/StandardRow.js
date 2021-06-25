"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardRow = void 0;
const react_1 = __importDefault(require("react"));
const StyledStandardRow_1 = __importDefault(require("./StyledExtendedComponents/StyledStandardRow"));
const StandardRow = (props) => {
    return (react_1.default.createElement(StyledStandardRow_1.default, null,
        react_1.default.createElement("div", { className: "row-name" },
            props.name,
            " ",
            ":"),
        react_1.default.createElement("div", { className: "row-content" }, props.completeRow[props.name])));
};
exports.StandardRow = StandardRow;
