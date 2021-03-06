import React from "react";
import {Box} from "@material-ui/core"

function BoxComponent() {
  return (
    <div>
      <Box width={500} boxShadow={1} p={3}>
        <h1>Timepass !!!</h1>
        <p>
          With it installed in the code editor you are using, you can type
          “lorem” and then tab and it will expand into a paragraph of Lorem
          Ipsum placeholder text. But it can do more! You can control how much
          you get, place it within HTML structure as it expands, and get
          different bits of it in repeated elements.
        </p>
      </Box>
    </div>
  );
}

export default BoxComponent;
