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

    /* Daily Activity */
    const handleSetHourStart = (hourstart: string) => {
        setFormData({...formData, hourstart});
    };
    const handleSetHourEnd = (hourend: string) => {
        setFormData({...formData, hourend});
    };
    const handleSetBreak = (breaktime: number) => {
        setFormData({...formData, breaktime});
    };

    /* Set Vehicule Activity */
    const handleSetImmat = (immat: string) => {
        setFormData({...formData, immat:immat});
    };
    const handleSetKmStart = (kmstart: string) => {
        setFormData({...formData, kmstart});
    };
    const handleSetKmEnd = (kmend: string) => {
        setFormData({...formData, kmend});
    };

    /* Select Code Tournee & lot */
    const handleSetCodeTournee = (codetournee: string) => {
        setFormData({...formData, codetournee});
    }
    const handleSetCodeLot = (codelot: string) => {
        setFormData({...formData, codelot});
    }

    /* Set Activity Points */
    const handleSetPrevu = (prevu: number) => {
        setFormData({...formData, prevu});
    }
    const handleSetDistri = (distri: number) => {
        setFormData({...formData, distri});
    }
    const handleSetAvise = (avise: number) => {
        setFormData({...formData, avise});
    }
    const handleSetPoste = (poste: number) => {
        setFormData({...formData, poste});
    }
    const handleSetRelai = (relai: number) => {
        setFormData({...formData, relai});
    }
    const handleSetRefuse = (refuse: number) => {
        setFormData({...formData, refuse});
    }
    const handleSetAutre = (autre: number) => {
        setFormData({...formData, autre});
    }
    const handleSetESD = (esd: number) => {
        setFormData({...formData, esd});
    }
    const handleSetReguliere = (reguliere: number) => {
        setFormData({...formData, reguliere});
    }
    
    console.log('FormData => ', formData);

    const steps = [
        <ActiviteJour onStartInput={handleSetHourStart} onEndInput={handleSetHourEnd} onBreakInput={handleSetBreak} hourStart={formData.hourstart} hourEnd={formData.hourend} breakTime={formData.breaktime} />,
    
        <VehiculeActivity onImmatInput={handleSetImmat} onKmStartInput={handleSetKmStart} onKmEndInput={handleSetKmEnd} immat={formData.immat} kmStart={formData.kmstart} kmEnd={formData.kmend} />,
    
        <SelectTournee onCodeTourneeInput={handleSetCodeTournee} onCodeLotInput={handleSetCodeLot} codeTournee={formData.codetournee} codeLot={formData.codelot} />,
    
        <SetActivityPoints onPrevuInput={handleSetPrevu} onDistriInput={handleSetDistri} onAviseInput={handleSetAvise} onPosteInput={handleSetPoste} onRelaiInput={handleSetRelai} onRefuseInput={handleSetRefuse} onAutreInput={handleSetAutre} onESDInput={handleSetESD} onReguliereInput={handleSetReguliere} prevu={formData.prevu} distri={formData.distri} avise={formData.avise} poste={formData.poste} relai={formData.relai} refuse={formData.refuse} autre={formData.autre} esd={formData.esd} reguliere={formData.reguliere} />,
    
        <Summary recap={formData} />
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