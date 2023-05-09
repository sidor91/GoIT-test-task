import { useState, useEffect } from 'react';
import { StyledList, StyledListItem } from './CardList.styled';
import getUsersList from 'utils/api';
import Card from 'components/Card';

const initialState = JSON.parse(localStorage.getItem('users')) || null;

export default function CardList() {
  const [users, setUsers] = useState(initialState);

  useEffect(() => {
    if (users) {
      return;
    }
    getUsersList()
      .then(data => {
        const localStorageData = data.map(user => {
          return { ...user, isFollowed: false };
        });
        localStorage.setItem('users', JSON.stringify(localStorageData));
        setUsers(localStorageData);
      })
      .catch(error => console.log(error));
  }, [users]);

    const handleClick = id => {
      const updatedList = users.map(user => {
        if (user.id === id) {
          user.isFollowed = !user.isFollowed;
          user.isFollowed ? (user.followers += 1) : (user.followers -= 1);
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedList));
    setUsers(updatedList);
  };

  return (
    <StyledList>
      {users &&
        users.map(({ id, tweets, followers, avatar, isFollowed }) => (
          <StyledListItem key={id}>
            <Card
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              id={id}
              isFollowed={isFollowed}
              handleCLick={handleClick}
            />
          </StyledListItem>
        ))}
    </StyledList>
  );
}
