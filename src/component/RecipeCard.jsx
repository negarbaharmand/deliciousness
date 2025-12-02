import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function RecipeCard({ id, title, image, to = `/recipe/${id}` }) {
  return (
    <Card>
      <Link to={to} aria-label={title}>
        <img src={image} alt={title} loading="lazy" />
        <Gradient />
        <div className="titleBar">
          <p>{title}</p>
        </div>
      </Link>
    </Card>
  );
}

export default RecipeCard;

const Card = styled.article`
  height: 15rem;
  border-radius: 1.25rem;
  overflow: hidden;
  position: relative;
  background: #111;

  a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: inherit;
    text-decoration: none;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .titleBar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    height: 64px; /* fixed height = consistent box */
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background: linear-gradient(
      to top,
      rgba(17, 24, 39, 0.7),
      rgba(17, 24, 39, 0.48)
    );
    backdrop-filter: blur(3px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  p {
    margin: 0;
    width: 100%;
    color: #f3f4f6;
    font-weight: 700;
    letter-spacing: 0.01em;
    font-size: clamp(0.9rem, 2.5vw, 1.05rem);
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Gradient = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 55%,
    rgba(0, 0, 0, 0.25) 100%
  );
`;
