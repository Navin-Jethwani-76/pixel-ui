import { redirect } from "next/navigation";
import { Components as SiteComponents } from "@/config";

const Components = () => {
  return redirect(`/components/${SiteComponents[0].key}`);
};

export default Components;
