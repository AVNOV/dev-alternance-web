import React from 'react';
import axios from 'axios';

export default class VehiculeAdd extends React.Component {
    state = {
        immatriculation: '',
        marque: '',
        modele: ''
    }

    handleChangeImmatriculation = evt => {
        this.setState({ immatriculation: evt.target.value });
    }
    handleChangeMarque = evt => {
        this.setState({ marque: evt.target.value });
    }
    handleChangeModele = evt => {
        this.setState({ modele: evt.target.value });
    }
    handleSubmit = evt => {
        evt.preventDefault();

        const vehicule = {
            immatriculation: this.state.immatriculation,
            marque: this.state.marque,
            modele: this.state.modele
        };

        axios.post(`http://localhost:3002/getVehicules`, { vehicule })
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Immatriculation:
                        <input type="text" name="immatriculation" onChange={this.handleChangeImmatriculation} />
                    </label>
                    <label>
                        Marque:
                        <input type="text" name="marque" onChange={this.handleChangeMarque} />
                    </label>
                    <label>
                        Modèle:
                        <input type="text" name="modele" onChange={this.handleChangeModele} />
                    </label>
                    <button type="submit">Ajouter vehicule</button>
                </form>
            </div>
        )
    }
}