import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

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
  margin: 2rem auto 2.5rem;
  padding: 0 1rem;
  width: 100%;
  max-width: 680px;

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
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: white;
    padding: 0.9rem 1rem 0.9rem 3rem;
    border-radius: 0.875rem;
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
    color: white;
    font-size: 1rem;
    opacity: 0.9;
    pointer-events: none;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.85);
  }

  input:focus {
    box-shadow: 0 0 0 3px rgba(242, 113, 33, 0.45);
  }
`;

export default Search;
