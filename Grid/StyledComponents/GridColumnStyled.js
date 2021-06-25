"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const ScreenThresholds_1 = __importDefault(require("./ScreenThresholds"));
const GridColumn = styled_components_1.default.div `
  background-color: black;

  @media (max-width: ${ScreenThresholds_1.default.MediumScreen + "rem"}) {
    display: none;
  }
`;
exports.default = GridColumn;
