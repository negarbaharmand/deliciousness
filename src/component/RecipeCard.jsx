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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .titleBar {
    background: linear-gradient(
      to top,
      rgba(242, 113, 33, 0.85),
      rgba(233, 64, 87, 0.75)
    );
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

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
    transition: transform 0.5s ease;
  }

  .titleBar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    min-height: 64px;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    background: linear-gradient(
      to top,
      rgba(17, 24, 39, 0.85),
      rgba(17, 24, 39, 0.6)
    );
    backdrop-filter: blur(8px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.3s ease;
  }

  p {
    margin: 0;
    width: 100%;
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 0.01em;
    font-size: clamp(0.9rem, 2.5vw, 1.05rem);
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    height: 13rem;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }

    .titleBar {
      min-height: 56px;
      padding: 0.65rem 0.85rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    height: 12rem;
  }
`;

const Gradient = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.15) 70%,
    rgba(0, 0, 0, 0.4) 100%
  );
  pointer-events: none;
`;
