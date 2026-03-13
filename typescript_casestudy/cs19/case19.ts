// --- Interface ---
interface NewsSource {
  fetchHeadlines(): string[];
}

// --- Implementations ---
class RSSFeedSource implements NewsSource {
  fetchHeadlines(): string[] {
    return [
      "RSS: Global markets rally after trade deal",
      "RSS: New climate accord signed by 50 nations",
      "RSS: Tech giant unveils next-gen AI chip",
    ];
  }
}

class APISource implements NewsSource {
  fetchHeadlines(): string[] {
    return [
      "API: Breakthrough in quantum computing announced",
      "API: Record turnout in regional elections",
      "API: Space agency confirms Mars water discovery",
    ];
  }
}

// --- NewsAggregator (unchanged between swaps) ---
class NewsAggregator {
  constructor(private source: NewsSource) {}

  display(): void {
    const headlines = this.source.fetchHeadlines();
    console.log("Today's Headlines:");
    headlines.forEach((h, i) => console.log(`  ${i + 1}. ${h}`));
  }
}

// --- Container ---
class Container {
  private bindings = new Map<string, NewsSource>();

  register(key: string, instance: NewsSource): void {
    this.bindings.set(key, instance);
    console.log(`[Container] Registered: ${key}`);
  }

  resolve(key: string): NewsSource {
    const instance = this.bindings.get(key);
    if (!instance) throw new Error(`No binding found for key: ${key}`);
    return instance;
  }
}

// --- Test ---
const container = new Container();

container.register("NewsSource", new RSSFeedSource());

console.log("\n-- Using RSSFeedSource --");
let aggregator = new NewsAggregator(container.resolve("NewsSource"));
aggregator.display();

container.register("NewsSource", new APISource());

console.log("\n-- Using APISource (swapped, NewsAggregator unchanged) --");
aggregator = new NewsAggregator(container.resolve("NewsSource"));
aggregator.display();
