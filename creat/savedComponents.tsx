import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppDispatch, useAppSelector } from '../../store/exploitReduxStore';
import { setDailyActivity } from '../../store/dailyActivitySlice';

export default function DailyActivityList() {
    const dispatch = useAppDispatch();
    const { dailyActivity } = useAppSelector((state) => state.dailyActivity);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const FetchDailyActivity = async () => {
        let response: any = await fetch('http://localhost:3002/getDailyActivity');
        response = await response.json();
        if (response) {
            dispatch(setDailyActivity(response));
            console.log(response);
        }
    };

    useEffect(() => {
        FetchDailyActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1 className="list_ttl"><strong>Liste des activités du jour</strong></h1>
            <Paper sx={{
                width: '80%',
                overflow: 'hidden',
                margin: 'auto',
                marginBottom: '6vh',
            }}
            >
            <TableContainer sx={{ maxHeight: 750 }}>
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
                        dailyActivity?.map((dailyActivityMap: { activite_jour_id: number; vehicule_activite_id: number; heure_embauche: any; heure_debauche: any; duree_pause: any; }) => {
                            const {
                                activite_jour_id,
                                vehicule_activite_id,
                                heure_embauche,
                                heure_debauche,
                                duree_pause
                            } = dailyActivityMap;
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
            </Paper>
        </>
    );
}


import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppDispatch, useAppSelector } from '../../store/exploitReduxStore';
import { setDailyActivity } from '../../store/dailyActivitySlice';


export default function DailyActivityList() {
    const dispatch = useAppDispatch();
    const { dailyActivity } = useAppSelector((state) => state.dailyActivity);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const FetchDailyActivity = async () => {
        let response: any = await fetch('http://localhost:3002/getDailyActivity');
        response = await response.json();
        if (response) {
            dispatch(setDailyActivity(response));
            console.log(response);
        }
    };

    useEffect(() => {
        FetchDailyActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1 className="list_ttl"><strong>Liste des activités du jour</strong></h1>
            <Paper sx={{
                width: '80%',
                overflow: 'hidden',
                margin: 'auto',
                marginBottom: '6vh',
            }}
            >
            <TableContainer sx={{ maxHeight: 750 }}>
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
                        dailyActivity?.map((dailyActivityMap: { activite_jour_id: number; vehicule_activite_id: number; heure_embauche: any; heure_debauche: any; duree_pause: any; }) => {
                            const {
                                activite_jour_id,
                                vehicule_activite_id,
                                heure_embauche,
                                heure_debauche,
                                duree_pause
                            } = dailyActivityMap;
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
            </Paper>
        </>
    );
}


import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppDispatch, useAppSelector } from '../../store/exploitReduxStore';
import { setVehiculeActivity } from '../../store/vehiculeActivitySlice';

export default function VehiculeActivityList() {
    const dispatch = useAppDispatch();
    const { vehiculeActivity } = useAppSelector((state) => state.vehiculeActivity);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const FetchVehiculesActivity = async () => {
        let response: any = await fetch('http://localhost:3002/getVehiculesActivity');
        response = await response.json();
        if (response) {
            dispatch(setVehiculeActivity(response));
            console.log(response);
        }
    };

    useEffect(() => {
        FetchVehiculesActivity();
    }, []);

    return (
        <>
            <h1 className="list_ttl"><strong>Liste des activités vehicules</strong></h1>
            <Paper sx={{
                width: '80%',
                overflow: 'hidden',
                margin: 'auto',
                marginBottom: '6vh',
            }}
            >
            <TableContainer sx={{ maxHeight: 750 }}>
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
    );
}