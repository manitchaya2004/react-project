import useMachineData from "../hook/useMachineData";
import { Box , Card ,Typography , CardContent, Grid } from "@mui/material";

function Cards() {
    const {machineData} = useMachineData();

    // คำนวณ การใช้พลังงานโดยรวม
    const totalPowerUsage = machineData.reduce((sum,machine) => sum + machine.powerUsage, 0).toFixed(0);
    const powerUsage = totalPowerUsage * 100

    // คำนวณการสั่นสะเทือนโดยรวม
    const totalVibration = machineData.reduce((sum,machine) => sum + machine.vibration,0).toFixed(0);
    const vibration = totalVibration * 100
    return (
        <Box sx={{ flexGrow:1, }}>
            <Grid container spacing={2}>
                {/* --- Card 1 */}
                <Grid size={{xs:4 , md:4}}>
                    <Card >
                        <CardContent >
                            <Typography sx={{fontWeight:'bold'}}>PowerUsage</Typography>
                            <Typography>{powerUsage} %</Typography>
                        </CardContent>
                    </Card>

                </Grid>
                {/* --- Card 2 */}
                <Grid size={{xs:4 , md:4}}>
                    <Card>
                        <CardContent>
                            <Typography sx={{fontWeight:'bold'}}>Vibration</Typography>
                            <Typography>{vibration} %</Typography>
                        </CardContent>
                    </Card>

                </Grid>

                {/* --- Card 3 */}
                <Grid size={{xs:4 , md:4}}>
                    <Card>
                        <CardContent>
                            <Typography sx={{fontWeight:'bold'}}>Vibration</Typography>
                            <Typography>{vibration} %</Typography>
                        </CardContent>
                    </Card>

                </Grid>


            </Grid>
        </Box>
    );
}
export default Cards;
