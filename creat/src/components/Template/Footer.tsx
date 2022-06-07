import { Button, ButtonGroup } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import '../SaisieActivite/Activite.css';


const RouteList: {[key: number]: string} = {
    1: '/dailyActivity',
    2: '/vehiculeActivity',
    3: '/selectTournee',
    4: '/setActivityPoints',
    5: '/recap'
};

let indicator = 1;

function FooterNav() : JSX.Element{
    const navigate = useNavigate();

    const nav = [
        { symbol: '<'},
        { symbol: '>' }
    ];

    function handleNavigateNext() {
        if (indicator <= 4) {
            ++indicator;
        }
        navigate(RouteList[indicator]);
    }

    function handleNavigatePrev() {
        if (indicator >= 2) {
            --indicator;
        }
        navigate(RouteList[indicator]);
    }

    return (
        <Fragment>
            <Fragment>
                <ButtonGroup className="fullWidth" sx={{ position: "fixed", bottom: 50 }} aria-label="text button group">
                    <div className="align-self-center">
                        <Button sx={{ borderRadius: 5, backgroundColor: 'green', mr: 5 }} onClick={handleNavigatePrev}>{nav[0].symbol}</Button>
                        <Button sx={{ borderRadius: 5, backgroundColor: 'green'}} onClick={handleNavigateNext}>{nav[1].symbol}</Button>
                    </div>
                </ButtonGroup>
            </Fragment>
        </Fragment>
    );
}

export default FooterNav;