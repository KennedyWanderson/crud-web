import { Card, CardContent, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function ProductRegister(props) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    function registerProduct(){
        axios.post("https://di1vlxhcf8.execute-api.us-east-1.amazonaws.com/create-products"), {
            "name": name,
            price
        }
    }

    return (
        <Card>
            <CardContent>
                <div>{props.text}</div>
                <div className={`flex flex-col mt-10`}>
                    <div className={`mb-5`}>
                        <TextField value={name} onChange={(e) => { setName(e.target.value) }} className={`w-7/12 mb-10`} id="outlined-basic" label="Nome" variant="outlined" />
                    </div>
                    <div className={`mb-5`}>
                        <TextField value={price} onChange={(e) => { setPrice(e.target.value) }} className={`w-7/12`} id="outlined-basic" label="Preço" variant="outlined" />
                    </div>
                    <div className={`mb-5`}>
                        <TextField value={category} onChange={(e) => { setCategory(e.target.value) }} className={`w-7/12`} id="outlined-basic" label="Categoria" variant="outlined" />
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