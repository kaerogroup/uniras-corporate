import styles from "../../vendor/vendor.module.css";

export const metadata = {
  title: "Pendaftaran Vendor | UNIRAS SDN. BHD.",
  description: "Maklumat korporat dan perolehan untuk pendaftaran UNIRAS SDN. BHD. sebagai vendor teknologi.",
};

const categories = ["Pembangunan Perisian","Pembangunan Aplikasi","Kejuruteraan Produk Digital","Sistem Perniagaan","Integrasi Sistem","AI & Automasi","Cloud & Integrasi API"];
const readiness = [
  ["Maklumat korporat awam", "Sedia", "Nama sah, nombor pendaftaran syarikat, jenis entiti, negara dan kategori perkhidmatan teknologi diterbitkan di sini."],
  ["Semakan wajar korporat", "Atas permintaan", "Profil SSM dan dokumen sokongan korporat boleh dibekalkan kepada pegawai perolehan yang diberi kuasa."],
  ["Pengesahan kewangan", "Persendirian", "Pengesahan bank dan maklumat onboarding berkaitan hanya dikongsi melalui saluran persendirian yang diluluskan."],
  ["Semakan keselamatan & undang-undang", "Disokong", "NDA, perlindungan data dan soal selidik keselamatan boleh dilengkapkan apabila diperlukan oleh klien."],
];
const documents = [
  ["Profil syarikat / dokumen pendaftaran SSM", "Tersedia atas permintaan"],
  ["Alamat berdaftar dan butiran korporat", "Dibekalkan bersama dokumen onboarding"],
  ["Maklumat cukai dan statutori", "Tersedia atas permintaan, jika berkenaan"],
  ["Pengesahan akaun bank", "Dikongsi secara selamat untuk onboarding yang diluluskan sahaja"],
  ["Maklumat wakil yang diberi kuasa", "Tersedia atas permintaan"],
  ["NDA / perlindungan data / soal selidik keselamatan", "Boleh dilengkapkan mengikut keperluan"],
];

export default function VendorMalayPage() {
  return <main>
    <header className="site-header shell"><a className="brand" href="/bm" aria-label="Laman utama UNIRAS"><span className="brand-mark">U</span><span>UNIRAS</span></a><nav aria-label="Navigasi halaman vendor"><a href="/bm">Profil syarikat</a><span className="language-switch"><a href="/vendor">EN</a><span className="active">BM</span></span></nav></header>
    <section className={`${styles.hero} shell`}><div className="eyebrow">Perolehan & Onboarding Vendor</div><h1>Maklumat pendaftaran vendor.</h1><p>Maklumat korporat utama untuk pasukan perolehan yang menilai atau mendaftarkan UNIRAS SDN. BHD. sebagai vendor teknologi. Dokumen sensitif dibekalkan melalui saluran persendirian yang sesuai dan tidak diterbitkan di laman awam.</p></section>
    <section className={`${styles.section} shell`}><div className="section-kicker">Maklumat korporat</div><div className={styles.facts}><div><span>Nama sah syarikat</span><strong>UNIRAS SDN. BHD.</strong></div><div><span>No. pendaftaran</span><strong>1478108T / 202201032411</strong></div><div><span>Entiti</span><strong>Syarikat sendirian berhad</strong></div><div><span>Negara</span><strong>Malaysia</strong></div><div><span>Perniagaan utama</span><strong>Produk digital, aplikasi & sistem perniagaan</strong></div><div><span>Hubungan umum</span><strong>hello@uniras.my</strong></div></div></section>
    <section className={`${styles.section} ${styles.soft}`}><div className="shell"><div className="section-kicker">Kesediaan perolehan</div><div className={styles.heading}><h2>Maklumat awam yang jelas. Dokumen persendirian yang terkawal.</h2><p>Pasukan perolehan boleh menilai kesesuaian vendor dengan pantas tanpa mendedahkan maklumat korporat, perbankan atau peribadi yang sensitif.</p></div><div className={styles.readiness}>{readiness.map(([title,status,body])=><article key={title}><div><span>{status}</span></div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className={`${styles.section} shell`}><div className="section-kicker">Kategori vendor</div><div className={styles.heading}><h2>Perkhidmatan teknologi yang mudah dipetakan oleh perolehan.</h2><p>Kategori menggunakan bahasa perolehan yang lazim supaya UNIRAS boleh diklasifikasikan secara konsisten dalam sistem vendor.</p></div><div className={styles.tags}>{categories.map((item)=><span key={item}>{item}</span>)}</div></section>
    <section className={`${styles.section} shell`}><div className="section-kicker">Dokumen & pematuhan</div><div className={styles.heading}><h2>Dokumen korporat tersedia untuk semakan wajar.</h2><p>Kami tidak menerbitkan maklumat perbankan, pengenalan peribadi atau dokumen statutori sulit di laman web awam.</p></div><div className={styles.documents}>{documents.map(([name,status])=><div key={name}><strong>{name}</strong><span>{status}</span></div>)}</div></section>
    <section className={`${styles.section} ${styles.note}`}><div className={`shell ${styles.noteInner}`}><div><div className="section-kicker">Hubungan perolehan</div><h2>Perlu daftarkan UNIRAS dalam sistem vendor anda?</h2><p>Hantar borang pendaftaran, senarai semak dokumen atau keperluan perolehan. Kami akan membalas dengan maklumat korporat berkaitan melalui saluran yang sesuai.</p></div><a className="button primary" href="mailto:hello@uniras.my?subject=Pendaftaran%20Vendor%20-%20UNIRAS%20SDN.%20BHD.">Minta dokumen vendor</a></div></section>
    <footer className="footer shell"><div className="brand"><span className="brand-mark">U</span><span>UNIRAS</span></div><p>UNIRAS SDN. BHD.<br/>No. Pendaftaran 1478108T / 202201032411</p><p>Produk Digital · Aplikasi · Sistem Perniagaan</p><p>© 2026 UNIRAS SDN. BHD.</p></footer>
  </main>;
}
