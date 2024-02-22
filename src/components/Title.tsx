import { Box, ThemeProvider, createTheme, } from "@material-ui/core";

const Title = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <h1 >Covid Tracker</h1>
      </Box>
    </ThemeProvider>
  )
}

export default Title;