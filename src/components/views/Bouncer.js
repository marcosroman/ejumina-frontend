import React from 'react';
//import "../../index.css";

const Bouncer = () => {
	const testData = [
		{nombre: "Pepito", listas: ["Mengano"]},
		{nombre: "Laura Torres", listas: ["Fulano"]},
		{nombre: "Lady Gaga", listas: ["VIP", "Sultano"]},
	];

	return (
		<div className="">
			<h1 className="red-50">(NOMBRE DEL EVENTO)</h1>
			<input className="rounded-lg border-solid border-2 border-sky-200" type="text" name="search" placeholder="Buscar..." />
			
			<table className="table border-2">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Lista</th>
					</tr>
				</thead>
				<tbody>
					{testData.map(row => {
						return (
							<tr key={row.nombre.toLowerCase().replaceAll(' ','_')}>
								<td>{row.nombre}</td>
								<td>{row.listas.join(', ')}</td>
							</tr>
						);
					})}
				</tbody>
			</table>

		</div>
	);
}

export default Bouncer;
			//<div className="rounded-lg border-solid border-2 border-sky-200">
