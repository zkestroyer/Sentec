/* SENTEC / Signal / Structure
 * Gallery uses an archive-board composition: numbered records, controlled image fields,
 * and quiet hover states instead of generic image tiles.
 */
import { useMemo, useState } from "react";
import { ArrowUpRight, Camera, Grid2X2 } from "lucide-react";
import { SecondaryPage } from "@/components/SiteChrome";

const records = [
  { year: "2026", type: "FIELD NOTE", title: "Systems in motion", tag: "WORKSHOPS", tone: "gallery-tone-orange" },
  { year: "2026", type: "SIGNAL LOG", title: "The room becomes a lab", tag: "EVENTS", tone: "gallery-tone-blue" },
  { year: "2025", type: "BUILD RECORD", title: "From sketch to prototype", tag: "PROJECTS", tone: "gallery-tone-grid" },
  { year: "2025", type: "FIELD NOTE", title: "People behind the systems", tag: "COMMUNITY", tone: "gallery-tone-paper" },
  { year: "2024", type: "SIGNAL LOG", title: "A new cohort arrives", tag: "ORIENTATION", tone: "gallery-tone-dark" },
  { year: "2024", type: "BUILD RECORD", title: "Making the invisible visible", tag: "RESEARCH", tone: "gallery-tone-orange" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("ALL");
  const filters = ["ALL", "WORKSHOPS", "EVENTS", "PROJECTS", "COMMUNITY", "RESEARCH"];
  const visible = useMemo(() => filter === "ALL" ? records : records.filter((record) => record.tag === filter), [filter]);
  return <SecondaryPage eyebrow="ARCHIVE / VISUAL FIELD" title="The" accent="gallery." intro="A growing visual record of workshops, prototypes, people, and the moments that make SENTEC a living engineering system.">
    <section className="secondary-section gallery-section"><div className="archive-toolbar"><div><span className="section-kicker">RECORDS / {String(visible.length).padStart(2, "0")}</span><p>Curated signals from the SENTEC field.</p></div><div className="filter-bar">{filters.map((item) => <button key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="gallery-grid">{visible.map((record, index) => <article key={record.title} className={`gallery-card ${record.tone}`}><div className="gallery-card-visual"><span className="gallery-card-index">{String(index + 1).padStart(2, "0")}</span><Camera size={21} /><Grid2X2 className="gallery-grid-icon" size={80} strokeWidth={.5} /></div><div className="gallery-card-meta"><span>{record.year} / {record.type}</span><ArrowUpRight size={15} /></div><h2>{record.title}</h2><p>{record.tag}</p></article>)}</div></section>
  </SecondaryPage>;
}
