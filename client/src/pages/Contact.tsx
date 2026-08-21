/* SENTEC / Signal / Structure
 * Contact is treated as a transmission console: calm spacing, signal-orange focus states,
 * and clear access points for students, collaborators, and partners.
 */
import { Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import { SecondaryPage } from "@/components/SiteChrome";

export default function Contact() {
  return <SecondaryPage eyebrow="OPEN CHANNEL / CONTACT" title="Send a" accent="signal." intro="Questions, collaboration ideas, and ambitious problems belong here. Reach the SENTEC team and we will route your message to the right field.">
    <section className="secondary-section contact-layout">
      <div className="contact-aside"><span className="section-kicker">CHANNEL STATUS</span><h2>We are listening.</h2><p>The fastest route is the form. For direct correspondence, use the address below.</p><div className="contact-detail"><Mail size={17} /><a href="mailto:neduetsentec@gmail.com">neduetsentec@gmail.com</a></div><div className="contact-detail"><MapPin size={17} /><span>Student Affairs Dept<br />NED University, Karachi</span></div><div className="contact-stamp">RESPONSE WINDOW<br /><strong>01—03 DAYS</strong></div></div>
      <form className="signal-form" onSubmit={(event) => event.preventDefault()}><div className="form-heading"><span className="section-kicker">TRANSMISSION FORM / 01</span><p>Tell us what you are building, exploring, or trying to solve.</p></div><label>FULL NAME<input name="name" required placeholder="Your name" /></label><div className="form-row"><label>EMAIL<input type="email" name="email" required placeholder="you@example.com" /></label><label>PHONE<input type="tel" name="phone" placeholder="Optional" /></label></div><label>MESSAGE<textarea name="message" rows={6} required placeholder="Describe the signal..." /></label><div className="form-actions"><span><ShieldCheck size={14} /> Lightweight spam protection</span><button type="submit">Transmit message <Send size={15} /></button></div></form>
    </section>
  </SecondaryPage>;
}
