import { TextField, Button } from "@mui/material"

interface IProps {

    moveEverything: (goUp: "Access" | "Register" | "ForgotPassword") => void

}

export default function Register ({ moveEverything }: IProps) {

    return (

        <div id="login" className="absolute top-full flex flex-col items-center justify-center gap-5 w-full h-full">

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

            <Button variant="contained">Registrarme</Button>

            <Button variant="text" onClick={() => moveEverything("Access")}>Acceder</Button>

        </div>

    )

}