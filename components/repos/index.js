import React from 'react';
import Text from '../text';

export default function Repos({ repos }) {
  console.log(repos);
  return (
    <div className="wrapper">
      <div className="container narrow">
        <h2>Recent Open Source &amp; Repos</h2>
        <ul>
          {
            repos.map(repo => (
              <li>
                <a href={repo.html_url} target="_blank">{repo.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
      <style jsx>{`

        h2 {
          font-size: 1.4em;
          font-weight: 600;
          padding-bottom: 30px;
        }

        ul {
          column-count: 3;
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
        
        @media (max-width: 800px) {
          ul { 
            column-count: 2;
          }
        }

        @media (max-width: 600px) {
          a {
            font-size: 20px;
            margin-bottom: 40px;
          }

          ul {
            column-count: 1;
          }
        }
      `}</style>
    </div>
  );
}