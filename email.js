import React from "react";
import { renderEmail, A, Email, Box } from "react-html-email";

export default emailLinks => {
  return renderEmail(
    <Email>
      <Box>
        {emailLinks.map(({ link, text }) => {
          return <A href={link}> {text} </A>;
        })}
      </Box>
    </Email>
  );
};
