import { Navigation, List, Item, Link, Text } from "./Navigation.styled";

const NavigationBar = () => {
  return (
    <Navigation>
      <List>
        <Item>
          <Link to="/" end>
            <Text>Home</Text>
          </Link>
        </Item>
        <Item>
          <Link to="/tweets" end>
            <Text>Tweets</Text>
          </Link>
        </Item>
      </List>
    </Navigation>
  );
};

export default NavigationBar;
