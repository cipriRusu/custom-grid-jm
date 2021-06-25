"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledColumn = styled_components_1.default.div `
  .column-container {
    .fa {
      text-decoration: none;
      margin-right: 5px;
      margin-top: 5px;
    }

    .column {
      display: grid;
      grid-auto-flow: column;
      cursor: pointer;
      #text {
        color: white;
      }

      &:hover {
        .filter-icon-column {
          color: white;
        }
      }

      .hidden-icon {
        visibility: hidden;
      }

      .filter-icon-column {
        margin-left: auto;
        color: transparent;
      }

      .filter-icon-column-visible {
        margin-left: auto;
        color: white;
      }

      .filter {
        margin-left: auto;
        &:focus-within {
          .filter-icon-column {
            color: white;
          }
        }
      }

      .sort {
        color: white;
        width: 90%;
      }

      &:hover {
        background-image: linear-gradient(#080808, #3d3d3d);
      }
    }

    .filter-dropdown {
      display: none;
      position: absolute;
      background-color: white;
      border-radius: 0.25rem;
      color: black;
      width: 200px;
    }

    .right-side {
      left: 80%;
    }

    .left-side {
      right: 0%;
    }

    .show {
      display: block;
    }

    .sort-icon {
      color: white;
    }

    .dropdown {
      width: 100%;
    }
  }

  @media (max-width: 50rem) {
    .column-container {
      .filter-dropdown {
        display: none;
      }
    }
  }
`;
exports.default = StyledColumn;
