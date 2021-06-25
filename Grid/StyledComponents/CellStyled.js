"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ColumnTypes_1 = require("../CustomTypes/ColumnTypes");
const ScreenThresholds_1 = __importDefault(require("./ScreenThresholds"));
exports.CellStyled = styled_components_1.default.div `
  @media (min-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    .cell {
      display: grid;
      margin: 1rem;
      grid-auto-flow: column;
      min-width: 5rem;
      word-break: break-all;
      word-wrap: break-word;
    }

    .boolean-cell {
      .fa {
        margin-left: 1rem;
      }
    }
  }

  @media (min-width: ${ScreenThresholds_1.default.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    .cell {
      display: grid;
      margin: 1rem;
      grid-auto-flow: column;
      word-break: break-all;
      word-wrap: break-word;
    }
  }

  @media (min-width: ${ScreenThresholds_1.default.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.MediumScreen + "rem"}) {
    ${(props) => props.cell_type === ColumnTypes_1.ColumnTypes.select && `grid-row: span 100;`}
    .cell {
      display: grid;
      margin: 0.5rem 0rem 0.5rem 0.5rem;
      grid-auto-flow: column;
      word-break: break-all;
      word-wrap: break-word;
    }

    .selection-cell {
      display: flex;
      .selection-cell-text {
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: ${ScreenThresholds_1.default.SmallScreen + "rem"}) {
    .row-container {
      .row {
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: solid thin;
        .cell {
          padding: 0px;
        }
      }
    }
  }
`;
