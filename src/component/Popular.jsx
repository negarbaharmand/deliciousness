import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RecipeCard from "../component/RecipeCard"; // adjust path

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
          arrows: false,
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

  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  }
`;

export default Popular;
