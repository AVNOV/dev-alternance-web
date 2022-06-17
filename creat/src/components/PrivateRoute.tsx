import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/exploitReduxStore";

interface SecuredProps {
    children: any;
}

const PrivateRoute: FC<SecuredProps> = (props) => {
//    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const isAuthenticated = true;
    useEffect(() => {
        setIsLoading(false);
    }, [isLoading, isAuthenticated]);

    return (
        <>
            {!isLoading ? (
                isAuthenticated ? (
                    props.children
                ) : (
                    <Navigate to={"/forbidden"} />
                )
            ) : (
                <div>Loading</div>
            )}
        </>
    );
};
export default PrivateRoute;