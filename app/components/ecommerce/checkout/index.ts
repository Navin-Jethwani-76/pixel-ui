export interface CheckoutType {
  type: "Basic" | "Two Column" | "Multi Step";
}

export const CheckoutOptions: CheckoutType["type"][] = [
  "Basic",
  "Two Column",
  "Multi Step",
];
