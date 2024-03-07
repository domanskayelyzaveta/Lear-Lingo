import styled from "@emotion/styled";

export const ImgDiv = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid var(--yellow);
`;

export const Image = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const StyledOnline = styled.div`
  position: absolute;
  top: 19px;
  left: 86px;

  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: var(--neon-green);
  border: 2px solid var(--white);
`;
