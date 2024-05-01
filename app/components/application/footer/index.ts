export interface FooterType {
  type: "basic" | "custom";
}

export const FooterTypeOptions: FooterType["type"][] = ["basic", "custom"];

export interface FooterColumn {
  heading: string;
  links: string[];
}
