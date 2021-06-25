"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const ColumnVisibility_1 = require("../../../CustomTypes/ColumnVisibility");
const ScreenThresholds_1 = __importDefault(require("../../../StyledComponents/ScreenThresholds"));
const ColumnTypes_1 = require("../../../CustomTypes/ColumnTypes");
const StyledCellGrouping = styled_components_1.default.div `
  @media (min-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    display: ${(props) => {
    return props.grouping.columns.filter((x) => {
        return x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible;
    }).length > 0
        ? "grid"
        : "none";
}};

    grid-column: span
      ${(props) => {
    return props.grouping.columns.filter((x) => {
        return x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible;
    }).length;
}};

    grid-template-columns: ${(props) => {
    return props.grouping.columns
        .filter((x) => {
        return x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible;
    })
        .map((x) => {
        return x.size + " ";
    });
}};
  }

  @media (min-width: ${ScreenThresholds_1.default.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    display: ${(props) => {
    return props.grouping.columns.filter((x) => {
        return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
            x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible);
    }).length > 0
        ? "grid"
        : "none";
}};

    grid-column: span
      ${(props) => {
    return props.grouping.columns.filter((x) => {
        return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
            x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible);
    }).length;
}};

    grid-template-columns: ${(props) => {
    return props.grouping.columns
        .filter((x) => {
        return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
            x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible);
    })
        .map((x) => {
        return x.size + " ";
    });
}};

    .${ColumnVisibility_1.MinimumVisibility.MaxVisible} {
      display: none;
    }
  }

  @media (min-width: ${ScreenThresholds_1.default.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.MediumScreen + "rem"}) {
    display: ${(props) => {
    return props.grouping.columns.filter((x) => {
        return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
            x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible &&
            x.minVisibility !== ColumnVisibility_1.MinimumVisibility.LargeVisible);
    }).length > 0
        ? "grid"
        : "none";
}};

    grid-column: span
      ${(props) => {
    return props.grouping.columns.filter((x) => {
        return (x.minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible &&
            x.minVisibility !== ColumnVisibility_1.MinimumVisibility.MaxVisible &&
            x.minVisibility !== ColumnVisibility_1.MinimumVisibility.LargeVisible);
    }).length;
}};

    grid-template-columns: ${(props) => {
    return props.grouping !== undefined &&
        props.grouping.columns.length > 0 &&
        props.grouping.columns[0].type === ColumnTypes_1.ColumnTypes.select &&
        props.grouping.columns[0].minVisibility !== ColumnVisibility_1.MinimumVisibility.Invisible
        ? "10% 1fr"
        : "1fr";
}};

    grid-template-rows: fit-content(20%);

    grid-column-gap: 0.5rem;

    .${ColumnVisibility_1.MinimumVisibility.MaxVisible} {
      display: none;
    }

    .${ColumnVisibility_1.MinimumVisibility.LargeVisible} {
      display: none;
    }

    .selection-cell-text {
      display: ${(props) => {
    return props.grouping.columns[0].type === ColumnTypes_1.ColumnTypes.select
        ? "none"
        : "block";
}};
    }
  }

  @media (max-width: ${ScreenThresholds_1.default.SmallScreen + "rem"}) {
    display: flex;
    flex-wrap: wrap;

    .cell {
      margin: 0px;
      padding: 0.5rem;
    }

    .fixed-column {
      padding-left: ${(props) => {
    return props.allData.map((x) => {
        return x.headers.map((y) => {
            return y.columns[0] !== undefined &&
                y.columns[0].type === ColumnTypes_1.ColumnTypes.select &&
                props.grouping.columns[0].type !== ColumnTypes_1.ColumnTypes.select
                ? "2rem"
                : "";
        });
    });
}};
      .cell {
        padding-top: 0rem;
        padding-bottom: 0rem;
        font-weight: bold;
        font-size: 1.1rem;
      }
    }

    .collapsable-column {
      width: 100%;
      padding-left: ${(props) => {
    return props.allData.map((x) => {
        return x.headers.map((y) => {
            return y.columns[0] !== undefined &&
                y.columns[0].type === ColumnTypes_1.ColumnTypes.select
                ? "2rem"
                : "";
        });
    });
}};
      .cell {
        padding-top: 0rem;
        padding-bottom: 0rem;
      }
    }

    .selection-cell {
      .selection-cell-text {
        display: none;
      }
    }
  }
`;
exports.default = StyledCellGrouping;
