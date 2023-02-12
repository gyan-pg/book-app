import React from "react";
import { Button, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { ThemeProvider } from "@mui/system";

const MuiThemeTest = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: red[500],
            },
        },
    });

    return (
        <>
            <Button color="primary" variant="contained">
                デフォルトのテーマ
            </Button>
            <ThemeProvider theme={theme}>
                <Button color="primary" variant="contained">
                    テーマ変更後
                </Button>
            </ThemeProvider>
        </>
    );
};

export default MuiThemeTest;
