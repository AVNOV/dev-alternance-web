import { Box, Button, Card, Grid, Typography } from "@mui/material";

interface SummaryProps {
    hourStart: string,
    hourEnd: string,
    breakTime: string,

    immat: string,
    kmStart: string,
    kmEnd: string,

    codeTournee: string,
    codeLot: string,

    prevu: string,
    distri: string,
    avise: string,
    poste: string,
    relai: string,
    refuse: string,
    autre: string,
    esd: string,
    reguliere: string
};

function Summary(props: SummaryProps) : JSX.Element {
    return (
        <div>
            <Grid container justifyContent={"center"}>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                    <Button>{props.hourStart}</Button>
                    <Typography variant="overline" display="block" >{+props?.hourStart}</Typography>
                    <Typography variant="overline" display="block" >{+props?.hourEnd}</Typography>
                    <Typography variant="overline" display="block" >{+props?.breakTime}</Typography>

                    

                    <Typography variant="overline" display="block" >{+props.immat}</Typography>
                    <Typography variant="overline" display="block" >{+props.kmStart}</Typography>
                    <Typography variant="overline" display="block" >{+props.kmEnd}</Typography>

                    <Typography variant="overline" display="block" >{+props.codeTournee}</Typography>
                    <Typography variant="overline" display="block" >{+props.codeLot}</Typography>

                    <Typography variant="overline" display="block" >{+props.prevu}</Typography>
                    <Typography variant="overline" display="block" >{+props.distri}</Typography>
                    <Typography variant="overline" display="block" >{+props.avise}</Typography>
                    <Typography variant="overline" display="block" >{+props.poste}</Typography>
                    <Typography variant="overline" display="block" >{+props.relai}</Typography>
                    <Typography variant="overline" display="block" >{+props.refuse}</Typography>
                    <Typography variant="overline" display="block" >{+props.autre}</Typography>
                    <Typography variant="overline" display="block" >{+props.esd}</Typography>
                    <Typography variant="overline" display="block" >{+props.reguliere}</Typography>
                </Box>
            </Grid>
        </div>
    );
}

export default Summary;