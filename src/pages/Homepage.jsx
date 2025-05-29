import { Grid ,Skeleton } from "@mui/material";
import ListData from "../modules/Feature1/components/ListData";

function Homepage() {
    return (
        <>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Skeleton height={500} />
            </Grid>
          </Grid>
        </>
    )
}
export default Homepage;