"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledTitle = styled_components_1.default.div `
  .title-container {
    .title {
      width: 95%;
      justify-content: space-between;
      border-bottom: 0.1rem solid white;
      color: white;

      p {
        margin: 0px;
        margin-left: 5px;
      }

      .icon-header {
        color: white;
        display: none;
      }

      .title-bar {
        width: 100%;
        display: flex;
        align-items: center;
        cursor: auto;
        p {
          cursor: default;
        }

        &:hover {
          .filter-icon-hoverable {
            color: white;
          }
        }

        &:focus-within {
          .filter-icon-hoverable {
            color: white;
          }
        }

        .filter-icon {
          color: white;
          margin-left: auto;
        }

        .hidden-icon {
          visibility: hidden;
          color: white;
        }

        .filter-icon-hoverable {
          color: transparent;
          margin-left: auto;
        }
      }
    }

    .title-dropdown {
      display: none;
      position: absolute;
      right: 0.8rem;
    }

    .show {
      display: block;
    }
  }

  @media (min-width: 50rem) {
    .title-container {
      .title {
        .title-bar {
          .sort-icon-title {
            visibility: hidden;
          }

          .filter-icon {
            visibility: hidden;
          }

          .filter-icon-hoverable {
            visibility: hidden;
          }
        }
      }

      .title-dropdown {
        display: none;
      }
    }
  }
`;
exports.default = StyledTitle;
