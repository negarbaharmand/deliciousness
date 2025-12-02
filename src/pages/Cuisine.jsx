import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import RecipeCard from "../component/RecipeCard";
import RecipeGrid from "../component/RecipeGrid";

const PAGE_SIZE = 12; // how many per request

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  let params = useParams();

  const fetchCuisine = async (name, nextOffset = 0) => {
    setLoading(true);
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${encodeURIComponent(
        name
      )}&number=${PAGE_SIZE}&offset=${nextOffset}`
    );
    const data = await res.json();

    // data.totalResults is provided by the API
    setTotal(data.totalResults ?? 0);

    if (nextOffset === 0) {
      setCuisine(data.results || []);
    } else {
      setCuisine((prev) => [...prev, ...(data.results || [])]);
    }
    setOffset(nextOffset);
    setLoading(false);
  };

  useEffect(() => {
    // reset when cuisine type changes
    setCuisine([]);
    setOffset(0);
    setTotal(0);
    fetchCuisine(params.type, 0);
  }, [params.type]);

  const canLoadMore = cuisine.length < total;

  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <RecipeGrid>
        {cuisine.map((item) => (
          <RecipeCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
          />
        ))}
      </RecipeGrid>

      <Actions>
        {canLoadMore && (
          <button
            onClick={() => fetchCuisine(params.type, offset + PAGE_SIZE)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        )}
        {!loading && cuisine.length === 0 && <p>No results.</p>}
      </Actions>
    </motion.section>
  );
}

const Actions = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;

  button {
    padding: 0.9rem 1.25rem;
    border-radius: 0.75rem;
    border: none;
    font-weight: 700;
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }

  button:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;

export default Cuisine;
