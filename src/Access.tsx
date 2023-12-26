import { TextField, Button } from "@mui/material"

interface IProps {

    moveEverything: (goUp: "Access" | "Register" | "ForgotPassword") => void

}

export default function Access ({ moveEverything }: IProps) {

    return (

        <div id="login" 
        
            className="absolute flex flex-col items-center justify-center gap-5 w-full h-full"
        
        >

            <TextField

                id="input-email"

                label="Correo"

                variant="standard"

            />

            <TextField

                id="input-password"

                label="Contraseña"

                type="password"

                autoComplete="current-password"

                variant="standard"

            />

            <Button variant="contained">Acceder</Button>

            <Button variant="text" onClick={() => moveEverything("Register")}>Registrarme</Button>

            <Button variant="text" onClick={() => moveEverything("ForgotPassword")}>Olvidé mi contraseña</Button>

        </div>

    )

}