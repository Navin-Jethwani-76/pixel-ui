export interface BannerPosition {
  position: "top" | "bottom";
}

export interface BannerType {
  type: "sticky" | "floating";
}

export const bannerPositionOptions: BannerPosition["position"][] = [
  "top",
  "bottom",
];

export const bannerTypeOptions: BannerType["type"][] = ["sticky", "floating"];
