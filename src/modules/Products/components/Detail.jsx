import {
  CardContent,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function Detail() {
  return (
    <div >
        <Typography>Products</Typography>
      <Grid contrainer spacing={2} >
        <Grid size={6} >
          <Card>
              <CardMedia component="img" height="140" image="./sensor.jpg"  />
              <CardContent>
                <Typography variant="h6">Wireless Vibration Sensor Solutions</Typography>
                <Typography variant="body1">
                    Advanced Condition Monitoring with Wireless Vibration Sensors 
                </Typography>
              </CardContent>
          </Card>
          
        </Grid>

        <Grid size={6}>
          <Card >
            <CardActionArea>
              <CardMedia component="img" height="140" image="./vibration.jpg" />
              <CardContent>
                <Typography variant="h6">Vibration DAQ for Critical Machine Solution</Typography>
                <Typography variant="body1">
                    High-Frequency Vibration Analysis for Critical Machine Monitoring 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default Detail;
