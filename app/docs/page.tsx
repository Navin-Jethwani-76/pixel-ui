import { Docs as SiteDocs } from "@/config";
import { redirect } from "next/navigation";

const Docs = () => {
  return redirect(`/docs/${SiteDocs[0].key}`);
};

export default Docs;
