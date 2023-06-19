import { BsArrowLeftShort } from "react-icons/bs";

import { NavLink } from "react-router-dom";
import { Button, Text } from "./BackButton.styled";

export const BackButton = ({ backLinkHref }) => {
  return (
    <>
      <NavLink to={backLinkHref}>
        <Button>
          <BsArrowLeftShort color="white" size={30} />
          <Text>BACK</Text>
        </Button>
      </NavLink>
    </>
  );
};
