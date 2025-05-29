import { Grid, Skeleton } from "@mui/material";
import ListData from "../modules/Feature1/components/ListData";
import Charts from "../modules/Feature1/components/chart";
import Cards from "../modules/Feature1/components/Card";
function Dashboard() {
  return (
    <div className="Dashboard">
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, md: 8 }}>
          <Cards />
        </Grid>
        {/* <Grid size={{ xs: 12, md: 4 }}>
            <Skeleton></Skeleton>
        </Grid> */}

       <Grid size={{ xs: 12, md: 8 , xl: 6}}>
            <Charts />
          </Grid>
          <Grid size={{ xs: 12, md: 4, xl: 6 }}>
            {/* <Skeleton variant="rectangular" width="100%" height="100%"></Skeleton> */}
            <ListData />
          </Grid>

        {/* ห้ามลบด้านล่างง */}
        <Grid size={5} />
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
