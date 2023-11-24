import React from "react";

function CategotyList(props){


    const rows = [
        {
            id: '1',
            name: 'Informática',

        }
        {
            id: '2',
            name: 'Teclado',

        }
      ];


    return (
        <div>{props.text}</div>
    )
}

export default CategotyList