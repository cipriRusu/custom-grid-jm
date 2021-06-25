"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SelectionCell = (content) => {
    const DisplayIcon = (content, options) => {
        let selectionCellContent = options.filter((x) => x !== undefined && x.name === content)[0];
        return selectionCellContent !== undefined ? (react_1.default.createElement("i", { className: selectionCellContent.icon, "aria-hidden": "true" })) : (react_1.default.createElement("i", { className: "", "aria-hidden": "true" }));
    };
    const icon = DisplayIcon(content.cell_content || "", content.selection_options || []);
    return (react_1.default.createElement("div", { className: "cell selection-cell" },
        react_1.default.createElement("div", { style: {
                display: (icon === null || icon === void 0 ? void 0 : icon.props.className) === "" ? "none" : "block",
            }, className: "selection-cell-icon" }, icon),
        react_1.default.createElement("div", { className: "selection-cell-text" }, content.cell_content)));
};
exports.default = SelectionCell;
