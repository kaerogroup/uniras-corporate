import styles from "./vendor.module.css";

export const metadata = {
  title: "Vendor Registration | UNIRAS SDN. BHD.",
  description: "Corporate and procurement information for registering UNIRAS SDN. BHD. as a technology vendor.",
};

const categories = ["Software Development","Application Development","Digital Product Engineering","Business Systems","Systems Integration","AI and Automation","Cloud and API Integration"];
const readiness = [
  ["Public corporate information", "Ready", "Legal name, company registration number, TIN, entity type, country and technology service categories are published here."],
  ["Corporate due diligence", "On request", "SSM profile and supporting corporate documents can be supplied to an authorised procurement contact."],
  ["Financial verification", "Private", "Bank confirmation and related registration information are shared only through an approved private channel."],
  ["Security and legal review", "Supported", "NDA, data protection and security questionnaires can be completed when required by the client."],
];
const documents = [
  ["SSM company profile / registration documents", "Available upon request"],
  ["Registered address and corporate particulars", "Provided with vendor registration documents"],
  ["TIN", "C29896459070"],
  ["Tax and statutory information", "Available upon request, where applicable"],
  ["Bank account confirmation", "Shared securely for approved vendor registration only"],
  ["Authorised representative information", "Available upon request"],
  ["NDA / data protection / security questionnaire", "Can be completed as required"],
];

export default function VendorPage() {
  return <main>
    <header className="site-header shell"><a className="brand" href="/" aria-label="UNIRAS home"><span>UNIRAS</span></a><nav aria-label="Vendor page navigation"><a href="/">Company profile</a><span className="language-switch"><span className="active">EN</span><a href="/bm/vendor">BM</a></span></nav></header>
    <section className={`${styles.hero} shell`}><div className="eyebrow">Procurement and Vendor Registration</div><h1>Vendor registration information.</h1><p>Key corporate information for procurement teams evaluating or registering UNIRAS SDN. BHD. as a technology vendor. Sensitive documents are supplied through an appropriate private channel rather than published on the public website.</p></section>
    <section className={`${styles.section} shell`}><div className="section-kicker">Corporate information</div><div className={styles.facts}><div><span>Legal name</span><strong>UNIRAS SDN. BHD.</strong></div><div><span>Registration no.</span><strong>1478108T / 202201032411</strong></div><div><span>TIN</span><strong>C29896459070</strong></div><div><span>Entity</span><strong>Private limited company</strong></div><div><span>Country</span><strong>Malaysia</strong></div><div><span>Primary business</span><strong>Digital products, applications and business systems</strong></div><div><span>General contact</span><strong>uniras.capital@gmail.com</strong></div></div><div className="profile-links"><a className="text-link" href="/company-profile-en.pdf" target="_blank" rel="noreferrer">Company Profile (EN)</a><a className="text-link" href="/company-profile-bm.pdf" target="_blank" rel="noreferrer">Profil Syarikat (BM)</a></div></section>
    <section className={`${styles.section} ${styles.soft}`}><div className="shell"><div className="section-kicker">Procurement readiness</div><div className={styles.heading}><h2>Public corporate information and controlled document access.</h2><p>Procurement teams can review vendor information while sensitive corporate, banking and personal information remains protected.</p></div><div className={styles.readiness}>{readiness.map(([title,status,body])=><article key={title}><div><span>{status}</span></div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className={`${styles.section} shell`}><div className="section-kicker">Vendor categories</div><div className={styles.heading}><h2>Technology services mapped to common procurement categories.</h2><p>Categories use standard procurement language so UNIRAS can be classified consistently across vendor systems.</p></div><div className={styles.tags}>{categories.map((item)=><span key={item}>{item}</span>)}</div></section>
    <section className={`${styles.section} shell`}><div className="section-kicker">Documents and compliance</div><div className={styles.heading}><h2>Corporate documents available for due diligence.</h2><p>Banking information, personal identification and confidential statutory information are not published on the public website.</p></div><div className={styles.documents}>{documents.map(([name,status])=><div key={name}><strong>{name}</strong><span>{status}</span></div>)}</div></section>
    <section className={`${styles.section} ${styles.note}`}><div className={`shell ${styles.noteInner}`}><div><div className="section-kicker">Procurement contact</div><h2>Need to register UNIRAS in your vendor system?</h2><p>Send the registration form, document checklist or procurement requirements. We will provide the relevant corporate information through the appropriate channel.</p></div><a className="button primary" href="mailto:uniras.capital@gmail.com?subject=Vendor%20Registration%20-%20UNIRAS%20SDN.%20BHD.">Request vendor documents</a></div></section>
    <footer className="footer shell"><div className="brand"><span>UNIRAS</span></div><p>UNIRAS SDN. BHD.<br/>Registration No. 1478108T / 202201032411<br/>TIN C29896459070</p><p>Digital Products | Applications | Business Systems</p><p>© 2026 UNIRAS SDN. BHD.</p></footer>
  </main>;
}
