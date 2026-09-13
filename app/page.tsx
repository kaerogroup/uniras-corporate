const capabilities = [
  ["01", "Digital Product Engineering", "Web applications, PWAs, SaaS products and platform experiences designed around real operational workflows."],
  ["02", "Business Systems", "Operational systems, vendor management, order workflows, marketplaces, internal tools and process automation."],
  ["03", "AI & Automation", "AI-assisted workflows, generative systems, decision support and automation applied where they create measurable value."],
  ["04", "Integration & Infrastructure", "APIs, payments, notifications, cloud delivery, authentication and third-party integrations."],
];

const products = [
  ["LOOKAL", "Creative technology platform", "An operated product focused on structured, AI-assisted creative production for business communication."],
  ["EON", "Event Organizer Operating System", "A unified operating workflow for event organisers, vendors, applications, operations and event execution."],
  ["ORDRE", "Commerce Order Operating System", "An offline-first order engine designed to unify transactions across multiple commerce channels."],
  ["ANGLR", "Digital fishing ecosystem", "A platform combining fishing communities, evidence, tournaments and digital participation workflows."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="UNIRAS home">UNIRAS<span>.</span></a>
        <nav>
          <a href="#capabilities">Capabilities</a>
          <a href="#products">Products</a>
          <a href="#approach">Approach</a>
          <a href="#contact" className="nav-cta">Start a conversation</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow">UNIRAS SDN. BHD. · Malaysia</div>
        <h1>We build digital products that run real businesses.</h1>
        <p className="hero-copy">Digital products, applications and business systems designed from the workflow outward — not from the screen inward.</p>
        <div className="hero-actions">
          <a className="button primary" href="#products">Explore our work</a>
          <a className="button secondary" href="#contact">Discuss a system</a>
        </div>
        <div className="hero-rule" />
        <div className="hero-meta">
          <span>Digital Product Engineering</span>
          <span>Business Systems</span>
          <span>AI & Automation</span>
        </div>
      </section>

      <section className="section shell intro">
        <div className="section-kicker">Who we are</div>
        <div className="intro-grid">
          <h2>Technology built around operations.</h2>
          <div>
            <p>UNIRAS SDN. BHD. is a Malaysian technology company focused on building digital products, applications and operational systems for modern organisations.</p>
            <p>We start by understanding how work actually happens, then translate that workflow into reliable software, clear interfaces and scalable digital operations.</p>
          </div>
        </div>
      </section>

      <section className="section shell" id="capabilities">
        <div className="section-kicker">Capabilities</div>
        <div className="section-heading"><h2>What we build.</h2><p>From focused internal applications to complete digital operating platforms.</p></div>
        <div className="capability-grid">
          {capabilities.map(([n, title, body]) => (
            <article className="capability" key={title}>
              <span>{n}</span><h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="shell">
          <div className="section-kicker light">Products & selected platforms</div>
          <div className="section-heading light"><h2>We build and operate products too.</h2><p>Our own products are proof of how we think about systems, operations and product engineering.</p></div>
          <div className="product-list">
            {products.map(([name, type, body], index) => (
              <article className="product" key={name}>
                <div className="product-index">0{index + 1}</div>
                <div><h3>{name}</h3><p className="product-type">{type}</p></div>
                <p>{body}</p>
                <span className="arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="approach">
        <div className="section-kicker">How we build</div>
        <div className="section-heading"><h2>We don’t start with screens.</h2><p>We start with the operation that the software must support.</p></div>
        <div className="process">
          {['Operation','Workflow','Domain Model','System','Interface'].map((item, i) => (
            <div className="process-step" key={item}><span>0{i+1}</span><strong>{item}</strong></div>
          ))}
        </div>
        <div className="statement">Real problem <span>→</span> clear workflow <span>→</span> reliable system <span>→</span> measurable outcome.</div>
      </section>

      <section className="section shell engagement">
        <div className="section-kicker">Engagement</div>
        <div className="section-heading"><h2>Different ways to work with us.</h2><p>Choose the model that matches the operational problem, maturity and ownership structure.</p></div>
        <div className="engagement-grid">
          <div><h3>Custom Development</h3><p>Purpose-built applications and systems for a specific organisation or workflow.</p></div>
          <div><h3>Product Implementation</h3><p>Configure and deploy an existing UNIRAS product or technology capability.</p></div>
          <div><h3>Technology Partnership</h3><p>Continuous product development, modernisation and technical stewardship.</p></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <div><div className="section-kicker light">Start a conversation</div><h2>Have an operation that should work better?</h2></div>
          <a className="button contact-button" href="mailto:hello@uniras.my">hello@uniras.my</a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand">UNIRAS<span>.</span></div>
        <p>UNIRAS SDN. BHD.<br/>Registration No. 1478108T / 202201032411</p>
        <p>Digital Products · Applications · Business Systems</p>
        <p>© 2026 UNIRAS SDN. BHD.</p>
      </footer>
    </main>
  );
}
