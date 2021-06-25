"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanRow = void 0;
const react_1 = __importDefault(require("react"));
const StyledBooleanRow_1 = __importDefault(require("./StyledExtendedComponents/StyledBooleanRow"));
const BooleanRow = (props) => {
    return (react_1.default.createElement(StyledBooleanRow_1.default, null,
        react_1.default.createElement("div", { className: "row-name" }, props.name + " : "),
        react_1.default.createElement("div", { className: "row-icon" }, props.completeRow[props.name] !== undefined &&
            JSON.parse(props.completeRow[props.name]) === true ? (react_1.default.createElement("i", { className: "fa fa-square", "aria-hidden": "true" })) : (react_1.default.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" })))));
};
exports.BooleanRow = BooleanRow;
