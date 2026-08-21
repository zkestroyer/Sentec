/* SENTEC / Signal / Structure
 * Partners is intentionally transparent: current and past partner slots remain honest,
 * while the page makes the collaboration pathway feel useful and alive.
 */
import { ArrowUpRight, Handshake, Plus, Radio } from "lucide-react";
import { SecondaryPage } from "@/components/SiteChrome";

export default function Partners() {
  return <SecondaryPage eyebrow="NETWORK / COLLABORATION" title="Build the" accent="network." intro="SENTEC works best in signal with others. This page is ready to become the public record of the institutions, teams, and people who help students go further.">
    <section className="secondary-section partners-section"><div className="partners-intro"><span className="section-kicker">PARTNER REGISTER / 00</span><p>No current or past partner records have been published yet. When a collaboration is confirmed, it belongs here with context—not decoration.</p></div><div className="partner-empty-grid"><article className="partner-empty-card"><div className="empty-icon"><Radio size={23} /></div><span>CURRENT PARTNERS</span><h2>Open channel.</h2><p>Reserved for active collaborations, sponsorships, and institutional support.</p><div className="empty-line" /></article><article className="partner-empty-card partner-empty-card-accent"><div className="empty-icon"><Handshake size={23} /></div><span>PAST PARTNERS</span><h2>Archive ready.</h2><p>Reserved for previous collaborations and the work they helped make possible.</p><div className="empty-line" /></article></div><div className="partner-cta"><div><Plus size={18} /><span>ARE YOU BUILDING WITH US?</span></div><a href="mailto:neduetsentec@gmail.com">Start a partnership conversation <ArrowUpRight size={16} /></a></div></section>
  </SecondaryPage>;
}
