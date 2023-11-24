import { Card, CardContent, Button, TextField } from "@mui/material";
import React from "react";

function ProductRegister(props){
    return (
        <Card>
            <CardContent>
                <div>{props.text}</div>
                <div>
                    
                </div>
                <TextField id="outlined-basic" label="Nome" variant="outlined" />
                <TextField id="outlined-basic" label="Preço" variant="outlined" />
                <TextField id="outlined-basic" label="Categoria" variant="outlined" />
                <Button variant="contained">Salvar</Button>
            </CardContent>

        </Card>
    )
}

export default ProductRegister