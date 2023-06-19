import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Pictures = styled.div`
  position: relative;
`;

export const GoitImage = styled.img`
  margin-left: 20px;
  margin-top: 20px;
`;

export const ChatImage = styled.img`
  position: absolute;
  left: 36px;
  top: 28px;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;

  margin-top: 136px;

  &:before,
  &:after {
    flex: 1;
    content: "";
    width: 380px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  position: relative;
  z-index: 1000;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  z-index: 1000;
  position: relative;
  border-radius: 50%;
  width: 62px;
  height: 62px;
`;

export const Background = styled.div`
  width: 62px;
  height: 62px;
  background: #5736a3;
  border-radius: 50%;
`;

export const Description = styled.div`
  margin: 26px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24px / 20px);
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  margin: 0 auto;

  width: 196px;
  height: 50px;

  border: none;
  background-color: ${(props) => (props.following ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const ButtonText = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
