"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollPage = void 0;
const ScrollDirection_1 = __importDefault(require("./GridBody/GridRows/ScrollDirection"));
const LoadPage_1 = require("./LoadPage");
class ScrollPage {
    constructor(dataSource) {
        this.isBottomReached = (event) => {
            return (event.target.scrollHeight - event.target.scrollTop ===
                event.target.clientHeight);
        };
        this.dataSource = dataSource;
        this.loadPage = new LoadPage_1.LoadPage(this.dataSource);
    }
    scrollUp(event, items, loadedPages, top, bottom, cacheSize, pageSize, sort, filters, updateTop, updateBottom, updateItems, updateLoadedPages, setOffset) {
        var _a;
        if (event.target.scrollTop === 0) {
            if (top >= 0) {
                setOffset(0);
                let currentCachedItems = items;
                let newCache = this.loadPage.getPage(ScrollDirection_1.default.Up, {
                    pageSize: pageSize,
                    top: top,
                    bottom: bottom,
                    sort: sort,
                    filters: filters,
                });
                let updatedCache = [...newCache, ...currentCachedItems];
                if (updatedCache.length > cacheSize) {
                    updatedCache = updatedCache.slice(0, cacheSize);
                }
                (_a = document.getElementById(pageSize.toString())) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
                updateItems(updatedCache);
                updateLoadedPages(loadedPages - newCache.length);
                updateTop(top - 1);
                updateBottom(bottom - 1);
            }
        }
    }
    scrollDown(event, items, loadedPages, top, bottom, cacheSize, pageSize, sort, filters, updateTop, updateBottom, updateItems, updateLoadedPages, setOffset, offset, allPages) {
        const loadOnScroolDown = (event) => {
            var _a;
            const isBottomReached = (event) => {
                return (event.target.scrollHeight -
                    event.target.scrollTop -
                    event.target.clientHeight <=
                    1);
            };
            if (isBottomReached(event)) {
                if (loadedPages + offset < allPages) {
                    let currentCachedItems = items;
                    let newCache = this.loadPage.getPage(ScrollDirection_1.default.Down, {
                        pageSize: pageSize,
                        top: top,
                        bottom: bottom,
                        sort: sort,
                        filters: filters,
                    });
                    let updatedCache = currentCachedItems.concat(newCache);
                    if (updatedCache.length > cacheSize) {
                        updatedCache.splice(0, pageSize);
                        (_a = document.getElementById(pageSize.toString())) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
                        if (newCache.length === pageSize) {
                            updateTop(top + 1);
                        }
                    }
                    if (newCache.length === pageSize) {
                        updateBottom(bottom + 1);
                        updateLoadedPages(loadedPages + newCache.length);
                        updateItems(updatedCache);
                    }
                    if (newCache.length < pageSize) {
                        let offsetCache = this.loadPage.getPage(ScrollDirection_1.default.Down, {
                            pageSize: pageSize,
                            top: top,
                            bottom: bottom,
                            sort: sort,
                            filters: filters,
                        });
                        updateItems(items.concat(offsetCache));
                        setOffset(offsetCache.length);
                    }
                }
            }
        };
        loadOnScroolDown(event);
    }
}
exports.ScrollPage = ScrollPage;
