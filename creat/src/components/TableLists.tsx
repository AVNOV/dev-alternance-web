/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppDispatch, useAppSelector } from '../store/exploitReduxStore';
import { setVehiculeActivity } from '../store/vehiculeActivitySlice';
import { setDailyActivity } from '../store/dailyActivitySlice';
import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { setVehicule } from '../store/vehiculeSlice';

export default function TableList() {
    return (
        <div>
            <DailyActivityList />
        </div>
    )
}

export function DailyActivityList() {
    const dispatch = useAppDispatch();
    const { dailyActivity } = useAppSelector((state) => state.dailyActivity);
    const { vehiculeActivity } = useAppSelector((state) => state.vehiculeActivity);
    const { vehicule } = useAppSelector((state) => state.vehicule);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        let response: any = await fetch('http://localhost:3002/getVehicules');
        response = await response.json();
        if (response) {
        }
    };
    useEffect(() => {
            console.log("Info Vehicule:" + JSON.stringify(vehicule));
            FetchVehicules();
    }, []);

    useEffect(() => {
        FetchVehiculesActivity();
    }, []);

    useEffect(() => {
        FetchDailyActivity();
    }, []);

    return (
        <>
            <Paper sx={{
                width: '80%',
                overflow: 'hidden',
                margin: 'auto',
                marginBottom: '6vh',
            }}
            >
            <TableContainer sx={{ maxHeight: 750 }}>
                <h3 color='orange'>Activité Journalières</h3>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <strong>activité id</strong>
                            </TableCell>
                            <TableCell>
                                <p>test</p>
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
                        dailyActivity?.map((vehiculeMap: { activite_jour_id: number; vehicule_activite_id: number; heure_embauche: any; heure_debauche: any; duree_pause: any; }) => {
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
                <h3 color='orange'>Activité Vehicule</h3>
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
            <TableContainer sx={{ maxHeight: 750 }}>
                <h3 color='orange'>Véhicules</h3>
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
                                <strong>Marque</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Modèle</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>  
                    {
                        vehicule?.map((vehiculeMap: { vehicule_id: number; immatriculation: string; marque: string; modele: string;}) => {
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
                                    {marque}
                                </TableCell>
                                <TableCell>
                                    {modele}
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
    );
}
