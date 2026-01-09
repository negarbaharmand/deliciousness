import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    navigate("/searched/" + input.trim());
  };

  // Clear search when the route changes to anything except searched
  useEffect(() => {
    if (!location.pathname.startsWith("/searched/")) {
      setInput("");
    }
  }, [location.pathname]);

  return (
    <FormStyle
      onSubmit={submitHandler}
      role="search"
      aria-label="Search recipes"
    >
      <div>
        <FaSearch aria-hidden="true" />
        <label htmlFor="recipe-search" className="visually-hidden">
          Search recipes
        </label>
        <input
          id="recipe-search"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Search recipes..."
          autoComplete="off"
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem auto 2.5rem;
  padding: 0 1rem;
  width: 100%;
  max-width: 680px;

  @media (max-width: 900px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    margin: 0rem auto 1.5rem;
    max-width: 95%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0 0.75rem;
  }

  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }

  div {
    width: 100%;
    position: relative;
  }

  input {
    width: 100%;
    border: 2px solid #e5e7eb;
    background: #ffffff;
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    color: #1f2937;
    padding: 0.95rem 1rem 0.95rem 3rem;
    border-radius: 0.875rem;
    outline: none;
    box-sizing: border-box;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    &::placeholder {
      color: #9ca3af;
      opacity: 1;
    }

    &:hover {
      border-color: #d1d5db;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    &:focus {
      border-color: #f27121;
      box-shadow: 0 4px 16px rgba(242, 113, 33, 0.2);
      background: #ffffff;
    }

    @media (max-width: 768px) {
      padding: 0.8rem 1rem 0.8rem 2.75rem;
      font-size: 1rem;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0.85rem;
    transform: translateY(-50%);
    color: #6b7280;
    font-size: 1.1rem;
    pointer-events: none;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
      font-size: 1rem;
      left: 0.75rem;
    }
  }

  /* Change icon color when input is focused */
  input:focus ~ svg,
  div:focus-within svg {
    color: #f27121;
  }
`;

export default Search;
