/* SENTEC / Signal / Structure
 * Team treats the supplied roster as a field directory: disciplined filters, high-contrast
 * cards, and portraits framed as records inside the wider SENTEC system.
 */
import { useMemo, useState } from "react";
import { Linkedin, UserRound } from "lucide-react";
import { SecondaryPage } from "@/components/SiteChrome";

const imageBase = "https://sentecneduet.live/images/uploads/team/";
const members = [
  ["Zainab Khan", "President", "Executive Committee", "img_699ad02b1fc581.39195815.webp", "https://www.linkedin.com/in/zainab-khan05/"],
  ["Hamza Sheikh", "Vice President", "Executive Committee", "img_699ad0b416ae07.91713360.webp", "https://www.linkedin.com/in/hamza-azhar-sheikh-/"],
  ["Umama Khan", "General Secretary", "Executive Committee", "img_699ad0fc987926.36537145.webp", "https://www.linkedin.com/in/umama-khan-/"],
  ["Sohaib Waseem", "Joint Secretary", "Executive Committee", "img_699ad131235627.04780835.webp", "https://www.linkedin.com/in/sohaibwaseem/"],
  ["Saim Ali", "Manager Operations", "Executive Committee", "img_699ad2d37c0736.94048886.webp", "https://www.linkedin.com/in/saim-ali-a4301b294/"],
  ["Mohid Ahmer Khan", "Treasurer", "Executive Committee", "img_699ad2780ce190.85455038.webp", "https://www.linkedin.com/in/mohid-ahmer-khan-464bb9282/"],
  ["Hurain Maria Qureshi", "Social Media Manager", "Executive Committee", "img_699ad1fe1997b8.34742482.webp", "https://www.linkedin.com/in/hurain-maria-qureshi-10955b326/"],
  ["Adeen Amin", "Planning & Strategic Manager", "Executive Committee", "img_699ad32eb5e359.81166017.webp", "https://www.linkedin.com/in/adeen-amin-922a03340/"],
  ["Ayza Waseem", "Technical Advisor", "Executive Committee", "img_699ad35f68a8b8.95437537.webp", "https://www.linkedin.com/in/ayza-waseem-uddin-692290293/"],
  ["Abdullah Khalid", "Mentor Cyber Security", "Directorate", "img_699add0c3610d3.44996638.webp", "https://www.linkedin.com/in/abdullah0-khalid/"],
  ["Zain Chandio", "Director Cyber Security", "Directorate", "img_699add53728bc4.65384935.webp", ""],
  ["Muhammad Shayan", "Mentor Web Development", "Directorate", "img_699ad6ea112ee6.31086360.webp", ""],
  ["Sabiha Zulfiqar Ahmed", "Director Web Development", "Directorate", "img_699ad72e509939.26863140.webp", "https://www.linkedin.com/in/sabiha-zulfiqar-ahmed-70a292293/"],
  ["Muqaddas Mehboob", "Deputy Director Web Development", "Directorate", "img_699ad80fde1065.19261097.webp", "https://www.linkedin.com/in/muqaddas-mehboob/"],
  ["Muhammad Rahim", "Director Artificial Intelligence", "Directorate", "img_699c0541efbee0.36151658.webp", "https://www.linkedin.com/in/muhammad-raahim-rizwan/"],
  ["S.M. Abdullah Abdulbadeeli", "Deputy Director Artificial Intelligence", "Directorate", "img_699c04f2269b16.28720706.webp", "https://www.linkedin.com/in/smaasui/"],
  ["Hammad Ur Rehman", "Director Robotics", "Directorate", "img_699ae3e0e24c29.42568247.webp", "https://www.linkedin.com/in/mhammadurrehman"],
  ["Arham Amir", "Deputy Director Robotics", "Directorate", "img_699adc234f2055.82945924.webp", "https://www.linkedin.com/in/arham-amir-bb06a936b/"],
  ["Areena Ahmed Sheikh", "Director Data Science", "Directorate", "img_699ad7ae17b669.82624046.webp", "https://www.linkedin.com/in/areena-ahmed-sheikh-8497602a8/"],
  ["Syed Rouhan Amir", "Deputy Director Data Science", "Directorate", "img_699ad89d01de91.67724447.webp", "https://www.linkedin.com/in/syed-muhammad-rouhan-amir-4226a7382/"],
  ["Ubaid Raza", "Director Finance & Marketing", "Directorate", "img_699ade413d1921.61900042.webp", ""],
  ["Safi Ahson", "Deputy Director Finance & Marketing", "Directorate", "img_699ade5d4b68a8.98263645.webp", ""],
  ["Iraj Naveed", "Director Content Creation", "Directorate", "img_699adea98f3f08.35826763.webp", "https://www.linkedin.com/in/iraj-naveed-181643319/"],
  ["Iqra Abid", "Deputy Director Content Creation", "Directorate", "img_699adefa863834.07249728.webp", "https://www.linkedin.com/in/iqra-abid-548770300/"],
  ["Ayesha Zahid", "Director Graphics", "Directorate", "img_699ae0998e5767.60895474.webp", "https://www.linkedin.com/in/ayeshazahid-/"],
  ["Ali Hasan", "Deputy Director Graphics", "Directorate", "img_699aec4cb76686.19516241.webp", "https://www.linkedin.com/in/ali-hasan-897516384/"],
  ["Abdullah Sheikh", "Director Photography", "Directorate", "img_699c06dbb791d4.98158587.webp", "https://www.linkedin.com/in/sheikh-muhammed-abdullah-456a5b32b/"],
  ["Manal Kafeel", "Deputy Director Photography", "Directorate", "img_699c07f20f00e3.62554718.webp", "https://www.linkedin.com/in/manal-kafeel-19962b300/"],
] as const;

export default function Team() {
  const [filter, setFilter] = useState("ALL");
  const filters = ["ALL", "EXECUTIVE COMMITTEE", "DIRECTORATE"];
  const visible = useMemo(() => filter === "ALL" ? members : members.filter((member) => member[2].toUpperCase() === filter), [filter]);
  return <SecondaryPage eyebrow="FIELD DIRECTORY / PEOPLE" title="Meet the" accent="team." intro="The people building the next signal at NED University—operators, mentors, directors, and curious engineers moving the system forward.">
    <section className="secondary-section team-section"><div className="team-toolbar"><span className="section-kicker">DIRECTORY / {String(visible.length).padStart(2, "0")} RECORDS</span><div className="filter-bar">{filters.map((item) => <button key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="team-grid">{visible.map(([name, role, category, image, linkedin], index) => <article className="team-card" key={name}><div className="team-portrait"><img src={`${imageBase}${image}`} alt={name} loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} /><div className="portrait-fallback"><UserRound size={34} /></div><span>{String(index + 1).padStart(2, "0")}</span>{linkedin && <a href={linkedin} target="_blank" rel="noreferrer" aria-label={`${name} on LinkedIn`}><Linkedin size={15} /></a>}</div><div className="team-card-copy"><span>{category}</span><h2>{name}</h2><p>{role}</p></div></article>)}</div></section>
  </SecondaryPage>;
}
