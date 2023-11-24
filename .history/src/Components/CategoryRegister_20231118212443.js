import { Card, CardContent, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function CategoryRegister(props){


    const [name, setName] = useState("")

    function registerCategory(){
        fetch("https://di1vlxhcf8.execute-api.us-east-1.amazonaws.com/create-category", {
            "name": name
        }).then(r => {
            alert("Categoria cadastrada com sucesso!")
        })
    }

    return (
        <Card>
        <CardContent>
            <div>{props.text}</div>
            <div className={`flex flex-col mt-10`}>
                <div className={`mb-5`}>
                    <TextField value={name} onChange={(e) => {setName(e.target.value)}} className={`w-7/12 mb-10`} id="outlined-basic" label="Nome" variant="outlined" />
                </div>
                <div>
                    <Button className={`w-20`} onClick={registerCategory()} variant="contained">Salvar</Button>
                </div>
            </div>
        </CardContent>
    </Card>
    )
}

export default CategoryRegister