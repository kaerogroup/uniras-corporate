import ServiceDetail,{serviceMeta} from "../../../services/service-detail";
import {serviceSlugs} from "../../../services/catalog";
export const dynamicParams=false;
export function generateStaticParams(){return serviceSlugs.map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){return serviceMeta((await params).slug,true);}
export default async function Page({params}:{params:Promise<{slug:string}>}){return <ServiceDetail slug={(await params).slug} bm/>;}
