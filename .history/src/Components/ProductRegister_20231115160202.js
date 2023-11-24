import { Card, CardContent, Button } from "@mui/material";
import React from "react";

function ProductRegister(props){
    return (
        <Card>
            <CardContent>
                <div>{props.text}</div>
                <Button variant="contained">Salvar</Button>
            </CardContent>

        </Card>
    )
}

export default ProductRegister