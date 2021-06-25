"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledDateRow = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledDateRow = styled_components_1.default.div `
  display: flex;

  .row-name {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .row-content {
    margin-right: 0.5rem;
  }

  margin-bottom: 0.5rem;
`;
