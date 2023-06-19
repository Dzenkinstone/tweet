import { useEffect, useState } from "react";
import chatImage from "../../picture2 1.png";
import goit from "../../Vector (1).png";
import {
  GoitImage,
  ChatImage,
  Line,
  Circle,
  Avatar,
  Background,
  Description,
  Text,
  Button,
  ButtonText,
  Pictures,
} from "./TweetItem.styled";
import { updateUsers } from "../../api";

const TweetItem = ({ user }) => {
  const {
    id,
    user: userName,
    tweets: tweetsCount,
    followers: followersCount,
    avatar,
  } = user;

  const [following, setFollowing] = useState();

  const [followers, setFollowers] = useState(followersCount);
  const [tweets, setTweets] = useState(tweetsCount);

  useEffect(() => {
    const getArray = JSON.parse(localStorage.getItem("followingId"));
    const newArray = getArray ?? [];
    const isCurrentId = newArray.includes(id);

    setFollowing(isCurrentId);
  }, [id]);

  const handleChange = () => {
    setFollowing(!following);

    if (!following) {
      const getArray = JSON.parse(localStorage.getItem("followingId")) ?? [];
      getArray.push(id);
      localStorage.setItem("followingId", JSON.stringify(getArray));
      updateFollowers(id, followers + 1);
      return setFollowers(followers + 1);
    }

    const getArray = JSON.parse(localStorage.getItem("followingId"));
    const updatedArray = getArray.filter((num) => num !== id);
    localStorage.setItem("followingId", JSON.stringify(updatedArray));

    updateFollowers(id, followers - 1);
    return setFollowers(followers - 1);
  };

  const updateFollowers = async (id, followers) => {
    try {
      const giveData = await updateUsers(id, { followers });
      return giveData;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Pictures>
        <GoitImage src={goit} />
        <ChatImage src={chatImage} />
      </Pictures>
      <Line>
        <Circle>
          <Background>
            <Avatar src={avatar} />
          </Background>
        </Circle>
      </Line>
      <Description>
        <Text>{tweets} TWEETS</Text>
        <Text>{followers} FOLLOWERS</Text>
      </Description>
      <Button following={following} onClick={handleChange}>
        <ButtonText>{following ? "FOLLOWING" : "FOLLOW"}</ButtonText>
      </Button>
    </>
  );
};

export default TweetItem;
