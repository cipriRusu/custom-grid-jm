"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledBooleanRow = styled_components_1.default.div `
  display: flex;
  align-items: center;

  .row-icon {
    margin-left: 1rem;
  }

  .row-name {
    font-weight: bold;
  }

  margin-bottom: 0.5rem;
`;
exports.default = StyledBooleanRow;
