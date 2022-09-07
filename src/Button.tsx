import { css } from "@emotion/css";
import * as React from "react";

const button = css`
  font-family: sans-serif;
  text-align: center;
  border-radius: 6px;
  padding: 1rem 2rem;
  border: none;
  font-size: 32px;
  background-color: green;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: greenyellow;
  }
`;

export const Button = (props) => {
  return <button className={button}>{props.children}</button>;
};
