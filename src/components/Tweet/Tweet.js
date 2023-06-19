import { AllTweets, Container } from "./Tweet.styled";
import { useEffect, useState } from "react";
import { getUsers } from "../../api";
import { toast } from "react-hot-toast";
import { TweetItem } from "../TweetItem";
import { BackButton } from "../BackButton/BackButton";

const Tweet = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      try {
        const response = await getUsers();
        return setUsers(response);
      } catch (error) {
        toast.error("Oops! Try again later.");
      }
    }
    getAllUsers();
  }, []);

  return (
    <>
      <BackButton backLinkHref={"/"} />
      <AllTweets>
        {users.map((user) => {
          return (
            <Container key={user.id}>
              <TweetItem user={user} />
            </Container>
          );
        })}
      </AllTweets>
    </>
  );
};

export default Tweet;
