import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Element() {
  return (
    <section className="app-section">
      <h2 className="app-section__title">Mount Fuji</h2>
      <h3 className="app-section__dates">12 Jan, 2021 - 24 Jan, 2021</h3>
      <img src="https://source.unsplash.com/WLxQvbMyfas" alt="mount fuji" className="app-section__image"/>
      <p className="app-section__location">
        <FontAwesomeIcon icon={faLocationDot} className="app-accent"/>
        JAPAN <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank">View on Google Maps</a>
      </p>
      <p className="app-section__text">
        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
        (12,380 feet). Mount Fuji is the single most popular tourist site in
        Japan, for both Japanese and foreign tourists.
      </p>
    </section>
  );
}
