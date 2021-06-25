"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledDatePicker = styled_components_1.default.div `
  .date-picker {
    .user-input {
      width: 100%;
    }
    .fa {
      position: absolute;
      right: 1.7rem;
      color: red;
    }
    .visible-icon {
      display: block !important;
    }
    .hide-icon {
      display: hidden;
    }
  }
`;
exports.default = StyledDatePicker;
