const capabilities = [
  ["01", "Digital Product Engineering", "Web applications, PWAs, SaaS products and platform experiences designed around real operational workflows."],
  ["02", "Business Systems", "Operational systems, vendor management, order workflows, marketplaces, internal tools and process automation."],
  ["03", "AI & Automation", "AI-assisted workflows, generative systems, decision support and automation applied where they create measurable value."],
  ["04", "Integration & Infrastructure", "APIs, payments, notifications, cloud delivery, authentication and third-party integrations."],
];

const products = [
  { name: "LOOKAL", type: "Creative technology platform", status: "Operating product", body: "Structured, AI-assisted creative production for business communication and campaign workflows." },
  { name: "EON", type: "Event Organizer Operating System", status: "Product development", body: "A unified operating workflow for organisers, vendors, applications, operations and event execution." },
  { name: "ORDRE", type: "Commerce Order Operating System", status: "Product development", body: "An offline-first order engine designed to unify transactions across multiple commerce channels." },
  { name: "ANGLR", type: "Digital fishing ecosystem", status: "Product development", body: "A platform combining fishing communities, evidence, tournaments and digital participation workflows." },
];

const engagement = [
  ["Custom Development", "Purpose-built applications and systems for a specific organisation, operational problem or workflow."],
  ["Product Implementation", "Configure and deploy an existing UNIRAS product or reusable technology capability."],
  ["Technology Partnership", "Continuous product development, modernisation, integration and technical stewardship."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="UNIRAS home"><span className="brand-mark">U</span><span>UNIRAS</span></a>
        <nav aria-label="Primary navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#products">Products</a>
          <a href="#approach">Approach</a>
          <a href="#contact" className="nav-cta">Start a project</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">UNIRAS SDN. BHD. · Malaysia</div>
            <h1>Software built around how business actually works.</h1>
            <p className="hero-copy">We design and build digital products, applications and operational systems — from workflow and domain logic through to interface, integration and deployment.</p>
            <div className="hero-actions">
              <a className="button primary" href="#products">View products</a>
              <a className="button secondary" href="#contact">Discuss a system</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="UNIRAS capabilities summary">
            <p className="panel-label">Core practice</p>
            <div className="panel-row"><span>01</span><strong>Product Engineering</strong></div>
            <div className="panel-row"><span>02</span><strong>Business Systems</strong></div>
            <div className="panel-row"><span>03</span><strong>AI & Automation</strong></div>
            <div className="panel-row"><span>04</span><strong>Cloud & Integration</strong></div>
          </aside>
        </div>
        <div className="hero-rule" />
        <div className="hero-meta"><span>Workflow first</span><span>Operational clarity</span><span>Production-minded engineering</span></div>
      </section>

      <section className="section intro">
        <div className="shell intro-grid">
          <div><div className="section-kicker">Company</div><h2>A technology company, not a generic software vendor.</h2></div>
          <div className="intro-copy"><p>UNIRAS SDN. BHD. builds software around real business operations. We begin with the process, responsibilities, evidence and decisions a system must support — then engineer the digital product around that model.</p><p>Our work spans owned technology products and custom application development for organisations that need clearer workflows, stronger operational control and systems designed to evolve.</p></div>
        </div>
      </section>

      <section className="section shell" id="capabilities">
        <div className="section-kicker">Capabilities</div>
        <div className="section-heading"><h2>From operational problem to working system.</h2><p>Focused capability across product engineering, workflow systems, AI-assisted operations and integration.</p></div>
        <div className="capability-grid">
          {capabilities.map(([n, title, body]) => <article className="capability" key={title}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="shell">
          <div className="section-kicker light">Products & technology initiatives</div>
          <div className="section-heading light"><h2>We build products ourselves.</h2><p>Owned product work demonstrates our approach to domain modelling, operational workflows, product engineering and long-term system thinking.</p></div>
          <div className="product-list">
            {products.map((product, index) => (
              <article className="product" key={product.name}>
                <div className="product-index">0{index + 1}</div>
                <div className="product-identity"><h3>{product.name}</h3><p className="product-type">{product.type}</p><span className="status-pill">{product.status}</span></div>
                <p>{product.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="approach">
        <div className="section-kicker">How we build</div>
        <div className="section-heading"><h2>We don’t start with screens.</h2><p>Interface design comes after we understand the operation the software must support.</p></div>
        <div className="process">
          {['Operation','Workflow','Domain Model','System','Interface'].map((item, i) => <div className="process-step" key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}
        </div>
        <div className="statement">Real problem <span>→</span> clear workflow <span>→</span> reliable system <span>→</span> measurable outcome.</div>
      </section>

      <section className="section trust-band">
        <div className="shell trust-grid"><div><span className="trust-number">01</span><strong>Static-first where possible</strong><p>Keep public experiences fast, resilient and operationally simple.</p></div><div><span className="trust-number">02</span><strong>Cloud-native delivery</strong><p>Modern deployment, APIs and managed infrastructure selected to fit the system.</p></div><div><span className="trust-number">03</span><strong>Security by design</strong><p>Authentication, authorization, auditability and data boundaries considered from the start.</p></div></div>
      </section>

      <section className="section shell engagement">
        <div className="section-kicker">Engagement</div>
        <div className="section-heading"><h2>Three ways to work with UNIRAS.</h2><p>Choose the engagement model that matches the problem, product maturity and ownership structure.</p></div>
        <div className="engagement-grid">{engagement.map(([title, body], i) => <div key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></div>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner"><div><div className="section-kicker light">Start a conversation</div><h2>Have an operation that should work better?</h2><p>Tell us the workflow, friction or system you want to improve. We can start from the operational problem before discussing technology.</p></div><a className="button contact-button" href="mailto:hello@uniras.my">hello@uniras.my</a></div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brand-mark">U</span><span>UNIRAS</span></div>
        <p>UNIRAS SDN. BHD.<br/>Registration No. 1478108T / 202201032411</p>
        <p>Digital Products · Applications · Business Systems</p>
        <p>© 2026 UNIRAS SDN. BHD.</p>
      </footer>
    </main>
  );
}
