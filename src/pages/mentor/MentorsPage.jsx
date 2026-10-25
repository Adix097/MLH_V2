import firstPlacePhoto from "../../../Tung_tung_sahur download.jpg";
import secondPlacePhoto from "../../../ranger_win.JPG";
import thirdPlacePhoto from "../../../whey_win.jpg";
import "./MentorsPage.css";

const WINNERS = [
  { place: "1st", team: "TungTungTungSahur", photo: firstPlacePhoto },
  { place: "2nd", team: "Ai Rangers", photo: secondPlacePhoto },
  { place: "3rd", team: "Whey", photo: thirdPlacePhoto },
];

export default function MentorsPage() {
  return (
    <section className="winners-container" aria-labelledby="winners-heading">
      <div className="winners-wrapper">
        <header className="winners-header">
          <p className="winners-kicker">HACKTOBERFEST 2026</p>
          <h2 id="winners-heading" className="winners-title">MEET OUR WINNERS.</h2>
          <p className="winners-subtitle">Celebrating the teams that built, shipped, and stood out.</p>
          <div className="winners-rule" aria-hidden="true" />
        </header>

        <ol className="winners-grid">
          {WINNERS.map((winner) => (
            <li className={`winner-card winner-card--${winner.place === "1st" ? "first" : winner.place === "2nd" ? "second" : "third"}`} key={winner.place}>
              <div className="winner-photo-wrap">
                <img className="winner-photo" src={winner.photo} alt={`${winner.team} winning team`} />
              </div>
              <div className="winner-meta">
                <span className="winner-place">{winner.place} PLACE</span>
                <h3 className="winner-team">{winner.team}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
