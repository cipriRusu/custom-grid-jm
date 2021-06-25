"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BooleanCell = (props) => {
    const ComputeBool = (value) => {
        switch (value) {
            case true:
                return react_1.default.createElement("i", { className: "fa fa-square", "aria-hidden": "true" });
            case false:
                return react_1.default.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" });
        }
    };
    return (react_1.default.createElement("div", { className: "cell boolean-cell" }, ComputeBool(Boolean(props.cell_content))));
};
exports.default = BooleanCell;
