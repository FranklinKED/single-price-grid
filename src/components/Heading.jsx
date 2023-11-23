import React from "react";

export default function Heading() {
  return (
    <main className="main">
      <div>
        <h3 className="heading-title">Join our community </h3>
        <p className="heading-subtitle">
          30-day, hassle-free money back guarantee
        </p>
        <h6 className="heading-para">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </h6>
      </div>
      <div className="section-divide">
        <section className="section-1">
          <p>
            <h6 className="section-1-heading">Monthly Subscription</h6>
            <h5 className="section-1-price">
              $29 <span>per month</span>
            </h5>
            <h6 className="section-1-text">
              Full access for less than $1 a day
            </h6>
            <button>Sign Up</button>
          </p>
        </section>
        <section className="section-2">
          <ul>Why Us</ul>
          <div>
            <li>Tutorials by industry experts</li>
            <li> Peer &amp;expert code review</li>
            <li> Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li> Flashcard decks</li>
            <li>Community forum</li>
            <li> New videos every week</li>
          </div>
        </section>
      </div>
    </main>
  );
}
