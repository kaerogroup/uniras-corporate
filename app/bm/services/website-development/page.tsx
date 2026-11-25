import type { Metadata } from "next";
import WebsiteService from "../../../services/website-development/service";
export const metadata: Metadata = {title:"Bina Website Perniagaan Malaysia | UNIRAS SDN. BHD.",description:"Perkhidmatan pembangunan website untuk SME dan organisasi di Malaysia. Bincangkan keperluan website anda bersama UNIRAS.",alternates:{canonical:"/bm/services/website-development",languages:{"en-MY":"/services/website-development","ms-MY":"/bm/services/website-development"}},openGraph:{title:"Bina Website Perniagaan | UNIRAS",description:"Pembangunan website perniagaan dan pertanyaan projek.",url:"/bm/services/website-development",locale:"ms_MY"}};
export default function Page(){return <WebsiteService bm/>;}
