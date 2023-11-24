import { Card, CardContent, Button, TextField } from "@mui/material";
import React from "react";

function ProductRegister(props) {
    return (
        <Card>
            <CardContent>
                <div>{props.text}</div>
                <div className={`flex flex-col`}>
      
                        <TextField className={`w-96`} id="outlined-basic" label="Nome" variant="outlined" />
   
             
                        <TextField className={`w-96`} id="outlined-basic" label="Preço" variant="outlined" />
                  
                   
                        <TextField className={`w-96`} id="outlined-basic" label="Categoria" variant="outlined" />
                  
                  
                        <Button className={`w-96`} variant="contained">Salvar</Button>
                 
                </div>
            </CardContent>

        </Card>
    )
}

export default ProductRegister