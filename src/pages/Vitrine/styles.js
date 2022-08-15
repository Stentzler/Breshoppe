import styled from 'styled-components';

export const SectionVitrine = styled.section`
  min-height: calc(100vh - 184px);

  @media (max-width: 964px) {
    max-width: 100%;
  }
`;

export const HeaderVitri = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 22px;
  padding: 22px 0 28px;

  @media (max-width: 964px) {
    max-width: 100%;

    h4 {
      max-width: 80%;
      font-size: 18px;
    }
  }
`;

export const FlexContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'flex-start'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  gap: ${props => props.gap || '30px'};

  h4 {
    position: absolute;
    font-weight: 400;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 964px) {
    justify-content: center;
    width: 100%;
  }
`;
