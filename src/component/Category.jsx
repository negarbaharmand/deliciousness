import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
//Importing NavLink instead of Link it gives a class called active and we can add styling
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
`;

const SLink = styled(NavLink)`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  color: white;

  /* Fluid sizing */
  width: clamp(4.5rem, 20vw, 6rem);
  height: clamp(4.5rem, 20vw, 6rem);
  border-radius: 50%;

  gap: 0.25rem;
  cursor: pointer;

  /* Avoid initial shrink on small screens */
  transform: none;

  h4 {
    color: inherit;
    font-size: clamp(0.7rem, 2.5vw, 0.9rem);
    line-height: 1.1;
    text-align: center;
    white-space: nowrap;
  }

  svg {
    color: inherit;
    font-size: clamp(1.1rem, 4vw, 1.6rem);
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }

  /* Accessibility */
  &:focus-visible {
    outline: 3px solid #f27121;
    outline-offset: 3px;
  }

  /* Tiny screens: give text more room by using a rounded pill */
  @media (max-width: 360px) {
    width: clamp(6rem, 45vw, 8rem);
    height: 3.25rem;
    border-radius: 999px;
    flex-direction: row;
    padding: 0 1rem;

    svg {
      font-size: 1.25rem;
    }
    h4 {
      font-size: 0.85rem;
    }
  }
`;

export default Category;
