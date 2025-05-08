import {
  ContentLeft,
  ContentRight,
  MadeBy,
  MadeByText,
  OtherOccurrences,
  OtherOccurrencesBlock,
  ProjectTitle,
  StyledBigStar,
  StyledOrla,
  StyledSmallStar,
  TitleImage,
  Wrapper,
} from "./styles";

function HomeScreen() {
  return (
    <Wrapper>
      <ContentLeft>
        <StyledBigStar src="/big-star.svg" alt="Big Star" />
        <TitleImage>Textos sobre arte</TitleImage>
      </ContentLeft>
      <ContentRight>
        <ProjectTitle>
          <StyledOrla src="/orla-logo.svg" alt="Orla logo" />
          <MadeBy>
            <MadeByText>por</MadeByText>
            <MadeByText>Maria Joana Vilela</MadeByText>
          </MadeBy>
        </ProjectTitle>
        <OtherOccurrences>
          <OtherOccurrencesBlock>
            <StyledSmallStar src="/small-star.svg" alt="Big Star" />
            <TitleImage>Outras ocorrências </TitleImage>
          </OtherOccurrencesBlock>
        </OtherOccurrences>
      </ContentRight>
    </Wrapper>
  );
}

export default HomeScreen;
