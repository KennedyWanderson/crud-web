import { Card, CardContent, Button, TextField } from "@mui/material";
import React from "react";

function ProductRegister(props) {
    return (
        <Card>
            <CardContent>
                <div>{props.text}</div>
                <div className={`flex flex-col mt-10`}>
                    <div>
                    <TextField className={`w-7/12 mb-10`} id="outlined-basic" label="Nome" variant="outlined" />

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                        <TextField className={`w-7/12`} id="outlined-basic" label="Categoria" variant="outlined" />           
                        <Button className={`w-20`} variant="contained">Salvar</Button>           
                </div>
            </CardContent>

        </Card>
    )
}

export default ProductRegister