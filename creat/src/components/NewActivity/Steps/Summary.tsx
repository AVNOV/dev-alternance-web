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
        kmstart: number,
        kmend: number,
    
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

function Summary(props: SummaryProps) : JSX.Element {

    console.log(props.recap);
    console.log(props.recap.hourstart, props.recap.hourend, props.recap.breaktime, props.recap.immat, props.recap.kmstart, props.recap.kmend, props.recap.codetournee, props.recap.codelot, props.recap.prevu, props.recap.distri, props.recap.avise, props.recap.poste, props.recap.relai, props.recap.refuse, props.recap.autre, props.recap.esd, props.recap.reguliere);

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
                        <Typography variant="body1" display="block" >{props.recap.hourstart}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.hourend}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.breaktime}</Typography>
                        <Typography variant="body1" display="block" >{props.recap.immat}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.kmstart}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.kmend}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.codetournee}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.codelot}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.prevu}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.distri}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.avise}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.poste}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.relai}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.refuse}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.autre}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.esd}</Typography>
                    </ItemRecap>
                    <ItemRecap>
                        <Typography variant="body1" display="block" >{props.recap.reguliere}</Typography>
                    </ItemRecap>
                </Box>
            </Grid>
        </div>
    );
}

export default Summary;