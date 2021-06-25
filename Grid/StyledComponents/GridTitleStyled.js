"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const ColumnVisibility_1 = require("../CustomTypes/ColumnVisibility");
const ScreenThresholds_1 = __importDefault(require("./ScreenThresholds"));
const GridTitle = styled_components_1.default.div `
  @media (min-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    display: ${(props) => {
    return props.columns.filter((x) => {
        return x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible;
    }).length > 0
        ? "grid"
        : "none";
}};

    grid-column: ${(props) => {
    return ("span " +
        props.columns.filter((x) => {
            return x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible;
        }).length);
}};
  }

  @media (min-width: ${ScreenThresholds_1.default.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    display: ${(props) => {
    return props.columns.filter((x) => {
        return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
            x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible);
    }).length > 0
        ? "block"
        : "none";
}};

    grid-column: ${(props) => {
    return ("span " +
        props.columns.filter((x) => {
            return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
                x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible);
        }).length);
}};
  }

  @media (min-width: ${ScreenThresholds_1.default.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.MediumScreen + "rem"}) {
    display: ${(props) => {
    return props.columns.filter((x) => {
        return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
            x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible &&
            x.minVisibility !== ColumnVisibility_1.MinimumVisibility.LargeVisible);
    }).length > 0
        ? "block"
        : "none";
}};

    grid-column: ${(props) => {
    return ("span " +
        props.columns.filter((x) => {
            return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
                x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible &&
                x.minVisibility !== ColumnVisibility_1.MinimumVisibility.LargeVisible);
        }).length);
}};
  }

  @media (max-width: ${ScreenThresholds_1.default.SmallScreen + "rem"}) {
    display: none;
  }

  background-color: black;
`;
exports.default = GridTitle;
