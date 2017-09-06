import React from 'react';
import Text from '../text';

export default function Projects() {
  return (
    <div className="wrapper">
      <div className="container narrow">
        <h2>Personal Projects</h2>
        <Text>Where the fun happens</Text>
        <div className="projects">
          <div className="project">
            <a href="https://coffee-house.halvorson.co.uk" target="_blank">
              Coffee House - iOS App
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            background-color: #f9f9f9;
            margin-bottom: 40px;
          }

          h2 {
            font-size: 1.4em;
            font-weight: 600;
            padding-bottom: 10px;
          }

          p {
            padding-bottom: 40px;
          }

          .wrapper {
            padding: 2em 0;
          }

          a {
            font-family: 'Inconsolata', monospace;
            font-size: 18px;
            line-height: 1.3;
            margin-bottom: 30px;
          }

          @media (max-width: 600px) {
            a {
              font-size: 20px;
              margin-bottom: 40px;
            }
          }
        `}
      </style>
    </div>
  );
}
