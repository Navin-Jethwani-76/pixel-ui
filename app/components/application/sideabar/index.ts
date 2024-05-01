export interface SideBarInnerContent {
  title: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export interface SideBarContents {
  key: string;
  label: string;
  innerContents: SideBarInnerContent[];
}
