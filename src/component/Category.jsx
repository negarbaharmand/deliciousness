import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai Food</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin: 1.5rem 0;
    padding: 0 0.5rem;
  }
`;

const SLink = styled(NavLink)`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  color: #374151;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  width: clamp(4.5rem, 20vw, 6rem);
  height: clamp(4.5rem, 20vw, 6rem);
  border-radius: 50%;

  gap: 0.25rem;
  cursor: pointer;
  transform: none;
  transition: all 0.3s ease;

  h4 {
    color: inherit;
    font-size: clamp(0.7rem, 2.5vw, 0.9rem);
    line-height: 1.1;
    text-align: center;
    white-space: nowrap;
    font-weight: 600;
    margin: 0;
  }

  svg {
    color: inherit;
    font-size: clamp(1.1rem, 4vw, 1.6rem);
  }

  &:hover {
    border-color: #f27121;
    color: #f27121;
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(242, 113, 33, 0.2);
  }

  &.active {
    background: linear-gradient(135deg, #f27121, #e94057);
    border-color: transparent;
    color: white;
    box-shadow: 0 8px 20px rgba(242, 113, 33, 0.3);
  }

  &:focus-visible {
    outline: 3px solid #f27121;
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    width: clamp(4rem, 18vw, 5rem);
    height: clamp(4rem, 18vw, 5rem);
    gap: 0.15rem;

    h4 {
      font-size: clamp(0.6rem, 2.2vw, 0.75rem);
    }

    svg {
      font-size: clamp(1rem, 3.5vw, 1.3rem);
    }
  }

  @media (max-width: 400px) {
    width: clamp(3.5rem, 20vw, 4.5rem);
    height: clamp(3.5rem, 20vw, 4.5rem);

    h4 {
      font-size: 0.55rem;
    }

    svg {
      font-size: 0.95rem;
    }
  }
`;

export default Category;
