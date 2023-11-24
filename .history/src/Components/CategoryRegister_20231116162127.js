import { Card, CardContent, Button, TextField } from "@mui/material";
import React from "react";

function CategoryRegister(props){


    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    function registerProduct(){
        axios.post("https://di1vlxhcf8.execute-api.us-east-1.amazonaws.com/create-products", {
            "name": name,
            "price": price,
            "category": category
        }).then(r => {
            alert("Produto cadastrado com sucesso!")
        })
    }

    return (
        <Card>
        <CardContent>
            <div>{props.text}</div>
            <div className={`flex flex-col mt-10`}>
                <div className={`mb-5`}>
                    <TextField className={`w-7/12 mb-10`} id="outlined-basic" label="Nome" variant="outlined" />
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