import { Card, CardContent, Button, TextField } from "@mui/material";
import React from "react";

function ProductRegister(props){
    return (
        <Card>
            <CardContent>
                <div>{props.text}</div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Button variant="contained">Salvar</Button>
            </CardContent>

        </Card>
    )
}

export default ProductRegister