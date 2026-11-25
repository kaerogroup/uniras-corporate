import type {Metadata} from "next";
import ServiceIndex from "../../services/service-index";
export const metadata:Metadata={title:"Perkhidmatan Pembangunan Digital Malaysia | UNIRAS",description:"Pembangunan website, sistem, aplikasi, e-dagang, automasi AI dan integrasi.",alternates:{canonical:"/bm/services",languages:{"en-MY":"/services","ms-MY":"/bm/services"}}};
export default function Page(){return <ServiceIndex bm/>;}
