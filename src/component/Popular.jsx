import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

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
      console.log(data.recipes);
    }
  };

  return (
    <>
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
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2.5rem",
            padding: "0.5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 2rem 0 3rem;
  padding: 0 1rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  }
`;

const Card = styled.div`
  height: 15rem;
  border-radius: 1.25rem;
  overflow: hidden;
  position: relative;
  background: #1f2937;

  a {
    display: block;
    width: 100%;
    height: 100%; /* now resolves correctly */
    position: relative;
  }
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 2;
    inset-inline: 0;
    bottom: 0;
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: clamp(0.9rem, 2.5vw, 1.05rem);
    padding: 0.75rem 0.75rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
  }
`;

const Gradient = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.35) 25%,
    rgba(0, 0, 0, 0.15) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export default Popular;
