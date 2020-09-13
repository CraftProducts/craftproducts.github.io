import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import content from "../../content/hero.yaml"

export default () => (
  <section id="hero">
    <div className="row">
      <div className="twelve columns">

        <div className="hero-text">
          <h1 className="responsive-headline">{ content.headline }</h1>
          <p>{ content.body }</p>
        </div>

        <div className="buttons">
          <a className="button trial animated shake" target="_blank" href={ content.button1.to }>{ content.button1.label }</a>
          <AnchorLink className="button learn-more" to={ content.button2.to }>{ content.button2.label }</AnchorLink>
        </div>

        <div className="hero-image">
          <img src={ content.image } alt="" className="animated fadeInUpBig" />
        </div>
      </div>
    </div>
  </section>
)
