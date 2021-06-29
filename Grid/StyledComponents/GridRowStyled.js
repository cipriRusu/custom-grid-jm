"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const ScreenThresholds_1 = __importDefault(require("./ScreenThresholds"));
const ColumnVisibility_1 = require("../CustomTypes/ColumnVisibility");
const GridRowStyled = styled_components_1.default.div `
  grid-column: span ${(props) => props.inputColumns.length};
  display: grid;
  border-bottom: solid;
  border-width: thin;
  border-color: darkgray;
  background-color: #404444;
  color: white;
  :hover {
    background-color: #595f5f;
    cursor: pointer;
  }

  @media (min-device-width: 2000px), (min-device-height: 1000px) {
    height: 10vh;
  }

  @media (min-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) => props.inputColumns
    .filter((x) => {
    return x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible;
})
    .map((x) => {
    return `${x.size + " "}`;
})};

    height: 10vh;
  }

  @media (min-width: ${ScreenThresholds_1.default.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) => props.inputColumns
    .filter((x) => {
    return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible &&
        x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible);
})
    .map((x) => {
    return `${x.size + " "}`;
})};

    .${ColumnVisibility_1.MinimumVisibility.MaxVisible} {
      display: none;
    }

    height: 10vh;
  }

  @media (min-width: ${ScreenThresholds_1.default.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.MediumScreen + "rem"}) {
    grid-template-columns: ${(props) => props.inputColumns
    .filter((x) => {
    return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
        x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible &&
        x.minVisibility !== ColumnVisibility_1.MinimumVisibility.LargeVisible);
})
    .map((x) => {
    return `${x.size + " "}`;
})};

    .${ColumnVisibility_1.MinimumVisibility.MaxVisible} {
      display: none;
    }

    .${ColumnVisibility_1.MinimumVisibility.LargeVisible} {
      display: none;
    }
  }

  @media (max-width: ${ScreenThresholds_1.default.SmallScreen + "rem"}) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;

    .${ColumnVisibility_1.MinimumVisibility.MaxVisible} {
      display: none;
    }

    .${ColumnVisibility_1.MinimumVisibility.LargeVisible} {
      display: none;
    }

    .${ColumnVisibility_1.MinimumVisibility.MediumVisible} {
      display: none;
    }
  }

  .${ColumnVisibility_1.MinimumVisibility.Invisible} {
    display: none;
  }
`;
exports.default = GridRowStyled;
