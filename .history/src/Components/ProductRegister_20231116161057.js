import { Card, CardContent, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function ProductRegister(props) {

    const [name, setName] = useState("")
    const [price, set] = useState("")
    const [name, setName] = useState("")

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
                        <Button className={`w-20`} onClick={() => {registerProduct()}} variant="contained">Salvar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductRegister