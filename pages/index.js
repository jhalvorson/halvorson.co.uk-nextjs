import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import HomeTitle from '../components/home-title';
import Text from '../components/text';
import Navigation from '../components/navigation';
import Projects from '../components/projects';
import Head from '../components/head';
import Repos from '../components/repos';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Head />
        <Navigation />
        <main>
          <section className="container narrow">
            <div className="container--narrow">
              <HomeTitle>
                Senior Frontend Engineer at FairFX, focused on React, React Native & GraphQL. Building FabFit on the side.
              </HomeTitle>
              <Text>
                Based in London, working
                  at{' '}
                <a href="https://fairfx.com" target="_blank" rel="noopener nofollow">
                  FairFX
                  </a>.
                <br/><br />
                I've previously worked at Amiqus and Cello Signal. Worked with clients such as{' '}
                <a href="https://autograph-hotels.marriott.com" target="_blank">
                  Marriott Autograph hotels
                  </a>,{' '}
                <a
                  href="https://itunes.apple.com/us/app/the-royal-edinburgh-military-tattoo/id1250371654?mt=8"
                  target="_blank"
                >
                  The Royal Edinburgh Military Tattoo
                  </a>, Sainsbury’s Bank, Scottish Friendly, Scottish Golf, Ardoch
                  Scotland, Borders Biscuits, Actiph Water, People Scotland,{' '}
                <a href="https://patrickgilmour.co.uk/" target="_blank">
                  Patrick Gilmour
                  </a>, amongst others.
                </Text>
              <Text>
                Spending all of my free time designing, building &amp; producing content for <a href="https://fab.fitness" target="_blank">FabFit</a>.
                </Text>
            </div>
          </section>
          <section className="container narrow">
            <div className="container--narrow">
              <Text bold><a href="mailto:jamie@halvorson.co.uk" className="no-strike">Got an interesting weekend project? Hit me up jamie@halvorson.co.uk</a></Text>
            </div>
          </section>
        </main>
        <style jsx global>
          {`
              html,
              body,
              div,
              span,
              applet,
              object,
              iframe,
              h1,
              h2,
              h3,
              h4,
              h5,
              h6,
              p,
              blockquote,
              pre,
              a,
              abbr,
              acronym,
              address,
              big,
              cite,
              code,
              del,
              dfn,
              em,
              img,
              ins,
              kbd,
              q,
              s,
              samp,
              small,
              strike,
              strong,
              sub,
              sup,
              tt,
              var,
              b,
              u,
              i,
              center,
              dl,
              dt,
              dd,
              ol,
              ul,
              li,
              fieldset,
              form,
              label,
              legend,
              table,
              caption,
              tbody,
              tfoot,
              thead,
              tr,
              th,
              td,
              article,
              aside,
              canvas,
              details,
              embed,
              figure,
              figcaption,
              footer,
              header,
              hgroup,
              menu,
              nav,
              output,
              ruby,
              section,
              summary,
              time,
              mark,
              audio,
              video {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
              }
              /* HTML5 display-role reset for older browsers */
              article,
              aside,
              details,
              figcaption,
              figure,
              footer,
              header,
              hgroup,
              menu,
              nav,
              section {
                display: block;
              }
              body {
                line-height: 1;
                font-family: -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
                color: #2a2b38;
              }
              ol,
              ul {
                list-style: none;
              }
              blockquote,
              q {
                quotes: none;
              }
              blockquote:before,
              blockquote:after,
              q:before,
              q:after {
                content: '';
                content: none;
              }
              table {
                border-collapse: collapse;
                border-spacing: 0;
              }

              a {
                color: #2a2b38;
                text-decoration: none;
                position: relative;
              }

              a:not(.no-strike):before {
                position: absolute;
                bottom: -3px;
                left: 0;
                right: 0;
                height: 2px;
                background-color: #2a2b38;
                content: '';
                opacity: 1;
                transition: 0.25s;
              }

              a:hover {
                color: #4125cc;
              }

              a:hover:before {
                left: 100%;
              }

              .container {
                display: flex;
                flex-direction: column;
                flex: 1;
                max-width: 1200px;
                margin: 0 auto;
                padding: 40px;
                justify-content: center;
              }

              .container--narrow {
                max-width: 1000px;
              }
            `}
        </style>
      </div>
    );
  }
}
