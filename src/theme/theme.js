//รวมธีมหลักของแอปปปปปปป 

import { createTheme } from "@mui/material";

const theme = createTheme({
    // typography: {
    //     fontFamily: 'kanit'
    // },
    // palette: {
    //     background: {
    //         default : '#F1D1D1'
    //     }
    // },
    components: {
        MuiAppBar:{
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    boxShadow: 'none' //เขาบอกแว่ลบเงา
                }
            }
        },
        MuiButton:{
            defaultProps: {
                size: 'medium'
            }
        }
    }
});

export default theme;