/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/exploitReduxStore';
import { setVehiculeActivity } from '../store/vehiculeActivitySlice';
import { setDailyActivity } from '../store/dailyActivitySlice';
import { setVehicule } from '../store/vehiculeSlice';

export type VehiculeTypeDTO = {
    vehicule_id: number,
    immatriculation: string,
    modele: string,
    marque: string
};

export type VehivuleActivityTypeDTO = {
    vehicule_activite_id: number,
    vehicule_id: number,
    km_depart: number,
    km_arrive: number,
    km_jour: number
};

export type DailyActivityTypeDTO = {
    activite_jour_id: number,
    vehicule_activite_id: number,
    heure_embauche: string,
    heure_debauche: string,
    duree_pause: string
};

export type ActivityTypeDTO = {
    date_activite: string,
    debut: string,
    fin: string,
    prevue: number,
    distri: number,
    avise: number,
    poste: number,
    relaie: number,
    refuse: number,
    autre: number,
    esd: number,
    reguliere: number,
    km: number,
    tournee_id: number
};

export type TourTypeDTO = {
    tournee_id: number,
    nom_tournee: number,
    code_tournee: string,
    lot_id: string
};

export type LotTypeDTO = {
    lot_id: number,
    nom_lot: string,
    code_client: string,
    code_interne: string,
    debut: string,
    fin: string,
    tarif_id: number
};

export type TarificationTypeDTO = {
    tarif_id: string,
    debut: string,
    fin: string,
    forfait: string,
    prevue: number,
    distri: number,
    avise: number,
    poste: number,
    relaie: number,
    refuse: number,
    autre: number,
    esd: number,
    reguliere: number,
    km: number
};


export function FetchData() {
    const dispatch = useAppDispatch();

    const FetchDailyActivity = async () => {
        let response: any = await fetch('http://localhost:3002/getDailyActivity');
        response = await response.json();
        if (response) {
            dispatch(setDailyActivity(response));
        }
    };
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const FetchVehiculesActivity = async () => {
        let response: any = await fetch('http://localhost:3002/getVehiculesActivity');
        response = await response.json();
        if (response) {
            dispatch(setVehiculeActivity(response));
        }
    };
    
    const FetchVehicules = async () => {
        try {
            let response = await fetch('http://localhost:3002/getVehicules');
            const data: VehiculeTypeDTO[] = await response.json();
            dispatch(setVehicule(data));
        }   catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        FetchVehicules();
    }, []);

    useEffect(() => {
        FetchVehiculesActivity();
    }, []);

    useEffect(() => {
        FetchDailyActivity();
    }, []);

    return (<></>); /*
        <>
            <Paper sx={{
                color: 'yellow',
                width: '80%',
                overflow: 'hidden',
                margin: 'auto',
                marginBottom: '6vh',
            }}
            >
                <TableContainer sx={{ maxHeight: 750 }}>
                <h3>Véhicules</h3>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <strong>Véhicule id</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Immatriculation</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Modèle</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Marque</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>  
                    {
                        vehicule?.map((vehiculeMap: { vehicule_id: number; immatriculation: string; modele: string; marque: string; }) => {
                            const {
                                vehicule_id,
                                immatriculation,
                                marque,
                                modele
                            } = vehiculeMap;
                          return (
                            <TableRow key={vehicule_id} hover role="checkbox">
                                <TableCell>
                                    {vehicule_id}
                                </TableCell>
                                <TableCell>
                                    {immatriculation}
                                </TableCell>
                                <TableCell>
                                    {modele}
                                </TableCell>
                                <TableCell>
                                    {marque}
                                </TableCell>
                            </TableRow>
                          );
                        })
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer sx={{ maxHeight: 750 }}>
                <h3>Activité Journalières</h3>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <strong>activité id</strong>
                            </TableCell>
                            <TableCell>
                                <strong>vehicule activité id</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Heure embauche</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Heure debauche</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Pause</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>  
                    {
                        currentDailyActivity?.map((vehiculeMap: { activite_jour_id: number; vehicule_activite_id: number; heure_embauche: any; heure_debauche: any; duree_pause: any; }) => {
                            const {
                                activite_jour_id,
                                vehicule_activite_id,
                                heure_embauche,
                                heure_debauche,
                                duree_pause
                            } = vehiculeMap;
                          return (
                            <TableRow key={activite_jour_id} hover role="checkbox">
                                <TableCell>
                                    {activite_jour_id}
                                </TableCell>
                                <TableCell>
                                    {vehicule_activite_id}
                                </TableCell>
                                <TableCell>
                                    {heure_embauche}
                                </TableCell>
                                <TableCell>
                                    {heure_debauche}
                                </TableCell>
                                <TableCell>
                                    {duree_pause}
                                </TableCell>
                            </TableRow>
                          );
                        })
                    }
                    </TableBody>
                </Table>
                </TableContainer>
                <TableContainer sx={{ maxHeight: 750 }}>
                <h3>Activité Vehicule</h3>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>Vehicule activité id</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Vehicule id</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>km depart</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>km arrivé</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>km jour</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>  
                        { 
                            vehiculeActivity?.map((vehiculeActivityMap: { vehicule_activite_id: number; vehicule_id: number; km_depart: number; km_arrive: number; km_jour: number; }) => {
                                const {
                                    vehicule_activite_id,
                                    vehicule_id,
                                    km_depart,
                                    km_arrive,
                                    km_jour
                                } = vehiculeActivityMap;
                              return (
                                <TableRow key={vehicule_activite_id} hover role="checkbox">
                                    <TableCell>
                                        {vehicule_activite_id}
                                    </TableCell>
                                    <TableCell>
                                        {vehicule_id}
                                    </TableCell>
                                    <TableCell>
                                        {km_depart}
                                    </TableCell>
                                    <TableCell>
                                        {km_arrive}
                                    </TableCell>
                                    <TableCell>
                                        {km_jour}
                                    </TableCell>
                                </TableRow>
                              );
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            </Paper>
        </>
    ); */
}
