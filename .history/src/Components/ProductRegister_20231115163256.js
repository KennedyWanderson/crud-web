import { Card, CardContent, Button, TextField } from "@mui/material";
import React from "react";

function ProductRegister(props) {
    return (
        <Card>
            <CardContent>
                <div>{props.text}</div>
                <div className={`flex flex-col mt-10`}>
                    <div cla>
                        <TextField className={`w-7/12 mb-10`} id="outlined-basic" label="Nome" variant="outlined" />

                    </div>
                    <div>
                        <TextField className={`w-7/12`} id="outlined-basic" label="Preço" variant="outlined" />

                    </div>
                    <div>
                        <TextField className={`w-7/12`} id="outlined-basic" label="Categoria" variant="outlined" />

                    </div>
                    <div>
                        <Button className={`w-20`} variant="contained">Salvar</Button>

                    </div>
                </div>
            </CardContent>

        </Card>
    )
}

export default ProductRegister