import { Box, ThemeProvider, createTheme, } from "@material-ui/core";

const Loading = () => {
    return (
        <ThemeProvider theme={createTheme()}>
            <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                <div>Loading...</div>
            </Box>
        </ThemeProvider>
    )
}

export default Loading;