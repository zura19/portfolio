import type { PortfolioContent } from "../types";

type PortfolioMessages = {
  Portfolio: PortfolioContent;
};

export function getPortfolioContent(messages: PortfolioMessages) {
  return messages.Portfolio;
}
