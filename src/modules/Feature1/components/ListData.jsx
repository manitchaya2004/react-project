import { DataGrid } from "@mui/x-data-grid";
import useMachineData from "../hook/useMachineData";
import { Box, Grid, Typography, Table,TableBody, TableCell, TableContainer,TableHead,TableRow } from "@mui/material";


function ListData() {
  const { machineData} = useMachineData();

  

  return (

        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Health</TableCell>
                  <TableCell>Temperature</TableCell>
                  <TableCell>Vibration</TableCell>
                  <TableCell>PowerUsage</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                { machineData.map((machine) => (
                  <TableRow key={machine.id}>
                    <TableCell>{machine.name}</TableCell>
                    <TableCell>{machine.health}</TableCell>
                    <TableCell>{machine.temperature}</TableCell>
                    <TableCell>{machine.vibration}</TableCell>
                    <TableCell>{machine.powerUsage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography>The table shows detailed information of each machine.</Typography>
        </Box>
  );
}
export default ListData;
