"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledDateFilter = styled_components_1.default.div `
  .date-filter {
    .react-date-picker {
      width: 100%;
      height: 2.4rem;
    }

    .date-filter-hide {
      display: none !important;
    }

    .date-filter-display {
      display: block;
    }

    .react-datepicker-wrapper {
      width: 100%;
      .react-datepicker__input-container {
        [type="text"] {
          width: 100%;
        }

        .react-datepicker__close-icon.undefined::after {
          background-color: black;
        }
      }
    }
  }
`;
exports.default = StyledDateFilter;
