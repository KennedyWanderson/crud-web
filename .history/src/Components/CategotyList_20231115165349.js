import React from "react";

function CategotyList(props){


    const rows = [
        {
            name: 'Teclado',
            price: '100',
            category: 'Informática'
        }
      ];
    return (
        <div>{props.text}</div>
    )
}

export default CategotyList