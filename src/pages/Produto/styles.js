import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 0 4%;

  @media (max-width: 964px) {
    width: 100%;
    margin: 0;
    flex-direction: column;
  }
`;

export const DesktopSideImages = styled.div`
  width: 2.5rem;
  height: 10vh;
  margin-top: 8%;
  margin-left: 1.25rem;

  @media (max-width: 964px) {
    display: none;
  }
`;

export const SideImageContainer = styled.div`
  width: 2.4rem;
  height: 3.875rem;
  margin-top: 0.625rem;

  .shoesFormat {
    width: 2.875rem;
    height: 2.625rem;
  }
  img {
    width: 2.125rem;
    height: 3.75rem;
  }

  .active {
    box-shadow: 0 0 9px var(--secondary), 0 0 9px var(--secondary),
      0 0 9px var(--secondary);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.shoesSchema ? "44%" : "32%")};
  height: ${(props) =>
    props.shoesSchema
      ? `calc(11.5rem + 15.375vh)`
      : `calc(17.875rem + 21.75vh)`};

  margin-top: 5%;
  margin-left: 3%;
  margin-right: 7%;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  .shoesFormat {
    height: calc(15rem + 14%);
  }

  img {
    height: calc(20.125rem + 24%);
    border-radius: 7px;
  }

  @media (max-width: 964px) {
    display: none;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  width: 54%;

  margin-top: 7%;

  @media (max-width: 964px) {
    width: 100%;
  }

  hr {
    border: none;
    border-bottom: 1px solid var(--white);

    margin: 1rem 0;

    @media (max-width: 964px) {
      display: none;
    }
  }
`;

export const InfoNameContainer = styled.div`
  display: flex;

  font-size: 2rem;

  @media (max-width: 964px) {
    display: none;
  }
`;

export const InfoPriceContainer = styled.div`
  display: flex;

  margin-top: 0.75rem;
  margin-bottom: 0.875rem;

  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 964px) {
    margin-top: 0.125rem;
    font-size: 1.4rem;
  }
`;

export const InfoButtonContainer = styled.div`
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;

  transition: 0.4s;

  svg {
    filter: invert(0);
    margin-right: 0.75rem;
  }

  button {
    display: flex;
    padding: 0.75rem 1rem;
    &:hover {
      background-color: var(--secondary);
      opacity: 0.9;
      color: var(--black);
    }

    @media (max-width: 964px) {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 964px) {
    width: 100%;
  }
`;

export const InfoShippingContainer = styled.div`
  display: flex;
  font-size: 1.2rem;

  margin-bottom: 1.75rem;

  svg {
    font-size: 1.75rem;
    margin-right: 0.5rem;
    transform: translateY(-2px);
  }
`;

export const InfoDescContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 10rem;

  border: 1px solid var(--secondary);
  border-radius: 7px;

  padding: 1rem;

  margin-bottom: 5rem;

  font-size: 0.95rem;
  color: var(--support);
`;

export const MobileNameDisplay = styled.div`
  display: none;

  @media (max-width: 964px) {
    display: flex;

    margin-top: 1.25rem;
    margin-bottom: 1.375rem;

    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
  }
`;

export const MobileImageDisplay = styled.div`
  display: none;

  @media (max-width: 580px) {
    img {
      width: 48%;
    }
  }
  @media (max-width: 964px) {
    display: block;

    img {
      width: 95%;
      height: ${(props) =>
        props.shoesSchema ? "calc(11.5rem + 14.75vh)" : "calc(23.5rem + 25vh)"};
      margin: 0;
      box-shadow: none;
    }
  }
`;
