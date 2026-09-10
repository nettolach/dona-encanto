import React from 'react';
import store from '../config/store';

export const AboutSection = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="about-card">
        <span className="about-icon">🎀</span>
        <h2>Sobre a {store.name}</h2>
        <div className="divider-line"></div>
        <p>{store.aboutText}</p>
        <p className="about-commitment">{store.commitmentText}</p>
      </div>
    </section>
  );
};

export const InstagramSection = () => {
  return (
    <section className="instagram-section">
      <div className="instagram-card">
        <span className="insta-icon">📸</span>
        <h3>Siga nosso Instagram</h3>
        <p>Acompanhe novidades, tutoriais de make e bastidores!</p>
        <a
          href={store.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-btn"
        >
          {store.instagramHandle}
        </a>
      </div>
    </section>
  );
};

