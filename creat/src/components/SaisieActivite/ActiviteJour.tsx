import { useAppSelector } from "../../store/exploitReduxStore";
import { selectVehiculeActivity } from "../../store/vehiculeActivitySlice";
import SelectImmatriculation from "../SelectImmatriculation";
import TableList from "../TableLists";
import ModularClippedDrawer from "../Template/ModularClippedDrawer";
import './Activite.css';

function ActiviteJour() {
    const vehiculeActivity = useAppSelector(selectVehiculeActivity);
    
    return (
        <>
            <ModularClippedDrawer />
            <div>
                <label className="time">Heure d'embauche :</label>
                <input className="time" type="datetime-local" />
            </div>
            <br />
            <div>
                <label className="time">Heure de débauche :</label>
                <input className="time" type="datetime-local" />
            </div>
            <br />
            <div>
                <label className="time">Temps de pause :</label>
                <input className="time" type="number" />
            </div>
        </>
    );
}

export default ActiviteJour;