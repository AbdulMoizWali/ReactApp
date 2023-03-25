import { Box, Grid, TextField, Typography } from '@mui/material'
import { height, padding } from '@mui/system'
import SMBox from '../../Components/SMBox'
import SMDropdown from '../../Components/SMDropdown'
import SMRadio from '../../Components/SMRadio'
import SMTextField from '../../Components/SMTextField'

export default function Lab20() {
    return (
        // <Box
        //     sx={{
        //         marginX: "auto",
        //         width: "80%",
        //         height: "100vh",
        //         backgroundColor: "#eeee",
        //     }}
        // >


        // </Box>

        <Grid
            container
            //rowSpacing={10}
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Typography component="h1" >Form</Typography>

            <TextField id="outlined-basic" label="Student Name" variant="outlined" />

            <TextField id="outlined-basic" label="Father Name" variant="outlined" />

            <TextField id="outlined-basic" label="Contact" variant="outlined" />

            <TextField id="outlined-basic" label="CNIC" variant="outlined" />

            <SMDropdown options={["Matric", "Intermediate"]}></SMDropdown>

            <SMDropdown options={["Course 1", "Course 2"]}></SMDropdown>

            <SMTextField disabled={true} label="Institute" />

            <SMDropdown options={["Section 1", "Section 2"]}></SMDropdown>

            <TextField id="outlined-basic" label="Email" variant="outlined" />

            <TextField id="outlined-basic" label="Password" variant="outlined" />

            <SMDropdown options={["City 1", "City 2"]}></SMDropdown>

            <SMDropdown options={["Country 1", "Country 2"]}></SMDropdown>

            <input type="date" label="Date of Birth" />

            <SMRadio options={["Male", "Female"]} />

            <TextField id="outlined-basic" label="Address" variant="outlined" />
        </Grid >

        // <SMBox backgroundColor="#eeee" width="80%" height="100vh" >
        // </SMBox>
    )
}