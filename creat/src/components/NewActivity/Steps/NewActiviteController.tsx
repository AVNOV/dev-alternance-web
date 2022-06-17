import React, { useState} from 'react';
import ActiviteJour from './ActiviteJour';
import FormNavigation from '../FormNavigation';
import VehiculeActivity from './VehiculeActivity';
import SelectTournee from './SelectTournee';
import SetActivityPoints from './SetActivityPoints';
import Summary from './Summary';

const NewActivityController = (): JSX.Element => {
    const [selectedStep, setSelectedStep] = useState<number>(0);

    /* Activité jour */
    const [hourStart, setHourStart] = useState<string>('');
    const [hourEnd, setHourEnd] = useState<string>('');
    const [breakTime, setBreakTime] = useState<string>('');

    const handleSetHourStart = (hourStart: string) => {
        setHourStart(hourStart);
    };
    const handleSetHourEnd = (hourEnd: string) => {
        setHourEnd(hourEnd);
    };
    const handleSetBreak = (breakTime: string) => {
        setBreakTime(breakTime);
    };

    /* Vehicule Activité */
    const [immat, setImmat] = useState<string>('');
    const [kmStart, setKmStart] = useState<string>('');
    const [kmEnd, setKmEnd] = useState<string>('');

    const handleSetImmat = (immat: string) => {
        setImmat(immat);
    };
    const handleSetKmStart = (kmStart: string) => {
        setKmStart(kmStart);
    };
    const handleSetKmEnd = (kmEnd: string) => {
        setKmEnd(kmEnd);
    };

    /* Select Code Tournee 1 lot */
    const [codeTournee, setCodeTournee] = useState<string>('');
    const [codeLot, setCodeLot] = useState<string>('');

    const handleSetCodeTournee = (codeTournee: string) => {
        setCodeTournee(codeTournee);
    }
    const handleSetCodeLot = (codeLot: string) => {
        setCodeLot(codeLot);
    }

    /* Set Activity Points */
    const [prevu, setPrevu] = useState<string>('');
    const [distri, setDistri] = useState<string>('');
    const [avise, setAvise] = useState<string>('');
    const [poste, setPoste] = useState<string>('');
    const [relai, setRelai] = useState<string>('');
    const [refuse, setRefuse] = useState<string>('');
    const [autre, setAutre] = useState<string>('');
    const [esd, setESD] = useState<string>('');
    const [reguliere, setReguliere] = useState<string>('');

    const handleSetPrevu = (prevu: string) => {
        setPrevu(prevu);
    }
    const handleSetDistri = (distri: string) => {
        setDistri(distri);
    }
    const handleSetAvise = (avise: string) => {
        setAvise(avise);
    }
    const handleSetPoste = (poste: string) => {
        setPoste(poste);
    }
    const handleSetRelai = (relai: string) => {
        setRelai(relai);
    }
    const handleSetRefuse = (refuse: string) => {
        setRefuse(refuse);
    }
    const handleSetAutre = (autre: string) => {
        setAutre(autre);
    }
    const handleSetESD = (esd: string) => {
        setESD(esd);
    }
    const handleSetReguliere = (reguliere: string) => {
        setReguliere(reguliere);
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
        <Summary hourStart={hourStart} hourEnd={hourEnd} breakTime={breakTime} immat={immat} kmStart={kmStart} kmEnd={kmEnd} codeTournee={codeTournee} codeLot={codeLot} prevu={prevu} distri={distri} avise={avise} poste={poste} relai={relai} refuse={refuse} autre={autre} esd={esd} reguliere={reguliere} />
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