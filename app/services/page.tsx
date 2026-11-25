import type {Metadata} from "next";
import ServiceIndex from "./service-index";
export const metadata:Metadata={title:"Digital Development Services Malaysia | UNIRAS",description:"Website, system, app, e-commerce, AI automation and integration services.",alternates:{canonical:"/services",languages:{"en-MY":"/services","ms-MY":"/bm/services"}}};
export default function Page(){return <ServiceIndex bm={false}/>;}
