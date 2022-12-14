import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Escape.png";
import IMG2 from "../../assets/react2.gif";
import IMG3 from "../../assets/frog.gif";
import IMG4 from "../../assets/smash.gif";
import IMG5 from "../../assets/ng-pokemon.png";
import IMG6 from "../../assets/documentation.png";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes travaux récents</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img
            src={IMG1}
            alt=""
            style={{
              borderRadius: 20,
            }}
          />
          <h3>Escape Mini Monster pour ma fille :) (Godot)</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/Namejess/Godot"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://namejess.itch.io/escape-mini-monster"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img
            src={IMG2}
            alt=""
            style={{
              borderRadius: 20,
            }}
          />
          <h3>Ce site, réalisé avec React</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/Namejess/namejess.github.io"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img
            src={IMG3}
            alt=""
            style={{
              borderRadius: 20,
            }}
          />
          <h3>Petit plateformer (Godot)</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/Namejess/Godot_2D_Game"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img
            src={IMG4}
            alt=""
            style={{
              borderRadius: 20,
            }}
          />
          <h3>Smash Mini Monster (Godot)</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/Namejess/Godot-3D"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://namejess.itch.io/smash-mini-monster"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img
            src={IMG5}
            alt=""
            style={{
              borderRadius: 20,
            }}
          />
          <h3>Pokedex (Angular / PokeApi / Gitlab Pages)</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://gitlab.com/Namejess/ng-pokemon-app"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Gitlab
            </a>
            <a
              href="https://namejess.gitlab.io/ng-pokemon-app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img
            src={IMG6}
            alt=""
            style={{
              borderRadius: 20,
            }}
          />
          <h3>Documentation (Mkdocs/Gitlab Pages)</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://gitlab.com/Namejess/namejess-docs"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Gitlab
            </a>
            <a
              href="https://namejess.gitlab.io/namejess-docs/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
