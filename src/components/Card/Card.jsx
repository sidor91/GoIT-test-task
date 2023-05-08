import picture from './Picture.png';
import {
  CardContainer,
  TopPartOfCard,
  MiddlePartOfCard,
  BottomPartOfTheCard,
  PhotoContainer,
  TweetsParagraph,
  FollowersParagraph,
  StyledButton,
} from './Card.styled';

export default function Card() {
  return (
    <CardContainer>
      <TopPartOfCard>
        <img src={picture} alt="" width={308} height={168} />
      </TopPartOfCard>

      <MiddlePartOfCard>
        <PhotoContainer></PhotoContainer>
      </MiddlePartOfCard>
      <BottomPartOfTheCard>
        <TweetsParagraph
        >
          tweets
        </TweetsParagraph>
        <FollowersParagraph
        >
          followers
        </FollowersParagraph>
        <StyledButton
        >
          follow
        </StyledButton>
      </BottomPartOfTheCard>
    </CardContainer>
  );
}
