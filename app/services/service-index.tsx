import {services} from "./catalog";
export default function ServiceIndex({bm}:{bm:boolean}){
 const prefix=bm?"/bm":"";
 const items=[{slug:"website-development",en:"Website Development",bm:"Pembangunan Website",descEn:"Professional websites for business.",descBm:"Website profesional untuk perniagaan."},...services];
 return <main lang={bm?"ms-MY":"en-MY"}><header className="site-header shell"><a className="brand" href={prefix||"/"}>UNIRAS</a><nav><a href={(bm?"":"/bm")+"/services"}>{bm?"EN":"BM"}</a></nav></header><section className="hero shell"><h1>{bm?"Perkhidmatan pembangunan digital":"Digital development services"}</h1><p className="hero-copy">{bm?"Pilih solusi berdasarkan keperluan perniagaan anda.":"Explore solutions based on your business requirements."}</p></section><section className="section shell"><div className="capability-grid">{items.map(s=><article className="capability" key={s.slug}><h2><a href={prefix+"/services/"+s.slug}>{bm?s.bm:s.en}</a></h2><p>{bm?s.descBm:s.descEn}</p><a className="text-link" href={prefix+"/services/"+s.slug}>{bm?"Lihat perkhidmatan":"Explore service"}</a></article>)}</div></section></main>;
}
