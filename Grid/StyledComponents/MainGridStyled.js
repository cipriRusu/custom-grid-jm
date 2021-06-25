"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const ScreenThresholds_1 = __importDefault(require("./ScreenThresholds"));
const ColumnVisibility_1 = require("../CustomTypes/ColumnVisibility");
const MainGrid = styled_components_1.default.div `
  overflow-y: scroll;
  background-color: gray;
  flex: 1;

  @media (min-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    display: grid;
    grid-template-columns: ${(props) => props.inputColumns
    .filter((x) => {
    return x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible;
})
    .map((x) => {
    return x.size + " ";
})};

    grid-template-rows: 1.6rem 1.6rem repeat(
        auto-fit,
        minmax(max-content, 5rem)
      );
  }

  @media (min-width: ${ScreenThresholds_1.default.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    display: grid;
    grid-template-columns: ${(props) => props.inputColumns
    .filter((x) => {
    return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
        x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible);
})
    .map((x) => {
    return x.size + " ";
})};

    grid-template-rows: 1.6rem 1.6rem repeat(
        auto-fit,
        minmax(max-content, 5rem)
      );
  }

  @media (min-width: ${ScreenThresholds_1.default.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.MediumScreen + "rem"}) {
    display: grid;
    grid-template-columns: ${(props) => props.inputColumns
    .filter((x) => {
    return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
        x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible &&
        x.minVisibility !== ColumnVisibility_1.MinimumVisibility.LargeVisible);
})
    .map((x) => {
    return x.size + " ";
})};

    grid-template-rows: 1.6rem repeat(auto-fit, minmax(max-content, 5rem));
  }

  .display-extended-row {
    display: block;
  }
`;
exports.default = MainGrid;
