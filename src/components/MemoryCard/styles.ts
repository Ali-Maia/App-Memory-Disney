import styled, { css } from "styled-components/native";

type Memory = {
  select: boolean;
  visible: boolean;
};

type Avatar = {
  select: boolean;
  visible: boolean;
};

export const Container = styled.TouchableOpacity<Memory>`
  background-color: #f1f1f1;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  ${({ select }) =>select && css`
      background-color: #f18b8b;
    `}
  ${({ visible }) =>visible && css`
      background-color: #e4cbcb;
    `}
`;

export const Avatar = styled.Image<Avatar>`
  width: 70px;
  height: 70px;
  display: none;
  ${({ visible, select }) =>
    (visible || select) &&
    css`
      display: block;
    `}
`;
