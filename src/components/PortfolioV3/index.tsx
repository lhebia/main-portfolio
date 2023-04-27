import { Link } from "gatsby"
import React from "react"
import Head from "../Head"
import SocialNav from "../SocialNav"
import "./styles.scss"

export default function PortfolioV3() {
  return (
    <div className="portfoliov3 portfolio-container full-page grid-center">
      <Head title="Portfolio" />
      <div className="flex flex-column inner-container">
        <div>
          <h1>Hi, I'm Lawrence 👋</h1>
          <span>a Software Developer.</span>
        </div>
        <div>
          <p>
            I'm someone who is constantly iterating and trying to leave the
            world better than I found it through JavaScript & Ruby on Rails. I
            love solving problems and building a UI that is beautiful and easy
            to understand.
          </p>
          <p>
            Bored? I created a little{" "}
            <a
              href={"https://lhebia.github.io/noahs-ark-memory/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              animal memory game
            </a>{" "}
            to help you pass the time.
          </p>
          <p>
            I don't write as often, but I do have a{" "}
            <Link to="/blog">blog where I write about web development</Link> and
            anything else I'm interested in.
          </p>
          <p>
            For anything else, you can find or email me through the links below.
          </p>
        </div>
        <SocialNav flexJustification="flex-start" />
      </div>
    </div>
  )
}
