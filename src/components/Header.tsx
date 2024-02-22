import { Link } from "react-router-dom";
import { Box, ThemeProvider, createTheme, } from "@material-ui/core";

const Header = () => {

    return (
        <ThemeProvider theme={createTheme()}>
            <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                <Link to="/">国ごとの感染状況</Link>
                <Link to="/world">世界の感染状況</Link>
            </Box>
        </ThemeProvider>
    )


}

export default Header;