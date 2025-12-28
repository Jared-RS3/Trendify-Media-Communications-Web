import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "📘", href: "#", label: "Facebook" },
    { icon: "📸", href: "#", label: "Instagram" },
    { icon: "🐦", href: "#", label: "Twitter" },
    { icon: "💼", href: "#", label: "LinkedIn" },
  ];

  const footerLinks = {
    services: [
      { label: "Brand Strategy", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
      { label: "Social Media", href: "#services" },
      { label: "PR & Media Relations", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Work", href: "#case-studies" },
      { label: "Team", href: "#about" },
      { label: "Careers", href: "#" },
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Insights", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">✨</span>
              <span className="footer-logo-text">Trendify Media</span>
            </div>
            <p className="footer-description">
              Transforming brands through strategic storytelling and innovative
              digital marketing. Your vision, amplified.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Johannesburg & Cape Town, South Africa</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+27 (011) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>hello@trendifymedia.co.za</span>
              </div>
            </div>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="social-link"
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Trendify Media Communications. All rights
              reserved. Crafted with passion and purpose. ✨
            </p>
            <div className="footer-legal">
              <a href="/privacy-policy" className="legal-link">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="legal-link">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="legal-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
