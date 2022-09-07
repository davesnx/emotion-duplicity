import { Button } from "./Button";
import * as React from "react";

export function Header(props) {
  return (
    <div>
      <Button>That's the header button</Button>
      {props.children}
    </div>
  );
}
