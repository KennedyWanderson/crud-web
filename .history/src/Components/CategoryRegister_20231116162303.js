import { Card, CardContent, Button, TextField } from "@mui/material";
import React from "react";
import axios from "axios";

function CategoryRegister(props){


    const [name, setName] = useState("")

    function registerProduct(){
        axios.post("https://di1vlxhcf8.execute-api.us-east-1.amazonaws.com/create-category", {
            "name": name
        }).then(r => {
            alert("Categoria cadastrado com sucesso!")
        })
    }

    return (
        <Card>
        <CardContent>
            <div>{props.text}</div>
            <div className={`flex flex-col mt-10`}>
                <div className={`mb-5`}>
                    <TextField value={name} onClick={(e) => {setNamee.target.value}} className={`w-7/12 mb-10`} id="outlined-basic" label="Nome" variant="outlined" />
                </div>
                <div>
                    <Button className={`w-20`} variant="contained">Salvar</Button>
                </div>
            </div>
        </CardContent>
    </Card>
    )
}

export default CategoryRegister