import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80vh;
  padding: 48px;
  gap: 12px;
`;
export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 50%;
`;

export const MadeBy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MadeByText = styled.div`
  font-size: 1rem;
  font-weight: 300;
`;

export const TitleImage = styled.h3`
  font-weight: 200;
  font-size: 1.5rem;
  position: relative;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #49c39e;
    transition: width 0.3s ease-in-out;
  }
  &:hover:after {
    width: 100%;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 50%;
`;

export const OtherOccurrences = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;

export const OtherOccurrencesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 65px;
`;

export const StyledOrla = styled.img`
  padding-right: 120px;
`;

export const StyledBigStar = styled.img`
  width: 400px;
  height: 400px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`;

export const StyledSmallStar = styled.img`
  width: 200px;
  height: 200px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`;
