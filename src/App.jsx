import { useState, useEffect } from 'react'
import './ProofOfTheme.css'
import StarsBackground from './components/StarsBackground'
import './App.css'
import CouncilStats from './components/CouncilStats'
import EnterprisePricing from './components/EnterprisePricing'
import EcosystemShowcase from './components/EcosystemShowcase'
import {
  TrustBadges,
  FirstMoverAdvantage,
  InteractiveDemo,
  CaseStudies,
  Testimonials,
  SuccessMetrics,
  FlexiblePricing,
  ROICalculator,
  CompetitiveDifferentiation,
  ComprehensiveDocs,
  LiveChat
} from './components/UnstoppableComponents'

function App() {
  const [showCouncil, setShowCouncil] = useState(false)
  const [showCookieBanner, setShowCookieBanner] = useState(true)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (cookieConsent) {
      setShowCookieBanner(false)
    }
  }, [])

  const acceptAllCookies = () => {
    localStorage.setItem('cookieConsent', 'all')
    setShowCookieBanner(false)
  }

  const acceptEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'essential')
    setShowCookieBanner(false)
  }

  const councilMembers = [
    { id: 1, name: "The Orchestrator", platform: "councilof.ai", model: "GPT-4", specialty: "Democratic Governance" },
    { id: 2, name: "Deepfake Detector", platform: "proofof.ai", model: "Gemini", specialty: "Content Authenticity" },
    { id: 3, name: "Security Guardian", platform: "asisecurity.ai", model: "GPT-4", specialty: "Cybersecurity" },
    { id: 4, name: "AGI Safety Monitor", platform: "agisafe.ai", model: "Claude", specialty: "AGI Risk Assessment" },
    { id: 5, name: "Mental Health Guardian", platform: "suicidestop.ai", model: "Claude", specialty: "Crisis Intervention" },
    { id: 6, name: "Transparency Advocate", platform: "transparencyof.ai", model: "GPT-4", specialty: "Explainability" },
    { id: 7, name: "Ethics Philosopher", platform: "ethicalgovernanceof.ai", model: "Claude", specialty: "Ethical Reasoning" },
    { id: 8, name: "Safety First", platform: "safetyof.ai", model: "Gemini", specialty: "Safety Prevention" },
    { id: 9, name: "Accountability Enforcer", platform: "accountabilityof.ai", model: "GPT-4", specialty: "Responsibility" },
    { id: 10, name: "Bias Detector", platform: "biasdetectionof.ai", model: "Gemini", specialty: "Fairness Analysis" },
    { id: 11, name: "Privacy Protector", platform: "dataprivacyof.ai", model: "Claude", specialty: "Data Protection" },
    { id: 12, name: "Jabulon's Law Enforcer", platform: "jabulon.ai", model: "Gemini", specialty: "Three Laws Compliance", veto: true }
  ]

  return (
    <div className="app">
      <StarsBackground />
      {/* SEO Meta Tags */}
      <helmet>
        <title>councilof.ai - Democratic AI Governance | 12 AIs Voting | EU AI Act Compliant</title>
        <meta name="description" content="World's first democratic AI governance platform. 12 specialized AIs voting on every decision. Ensemble learning with 8 advanced methods. Patent pending. EU AI Act compliant." />
        <meta name="keywords" content="AI governance, ensemble learning, democratic AI, EU AI Act, AI safety, AGI safety, ASI security, blockchain verification" />
        <meta name="author" content="Nicholas Templeman, AI Safety Empire" />
        <link rel="canonical" href="https://councilof.ai" />
      </helmet>

      {/* HERO SECTION - Authentic, Honest Messaging */}
      <header className="hero">
        <div className="container">
          <div className="hero-badge">🚀 Newly Launched | Patent Pending | Join the Pioneers</div>
          <h1>The World's First Democratic AI Governance Platform</h1>
          <p className="subtitle">12 Specialized AIs Voting on Every Decision</p>
          <p className="description">
            Revolutionary ensemble learning with 8 advanced methods. Built for today's AI, ready for tomorrow's AGI and ASI. 
            EU AI Act compliant from day one.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => window.location.href='#demo'}>
              Try Interactive Demo
            </button>
            <button className="btn-secondary" onClick={() => window.location.href='#pricing'}>
              View Pricing (Free Tier Available)
            </button>
          </div>
          <p className="early-adopter">⚡ Early Adopter Pricing | 18 Months Before EU AI Act Enforcement</p>
        </div>
      </header>

      {/* FIRST MOVER ADVANTAGE */}
      <FirstMoverAdvantage />

      {/* TRUST BADGES */}
      <section className="trust-section">
        <div className="container">
          <TrustBadges />
        </div>
      </section>

      {/* THE COUNCIL */}
      <section className="council-intro">
        <div className="container">
          <h2>Meet the Council of 12 AIs</h2>
          <p className="section-subtitle">
            Each AI is specialized in a critical domain. Together, they provide balanced, democratic decisions.
            Learn more about <a href="https://proofof.ai">deepfake detection</a>, <a href="https://asisecurity.ai">ASI security</a>, 
            and <a href="https://agisafe.ai">AGI safety</a>.
          </p>
          <button className="btn-secondary" onClick={() => setShowCouncil(!showCouncil)}>
            {showCouncil ? 'Hide Council Members' : 'See All 12 Council Members'}
          </button>
        </div>
      </section>

      {showCouncil && (
        <section className="council">
          <div className="container">
            <div className="council-grid">
              {councilMembers.map(member => (
                <div key={member.id} className={`council-card ${member.veto ? 'veto' : ''}`}>
                  <div className="number">{member.id}</div>
                  <h3>{member.name}</h3>
                  <div className="platform">
                    <a href={`https://${member.platform}`} target="_blank" rel="noopener noreferrer">
                      {member.platform}
                    </a>
                  </div>
                  <div className="model">Powered by {member.model}</div>
                  <p>{member.specialty}</p>
                  {member.veto && <span className="veto-badge">Veto Power</span>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INTERACTIVE DEMO */}
      <section id="demo" className="demo-section">
        <div className="container">
          <InteractiveDemo />
        </div>
      </section>

      {/* ECOSYSTEM SHOWCASE */}
      <section className="ecosystem-section">
        <div className="container">
          <h2>Complete AI Safety Ecosystem</h2>
          <p className="section-subtitle">
            11 specialized platforms working together as one unified system
          </p>
          <EcosystemShowcase />
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="competitive-section">
        <div className="container">
          <CompetitiveDifferentiation />
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="features">
        <div className="container">
          <h2>Revolutionary Ensemble Learning</h2>
          <p className="section-subtitle">8 advanced methods that actually work</p>
          <div className="features-grid">
            <div className="feature">
              <div className="icon">⚖️</div>
              <h3>Weighted Voting</h3>
              <p>AIs with better track records get more influence. Meritocracy in action.</p>
            </div>
            <div className="feature">
              <div className="icon">🎯</div>
              <h3>Confidence Weighting</h3>
              <p>High-confidence votes count more. Prevents uncertain majority from overruling experts.</p>
            </div>
            <div className="feature">
              <div className="icon">🧠</div>
              <h3>Meta-Learning</h3>
              <p>13th AI learns from all 12 AIs' patterns. Optimizes council performance continuously.</p>
            </div>
            <div className="feature">
              <div className="icon">⏰</div>
              <h3>Temporal Learning</h3>
              <p>Learns from outcomes 6 months later. Not just immediate results.</p>
            </div>
            <div className="feature">
              <div className="icon">⚔️</div>
              <h3>Adversarial Testing</h3>
              <p>Red team vs blue team. Forces deeper reasoning, catches blind spots.</p>
            </div>
            <div className="feature">
              <div className="icon">🐝</div>
              <h3>Swarm Intelligence</h3>
              <p>Dynamic AI coalitions for complex decisions. Emergent intelligence.</p>
            </div>
            <div className="feature">
              <div className="icon">🔄</div>
              <h3>Knowledge Transfer</h3>
              <p>AIs teach each other across domains. System gets smarter over time.</p>
            </div>
            <div className="feature">
              <div className="icon">❓</div>
              <h3>Uncertainty Quantification</h3>
              <p>Knows when to ask humans. No guessing on critical decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS METRICS - HONEST */}
      <section className="metrics-section">
        <div className="container">
          <h2>Early Results</h2>
          <p className="section-subtitle">Newly launched - join the pioneers shaping AI safety</p>
          <div className="honest-metrics">
            <div className="metric">
              <div className="metric-value">Patent Pending</div>
              <div className="metric-label">Ensemble Learning Architecture</div>
            </div>
            <div className="metric">
              <div className="metric-value">8 Methods</div>
              <div className="metric-label">Advanced Ensemble Learning</div>
            </div>
            <div className="metric">
              <div className="metric-value">18 Months</div>
              <div className="metric-label">Competitive Advantage Window</div>
            </div>
            <div className="metric">
              <div className="metric-value">$5B+</div>
              <div className="metric-label">EU AI Act Compliance Market</div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="case-studies-section">
        <div className="container">
          <CaseStudies />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <Testimonials />
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How does the Council of 12 AIs work?</h3>
              <p>
                Each AI specializes in a critical domain (security, ethics, safety, etc.). When a decision is needed, 
                all 12 AIs analyze it in parallel and vote. A supermajority (10/12 = 83.3%) is required for approval. 
                Votes are weighted by past accuracy and confidence levels using our ensemble learning system.
              </p>
            </div>
            <div className="faq-item">
              <h3>What is ensemble learning?</h3>
              <p>
                Ensemble learning combines multiple AI models to make better decisions than any single model could. 
                We use 8 advanced methods: weighted voting, confidence weighting, meta-learning, temporal learning, 
                adversarial testing, swarm intelligence, knowledge transfer, and uncertainty quantification.
              </p>
            </div>
            <div className="faq-item">
              <h3>Is this EU AI Act compliant?</h3>
              <p>
                Yes! We're built for EU AI Act compliance from day one. We provide transparency (explainable AI decisions), 
                accountability (blockchain audit trails), and human oversight capabilities. Ready 18 months before the August 2026 enforcement deadline.
              </p>
            </div>
            <div className="faq-item">
              <h3>How is this different from single-AI systems?</h3>
              <p>
                Single-AI systems have blind spots, biases, and no accountability. Our democratic council approach provides: 
                (1) Diverse perspectives from 12 specialized AIs, (2) Higher accuracy through ensemble learning, 
                (3) Transparency through voting records, (4) Accountability through blockchain verification.
              </p>
            </div>
            <div className="faq-item">
              <h3>What's the pricing?</h3>
              <p>
                Free tier: 1,000 decisions/month. Starter: $499/month (50K decisions). Professional: $2,499/month (500K decisions). 
                Enterprise: Custom pricing. All paid plans include 30-day money-back guarantee. 
                <a href="#pricing">See full pricing details</a>.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I integrate this into my application?</h3>
              <p>
                Yes! We provide a RESTful API, SDKs (Python, JavaScript, Go), and webhooks. 
                Full documentation at <a href="/docs">docs.councilof.ai</a>. Most developers integrate in under 30 minutes.
              </p>
            </div>
            <div className="faq-item">
              <h3>Is this ready for AGI and ASI?</h3>
              <p>
                Yes! We've built AGI safety protocols and ASI security monitoring into the system. 
                Our <a href="https://agisafe.ai">AGI Safety platform</a> and <a href="https://asisecurity.ai">ASI Security platform</a> 
                are part of the Council ecosystem and ready for advanced AI systems.
              </p>
            </div>
            <div className="faq-item">
              <h3>Who built this?</h3>
              <p>
                Nicholas Templeman, solo founder who invested his life savings to build the world's first democratic AI governance platform. 
                <a href="https://www.linkedin.com/in/nicktempleman/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a> or 
                email <a href="mailto:nicholastempleman@optimobile.co.uk">nicholastempleman@optimobile.co.uk</a>.
              </p>
            </div>
            <div className="faq-item">
              <h3>What's your refund policy?</h3>
              <p>
                30-day money-back guarantee on all paid plans. If you're not satisfied for any reason, 
                contact us within 30 days for a full refund. No questions asked.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do you protect my data?</h3>
              <p>
                End-to-end encryption, GDPR compliance, SOC 2 certification (in progress). 
                Your data is processed securely and never used to train AI models without explicit consent. 
                See our <a href="/privacy">Privacy Policy</a> for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="roi" className="roi-section">
        <div className="container">
          <ROICalculator />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <FlexiblePricing />
        </div>
      </section>

      {/* DOCUMENTATION */}
      <section className="docs-section">
        <div className="container">
          <ComprehensiveDocs />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Join the AI Safety Revolution?</h2>
          <p>Start with our free tier. No credit card required.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href='#pricing'}>
              Start Free Trial
            </button>
            <button className="btn-secondary" onClick={() => window.location.href='mailto:nicholastempleman@optimobile.co.uk'}>
              Book Demo
            </button>
          </div>
          <p className="guarantee">30-day money-back guarantee | Cancel anytime</p>
        </div>
      </section>

      {/* LIVE CHAT */}
      <LiveChat />

      {/* COOKIE CONSENT BANNER */}
      {showCookieBanner && (
        <div className="cookie-banner">
          <div className="cookie-content">
            <p>
              We use essential cookies to provide our services and optional analytics cookies to improve your experience. 
              <a href="/cookies">Learn more</a>
            </p>
            <div className="cookie-buttons">
              <button onClick={acceptAllCookies} className="btn-primary">Accept All</button>
              <button onClick={acceptEssentialOnly} className="btn-secondary">Essential Only</button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>AI Safety Empire</h4>
              <p>Democratic AI governance for a safer future</p>
              <p className="patent-notice">Patent Pending | © 2025 Nicholas Templeman</p>
              <p className="company-info">Optimobile Ltd., United Kingdom</p>
            </div>
            <div className="footer-section">
              <h4>Platforms</h4>
              <ul>
                <li><a href="https://councilof.ai">councilof.ai</a> - Democratic Governance</li>
                <li><a href="https://proofof.ai">proofof.ai</a> - Deepfake Detection</li>
                <li><a href="https://asisecurity.ai">asisecurity.ai</a> - ASI Security</li>
                <li><a href="https://agisafe.ai">agisafe.ai</a> - AGI Safety</li>
                <li><a href="https://suicidestop.ai">suicidestop.ai</a> - Mental Health</li>
                <li><a href="https://transparencyof.ai">transparencyof.ai</a> - AI Transparency</li>
                <li><a href="https://ethicalgovernanceof.ai">ethicalgovernanceof.ai</a> - Ethics</li>
                <li><a href="https://safetyof.ai">safetyof.ai</a> - Safety Assessment</li>
                <li><a href="https://accountabilityof.ai">accountabilityof.ai</a> - Accountability</li>
                <li><a href="https://biasdetectionof.ai">biasdetectionof.ai</a> - Bias Detection</li>
                <li><a href="https://dataprivacyof.ai">dataprivacyof.ai</a> - Data Privacy</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="/docs">Documentation</a></li>
                <li><a href="/api">API Reference</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/research">Research</a></li>
                <li><a href="https://github.com/optimobile/ai-safety-empire">GitHub</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
                <li><a href="/gdpr">GDPR Compliance</a></li>
                <li><a href="/security">Security</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p><strong>Nicholas Templeman</strong></p>
              <p>Founder & CEO</p>
              <p><a href="mailto:nicholastempleman@optimobile.co.uk">nicholastempleman@optimobile.co.uk</a></p>
              <p><a href="https://www.linkedin.com/in/nicktempleman/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
              <p>Optimobile Ltd., UK</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 AI Safety Empire. All rights reserved.</p>
            <p>Built with ❤️ for a safer AI future | "Democracy for AI, Safety for All"</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

