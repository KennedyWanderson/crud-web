import { Card, CardContent, Button, TextField } from "@mui/material";
import React from "react";

function ProductRegister(props) {

    function registerProduct(){

    }

    return (
        <Card>
            <CardContent>
                <div>{props.text}</div>
                <div className={`flex flex-col mt-10`}>
                    <div className={`mb-5`}>
                        <TextField className={`w-7/12 mb-10`} id="outlined-basic" label="Nome" variant="outlined" />
                    </div>
                    <div className={`mb-5`}>
                        <TextField className={`w-7/12`} id="outlined-basic" label="Preço" variant="outlined" />
                    </div>
                    <div className={`mb-5`}>
                        <TextField className={`w-7/12`} id="outlined-basic" label="Categoria" variant="outlined" />
                    </div>
                    <div>
                        <Button className={`w-20`} onClick={() } variant="contained">Salvar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductRegister