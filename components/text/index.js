import React from 'react';

export default function Text({ children }) {
  return (
    <p className="text-standard">
      {children}
      <style jsx>{`
        .text-standard {
          font-family: 'Inconsolata', monospace;
          font-size: 18px;
          line-height: 1.3;
          margin-bottom: 30px;
        }

        @media (max-width: 600px) {
          .text-standard {
            font-size: 20px;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </p>
  );
}
