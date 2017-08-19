import React from 'react';

export default function HomeTitle({ children }) {
  return (
    <h1 className="hero-text">
      {children}
      <style jsx>
        {`
          .hero-text {
            font-size: 2.3rem;
            line-height: 1.4;
            color: #2a2b38;
            font-weight: 600;
            margin-bottom: 40px;
          }

          @media (min-width: 600px) {
            .hero-text {
              font-size: 2.8rem;
              margin-bottom: 50px;
            }
          }

          @media (min-width: 1100px) {
            .hero-text {
              font-size: 3rem;
            }
          }
        `}
      </style>
    </h1>
  );
}
