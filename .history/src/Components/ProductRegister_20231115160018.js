import { Card, CardContent } from "@mui/material";
import React from "react";

function ProductRegister(props){
    return (
        <Card>
            <CardContent>
                <div className="bg-gray-">{props.text}</div>
            </CardContent>

        </Card>
    )
}

export default ProductRegister