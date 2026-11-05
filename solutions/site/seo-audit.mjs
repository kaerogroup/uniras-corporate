import {readFileSync,existsSync} from 'node:fs';
import {join} from 'node:path';
const root=new URL('.',import.meta.url).pathname;
const paths=['/','/pemasangan-cold-room/','/servis-pembaikan-cold-room/','/walk-in-chiller-freezer/'];
let errors=0;
const assert=(ok,msg)=>{console.log((ok?'PASS':'FAIL')+' '+msg);if(!ok)errors++};
const xml=readFileSync(join(root,'sitemap.xml'),'utf8');
const robots=readFileSync(join(root,'robots.txt'),'utf8');
assert(robots.includes('Sitemap: https://solutions.uniras.my/sitemap.xml'),'robots.txt points to canonical sitemap');
for(const url of paths){const file=join(root,url==='/'?'index.html':url.slice(1)+'index.html');assert(existsSync(file),'route has static index.html: '+url);if(!existsSync(file))continue;const html=readFileSync(file,'utf8');const canonical='https://solutions.uniras.my'+url;assert(html.includes('rel="canonical" href="'+canonical+'"'),'canonical: '+url);assert(/<title>[^<]{15,}&#63;?[^<]*<\/title>/.test(html)||/<title>[^<]{15,}<\/title>/.test(html),'page title: '+url);assert(/<meta name="description" content="[^"]{70,}"/.test(html),'meta description: '+url);assert(/<h1[ >]/.test(html),'H1: '+url);assert(html.includes('application/ld+json'),'JSON-LD: '+url);assert(html.includes('src="/assets/conversion-tracking.js"'),'conversion tracking loaded: '+url);assert(/<meta name="uniras-ga4-id" content="[^"]*"\s*\/>/.test(html),'GA4 setup slot: '+url);assert(xml.includes('<loc>'+canonical+'</loc>'),'sitemap: '+url);const scripts=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];for(const m of scripts){try{JSON.parse(m[1]);assert(true,'valid structured data: '+url)}catch{assert(false,'valid structured data: '+url)}}}
const tracker=join(root,'assets','conversion-tracking.js');assert(existsSync(tracker),'tracking script exists');if(existsSync(tracker)){const js=readFileSync(tracker,'utf8');for(const n of ['quote_form_click','whatsapp_enquiry_start','whatsapp_click','service_navigation_click'])assert(js.includes(n),'conversion event present: '+n);assert(js.includes("choice==='granted'"),'analytics requires opt-in consent');}
for(const slug of ['projek-siap','projek-berjalan'])assert(!xml.includes('/'+slug+'/'),'unpublished project page not in sitemap: '+slug);
assert((xml.match(/<url>/g)||[]).length===paths.length,'expected sitemap URL count');
console.log(errors?'SEO checks failed: '+errors:'SEO static checks passed');process.exitCode=errors?1:0;
