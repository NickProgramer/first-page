export type Project = {
  title: string;
  summary: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Harborline Logistics",
    summary:
      "Fleet services site with service-area pages and quote requests.",
    tags: ["Multi-page", "Lead gen"],
  },
  {
    title: "Northwind Dental",
    summary: "Trust-first redesign with online booking and team profiles.",
    tags: ["Healthcare", "Booking"],
  },
  {
    title: "Cedar & Co. Accounting",
    summary:
      "Clear service tiers, resource downloads, and compliant contact flows.",
    tags: ["Professional services"],
  },
  {
    title: "Brightfield Solar",
    summary:
      "Estimate funnel and case studies to support a growing install team.",
    tags: ["Landing pages", "CMS-ready"],
  },
];
