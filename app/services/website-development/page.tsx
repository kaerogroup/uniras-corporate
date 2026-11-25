import type { Metadata } from "next";
import WebsiteService from "./service";
export const metadata: Metadata = {title:"Website Development Malaysia | UNIRAS SDN. BHD.",description:"Business website development for Malaysian SMEs and organisations. Discuss your website requirements with UNIRAS.",alternates:{canonical:"/services/website-development",languages:{"en-MY":"/services/website-development","ms-MY":"/bm/services/website-development"}},openGraph:{title:"Website Development Malaysia | UNIRAS",description:"Business website development and project enquiries.",url:"/services/website-development",locale:"en_MY"}};
export default function Page(){return <WebsiteService bm={false}/>;}
