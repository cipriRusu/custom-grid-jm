"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadPage = void 0;
const ScrollDirection_1 = __importDefault(require("./GridBody/GridRows/ScrollDirection"));
class LoadPage {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    getPage(direction, pageStats) {
        let scrollingDirection = direction === ScrollDirection_1.default.Up
            ? pageStats.top
            : direction === ScrollDirection_1.default.Down
                ? pageStats.bottom
                : 0;
        return this.dataSource.get(pageStats.sort, pageStats.filters, scrollingDirection, pageStats.pageSize);
    }
}
exports.LoadPage = LoadPage;
