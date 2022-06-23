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

const NewActivityController = () : JSX.Element => {
    const [selectedStep, setSelectedStep] = useState<number>(0);
    
    /* Activité jour */
    const [hourStart, setHourStart] = useState<string>('');
    const [hourEnd, setHourEnd] = useState<string>('');
    const [breakTime, setBreakTime] = useState<number>(0);

    const [immat, setImmat] = useState<string>('');
    const [kmStart, setKmStart] = useState<number>(0);
    const [kmEnd, setKmEnd] = useState<number>(0);
    
    const [codeTournee, setCodeTournee] = useState<string>('');
    const [codeLot, setCodeLot] = useState<string>('');

    const [prevu, setPrevu] = useState<number>(0);
    const [distri, setDistri] = useState<number>(0);
    const [avise, setAvise] = useState<number>(0);
    const [poste, setPoste] = useState<number>(0);
    const [relai, setRelai] = useState<number>(0);
    const [refuse, setRefuse] = useState<number>(0);
    const [autre, setAutre] = useState<number>(0);
    const [esd, setESD] = useState<number>(0);
    const [reguliere, setReguliere] = useState<number>(0);

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

    const handleSetHourStart = (hourStart: string) => {
        setHourStart(hourStart);
        recap.hourstart = hourStart;
    };
    const handleSetHourEnd = (hourEnd: string) => {
        setHourEnd(hourEnd);
        recap.hourend = hourEnd;
    };
    const handleSetBreak = (breakTime: number) => {
        setBreakTime(breakTime);
        recap.breaktime = breakTime;
    };
    /* Vehicule Activité */
    const handleSetImmat = (immat: string) => {
        setImmat(immat);
        recap.immat = immat;
    };
    const handleSetKmStart = (kmStart: number) => {
        setKmStart(kmStart);
        recap.kmstart = kmStart;
    };
    const handleSetKmEnd = (kmEnd: number) => {
        setKmEnd(kmEnd);
        recap.kmend = kmEnd;
    };
    /* Select Code Tournee & lot */
    const handleSetCodeTournee = (codeTournee: string) => {
        setCodeTournee(codeTournee);
        recap.codetournee = codeTournee;
    }
    const handleSetCodeLot = (codeLot: string) => {
        setCodeLot(codeLot);
        recap.codelot = codeLot;
    }
    /* Set Activity Points */
    const handleSetPrevu = (prevu: number) => {
        setPrevu(prevu);
        recap.prevu = prevu;
    }
    const handleSetDistri = (distri: number) => {
        setDistri(distri);
        recap.distri = distri;
    }
    const handleSetAvise = (avise: number) => {
        setAvise(avise);
        recap.avise = avise;
    }
    const handleSetPoste = (poste: number) => {
        setPoste(poste);
        recap.poste = poste;
    }
    const handleSetRelai = (relai: number) => {
        setRelai(relai);
        recap.relai = relai;
    }
    const handleSetRefuse = (refuse: number) => {
        setRefuse(refuse);
        recap.refuse = refuse;
    }
    const handleSetAutre = (autre: number) => {
        setAutre(autre);
        recap.autre = autre;
    }
    const handleSetESD = (esd: number) => {
        setESD(esd);
        recap.esd = esd;
    }
    const handleSetReguliere = (reguliere: number) => {
        setReguliere(reguliere);
        recap.reguliere = reguliere;
    }

    console.log(hourStart, hourEnd, breakTime, immat, kmStart, kmEnd, codeTournee, codeLot, prevu, distri, avise, poste, relai, refuse, autre, esd, reguliere);

    const handleSubmit = () => {
        //dispatch
    }


    const [steps] = useState([
        <ActiviteJour onStartInput={handleSetHourStart} onEndInput={handleSetHourEnd} onBreakInput={handleSetBreak} hourStart={hourStart} hourEnd={hourEnd} breakTime={breakTime} />,
        <VehiculeActivity onImmatInput={handleSetImmat} onKmStartInput={handleSetKmStart} onKmEndInput={handleSetKmEnd} immat={immat} kmStart={kmStart} kmEnd={kmEnd} />,
        <SelectTournee onCodeTourneeInput={handleSetCodeTournee} onCodeLotInput={handleSetCodeLot} codeTournee={codeTournee} codeLot={codeLot} />,
        <SetActivityPoints onPrevuInput={handleSetPrevu} onDistriInput={handleSetDistri} onAviseInput={handleSetAvise} onPosteInput={handleSetPoste} onRelaiInput={handleSetRelai} onRefuseInput={handleSetRefuse} onAutreInput={handleSetAutre} onESDInput={handleSetESD} onReguliereInput={handleSetReguliere} prevu={prevu} distri={distri} avise={avise} poste={poste} relai={relai} refuse={refuse} autre={autre} esd={esd} reguliere={reguliere} />,
        <Summary recap={recap} />
    ]);

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