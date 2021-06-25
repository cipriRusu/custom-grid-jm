"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StandardCell_1 = __importDefault(require("./StandardCell"));
const BooleanCell_1 = __importDefault(require("./BooleanCell"));
const SelectionCell_1 = __importDefault(require("./SelectionCell"));
const DateCell_1 = __importDefault(require("./DateCell"));
const CellStyled_1 = require("../../StyledComponents/CellStyled");
const Grid_1 = require("../../Grid");
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const Cell = (props) => {
    let currentContext = react_1.useContext(Grid_1.GridContext);
    const ComputeCellType = (content) => {
        var _a;
        switch ((_a = content.cell_type) === null || _a === void 0 ? void 0 : _a.toString()) {
            case undefined:
            case "text":
            case "number":
                return (react_2.default.createElement(StandardCell_1.default, { cell_content: content.cell_content, cell_key: content.cell_key, cell_type: content.cell_type, cell_column: content.cell_column, cell_size: content.cell_size, cell_visibility: content.cell_visibility, cell_collapsable: content.cell_collapsable }));
            case "boolean":
                return (react_2.default.createElement(BooleanCell_1.default, { cell_content: content.cell_content, cell_key: content.cell_key, cell_type: content.cell_type, cell_size: content.cell_size, cell_visibility: content.cell_visibility, cell_collapsable: content.cell_collapsable }));
            case "select":
                return (react_2.default.createElement(SelectionCell_1.default, { id: content.id, cell_content: content.cell_content, cell_key: content.cell_key, cell_type: content.cell_type, cell_size: content.cell_size, selection_options: content.selection_options, cell_visibility: content.cell_visibility, cell_collapsable: content.cell_collapsable }));
            case "date":
                return (react_2.default.createElement(DateCell_1.default, { cell_content: content.cell_content, cell_key: content.cell_key, cell_type: content.cell_type, cell_size: content.cell_size, selection_options: content.selection_options, cell_visibility: content.cell_visibility, cell_collapsable: content.cell_collapsable }));
        }
    };
    return (react_2.default.createElement(CellStyled_1.CellStyled, { className: `${props.content.cell_visibility} ${props.content.cell_collapsable}`, key: props.content.cell_key, cell_type: props.content.cell_type, allColumns: currentContext.allColumns }, ComputeCellType(props.content)));
};
exports.default = Cell;
