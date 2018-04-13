import React from "react";
import { renderEmail, A, Email, Box, Span } from "react-html-email";

const defaultStyle = { fontFamily: "sans-serif", padding: "5px 0" };
export default props => {
  return (
    <Email style={defaultStyle}>
      <Box style={{ ...defaultStyle, padding: "20px" }}>
        <Box>
          <Box style={{ ...defaultStyle, padding: " 10px 0" }}>Hiya!</Box>
          <Box>
            You recently signed up to Terminator, We've found you some
            appointments in the next 7 days. They are:
          </Box>
        </Box>
        <Box
          style={{
            ...defaultStyle,
            ...{ padding: "10px" }
          }}
        >
          {props.emailLinks.map(({ link, text }) => {
            return (
              <Box width="100%">
                <A
                  style={{
                    color: "black",
                  }}
                  fontSize={20}
                  href={link}
                >
                  - {text}
                </A>
              </Box>
            );
          })}
        </Box>
        <Box>
          However, you need to act quickly! They will only be available for a
          short time. If none are available you'll just see a screen where no
          appointments seem to be available.
        </Box>
        <Box>
          <Box
            style={{
              padding: "10px 10px 10px 0",
              fontSize: 15
            }}
            width={"100%"}
          >
            <Span fontSize={20}>Captcha help</Span>
          </Box>
          You may be asked to solve a captcha. If that occurs, you will be
          redirected back to the homepage. If you come back to your email and
          click on the link above, you'll be able to book your appointment!
        </Box>
        <Box style={defaultStyle} width={"100%"}>
          Cheers, and good luck in your new home,
        </Box>
        <Box fontSize={20} style={defaultStyle} width={"100%"}>
          <Span fontSize={20}>Terminator Berlin</Span>
        </Box>
      </Box>
    </Email>
  );
};
Box.defaultProps = {
  cellPadding: 0,
  cellSpacing: 0,
  border: "0",
  align: "left",
  valign: "top",
  bgcolor: undefined,
  width: undefined,
  height: undefined,
  style: undefined,
  children: undefined
};
