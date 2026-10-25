import groupPhoto from "../../assets/images/acts-group-photo.jpg";
import "./MemoriesPage.css";

export default function MemoriesPage() {
  return (
    <section className="memories-section" aria-labelledby="memories-heading">
      <div className="memories-inner">
        <header className="memories-header">
          <p className="memories-eyebrow">ACTS EDC · HACKTOBERFEST 2026</p>
          <h2 id="memories-heading">THANK YOU EVERYONE.</h2>
          <p>One community, building memories together.</p>
        </header>

        <figure className="memories-photo-frame">
          <img
            src={groupPhoto}
            alt="The ACTS EDC Hacktoberfest community gathered for a group photo"
            className="memories-photo"
          />
          <figcaption>ACTS EDC · Hacktoberfest 2026</figcaption>
        </figure>
      </div>
    </section>
  );
}
