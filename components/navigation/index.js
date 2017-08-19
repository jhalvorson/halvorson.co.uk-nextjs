import React from 'react';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <span className="logo-wrapper">
          <img className="logo" src="./static/logo.svg" alt="" />
        </span>

        <ul className="list">
          <li>
            <a href="https://medium.com/@jamiehalvorson" target="_blank">
              Writing
            </a>
          </li>
          <li className="last">
            <a href="https://github.com/jhalvorson" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <style jsx>
        {`
          .nav {
            display: flex;
            flex-direction: column;
            flex: 1;
            top: 0;
            position: relative;
            padding: 0;
            height: 150px;
          }

          li {
            display: inline-block;
            padding-right: 30px;
          }

          .logo-wrapper {
            text-align: center;
            margin-bottom: 20px;
          }

          a:before {
            display: none;
          }

          .last {
            padding-right: 0;
          }

          .container {
            padding: 30px 40px;
            flex-direction: column;
            display: flex;
            flex: 1;
            justify-content: center;
            max-height: 30px;
          }

          @media (min-width: 600px) {
            .container {
              flex-direction: row;
            }

            .logo {
              width: 35px;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
            }
            .nav {
              width: 100%;
              flex-direction: row;
              position: fixed;
              height: auto;
            }

            .list {
              margin-left: auto;
            }

            .logo-wrapper {
              margin-left: auto;
            }

            .logo {
              position: relative;
              flex: 1;
            }
          }
        `}
      </style>
    </nav>
  );
}
