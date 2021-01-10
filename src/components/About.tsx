import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const About: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h5' >
            About
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='left'>
            Takadaです。<br />
            2020年8月から独学でプログラミング学習を開始。<br />
            課題を解決するために適切な技術を導入できるようになる事が目標です。<br />
            このページはTypeScriptとReactで作成しています。
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;