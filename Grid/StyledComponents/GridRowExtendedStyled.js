"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const ColumnVisibility_1 = require("../CustomTypes/ColumnVisibility");
const ScreenThresholds_1 = __importDefault(require("./ScreenThresholds"));
const GridRowExtendedStyled = styled_components_1.default.div `
  display: none;
  grid-column: 1 / ${(props) => props.inputColumns.length};
  margin-left: 1rem;
  margin-right: 1rem;
  color: white;

  @media (min-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    .${ColumnVisibility_1.MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }
    .${ColumnVisibility_1.MinimumVisibility.LargeVisible.toString()} {
      display: none;
    }
    .${ColumnVisibility_1.MinimumVisibility.MediumVisible.toString()} {
      display: none;
    }
    .${ColumnVisibility_1.MinimumVisibility.SmallVisible.toString()} {
      display: none;
    }
  }

  @media (min-width: ${ScreenThresholds_1.default.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.LargeScreen + "rem"}) {
    .${ColumnVisibility_1.MinimumVisibility.MaxVisible.toString()} {
      display: block;
    }
    .${ColumnVisibility_1.MinimumVisibility.LargeVisible.toString()} {
      display: none;
    }
    .${ColumnVisibility_1.MinimumVisibility.MediumVisible.toString()} {
      display: none;
    }
    .${ColumnVisibility_1.MinimumVisibility.SmallVisible.toString()} {
      display: none;
    }
  }

  @media (min-width: ${ScreenThresholds_1.default.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds_1.default.MediumScreen + "rem"}) {
    .${ColumnVisibility_1.MinimumVisibility.MaxVisible.toString()} {
      display: block;
    }
    .${ColumnVisibility_1.MinimumVisibility.LargeVisible.toString()} {
      display: block;
    }
    .${ColumnVisibility_1.MinimumVisibility.MediumVisible.toString()} {
      display: none;
    }
    .${ColumnVisibility_1.MinimumVisibility.SmallVisible.toString()} {
      display: none;
    }
  }

  @media (max-width: ${ScreenThresholds_1.default.SmallScreen + "rem"}) {
    .${ColumnVisibility_1.MinimumVisibility.MaxVisible.toString()} {
      display: block;
    }
    .${ColumnVisibility_1.MinimumVisibility.LargeVisible.toString()} {
      display: block;
    }
    .${ColumnVisibility_1.MinimumVisibility.MediumVisible.toString()} {
      display: block;
    }
    .${ColumnVisibility_1.MinimumVisibility.SmallVisible.toString()} {
      display: none;
    }
  }
`;
exports.default = GridRowExtendedStyled;
