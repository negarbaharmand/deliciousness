import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RecipeCard from "../component/RecipeCard";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            1200: { perPage: 3, gap: "2rem" },
            992: { perPage: 2, gap: "1.5rem" },
            768: { perPage: 2, gap: "1rem" },
            480: { perPage: 1, gap: "0.75rem" },
          },
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "2rem",
          padding: { left: "0.5rem", right: "0.5rem" },
        }}
      >
        {popular.map((r) => (
          <SplideSlide key={r.id}>
            <RecipeCard id={r.id} title={r.title} image={r.image} />
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 2rem 0 3rem;
  padding: 0 1rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  }

  /* Swipe hint */
  &::after {
    content: "← Swipe →";
    position: absolute;
    top: 0;
    right: 1rem;
    font-size: 0.85rem;
    color: #9ca3af;
    font-weight: 500;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  /* Arrow styling (if using Option 1) */
  .splide__arrow {
    background: rgba(255, 255, 255, 0.95);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    opacity: 0.8;

    &:hover {
      opacity: 1;
      background: linear-gradient(135deg, #f27121, #e94057);
      transform: scale(1.1);
    }

    svg {
      fill: #333;
    }

    &:hover svg {
      fill: white;
    }
  }

  .splide__arrow--prev {
    left: -1rem;
  }

  .splide__arrow--next {
    right: -1rem;
  }

  @media (max-width: 768px) {
    .splide__arrow {
      display: none; /* Hide arrows on mobile, show swipe hint instead */
    }
  }
`;

export default Popular;
