import { mediaQueries } from "@utils/constants";
import styled from "styled-components";

export const TitleMain = styled.h1<{
  color?: string;
}>`
  font-family: "Chloe";
  font-size: 17rem;
  font-weight: normal;
  line-height: 12rem;
  color: ${({ theme, color }) => color ?? theme.palette.red[500]};

  @media ${mediaQueries.tablet} {
    font-size: 9rem;
    line-height: 9rem;
  }
`;

export const TitleMainTwo = styled(TitleMain)`
  font-size: 19rem;
  margin-top: 0.5rem;

  @media ${mediaQueries.tablet} {
    font-size: 9rem;
    line-height: 7rem;
    margin-top: 0;
  }
`;

export const TitleOne = styled.h1<{ color: string }>`
  font-family: "Chloe";
  font-size: 8rem;
  font-weight: normal;
  line-height: 7rem;
  color: ${({ theme, color }) => (color ? color : theme.palette.red[500])};

  @media ${mediaQueries.tablet} {
    font-size: 5rem;
  }
`;

export const TitleTwo = styled.h2<{ color?: string }>`
  font-family: "Chloe";
  font-size: 5.125rem;
  font-weight: normal;
  line-height: 4.125rem;
  color: ${({ theme, color }) => (color ? color : theme.palette.pink[500])};

  @media ${mediaQueries.tablet} {
    font-size: 3.8rem;
  }
`;

export const TitleThree = styled.h2<{ color?: string }>`
  font-family: "Chloe";
  font-size: 2.5rem;
  font-weight: normal;
  line-height: 3rem;
  color: ${({ theme, color }) => (color ? color : theme.palette.pink[500])};

  @media ${mediaQueries.tablet} {
    font-size: 2rem;
  }
`;

export const TitleSmall = styled.h4<{ color?: string }>`
  font-family: "Chloe";
  font-size: 4.5rem;
  font-weight: normal;
  line-height: 3rem;
  color: ${({ theme, color }) => (color ? color : theme.palette.red[500])};
  text-align: left;

  @media ${mediaQueries.tablet} {
    font-size: 3.8rem;
    text-align: center;
  }
`;

export const TitleBebas = styled.h2`
  font-family: "BebasNeue";
  font-size: 5rem;
  font-weight: normal;
  line-height: 4rem;
  color: ${({ theme }) => theme.palette.red[500]};
`;

export const Paragraph = styled.p<{ maxWidth: number }>`
  font-family: "Montserrat";
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.5rem;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "500px")};
`;
