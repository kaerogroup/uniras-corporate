import type { MetadataRoute } from "next";
import {serviceSlugs} from "./services/catalog";
export const dynamic="force-static";
export default function sitemap(): MetadataRoute.Sitemap {const base="https://www.uniras.my";const paths=["/","/bm","/vendor","/services","/bm/services",...["website-development",...serviceSlugs].flatMap(s=>["/services/"+s,"/bm/services/"+s])];return paths.map(path=>({url:base+path}));}
