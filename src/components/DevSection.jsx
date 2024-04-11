import React from "react";
import dev from "../assets/dev.svg";
import { Card } from "./Card";
import discord from "../assets/discord2.svg";
import youtube from "../assets/youtube2.svg";
import paper from "../assets/paper.svg";
import blog from "../assets/blog.svg";

const DevSection = () => {
  return (
    <div className="dev-section-container">
      <h1 className="dev-section-title">
        Creating Cross-Chain Connections Together
      </h1>
      <div className="dev-section-wrapper">
        <div className="dev-section-text">
          <h2>BitVortex</h2>
          <p className="dev-section-description">
          We aim to offer a comprehensive ecosystem facilitating developers in effortlessly creating and deploying cross-chain applications.
          </p>
          <div className="btn-wrapper">
            <button className="primary">
              <span>Learn More</span>
            </button>
            <button className="secondary">
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
        <div className="dev-section-image">
          <img src={dev} alt="dev tools" />
        </div>
      </div>
      <div className="social-media-promotion-container">
      <Card>
        <>
          <div className="social-media-promotion-text">
            <h2>
              Be a part of our community
            </h2>
          </div>
          <div className="social-media-promotion-icons">
            <a href="/">
              <img src={discord} alt="discord" />
            </a>
            <a href="/">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="/">
              <img src={paper} alt="white paper" />
            </a>
            <a href="/">
              <img src={blog} alt="blog" />
            </a>
          </div>
        </>
      </Card>
    </div>
    </div>

  );
};

export default DevSection;
