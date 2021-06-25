"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const GridRowExtendedStyled_1 = __importDefault(require("../../StyledComponents/GridRowExtendedStyled"));
const BooleanRow_1 = require("./BooleanRow");
const DateRow_1 = require("./DateRow");
const StandardRow_1 = require("./StandardRow");
const ExtendedRow = (props) => {
    return (react_1.default.createElement(GridRowExtendedStyled_1.default, { className: props.checkToggle(props.row_key), inputColumns: props.allColumns },
        react_1.default.createElement("br", null),
        props.allColumns.map((x, key) => {
            return (react_1.default.createElement("div", { key: key, className: x.minVisibility }, (() => {
                switch (x.type) {
                    case "text":
                    case "number":
                    case "select":
                        return (react_1.default.createElement(StandardRow_1.StandardRow, { name: x.name, completeRow: props.completeRow }));
                    case "boolean":
                        return (react_1.default.createElement(BooleanRow_1.BooleanRow, { name: x.name, completeRow: props.completeRow }));
                    case "date":
                        return (react_1.default.createElement(DateRow_1.DateRow, { name: x.name, completeRow: props.completeRow }));
                    default:
                        return (react_1.default.createElement(StandardRow_1.StandardRow, { name: x.name, completeRow: props.completeRow }));
                }
            })()));
        }),
        react_1.default.createElement("br", null)));
};
exports.default = ExtendedRow;
