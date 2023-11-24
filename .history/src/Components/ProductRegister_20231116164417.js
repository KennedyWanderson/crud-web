import { Card, CardContent, Button, TextField, FormControl,InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function ProductRegister(props) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [categoriesoptions, setCategoriesoptions] = useState("")

    useEffect(() => {
        axios.get("https://di1vlxhcf8.execute-api.us-east-1.amazonaws.com/list-category").then(
            r => {
                setRows(r.data.response)
            }
        )
    }, [])

    function registerProduct() {
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
                        <TextField value={name} onChange={(e) => { setName(e.target.value) }} className={`w-7/12 mb-10`} id="outlined-basic" label="Nome" variant="outlined" />
                    </div>
                    <div className={`mb-5`}>
                        <TextField value={price} onChange={(e) => { setPrice(e.target.value) }} className={`w-7/12`} id="outlined-basic" label="Preço" variant="outlined" />
                    </div>
                    <div className={`mb-5`}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Categoria"
                                onChange={(e) => {setCategory(e.target.value)}}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <Button className={`w-20`} onClick={() => { registerProduct() }} variant="contained">Salvar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductRegister