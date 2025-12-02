import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );

    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <ImageSection>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </ImageSection>

      <Info>
        <ButtonGroup>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonGroup>

        {activeTab === "instructions" && (
          <Content>
            <Summary dangerouslySetInnerHTML={{ __html: details.summary }} />
            <Instructions
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            />
          </Content>
        )}

        {activeTab === "ingredients" && (
          <IngredientsList>
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </IngredientsList>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: 5rem auto;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 3rem auto;
  }
`;

const ImageSection = styled.div`
  flex: 1;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1.2;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  img {
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const Info = styled.div`
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid #313131;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 140px;

  @media (max-width: 480px) {
    width: 100%;
  }

  &:hover {
    background: #f5f5f5;
    transform: translateY(-2px);
  }

  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    border-color: #313131;
  }
`;

const Content = styled.div`
  line-height: 1.8;
`;

const Summary = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #555;

  p {
    margin-bottom: 1rem;
  }
`;

const Instructions = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  color: #333;

  p {
    margin-bottom: 1rem;
  }

  ol,
  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    font-size: 1rem;
    line-height: 2;
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    background: #f9f9f9;
    border-radius: 0.5rem;
    border-left: 3px solid #313131;
  }
`;

export default Recipe;
