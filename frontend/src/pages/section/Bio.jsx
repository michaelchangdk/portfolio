import React from "react";
import Window from "../../components/Window";

const Bio = (constraintsRef) => {
  return (
    <Window title="About me" navcolor="blue" constraintsRef={constraintsRef}>
      <p>This is about me text. Testing testing.</p>
    </Window>
  );
};

export default Bio;
