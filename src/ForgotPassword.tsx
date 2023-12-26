import { TextField, Button } from "@mui/material"

interface IProps {

    moveEverything: (goUp: "Access" | "Register" | "ForgotPassword") => void

}

export default function ForgotPassword ({ moveEverything }: IProps) {

    return (

        <div id="login" className="absolute -top-full flex flex-col items-center justify-center gap-5 w-full h-full">

            <TextField

                id="input-email"

                label="Correo"

                variant="standard"

            />

            <Button variant="contained">Recuperar contraseña</Button>

            <Button variant="text" onClick={() => moveEverything("Access")}>Acceder</Button>

        </div>

    )

}