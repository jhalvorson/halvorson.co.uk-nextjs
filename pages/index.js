import Head from 'next/head';
import HomeTitle from '../components/home-title';
import Text from '../components/text';
import Navigation from '../components/navigation';
import Projects from '../components/projects';

export default () => (
  <div>
    <Head>
      <title>Jamie Halvorson</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="./static/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="./static/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="./static/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="./static/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="./static/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="./static/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="./static/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="./static/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./static/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="./static/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="./static/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./static/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="./static/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="./static/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Navigation />
    <main>
      <section className="container narrow">
        <div className="container--narrow">
          <HomeTitle>
            Frontend Developer at Signal, focused on React, React Native &amp;
            JS. Currently building &amp; Head of Product at FabFit.
          </HomeTitle>
          <Text>
            20-something FrontEnd Developer based in Edinburgh Scotland, working
            at{' '}
            <a href="https://cellosignal.com" target="_blank">
              Signal
            </a>. Previously worked with clients such as{' '}
            <a href="https://autograph-hotels.marriott.com" target="_blank">
              Autograph Hotels
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
            Currently spending all of my available time building FabFit and
            other React, React Native and NodeJS applications. Loves
            experimenting with the WP-API.
          </Text>
        </div>
      </section>
      <Projects />
      <section className="container narrow">
        <div className="container--narrow">
          <Text bold>Not available for projects. Always available for ☕</Text>
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
          white-space: nowrap;
        }

        a:before {
          position: absolute;
          top: 9px;
          left: 0;
          right: 0;
          height: 3px;
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
