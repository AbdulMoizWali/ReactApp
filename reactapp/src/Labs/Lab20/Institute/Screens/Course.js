import { Card, InputAdornment, TextField } from "@mui/material";
import SMTextField from "../../../../Components/SMTextField";

export default function Course() {
    return <>

        <h1>Course</h1>
        <Card
            variant="outlined"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)', px: '30px', py: '60px' }}
        >
            <h2>Course Name</h2>
            <p>Duration</p>
            <SMTextField label="Duration" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }} InputProps={{
                endAdornment: <InputAdornment position="start">Hrs</InputAdornment>,
            }} />
            <TextField
                label="Duration"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">Hrs</InputAdornment>,
                }}
                value="10"
            />
        </Card>
    </>
}