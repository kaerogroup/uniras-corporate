/* UNIRAS Solutions — conversion intent analytics v1
   No measurement ID is fabricated. Events are sent only when GA4 is configured
   AND the visitor has opted in to analytics.
   Clicks/opening a quotation form are intent, NOT confirmed leads.
*/
(()=>{'use strict';
const id=(document.querySelector('meta[name="uniras-ga4-id"]')?.content||'').trim();
const valid=/^G-[A-Z0-9]{6,20}$/.test(id);
const storageKey='uniras_analytics_consent_v1';
const path=location.pathname;
const service=path.includes('servis-pembaikan')?'repair':path.includes('pemasangan-cold-room')?'installation':path.includes('walk-in-chiller-freezer')?'chiller_freezer':'general';
const eventNames=new Set(['quote_form_click','whatsapp_enquiry_start','whatsapp_click','service_navigation_click']);
let enabled=false;
function track(name,detail={}){
 if(!enabled||!eventNames.has(name)||typeof window.gtag!=='function')return;
 window.gtag('event',name,{service_type:service,source_page:path, ...detail});
}
function start(){
 if(!valid||enabled)return;
 enabled=true;
 window.dataLayer=window.dataLayer||[];
 window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
 window.gtag('js',new Date());
 window.gtag('config',id,{send_page_view:true});
 const src=document.createElement('script');
 src.async=true;src.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);
 document.head.appendChild(src);
}
function choose(value){
 try{localStorage.setItem(storageKey,value)}catch(e){/* storage unavailable */}
 if(value==='granted')start();
 document.getElementById('uniras-analytics-consent')?.remove();
 if(value==='denied'&&enabled)location.reload();
}
function consent(force=false){
 if(!valid)return;
 let choice=null;
 try{choice=localStorage.getItem(storageKey)}catch(e){}
 if(choice==='granted'&&!force){start();return}
 if(choice==='denied'&&!force)return;
 if(document.getElementById('uniras-analytics-consent'))return;
 const bar=document.createElement('aside');
 bar.id='uniras-analytics-consent';
 bar.setAttribute('aria-label','Pilihan analitik laman');
 bar.style.cssText='position:fixed;z-index:80;bottom:16px;left:16px;width:min(460px,calc(100% - 32px));background:#fff;color:#172b3a;border:1px solid #9aa8b0;box-shadow:0 10px 30px #172b3a30;padding:18px;font:14px/1.5 system-ui,sans-serif';
 const title=document.createElement('strong');title.textContent='Analitik laman web';
 const p=document.createElement('p');p.style.margin='8px 0 12px';p.textContent='Dengan pilihan anda, kami menggunakan Google Analytics untuk memahami penggunaan laman. Pertanyaan WhatsApp dan borang tetap berfungsi jika anda menolak.';
 const yes=document.createElement('button');yes.type='button';yes.textContent='Benarkan';yes.style.cssText='background:#a94f22;color:#fff;border:0;padding:10px 15px;margin-right:8px;cursor:pointer';
 const no=document.createElement('button');no.type='button';no.textContent='Tidak sekarang';no.style.cssText='background:#f4f4f0;color:#172b3a;border:1px solid #b8c1c5;padding:9px 14px;cursor:pointer';
 yes.addEventListener('click',()=>choose('granted'));no.addEventListener('click',()=>choose('denied'));
 bar.append(title,p,yes,no);document.body.appendChild(bar);
}
document.addEventListener('click',e=>{
 const el=e.target instanceof Element?e.target:null;
 const link=el?.closest('a[href]');
 if(link){
  const href=link.getAttribute('href')||'';
  if(href.includes('form.jotform.com/263038832313049'))track('quote_form_click',{cta_location:link.closest('header,footer,.hero,.cta-band,.sticky-mobile,.drawer-foot')?.className||link.closest('header,footer')?.tagName?.toLowerCase()||'content'});
  else if(/^https:\/\/wa\.me\/60123533587/.test(href))track('whatsapp_click',{interaction:'direct_link'});
  else if(/^\/(pemasangan-cold-room|servis-pembaikan-cold-room|walk-in-chiller-freezer)\//.test(href))track('service_navigation_click',{destination:href});
 }
 const wa=el?.closest('.wa-trigger');
 if(wa)track('whatsapp_enquiry_start',{requested_service:wa.getAttribute('data-service')||'general'});
});
document.addEventListener('submit',e=>{
 if(e.target instanceof Element && e.target.id==='wa-form')track('whatsapp_click',{interaction:'prepared_message'});
},true);
document.addEventListener('click',e=>{
 const el=e.target instanceof Element?e.target:null;
 const choice=el?.closest('[data-uniras-consent-choice]')?.getAttribute('data-uniras-consent-choice');
 if(choice==='granted'||choice==='denied'){
  e.preventDefault();choose(choice);
  document.querySelectorAll('[data-uniras-consent-status]').forEach(x=>x.textContent=choice==='granted'?'Analitik dibenarkan.':'Analitik ditolak. Tiada data analitik baharu akan dihantar selepas halaman dimuat semula.');
  return;
 }
 if(el?.closest('[data-uniras-analytics-settings]')){e.preventDefault();consent(true)}
});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>consent(),{once:true});else consent();
})();
