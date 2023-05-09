import styled from 'styled-components';

const CardContainer = styled.div`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

const TopPartOfCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 18px;
  padding-left: 28px;
  padding-right: 28px;
`;

const MiddlePartOfCard = styled.div`
  position: relative;
  height: 8px;
  background-color: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

const PhotoContainer = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #EBD8FF;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserPhoto = styled.img`
object-fit: contain;
border-radius: 50%;
`

const BottomPartOfTheCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 36px;
  padding-top: 62px;
`;

const TweetsParagraph = styled.p`
  margin: 0 0 16px;
  font-size: 20px;
  color: #EBD8FF;
  text-transform: uppercase;
`;

const FollowersParagraph = styled.p`
  margin: 0 0 26px;
  font-size: 20px;
  color: #EBD8FF;
  text-transform: uppercase;
`;

const StyledButton = styled.button`
  background-color: ${({isFollowed}) => isFollowed? "#5CD3A8" :  "#ebd8ff"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  padding: 14px 56px;
  font-weight: 600;
  font-size: 18px;
  color: #373737;
  text-transform: uppercase;
`;

export {
  CardContainer,
  TopPartOfCard,
  MiddlePartOfCard,
  BottomPartOfTheCard,
  PhotoContainer,
  TweetsParagraph,
  FollowersParagraph,
  StyledButton,
  UserPhoto,
};
