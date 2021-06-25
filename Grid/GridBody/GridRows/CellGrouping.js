"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Cell_1 = __importDefault(require("./Cell"));
const StyledCellGrouping_1 = __importDefault(require("./StyledExtendedComponents/StyledCellGrouping"));
const CellGrouping = (props) => {
    return (react_1.default.createElement(StyledCellGrouping_1.default, { allData: props.allData, grouping: props.grouping }, props.grouping.columns.map((y, cell_key) => {
        return (react_1.default.createElement(Cell_1.default, { key: cell_key, content: {
                id: cell_key,
                cell_content: props.row[y.name],
                cell_type: y.type,
                cell_key: cell_key,
                cell_size: y.size,
                cell_visibility: y.minVisibility,
                cell_collapsable: y.collapsable,
                selection_options: y.options,
                cell_column: y.name.toLowerCase(),
            } }));
    })));
};
exports.default = CellGrouping;
