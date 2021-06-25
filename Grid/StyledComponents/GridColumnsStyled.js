"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainGridColumnsStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ScreenThresholds_1 = __importDefault(require("./ScreenThresholds"));
const ColumnVisibility_1 = require("../CustomTypes/ColumnVisibility");
exports.MainGridColumnsStyled = styled_components_1.default.div `
  display: grid;
  grid-column: span ${(props) => props.columns.length};
  white-space: nowrap;
  grid-template-columns: ${(props) => props.columns
    .filter((x) => {
    return x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible;
})
    .map((x) => {
    return x.size + " ";
})};

  @media (min-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) => props.columns
    .filter((x) => {
    return x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible;
})
    .map((x) => {
    return x.size + " ";
})};
  }

  @media (min-width: ${ScreenThresholds_1.default.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) => props.columns
    .filter((x) => {
    return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible &&
        x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible);
})
    .map((x) => {
    return x.size + " ";
})};

    .${ColumnVisibility_1.MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }
  }

  .${ColumnVisibility_1.MinimumVisibility.Invisible.toString()} {
    display: none;
  }

  @media (max-width: ${ScreenThresholds_1.default.MediumScreen + "rem"}) {
    display: none;
  }
`;
