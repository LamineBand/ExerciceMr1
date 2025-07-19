import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

const Quote: React.FC = () => {
  return (
    <section className="quote-section py-5">
      <div className="quote-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="quote-content">
              <QuoteIcon size={60} className="text-white mb-4" />
              <blockquote className="blockquote">
                <h2 className="text-white fw-bold mb-4">
                  "There is no love sincerer than the love of food."
                </h2>
                <footer className="blockquote-footer text-white-50 fs-5">
                  George Bernard Shaw
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;