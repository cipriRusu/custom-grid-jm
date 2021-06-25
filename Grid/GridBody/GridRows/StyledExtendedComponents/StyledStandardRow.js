"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledStandardRow = styled_components_1.default.div `
  display: flex;
  justify-content: flex-start;

  .row-name {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .row-content {
    margin-right: 0.5rem;
  }

  margin-bottom: 0.5rem;
`;
exports.default = StyledStandardRow;
