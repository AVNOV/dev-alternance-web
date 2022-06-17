import { Button, ButtonGroup } from "@mui/material";
import { Fragment } from "react";
import './Activite.css';


interface FormNavigationProps {
    onNext: () => void,
    onPrev: () => void,
};

function FormNavigation(props: FormNavigationProps) : JSX.Element{

    function handleNavigateNext() {
        props.onNext();
    }

    function handleNavigatePrev() {
        props.onPrev();
    }

    return (
        <Fragment>
            <Fragment>
                <ButtonGroup className="fullWidth" sx={{ position: "fixed", bottom: 50 }} aria-label="text button group">
                    <div className="align-self-center">
                        <Button sx={{ borderRadius: 5, backgroundColor: 'green', mr: 5 }} onClick={handleNavigatePrev}>{"<-"}</Button>
                        <Button sx={{ borderRadius: 5, backgroundColor: 'green'}} onClick={handleNavigateNext}>{"->"}</Button>
                    </div>
                </ButtonGroup>
            </Fragment>
        </Fragment>
    );
}

export default FormNavigation;