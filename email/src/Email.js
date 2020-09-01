import React from 'react'
import { renderEmail, A, Email, Box, Span } from 'react-html-email'

const defaultStyle = { fontFamily: 'sans-serif', padding: '5px 0' }
export default props => {
  return (
    <Email style={defaultStyle}>
      <Box style={{ ...defaultStyle, padding: '20px' }}>
        <Box>
          <Box style={{ ...defaultStyle, padding: ' 10px 0' }}>Hiya!</Box>
          <Box>
            You recently signed up to Terminator, We've found you an appointment. Check the attachment below for the details. If the time doesn't work for you, please cancel the appointment and resubmit your details
          </Box>
        </Box>
        <Box
          style={{
            ...defaultStyle,
            ...{ padding: '10px' }
          }}
        />

        <Box>
          <Box
            style={{
              padding: '10px 10px 10px 0',
              fontSize: 15
            }}
            width='100%'
          >
            <Box style={defaultStyle} width='100%'>
          Cheers, and good luck in your new home,
            </Box>
            <Box fontSize={20} style={defaultStyle} width='100%'>
              <Span fontSize={20}>Terminator Berlin</Span>
            </Box>

            <Box>
              <Span>If you want to unsubscribe, please click: </Span>{' '}
              <A href='%tag_unsubscribe_url%'>here</A>
            </Box>
          </Box>
        </Box>
      </Box>

    </Email>
  )
}

Box.defaultProps = {
  cellPadding: 0,
  cellSpacing: 0,
  border: '0',
  align: 'left',
  valign: 'top',
  bgcolor: undefined,
  width: undefined,
  height: undefined,
  style: undefined,
  children: undefined
}
