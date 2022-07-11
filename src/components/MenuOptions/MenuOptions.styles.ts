import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    color: ${({ theme }) => theme.palette.red[500]};
    background: ${({ theme }) => theme.palette.pink[500]};
    border-radius: 6rem;
    margin-top: 1rem;
    padding: 10px 40px;
    transition: filter 0.2s;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 1rem;
    }

    a {
      text-align: left;
      flex: 1;
      font-size: 2rem;
      font-family: "BebasNeue";
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
