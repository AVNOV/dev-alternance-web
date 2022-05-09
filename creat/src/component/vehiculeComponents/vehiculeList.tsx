import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppDispatch, useAppSelector } from '../../store/vehiculeStore';
import { setVehicule } from '../../store/vehiculeSlice';

export default function VehiculeList() {
    const dispatch = useAppDispatch();
    const { vehicule } = useAppSelector((state) => state.vehicule);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const Fetchvehicules = async () => {
        let response: any = await fetch('http://localhost:3002/getVehicules');
        response = await response.json();
        if (response) {
            dispatch(setVehicule(response));
            console.log(response);
        }
    };

    useEffect(() => {
        Fetchvehicules();
    }, [Fetchvehicules]);

    return (
        <>
            <h1 className="list_ttl"><strong>Liste des vehicules</strong></h1>
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
                                Immatriculation
                            </TableCell>
                            <TableCell>
                                Marque
                            </TableCell>
                            <TableCell>
                                Modele
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>  
                    { 
                        vehicule?.map((vehiculeMap: { immatriculation: string; modele: string; marque: string;  }) => {
                            const {
                                immatriculation,
                                modele,
                                marque
                            } = vehiculeMap;
                          return (
                            <TableRow hover role="checkbox">
                                <TableCell>
                                    <strong>{immatriculation}</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>{marque}</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>{modele}</strong>
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
