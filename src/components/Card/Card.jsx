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
  UserPhoto,
} from './Card.styled';



export default function Card({ tweets, followers, avatar, id, isFollowed, handleCLick }) {

  return (
    <CardContainer>
      <TopPartOfCard>
        <img src={picture} alt="" width={308} height={168} />
      </TopPartOfCard>

      <MiddlePartOfCard>
        <PhotoContainer>
          <UserPhoto src={avatar} alt="user's avatar" width={62} height={62} />
        </PhotoContainer>
      </MiddlePartOfCard>
      <BottomPartOfTheCard>
        <TweetsParagraph>{tweets} tweets</TweetsParagraph>
        <FollowersParagraph>{followers} followers</FollowersParagraph>
        <StyledButton isFollowed={isFollowed} type="button" onClick={() => handleCLick(id)}>
          {isFollowed? 'followed': 'follow'}
        </StyledButton>
      </BottomPartOfTheCard>
    </CardContainer>
  );
}
