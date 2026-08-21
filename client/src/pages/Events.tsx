/* SENTEC / Signal / Structure
 * Events is an honest archive surface: it creates a clear destination without inventing
 * dates or event claims before the source schedule is supplied.
 */
import { CalendarDays, ArrowUpRight, BellRing } from "lucide-react";
import { SecondaryPage } from "@/components/SiteChrome";

export default function Events() {
  return <SecondaryPage eyebrow="CALENDAR / FIELD ACTIVITY" title="Stay in the" accent="loop." intro="Workshops, talks, build sessions, and community moments will appear here as the SENTEC calendar comes online.">
    <section className="secondary-section events-section"><div className="events-empty"><div className="events-icon"><CalendarDays size={26} /></div><span className="section-kicker">EVENT REGISTER / 00</span><h2>No events published yet.</h2><p>The calendar is ready for the next signal. Check back here for confirmed workshops, talks, orientations, and build sessions.</p><a className="events-subscribe" href="mailto:neduetsentec@gmail.com?subject=Notify%20me%20about%20SENTEC%20events"><BellRing size={15} /> Ask to be notified <ArrowUpRight size={15} /></a></div></section>
  </SecondaryPage>;
}
