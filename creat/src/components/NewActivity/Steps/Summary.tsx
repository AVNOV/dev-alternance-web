import { Box, BoxProps, Grid, Typography } from "@mui/material";

export function ItemRecap(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: 'white',
                color: 'black',
                p: 1,
                m: 1,
                minWidth: 45,
                borderRadius: 2,
                fontSize: '0.750rem',
                fontWeight: '500',
                ...sx,
            }}
            {...other}
        />
    );
}

interface SummaryProps {
    recap: {
        hourstart: string,
        hourend: string,
        breaktime: number,
        
        immat: string,
        kmstart: string,
        kmend: string,
    
        codetournee: string,
        codelot: string,
    
        prevu: number,
        distri: number,
        avise: number,
        poste: number,
        relai: number,
        refuse: number,
        autre: number,
        esd: number,
        reguliere: number
    },
};

function Summary(
    {
        recap
    }: SummaryProps) : JSX.Element {

    console.log('Big Recap' + recap);
    console.log('Deconstruct Recap' + recap.hourstart, recap.hourend, recap.breaktime, recap.immat, recap.kmstart, recap.kmend, recap.codetournee, recap.codelot, recap.prevu, recap.distri, recap.avise, recap.poste, recap.relai, recap.refuse, recap.autre, recap.esd, recap.reguliere);

    return (
        <div>
            <Grid container justifyContent={"center"}>
                <Box>
                    <Typography variant="button" display="block" ><strong><u>Récapitulatif des saisies du formulaire</u></strong></Typography>
                </Box>
            </Grid>
            <Grid container justifyContent={"center"}>

                <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.hourstart}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.hourend}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.breaktime}</Typography>
                        <Typography variant="body1" display="block" >{recap.immat}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.kmstart}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.kmend}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.codetournee}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.codelot}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.prevu}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.distri}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.avise}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.poste}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.relai}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.refuse}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.autre}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.esd}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{recap.reguliere}</Typography>
                    </ItemRecap>
                </Box>
            </Grid>
        </div>
    );
}

export default Summary;