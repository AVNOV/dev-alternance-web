import { useState } from 'react';
import ActiviteJour from './ActiviteJour';
import FormNavigation from '../FormNavigation';
import VehiculeActivity from './VehiculeActivity';
import SelectTournee from './SelectTournee';
import SetActivityPoints from './SetActivityPoints';
import Summary from './Summary';
import { Box, BoxProps } from '@mui/material';

export function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: 'white',
                color: 'black',
                p: 1,
                m: 1,
                pl: 1,
                minWidth: 45,
                mr: 2,
                borderRadius: 2,
                fontSize: '0.750rem',
                fontWeight: '500',
                ...sx,
            }}
            {...other}
        />
    );
}

const NewActivityController = () : JSX.Element => {
    const [selectedStep, setSelectedStep] = useState<number>(0);

    type FormRecap = {
        hourstart: string,
        hourend: string,
        breaktime: number,

        immat: string,
        kmstart: string,
        kmend: string,

        selectedCodeTournee: string,
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
    };

    const [formData, setFormData] = useState<FormRecap>({
        hourstart: '',
        hourend: '',
        breaktime: 0,

        immat: '',
        kmstart: '',
        kmend: '',

        selectedCodeTournee: '',
        codetournee: '',
        codelot: '',

        prevu: 0,
        distri: 0,
        avise: 0,
        poste: 0,
        relai: 0,
        refuse: 0,
        autre: 0,
        esd: 0,
        reguliere: 0
    });

    const recap = { 
        hourstart: '',
        hourend: '',
        breaktime: 0,

        immat: '',
        kmstart: 0,
        kmend: 0,

        codetournee: '',
        codelot: '',
    
        prevu: 0,
        distri: 0,
        avise: 0,
        poste: 0,
        relai: 0,
        refuse: 0,
        autre: 0,
        esd: 0,
        reguliere: 0
    };

    /* Daily Activity */
    const handleSetHourStart = (hourStart: string) => {
        setFormData({...formData, hourstart:hourStart});
    };
    const handleSetHourEnd = (hourEnd: string) => {
        setFormData({...formData, hourend:hourEnd});
    };
    const handleSetBreak = (breakTime: number) => {
        setFormData({...formData, breaktime:breakTime});
    };

    /* Set Vehicule Activity */
    const handleSetImmat = (immat: string) => {
        setFormData({...formData, immat:immat});
    };
    const handleSetKmStart = (kmStart: string) => {
        setFormData({...formData, kmstart:kmStart});
    };
    const handleSetKmEnd = (kmEnd: string) => {
        setFormData({...formData, kmend:kmEnd});
    };

    /* Select Code Tournee & lot */
    const handleSetCodeTournee = (codeTournee: string) => {
        setFormData({...formData, codetournee:codeTournee});
    }
    const handleSetCodeLot = (codeLot: string) => {
        setFormData({...formData, codelot:codeLot});
    }

    /* Set Activity Points */
    const handleSetPrevu = (prevuPts: number) => {
        setFormData({...formData, prevu:prevuPts});
    }
    const handleSetDistri = (distriPts: number) => {
        setFormData({...formData, distri:distriPts});
    }
    const handleSetAvise = (avisePts: number) => {
        setFormData({...formData, avise:avisePts});
    }
    const handleSetPoste = (postePts: number) => {
        setFormData({...formData, poste:postePts});
    }
    const handleSetRelai = (relaiPts: number) => {
        setFormData({...formData, relai:relaiPts});
    }
    const handleSetRefuse = (refusePts: number) => {
        setFormData({...formData, refuse:refusePts});
    }
    const handleSetAutre = (autrePts: number) => {
        setFormData({...formData, autre:autrePts});
    }
    const handleSetESD = (esdPts: number) => {
        setFormData({...formData, esd:esdPts});
    }
    const handleSetReguliere = (regulierePts: number) => {
        setFormData({...formData, reguliere:regulierePts});
    }
    const handleSelectCodeTournee = (selectedCodeTournee: string) => {
        setFormData({...formData, selectedCodeTournee});
    }
    
    const handleSubmit = () => {
        //dispatch
    }


    const steps = [
        <ActiviteJour onStartInput={handleSetHourStart} onEndInput={handleSetHourEnd} onBreakInput={handleSetBreak} hourStart={formData.hourstart} hourEnd={formData.hourend} breakTime={formData.breaktime} />,
    
        <VehiculeActivity onImmatInput={handleSetImmat} onKmStartInput={handleSetKmStart} onKmEndInput={handleSetKmEnd} immat={formData.immat} kmStart={formData.kmstart} kmEnd={formData.kmend} />,
    
        <SelectTournee onCodeTourneeSelect={handleSelectCodeTournee} selectedCodetournee={formData.selectedCodeTournee} onCodeTourneeInput={handleSetCodeTournee} onCodeLotInput={handleSetCodeLot} codeTournee={formData.codetournee} codeLot={formData.codelot} />,
    
        <SetActivityPoints onPrevuInput={handleSetPrevu} onDistriInput={handleSetDistri} onAviseInput={handleSetAvise} onPosteInput={handleSetPoste} onRelaiInput={handleSetRelai} onRefuseInput={handleSetRefuse} onAutreInput={handleSetAutre} onESDInput={handleSetESD} onReguliereInput={handleSetReguliere} prevu={formData.prevu} distri={formData.distri} avise={formData.avise} poste={formData.poste} relai={formData.relai} refuse={formData.refuse} autre={formData.autre} esd={formData.esd} reguliere={formData.reguliere} />,
    
        <Summary recap={recap} />
    ];

    const handleNextStep = () => {
        if ((selectedStep + 1)  >= steps.length)
            return;
        setSelectedStep(selectedStep + 1);
    }

    const handlePreviousStep = () => {
        if (selectedStep <= 0)
            return;
        setSelectedStep(selectedStep - 1);
    }

    console.log();

    return (
        <div className='head-div'>
            <div className='on-step-div'>
                {steps[selectedStep]}
            </div>
            <FormNavigation onNext={handleNextStep} onPrev={handlePreviousStep} />
        </div>
        );
};

export default NewActivityController;