import styled from "styled-components";
import { Form } from "@unform/web";
import { mediaQueries } from "@utils/constants";

export const StyledForm = styled(Form)`
  min-width: 550px;

  @media ${mediaQueries.tablet} {
    min-width: 250px;
  }
`;

export const LoginButton = styled.button<{
  type: string;
  disabled: boolean;
}>`
  width: 100%;
  border-radius: 6rem;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  border: none;
  background: ${({ theme }) => theme.palette.red[500]};
  color: ${({ theme }) => theme.palette.grayScale[0]};
  font-size: 2rem;
  font-family: "BebasNeue";

  img {
    width: 40px;
  }
`;
