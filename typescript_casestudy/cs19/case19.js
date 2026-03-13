// --- Implementations ---
var RSSFeedSource = /** @class */ (function () {
    function RSSFeedSource() {
    }
    RSSFeedSource.prototype.fetchHeadlines = function () {
        return [
            "RSS: Global markets rally after trade deal",
            "RSS: New climate accord signed by 50 nations",
            "RSS: Tech giant unveils next-gen AI chip",
        ];
    };
    return RSSFeedSource;
}());
var APISource = /** @class */ (function () {
    function APISource() {
    }
    APISource.prototype.fetchHeadlines = function () {
        return [
            "API: Breakthrough in quantum computing announced",
            "API: Record turnout in regional elections",
            "API: Space agency confirms Mars water discovery",
        ];
    };
    return APISource;
}());
// --- NewsAggregator (unchanged between swaps) ---
var NewsAggregator = /** @class */ (function () {
    function NewsAggregator(source) {
        this.source = source;
    }
    NewsAggregator.prototype.display = function () {
        var headlines = this.source.fetchHeadlines();
        console.log("Today's Headlines:");
        headlines.forEach(function (h, i) { return console.log("  ".concat(i + 1, ". ").concat(h)); });
    };
    return NewsAggregator;
}());
// --- Container ---
var Container = /** @class */ (function () {
    function Container() {
        this.bindings = new Map();
    }
    Container.prototype.register = function (key, instance) {
        this.bindings.set(key, instance);
        console.log("[Container] Registered: ".concat(key));
    };
    Container.prototype.resolve = function (key) {
        var instance = this.bindings.get(key);
        if (!instance)
            throw new Error("No binding found for key: ".concat(key));
        return instance;
    };
    return Container;
}());
// --- Test ---
var container = new Container();
container.register("NewsSource", new RSSFeedSource());
console.log("\n-- Using RSSFeedSource --");
var aggregator = new NewsAggregator(container.resolve("NewsSource"));
aggregator.display();
container.register("NewsSource", new APISource());
console.log("\n-- Using APISource (swapped, NewsAggregator unchanged) --");
aggregator = new NewsAggregator(container.resolve("NewsSource"));
aggregator.display();
