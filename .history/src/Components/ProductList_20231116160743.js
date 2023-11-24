import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import axios from "axios";


function ProductList(props) {

    const [rows, setRows] = useState([])

    useEffect(() => {
        axios.get("https://di1vlxhcf8.execute-api.us-east-1.amazonaws.com/list-products").then(
            r => {
                setRows(r.data.response)
            }
        )
    }, [])

    return (
        <div>
            <h4>{props.text}</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">Preço</TableCell>
                            <TableCell align="right">Categoria</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">R${row.price}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductList