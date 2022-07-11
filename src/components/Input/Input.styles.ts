import { mediaQueries } from "@utils/constants";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 1rem;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 18px 40px;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.palette.red[500]};
    background: ${({ theme }) => theme.palette.grayScale[0]};
    border-radius: 6rem;
    border: none;
  }

  button {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-46%);
    background: none;
    border: none;
    cursor: pointer;
  }

  span {
    font-size: 1rem;
    min-width: 550px;
    text-align: center;
    margin-top: 0.3rem;
    color: ${({ theme }) => theme.palette.red[500]};
  }
`;
